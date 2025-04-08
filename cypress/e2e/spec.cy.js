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


  describe('20_drm_fwm_h265_h265_uhd_fhd_hd_dash_hls', () => {
    it('20_drm_fwm_h265_h265_uhd_fhd_hd_dash_hls 작업생성', function() {
      cy.viewport(1280, 720);
      cy.login('jcg@inka.co.kr', 'Say1013!');

      cy.createDRMTask({
        taskName: '20_drm_fwm_h265_h265_uhd_fhd_hd_dash_hls',
        cid: 'test',
        inputCodec: 'H265',
        aspectRatio: true,
        resolutionProfile: 'UHD_FHD_HD',
        streamingFormat: 'DASH_HLS',
        outputCodec: 'H265',
        type: 'DRM',
        audioEncryption: true,
        multiKey: true,
        multiManifest: true,
        drmOff: true
        
      });
      
      /* ==== End Cypress Studio ==== */
    });
});
