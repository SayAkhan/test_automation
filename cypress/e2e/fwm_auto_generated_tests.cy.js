// 자동 생성된 테스트 파일
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


describe('1_fwm_h264_h264_uhd_fhd_hd_cmaf', () => {
  it('1_fwm_h264_h264_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createFWMTask({
      taskName: '1_fwm_h264_h264_uhd_fhd_hd_cmaf',
      cid: 'test',
      inputCodec: 'H264',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'CMAF',
      outputCodec: 'H264',
      type: 'FWM'
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
    }
  });
});


describe('2_fwm_h264_h264_uhd_fhd_hd_dash_hls', () => {
  it('2_fwm_h264_h264_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createFWMTask({
      taskName: '2_fwm_h264_h264_uhd_fhd_hd_dash_hls',
      cid: 'test',
      inputCodec: 'H264',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'DASH_HLS',
      outputCodec: 'H264',
      type: 'FWM'
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
    }
  });
});


describe('3_fwm_h264_h264_fhd_fhd_hd_sd_sd_cmaf', () => {
  it('3_fwm_h264_h264_fhd_fhd_hd_sd_sd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createFWMTask({
      taskName: '3_fwm_h264_h264_fhd_fhd_hd_sd_sd_cmaf',
      cid: 'test',
      inputCodec: 'H264',
      resolutionProfile: 'FHD_FHD_HD_SD_SD',
      streamingFormat: 'CMAF',
      outputCodec: 'H264',
      type: 'FWM'
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
    }
  });
});


describe('4_fwm_h264_h264_fhd_fhd_hd_sd_sd_dash_hls', () => {
  it('4_fwm_h264_h264_fhd_fhd_hd_sd_sd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createFWMTask({
      taskName: '4_fwm_h264_h264_fhd_fhd_hd_sd_sd_dash_hls',
      cid: 'test',
      inputCodec: 'H264',
      resolutionProfile: 'FHD_FHD_HD_SD_SD',
      streamingFormat: 'DASH_HLS',
      outputCodec: 'H264',
      type: 'FWM'
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
    }
  });
});


describe('5_fwm_h265_h264_uhd_fhd_hd_cmaf', () => {
  it('5_fwm_h265_h264_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createFWMTask({
      taskName: '5_fwm_h265_h264_uhd_fhd_hd_cmaf',
      cid: 'test',
      inputCodec: 'H265',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'CMAF',
      outputCodec: 'H264',
      type: 'FWM'
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
    }
  });
});


describe('6_fwm_h265_h264_uhd_fhd_hd_dash_hls', () => {
  it('6_fwm_h265_h264_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createFWMTask({
      taskName: '6_fwm_h265_h264_uhd_fhd_hd_dash_hls',
      cid: 'test',
      inputCodec: 'H265',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'DASH_HLS',
      outputCodec: 'H264',
      type: 'FWM'
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
    }
  });
});


describe('7_fwm_h265_h264_fhd_fhd_hd_sd_sd_cmaf', () => {
  it('7_fwm_h265_h264_fhd_fhd_hd_sd_sd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createFWMTask({
      taskName: '7_fwm_h265_h264_fhd_fhd_hd_sd_sd_cmaf',
      cid: 'test',
      inputCodec: 'H265',
      resolutionProfile: 'FHD_FHD_HD_SD_SD',
      streamingFormat: 'CMAF',
      outputCodec: 'H264',
      type: 'FWM'
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
    }
  });
});


describe('8_fwm_h265_h264_fhd_fhd_hd_sd_sd_dash_hls', () => {
  it('8_fwm_h265_h264_fhd_fhd_hd_sd_sd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createFWMTask({
      taskName: '8_fwm_h265_h264_fhd_fhd_hd_sd_sd_dash_hls',
      cid: 'test',
      inputCodec: 'H265',
      resolutionProfile: 'FHD_FHD_HD_SD_SD',
      streamingFormat: 'DASH_HLS',
      outputCodec: 'H264',
      type: 'FWM'
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
    }
  });
});


describe('9_fwm_h264_h265_uhd_fhd_hd_cmaf', () => {
  it('9_fwm_h264_h265_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createFWMTask({
      taskName: '9_fwm_h264_h265_uhd_fhd_hd_cmaf',
      cid: 'test',
      inputCodec: 'H264',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'CMAF',
      outputCodec: 'H265',
      type: 'FWM'
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
    }
  });
});


describe('10_fwm_h264_h265_uhd_fhd_hd_dash_hls', () => {
  it('10_fwm_h264_h265_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createFWMTask({
      taskName: '10_fwm_h264_h265_uhd_fhd_hd_dash_hls',
      cid: 'test',
      inputCodec: 'H264',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'DASH_HLS',
      outputCodec: 'H265',
      type: 'FWM'
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
    }
  });
});


describe('11_fwm_h265_h265_uhd_fhd_hd_cmaf', () => {
  it('11_fwm_h265_h265_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createFWMTask({
      taskName: '11_fwm_h265_h265_uhd_fhd_hd_cmaf',
      cid: 'test',
      inputCodec: 'H265',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'CMAF',
      outputCodec: 'H265',
      type: 'FWM'
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
    }
  });
});


describe('12_fwm_h265_h265_uhd_fhd_hd_dash_hls', () => {
  it('12_fwm_h265_h265_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createFWMTask({
      taskName: '12_fwm_h265_h265_uhd_fhd_hd_dash_hls',
      cid: 'test',
      inputCodec: 'H265',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'DASH_HLS',
      outputCodec: 'H265',
      type: 'FWM'
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
    }
  });
});


describe('13_fwm_h264_h264_uhd_fhd_hd_cmaf', () => {
  it('13_fwm_h264_h264_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createFWMTask({
      taskName: '13_fwm_h264_h264_uhd_fhd_hd_cmaf',
      cid: 'test',
      inputCodec: 'H264',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'CMAF',
      outputCodec: 'H264',
      type: 'FWM'
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
    }
  });
});


describe('14_fwm_h264_h264_uhd_fhd_hd_dash_hls', () => {
  it('14_fwm_h264_h264_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createFWMTask({
      taskName: '14_fwm_h264_h264_uhd_fhd_hd_dash_hls',
      cid: 'test',
      inputCodec: 'H264',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'DASH_HLS',
      outputCodec: 'H264',
      type: 'FWM'
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
    }
  });
});


describe('15_fwm_h265_h264_uhd_fhd_hd_cmaf', () => {
  it('15_fwm_h265_h264_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createFWMTask({
      taskName: '15_fwm_h265_h264_uhd_fhd_hd_cmaf',
      cid: 'test',
      inputCodec: 'H265',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'CMAF',
      outputCodec: 'H264',
      type: 'FWM'
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
    }
  });
});


describe('16_fwm_h265_h264_uhd_fhd_hd_dash_hls', () => {
  it('16_fwm_h265_h264_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createFWMTask({
      taskName: '16_fwm_h265_h264_uhd_fhd_hd_dash_hls',
      cid: 'test',
      inputCodec: 'H265',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'DASH_HLS',
      outputCodec: 'H264',
      type: 'FWM'
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
    }
  });
});


describe('17_drm_fwm_h264_h265_uhd_fhd_hd_cmaf', () => {
  it('17_drm_fwm_h264_h265_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createFWMTask({
      taskName: '17_drm_fwm_h264_h265_uhd_fhd_hd_cmaf',
      cid: 'test',
      inputCodec: 'H264',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'CMAF',
      outputCodec: 'H265',
      type: 'DRM_FWM'
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
    }
  });
});


describe('18_drm_fwm_h264_h265_uhd_fhd_hd_dash_hls', () => {
  it('18_drm_fwm_h264_h265_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createFWMTask({
      taskName: '18_drm_fwm_h264_h265_uhd_fhd_hd_dash_hls',
      cid: 'test',
      inputCodec: 'H264',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'DASH_HLS',
      outputCodec: 'H265',
      type: 'DRM_FWM'
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
    }
  });
});


describe('19_drm_fwm_h265_h265_uhd_fhd_hd_cmaf', () => {
  it('19_drm_fwm_h265_h265_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createFWMTask({
      taskName: '19_drm_fwm_h265_h265_uhd_fhd_hd_cmaf',
      cid: 'test',
      inputCodec: 'H265',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'CMAF',
      outputCodec: 'H265',
      type: 'DRM_FWM'
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
    }
  });
});


describe('20_drm_fwm_h265_h265_uhd_fhd_hd_dash_hls', () => {
  it('20_drm_fwm_h265_h265_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createFWMTask({
      taskName: '20_drm_fwm_h265_h265_uhd_fhd_hd_dash_hls',
      cid: 'test',
      inputCodec: 'H265',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'DASH_HLS',
      outputCodec: 'H265',
      type: 'DRM_FWM'
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
    }
  });
});