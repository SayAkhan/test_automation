describe('TNP', () => {
  /* ==== Test Created with Cypress Studio ==== */
  before(() => {
    // 새로운 로그 파일 생성
    cy.task('generateLogFileName').then((fileName) => {
      Cypress.env('currentLogFile', fileName);
    });
  });

  after(() => {
    // 테스트 종료 후 로그 마무리
    cy.writelog('Test End');
  });

  it('작업생성', function() {
    cy.writelog('Test Start')
    cy.viewport(1280,720);

    // 로그인 및 검증
    cy.visit('https://console.doverunner.com/login?redirect=https%3A%2F%2Fcontentsecurity.doverunner.com%2F%23ko');
    
    cy.get('#\\:r0\\:', { failOnStatusCode: false })
      .should('be.visible')
      .type('cnsrms103@gmail.com')
      .should('have.value', 'cnsrms103@gmail.com'); // 입력값 검증

    cy.get('#\\:r1\\:', { failOnStatusCode: false })
      .should('be.visible').type('Say1013!{enter}');
      
    // 로그인 성공 검증
    cy.url().should('include', 'contentsecurity.doverunner.com');
    cy.writelog('로그인 성공');

    // TNP 진입 및 검증
    cy.get('.side-bar-main > :nth-child(1) > :nth-child(2)')
      .should('be.visible').click();
    
    cy.url().should('include', 'tnp'); // TNP 페이지 URL 검증
    cy.writelog('TNP 진입 성공');

    //작업생성
    cy.get('.sidebar-submenu > :nth-child(5)').should('be.visible').click();
    cy.writelog('작업생성 페이지 진입 성공')

    //fwm 선택
    cy.get(':nth-child(3) > td > label > .radiobtn').should('be.visible').click();
    cy.get('.align-right > .outlined_btn').should('be.visible').click();
    cy.writelog('fwm 선택 성공')

    //입출력 설정
    cy.get(':nth-child(1) > :nth-child(2) > :nth-child(1) > :nth-child(2) > input').should('be.visible').type('Cypress_test');
    cy.writelog('작업명 입력 성공')

    cy.get(':nth-child(1) > :nth-child(2) > :nth-child(2) > :nth-child(2) > input').should('be.visible').type('test');
    cy.writelog('cid 입력 성공')

    cy.get(':nth-child(4) > :nth-child(2) > .select-box > .css-yk16xz-control > .css-1wy0on6 > .css-tlfecz-indicatorContainer').should('be.visible').click();
    cy.get('#react-select-3-option-0').should('be.visible').click();
    cy.writelog('입력 스토리지 지정 성공')

    cy.get(':nth-child(1) > :nth-child(2) > :nth-child(5) > :nth-child(2) > input').should('be.visible').clear();
    cy.get(':nth-child(1) > :nth-child(2) > :nth-child(5) > :nth-child(2) > input').should('be.visible').type('test/7min.mp4');
    cy.writelog('파일 지정 성공')

    cy.get(':nth-child(8) > :nth-child(2) > .select-box > .css-yk16xz-control > .css-1hwfws3').should('be.visible').click();
    cy.get('#react-select-4-option-0').should('be.visible').click();
    cy.writelog('저장 스토리지 지정 성공')

    cy.get(':nth-child(9) > :nth-child(2) > .width325').should('be.visible').type('cypress_test');
    cy.writelog('저장 폴더명 지정 성공')

    cy.get('.align-right > .outlined_btn').should('be.visible').click();

    //스트리밍 포맷 설정
    cy.writelog('스트리밍 포멧 설정 페이지 진입 성공')
    cy.get(':nth-child(2) > label > .checkbtn').should('be.visible').click();
    cy.writelog('hls 체크 해제 성공')

    //트랜스코딩 설정
    cy.get(':nth-child(2) > .align-left > .x-icon > .svg-inline--fa').should('be.visible').click();
    // 주석 처리된 코드는 필요한 경우에만 활성화할 것
    // 다중 해상도 삭제 시 필요한 코드
    // cy.get(':nth-child(2) > .align-left > .x-icon > .svg-inline--fa').should('be.visible').click();
    // cy.get(':nth-child(2) > .align-left > .x-icon > .svg-inline--fa').should('be.visible').click();
    // cy.get(':nth-child(2) > .align-left > .x-icon > .svg-inline--fa').should('be.visible').click();
    cy.writelog('1개의 해상도만 설정 성공')

    cy.get('.align-right > .outlined_btn').should('be.visible').click();

     //오디오 및 자막 설정
    cy.writelog('오디오 및 자막설정 페이지 진입 성공')
    cy.get('.align-right > .outlined_btn').should('be.visible').click();
    cy.writelog('오디오 및 자막설정 페이지 설정 성공')

    //작업 생성
    cy.writelog('작업생성 페이지 진입 성공')
    cy.get(':nth-child(4) > .primary_btn').click();
    cy.get('#alert_btn').click();
    
    // 작업 생성 성공 검증

    cy.writelog('작업생성 성공');
  });

  // 전체 테스트에 대한 에러 처리
  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      // 스크린샷 저장
      cy.screenshot(`실패_${this.currentTest.title}`);
    }
  });
})