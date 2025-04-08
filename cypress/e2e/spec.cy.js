  before(() => {
    // 새로운 로그 파일 생성
    cy.task('generateLogFileName').then((fileName) => {
      Cypress.env('currentLogFile', fileName);
    });
  //테스트 시작 로그 기록
  cy.writelog('Test Start');
  });

  after(() => {
    // 테스트 종료 후 로그 마무리
    cy.writelog('Test End');
  });


  describe('drm_test', () => {
    it('drm_test 작업생성', function() {
      cy.viewport(1280, 720);
      cy.login('jcg@inka.co.kr', 'Say1013!');

      cy.createDRMTask({
        taskName: 'drm_test',
        cid: 'test',
        inputCodec: 'H265',
        aspectRatio: false,
        resolutionProfile: 'UHD_FHD_HD',
        streamingFormat: 'DASH_HLS',
        outputCodec: 'H265',
        type: 'DRM_FWM',
        audioEncryption: true,
        multiKey: false,
        multiManifest: true,
        drmOff: true
        
      });
      
      /* ==== End Cypress Studio ==== */
    });
});
