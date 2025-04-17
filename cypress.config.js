module.exports = {
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
        getTestFromFile({ testNumber }) {
          const fs = require('fs');
          const path = require('path');
          const filePath = path.join(__dirname, 'cypress', 'e2e', 'drm_auto_generated_tests.cy.js');
          const fileContent = fs.readFileSync(filePath, 'utf8');
          
          // 정규식으로 해당 테스트 번호의 describe 블록을 찾음
          const testPattern = `describe\\('${testNumber}_drm_[^']+', \\(\\) => \\{[\\s\\S]*?afterEach\\(function\\(\\) \\{[\\s\\S]*?\\}\\);[\\s\\S]*?\\}\\);`;
          const regex = new RegExp(testPattern, 'g');
          const matches = fileContent.match(regex);
          
          if (matches && matches.length > 0) {
            return matches[0];
          } else {
            // 테스트를 찾지 못한 경우, 파일의 내용을 로그로 출력하여 디버깅
            console.log(`Test ${testNumber} not found. File content:`, fileContent);
            throw new Error(`Test ${testNumber} not found in drm_auto_generated_tests.cy.js`);
          }
        }
      });
    },
  },
};