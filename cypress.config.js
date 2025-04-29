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
      const SLACK_TOKEN = 'TOKEN'; // 여기에 실제 Slack Token을 입력하세요
      const SLACK_CHANNEL = 'CHANNEL'; // 여기에 실제 Slack Channel을 입력하세요

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

      on('task', {
        // Slack 메시지 전송을 위한 task
        sendSlackMessage: async (message) => {
          await sendSlackMessage(message);
          return null;
        },

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