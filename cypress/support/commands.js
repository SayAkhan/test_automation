// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


  // 새로운 테스트 실행 시 기존 로그 파일 내용 초기화
 
  let logFileName;
  // logfile의 이름을 테스트를 실행한 날짜로 지정 (YYYY-MM-dd_hh-mm-ss 형식)
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  
  const formattedDate = `${year}-${month}-${day}T${hours}_${minutes}_${seconds}`;
  logFileName = `./cypress/logs/cypress_log_${formattedDate}.txt`;

  // log 기록 함수 - 시간 포맷 동일하게 변경
  Cypress.Commands.add('writelog', (message) => {
    // 로그 메시지의 시간도 동일한 YYYY-MM-ddThh:mm:ss 형식으로 변경
    const currentTime = new Date();
    const logYear = currentTime.getFullYear();
    const logMonth = String(currentTime.getMonth() + 1).padStart(2, '0');
    const logDay = String(currentTime.getDate()).padStart(2, '0');
    const logHours = String(currentTime.getHours()).padStart(2, '0');
    const logMinutes = String(currentTime.getMinutes()).padStart(2, '0');
    const logSeconds = String(currentTime.getSeconds()).padStart(2, '0');
    
    const logTimeFormat = `${logYear}-${logMonth}-${logDay}_${logHours}:${logMinutes}:${logSeconds}`;
    cy.writeFile(logFileName, `${logTimeFormat} ${message}\n`, { flag: 'a+' });
  });

//사이트 login 함수. 쿠키 유지가 안되서 폐기
// Cypress.Commands.add('login', (username, password) => {
//   cy.session([username, password], () => {
//     cy.visit('https://login-sqa.pallycon.com/');
//     cy.get('#mui-2').type(username);
//     cy.get('#mui-3').type(`${password}{enter}`, { log: false });
//   });
// });

// 로그인 함수 추가
Cypress.Commands.add('login', (email, password) => {
  cy.visit('https://console.doverunner.com/login?redirect=https%3A%2F%2Fcontentsecurity.doverunner.com%2F%23ko');
  
  // 페이지 로딩 완료 검증
  cy.get('body').should('be.visible');
  cy.get('#\\:r0\\:', { failOnStatusCode: false })
    .should('be.visible')
    .type(email)
    .should('have.value', email);

  cy.get('#\\:r1\\:', { failOnStatusCode: false })
    .should('be.visible')
    .type(`${password}{enter}`);
    
  // 로그인 성공 검증
  cy.url().should('include', 'contentsecurity.doverunner.com');
  cy.get('body').should('be.visible');
  cy.writelog('로그인 성공');
});

// 재시도 로직을 위한 커스텀 명령어
Cypress.Commands.add('retryOperation', (operationFn, operationName, maxRetries = 3) => {
  let retryCount = 0;

  function attempt() {
    return cy.then(() => {
      try {
        return operationFn();
      } catch (error) {
        retryCount++;
        cy.writelog(`[재시도 ${retryCount}/${maxRetries}] ${operationName} 실패: ${error.message}`);
        cy.screenshot(`재시도_${operationName}_${retryCount}회차_실패`);
        
        if (retryCount >= maxRetries) {
          cy.writelog(`[최종 실패] ${operationName} - 최대 재시도 횟수(${maxRetries}회) 초과`);
          cy.screenshot(`최종실패_${operationName}`);
          throw error;
        }
        
        cy.wait(2000);
        return attempt();
      }
    }).then(() => {
      if (retryCount > 0) {
        cy.writelog(`[재시도 성공] ${operationName} - ${retryCount + 1}번째 시도에서 성공`);
        cy.screenshot(`재시도_${operationName}_${retryCount + 1}회차_성공`);
      } else {
        cy.writelog(`[성공] ${operationName}`);
      }
    });
  }

  return attempt();
});