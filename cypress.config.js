const { defineConfig } = require('cypress');
const fetch = require('node-fetch');

// 스펙 파일 이름별 메시지 전송 상태를 저장하는 객체
let messageSentForSpec = {};

module.exports = defineConfig({
  e2e: {
    experimentalStudio: true,
    watchForFileChanges: false,
    numTestsKeptInMemory: 0,
    video: false,
    screenshotOnRunFailure: true,
    defaultCommandTimeout: 10000,  // 기본 타임아웃 10초
    retries: {
      runMode: 2,
      openMode: 0
    },
    env: {
      LOGIN_EMAIL: 'id',
      LOGIN_PASSWORD: 'pw!'
    },
    parallel: true,
    experimentalMemoryManagement: true,
    setupNodeEvents(on, config) {
      // Slack 설정
      const SLACK_TOKEN = 'token'; // 여기에 실제 Slack Token을 입력하세요
      const SLACK_CHANNEL = 'channel'; // 여기에 실제 Slack Channel을 입력하세요

      // 각 스펙 파일 실행 직전에 호출됨
      on('before:spec', (spec) => {
        messageSentForSpec = {}; //메세지 전송 여부 초기화
      });

      on('task', {
        // 테스트 시작시 메세지 전송
        sendStartMessage: async ({ message, specIdentifier }) => {
          // 테스트 최초 실행시 메세지 전송 방지를 위한 체크
          if (!specIdentifier) {
            return null; 
          }
          // 메세지 전송 여부 확인
          if (!messageSentForSpec[specIdentifier]) {
            try {
              await fetch('https://slack.com/api/chat.postMessage', { 
                method: 'POST',
                headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${SLACK_TOKEN}`},
                body: JSON.stringify({ channel: SLACK_CHANNEL, text: message })
              });
              messageSentForSpec[specIdentifier] = true; //메세지 전송 여부 표시
            } catch (error) {
              console.error('Slack 메시지 전송 실패:', error);
            }
          }
          return null;
        },

        // 테스트 실패, 종료시 메세지 전송
        sendSlackMessage: async (message) => {
          if (!message) {
            console.error('Slack 메시지 전송 실패:', error);
            return null;
          }
          try {
            await fetch('https://slack.com/api/chat.postMessage', { 
                method: 'POST',
                headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${SLACK_TOKEN}`},
                body: JSON.stringify({ channel: SLACK_CHANNEL, text: message })
            });
          } catch (error) {
            console.error('Slack 메시지 전송 실패:', error);
          }
          return null;
        },

        generateLogFileName() {
          const now = new Date();
          const year = now.getFullYear();
          const month = String(now.getMonth() + 1).padStart(2, '0');
          const day = String(now.getDate()).padStart(2, '0');
          const hours = String(now.getHours()).padStart(2, '0');
          const minutes = String(now.getMinutes()).padStart(2, '0');
          const seconds = String(now.getSeconds()).padStart(2, '0');
          const formattedDate = `${year}-${month}-${day}_${hours}-${minutes}-${seconds}`;
          const logFileName = `cypress_log_${formattedDate}.txt`;
          return logFileName;
        },

        getTestFromFile({ testNumber }) {
          const fs = require('fs');
          const path = require('path');
          const files = ['drm_auto_generated_tests.cy.js', 'fwm_auto_generated_tests.cy.js'];
          let foundTest = null;
          for (const fileName of files) {
            const filePath = path.join(__dirname, 'cypress', 'e2e', fileName);
            try {
                const fileContent = fs.readFileSync(filePath, 'utf8');
                const testPattern = `describe\\('${testNumber}_[^']+', \\(\\) => \\{[\\s\\S]*?afterEach\\(function\\(\\) \\{[\\s\\S]*?\\}\\);[\\s\\S]*?\\}\\);`;
                const regex = new RegExp(testPattern, 'g');
                const matches = fileContent.match(regex);
                if (matches && matches.length > 0) {
                  foundTest = matches[0];
                  break;
                }
            } catch (e) {
                console.error(`Error reading spec file ${filePath} in getTestFromFile: ${e.message}`);
            }
          }
          if (foundTest) {
            return foundTest;
          } else {
            console.log(`Test ${testNumber} not found in any test file.`);
            throw new Error(`Test ${testNumber} not found in any test file`);
          }
        },
        
        clearAllSpecMessageLocks: () => {
          messageSentForSpec = {};
          return null;
        }
      });
      return config;
    },
  },
});