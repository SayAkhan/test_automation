describe('FWM_H264_H264_UHD_FHD_HD_CMAF', () => {
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
    cy.retryOperation(() => {
      return cy.then(() => {
        cy.login('cnsrms103@gmail.com', 'Say1013!');
      });
    }, '로그인');

    // TNP 진입 및 검증
    cy.retryOperation(() => {
      return cy.then(() => {
        cy.get('.side-bar-main > :nth-child(1) > :nth-child(2)')
          .should('be.visible')
          .click();
        cy.url().should('include', 'tnp');
        cy.get('body').should('be.visible');
        cy.writelog('TNP 진입 성공');
      });
    }, 'TNP 진입');

    // 작업생성 페이지 진입
    cy.retryOperation(() => {
      return cy.then(() => {
        cy.get('.sidebar-submenu > :nth-child(5)')
          .should('be.visible')
          .click();
        cy.get('body').should('be.visible');
        cy.writelog('작업생성 페이지 진입 성공');
      });
    }, '작업생성 페이지 진입');

    // FWM 선택 및 설정
    cy.retryOperation(() => {
      return cy.then(() => {
        cy.get('#container').click();
        cy.get('body').should('be.visible');
        cy.get(':nth-child(3) > td > label > h3').click();
        cy.writelog('fwm 선택');
      });
    }, 'FWM 선택');

    // 작업 정보 입력
    cy.retryOperation(() => {
      return cy.then(() => {
        cy.get('.align-right > .outlined_btn').click();
        cy.get('body').should('be.visible');
        cy.get(':nth-child(1) > :nth-child(2) > :nth-child(1) > :nth-child(2) > input')
          .clear()
          .type('fwm_h264_h264_UHD_FHD_HD_CMAF')
          .should('have.value', 'fwm_h264_h264_UHD_FHD_HD_CMAF');
        cy.writelog('작업명 입력');
      });
    }, '작업 정보 입력');

    // 나머지 입력 필드 설정
    cy.get(':nth-child(1) > :nth-child(2) > :nth-child(2) > :nth-child(2) > input').type('test');
    cy.writelog('cid 입력');
    cy.get(':nth-child(4) > :nth-child(2) > .select-box > .css-yk16xz-control > .css-1hwfws3 > .css-1wa3eu0-placeholder').click();
    cy.get('#react-select-3-option-0').click();
    cy.writelog('입력 스토리지 선택');

    cy.get(':nth-child(1) > :nth-child(2) > :nth-child(5) > :nth-child(2) > input').type('test/7min_sdr.mp4');
    cy.writelog('원본 파일 경로 입력');

    cy.get(':nth-child(8) > :nth-child(2) > .select-box > .css-yk16xz-control > .css-1hwfws3').click();
    cy.get('#react-select-4-option-0').click();
    cy.writelog('출력 스토리지 선택');

    cy.get(':nth-child(9) > :nth-child(2) > .width325').click();
    cy.get(':nth-child(9) > :nth-child(2) > .width325').type('fwm_h264_h264_UHD_FHD_HD_CMAF');
    cy.writelog('출력 경로 입력');

    // 비디오 설정 페이지 진입
    cy.retryOperation(() => {
      return cy.then(() => {
        cy.get('.align-right > .outlined_btn').click();
        cy.get('body').should('be.visible');
        cy.writelog('비디오 설정으로 이동');
      });
    }, '비디오 설정 페이지 진입');

    // 스트리밍 포맷 설정
    cy.get(':nth-child(2) > :nth-child(1) > label').click();
    cy.get(':nth-child(2) > label').click();
    cy.get(':nth-child(3) > label').click();
    cy.writelog('스트리밍 포멧 : CMAF 선택');

    // 비디오 설정 초기화 및 해상도 설정
    cy.get(':nth-child(1) > .align-left > .x-icon > .svg-inline--fa').click();
    cy.get(':nth-child(1) > .align-left > .x-icon > .svg-inline--fa').click();
    cy.get(':nth-child(1) > .align-left > .x-icon > .svg-inline--fa').click();
    cy.get(':nth-child(1) > .align-left > .x-icon > .svg-inline--fa').click();
    cy.get(':nth-child(1) > .align-left > .x-icon > .svg-inline--fa').click();
    cy.writelog('출력 비디오 설정 초기화');
    
    // UHD 설정
    cy.get('.messageTable > :nth-child(2) > :nth-child(2)').click();
    cy.get('tbody > :nth-child(2) > :nth-child(3) > input').clear().type('2160');
    cy.get(':nth-child(5) > table > tbody > :nth-child(2) > td > input').clear().type('8000');
    cy.get('.floatRight').click();
    cy.writelog('UHD 추가');

    // FHD 설정
    cy.get('.messageTable > :nth-child(2) > :nth-child(2)').click();
    cy.get('tbody > :nth-child(2) > :nth-child(3) > input').clear().type('1080');
    cy.get(':nth-child(5) > table > tbody > :nth-child(2) > td > input').clear().type('8000');
    cy.get('.floatRight').click();
    cy.writelog('FHD 추가');

    // HD 설정
    cy.get('.messageTable > :nth-child(2) > :nth-child(2)').click();
    cy.get('tbody > :nth-child(2) > :nth-child(3) > input').clear().type('720');
    cy.get(':nth-child(5) > table > tbody > :nth-child(2) > td > input').clear().type('8000');
    cy.get('.floatRight').click();
    cy.writelog('HD 추가');

    // 오디오/자막 설정 페이지 진입
    cy.retryOperation(() => {
      return cy.then(() => {
        cy.get('.align-right > .outlined_btn').click();
        cy.get('body').should('be.visible');
        cy.writelog('오디오 / 자막 설정으로 이동');
      });
    }, '오디오/자막 설정 페이지 진입');

    // 작업 동작 페이지 진입
    cy.retryOperation(() => {
      return cy.then(() => {
        cy.get('.align-right > .outlined_btn').click();
        cy.get('body').should('be.visible');
        cy.writelog('작업 동작으로 이동');
      });
    }, '작업 동작 페이지 진입');

    // 작업 생성 완료
    cy.get(':nth-child(4) > .primary_btn').click();
    cy.get('#alert_btn').click();
    cy.writelog('작업 생성 완료');
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