const { defineConfig } = require('cypress');
const fetch = require('node-fetch');

module.exports = defineConfig({
  e2e: {
    experimentalStudio: true,
    watchForFileChanges: false,
    numTestsKeptInMemory: 0,
    defaultCommandTimeout: 10000,  // 기본 타임아웃 10초
    retries: {
      runMode: 2,
      openMode: 0
    },
    setupNodeEvents(on, config) {
      // Slack 설정
      const SLACK_TOKEN = 'xoxp-456896952050-468100425844-606422765040-ab96baac8599d67d1a6996b67761cb01'; // 여기에 실제 Slack Token을 입력하세요
      const SLACK_CHANNEL = 'C03UJ84DDNF'; // 여기에 실제 Slack Channel을 입력하세요

      // Slack 메시지 전송 함수
      async function sendSlackMessage(message) {
        try {
          await fetch('https://slack.com/api/chat.postMessage', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${SLACK_TOKEN}`
            },
            body: JSON.stringify({
              channel: SLACK_CHANNEL,
              text: message,
            }),
          });
        } catch (error) {
          console.error('Slack 메시지 전송 실패:', error);
        }
      }

      on('before:run', async (details) => {
        const specName = details.specs[0]?.name || '';
        if (specName.includes('spec.cy.js')) {
          await sendSlackMessage('🚀 자동화 테스트가 시작되었습니다.');
        } else {
          await sendSlackMessage('🚀 테스트 실행이 시작되었습니다.');
        }
      });

      on('after:run', async (results) => {
        const totalTests = results.totalTests;
        const totalPassed = results.totalPassed;
        const totalFailed = results.totalFailed;
        
        const message = `✅ 테스트가 완료되었습니다.\n` +
          `- 총 테스트 수: ${totalTests}\n` +
          `- 성공: ${totalPassed}\n` +
          `- 실패: ${totalFailed}`;
        
        await sendSlackMessage(message);
      });

      on('after:spec', async (spec, results) => {
        if (results.stats.failures > 0) {
          const message = `❌ 테스트 실패: ${spec.name}\n` +
            `- 실패한 테스트 수: ${results.stats.failures}\n` +
            `- 실패한 테스트:\n${results.tests
              .filter(test => test.state === 'failed')
              .map(test => `  - ${test.title}`)
              .join('\n')}`;
          
          await sendSlackMessage(message);
        }
      });

      on('task', {
        generateLogFileName() {
          const now = new Date();
          // YYYY-MM-dd_hh-mm-ss 형식으로 날짜 포맷팅
          const year = now.getFullYear();
          const month = String(now.getMonth() + 1).padStart(2, '0');
          const day = String(now.getDate()).padStart(2, '0');
          const hours = String(now.getHours()).padStart(2, '0');
          const minutes = String(now.getMinutes()).padStart(2, '0');
          const seconds = String(now.getSeconds()).padStart(2, '0');
          
          const formattedDate = `${year}-${month}-${day}_${hours}-${minutes}-${seconds}`;
          const logFileName = `cypress_log_${formattedDate}.txt`;
          return logFileName; // 로그 파일 이름 반환
        },

        //describe 블록을 찾아서 반환
        getTestFromFile({ testNumber }) {
          const fs = require('fs');
          const path = require('path');
          
          // 두 파일에서 모두 테스트를 찾아봄
          const files = ['drm_auto_generated_tests.cy.js', 'fwm_auto_generated_tests.cy.js'];
          let foundTest = null;
          
          for (const fileName of files) {
            const filePath = path.join(__dirname, 'cypress', 'e2e', fileName);
            const fileContent = fs.readFileSync(filePath, 'utf8');
            
            // 정규식으로 해당 테스트 번호의 describe 블록을 찾음
            const testPattern = `describe\\('${testNumber}_[^']+', \\(\\) => \\{[\\s\\S]*?afterEach\\(function\\(\\) \\{[\\s\\S]*?\\}\\);[\\s\\S]*?\\}\\);`;
            const regex = new RegExp(testPattern, 'g');
            const matches = fileContent.match(regex);
            
            if (matches && matches.length > 0) {
              foundTest = matches[0];
              break;
            }
          }
          
          if (foundTest) {
            return foundTest;
          } else {
            console.log(`Test ${testNumber} not found in any test file.`);
            throw new Error(`Test ${testNumber} not found in any test file`);
          }
        }
      });
    },
  },
});