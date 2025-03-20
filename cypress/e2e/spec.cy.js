describe('TNP', () => {
  /* ==== Test Created with Cypress Studio ==== */
  before(() => {
    // 새로운 로그 파일 생성
    cy.task('generateLogFileName').then((fileName) => {
      Cypress.env('currentLogFile', fileName);
    });
  });

  it('작업생성', function() {
    cy.writelog('Test Start')
    //해상도 설정
    cy.viewport(1280,720);

    //로그인
    cy.visit('https://console.doverunner.com/login?redirect=https%3A%2F%2Fcontentsecurity.doverunner.com%2F%23ko');
    cy.get('#mui-2').type(sayakhan);
    cy.get('#mui-3').type('$Say1013!{enter}');
    cy.writelog('로그인 성공')

    //TNP 진입
    cy.wait(500);
    cy.get('.side-bar-main > :nth-child(1) > :nth-child(2)').click();
    cy.writelog('TNP 진입 성공')
  
    //작업생성
    cy.wait(500);
    cy.get('.sidebar-submenu > :nth-child(5)').click();
    cy.writelog('작업생성 페이지 진입 성공')

    //fwm 선택
    cy.wait(500);
    cy.get(':nth-child(3) > td > label > .radiobtn').click();
    cy.get('.align-right > .outlined_btn').click();
    cy.writelog('fwm 선택 성공')

    //입출력 설정
    cy.wait(500);
    cy.get(':nth-child(1) > :nth-child(2) > :nth-child(1) > :nth-child(2) > input').clear('c');
    cy.get(':nth-child(1) > :nth-child(2) > :nth-child(1) > :nth-child(2) > input').type('Cypress_test');
    cy.writelog('작업명 입력 성공')
    
    cy.get(':nth-child(1) > :nth-child(2) > :nth-child(2) > :nth-child(2) > input').clear('te');
    cy.get(':nth-child(1) > :nth-child(2) > :nth-child(2) > :nth-child(2) > input').type('test');
    cy.writelog('cid 입력 성공')

    cy.get(':nth-child(4) > :nth-child(2) > .select-box > .css-yk16xz-control > .css-1wy0on6 > .css-tlfecz-indicatorContainer').click();
    cy.get('#react-select-3-option-0').click();
    cy.writelog('입력 스토리지 지정 성공')

    cy.get(':nth-child(1) > :nth-child(2) > :nth-child(5) > :nth-child(2) > input').clear('te');
    cy.get(':nth-child(1) > :nth-child(2) > :nth-child(5) > :nth-child(2) > input').type('test/7min_sdr.mp4');
    cy.writelog('파일 지정 성공')

    cy.get(':nth-child(8) > :nth-child(2) > .select-box > .css-yk16xz-control > .css-1hwfws3').click();
    cy.get('#react-select-4-option-2').click();
    cy.writelog('저장 스토리지 지정 성공')

    cy.get(':nth-child(9) > :nth-child(2) > .width325').clear('c');
    cy.get(':nth-child(9) > :nth-child(2) > .width325').type('cypress_test');
    cy.writelog('저장 폴더명 지정 성공')

    cy.get('.align-right > .outlined_btn').click();

    //스트리밍 포맷 설정
    cy.wait(500);
    cy.writelog('스트리밍 포멧 설정 페이지 진입 성공')
    cy.get(':nth-child(2) > label > .checkbtn').click();
    cy.writelog('hls 체크 해제 성공')
  
    //트랜스코딩 설정
    cy.get(':nth-child(2) > .align-left > .x-icon > .svg-inline--fa').click();
    cy.get(':nth-child(2) > .align-left > .x-icon > .svg-inline--fa').click();
    cy.get(':nth-child(2) > .align-left > .x-icon > .svg-inline--fa').click();
    cy.get(':nth-child(2) > .align-left > .x-icon > .svg-inline--fa').click();
    cy.writelog('1개의 해상도만 설정 성공')

    cy.get('.align-right > .outlined_btn').click();

     //오디오 및 자막 설정
    cy.writelog('오디오 및 자막설정 페이지 진입 성공')
    cy.get('.align-right > .outlined_btn').click();
    cy.writelog('오디오 및 자막설정 페이지 설정 성공')


    //작업 생성
    cy.writelog('작업생성 페이지 진입 성공')
    cy.get(':nth-child(4) > .primary_btn').click();
    cy.get('#alert_btn').click();

    cy.writelog('작업생성 성공')
   });
})