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
    // 로그 메시지의 시간도 동일한 YYYY-MM-dd_hh:mm:ss 형식으로 변경
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