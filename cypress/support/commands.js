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
  logFileName = `./cypress/logs/cypress_log_${new Date().toISOString().replace(/:/g, '-')}.txt`;

  Cypress.Commands.add('writelog', (message) => {
  cy.writeFile(logFileName, `${new Date().toISOString()} ${message}\n`, { flag: 'a+' });
});

// Cypress.Commands.add('login', (username, password) => {
//   cy.session([username, password], () => {
//     cy.visit('https://login-sqa.pallycon.com/');
//     cy.get('#mui-2').type(username);
//     cy.get('#mui-3').type(`${password}{enter}`, { log: false });
//   });
// });