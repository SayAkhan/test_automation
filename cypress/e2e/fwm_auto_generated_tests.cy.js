// 자동 생성된 테스트 파일
const TEST_COUNT = 24; // 총 테스트 수
let testStats = {
  total: 0,
  passed: 0,
  failed: 0
};

before(() => {
  // 새로운 로그 파일 생성
  cy.task('generateLogFileName').then((fileName) => {
    Cypress.env('currentLogFile', fileName);
  });
  //테스트 시작 로그 기록
  cy.writelog('Test Start');
  cy.sendTestStartMessage('🚀 FWM 자동화 테스트가 시작되었습니다.');
});

beforeEach(function() {
  cy.writelog(`생성 시작: ${this.currentTest.title}`);
});

after(() => {
  // 테스트 종료 후 로그 마무리
  cy.writelog('Test End');
  cy.sendTestCompletionMessage(testStats);
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
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
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
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
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
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
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
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
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
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
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
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
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
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
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
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
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
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
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
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
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
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
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
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
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
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
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
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});


describe('15_fwm_h264_h264_fhd_fhd_hd_sd_sd_cmaf', () => {
  it('15_fwm_h264_h264_fhd_fhd_hd_sd_sd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createFWMTask({
      taskName: '15_fwm_h264_h264_fhd_fhd_hd_sd_sd_cmaf',
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
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});


describe('16_fwm_h264_h264_fhd_fhd_hd_sd_sd_dash_hls', () => {
  it('16_fwm_h264_h264_fhd_fhd_hd_sd_sd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createFWMTask({
      taskName: '16_fwm_h264_h264_fhd_fhd_hd_sd_sd_dash_hls',
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
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});


describe('17_fwm_h265_h264_uhd_fhd_hd_cmaf', () => {
  it('17_fwm_h265_h264_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createFWMTask({
      taskName: '17_fwm_h265_h264_uhd_fhd_hd_cmaf',
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
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});


describe('18_fwm_h265_h264_uhd_fhd_hd_dash_hls', () => {
  it('18_fwm_h265_h264_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createFWMTask({
      taskName: '18_fwm_h265_h264_uhd_fhd_hd_dash_hls',
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
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});


describe('19_fwm_h265_h264_fhd_fhd_hd_sd_sd_cmaf', () => {
  it('19_fwm_h265_h264_fhd_fhd_hd_sd_sd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createFWMTask({
      taskName: '19_fwm_h265_h264_fhd_fhd_hd_sd_sd_cmaf',
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
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});


describe('20_fwm_h265_h264_fhd_fhd_hd_sd_sd_dash_hls', () => {
  it('20_fwm_h265_h264_fhd_fhd_hd_sd_sd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createFWMTask({
      taskName: '20_fwm_h265_h264_fhd_fhd_hd_sd_sd_dash_hls',
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
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});


describe('21_drm_fwm_h264_h265_uhd_fhd_hd_cmaf', () => {
  it('21_drm_fwm_h264_h265_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createFWMTask({
      taskName: '21_drm_fwm_h264_h265_uhd_fhd_hd_cmaf',
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
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});


describe('22_drm_fwm_h264_h265_uhd_fhd_hd_dash_hls', () => {
  it('22_drm_fwm_h264_h265_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createFWMTask({
      taskName: '22_drm_fwm_h264_h265_uhd_fhd_hd_dash_hls',
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
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});


describe('23_drm_fwm_h265_h265_uhd_fhd_hd_cmaf', () => {
  it('23_drm_fwm_h265_h265_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createFWMTask({
      taskName: '23_drm_fwm_h265_h265_uhd_fhd_hd_cmaf',
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
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});


describe('24_drm_fwm_h265_h265_uhd_fhd_hd_dash_hls', () => {
  it('24_drm_fwm_h265_h265_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createFWMTask({
      taskName: '24_drm_fwm_h265_h265_uhd_fhd_hd_dash_hls',
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
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

