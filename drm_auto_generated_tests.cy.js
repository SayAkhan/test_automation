
const TEST_COUNT = 512; // 총 테스트 수
let testStats = {
  total: 0,
  passed: 0,
  failed: 0
};  

// 자동 생성된 테스트 파일
before(() => {
  // 새로운 로그 파일 생성
  cy.task('generateLogFileName').then((fileName) => {
    Cypress.env('currentLogFile', fileName);
  });
//테스트 시작 로그 기록
cy.writelog('Test Start');
//테스트 시작 메세지 전송
cy.task('sendStartMessage', {
  message: '🚀 DRM 자동화 테스트가 시작되었습니다.',
  specIdentifier: Cypress.spec.name 
  });
});
beforeEach(function() {
  cy.writelog(`생성 시작: ${this.currentTest.title}`);
});

after(() => {
  // 테스트 종료 후 로그 마무리
  cy.writelog('Test End');
  cy.sendTestCompletionMessage(testStats);
});


describe('1_drm_h264_h264_uhd_fhd_fhd_hd_hd_sd_cmaf', () => {
  it('1_drm_h264_h264_uhd_fhd_fhd_hd_hd_sd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '1_drm_h264_h264_uhd_fhd_fhd_hd_hd_sd_cmaf',
      cid: 'test',
      inputCodec: 'H264',
      resolutionProfile: 'UHD_FHD_FHD_HD_HD_SD',
      streamingFormat: 'CMAF',
      outputCodec: 'H264',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: true
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('2_drm_h264_h264_uhd_fhd_fhd_hd_hd_sd_cmaf', () => {
  it('2_drm_h264_h264_uhd_fhd_fhd_hd_hd_sd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '2_drm_h264_h264_uhd_fhd_fhd_hd_hd_sd_cmaf',
      cid: 'test',
      inputCodec: 'H264',
      resolutionProfile: 'UHD_FHD_FHD_HD_HD_SD',
      streamingFormat: 'CMAF',
      outputCodec: 'H264',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: false
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('3_drm_h264_h264_uhd_fhd_fhd_hd_hd_sd_cmaf', () => {
  it('3_drm_h264_h264_uhd_fhd_fhd_hd_hd_sd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '3_drm_h264_h264_uhd_fhd_fhd_hd_hd_sd_cmaf',
      cid: 'test',
      inputCodec: 'H264',
      resolutionProfile: 'UHD_FHD_FHD_HD_HD_SD',
      streamingFormat: 'CMAF',
      outputCodec: 'H264',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: true
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('4_drm_h264_h264_uhd_fhd_fhd_hd_hd_sd_cmaf', () => {
  it('4_drm_h264_h264_uhd_fhd_fhd_hd_hd_sd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '4_drm_h264_h264_uhd_fhd_fhd_hd_hd_sd_cmaf',
      cid: 'test',
      inputCodec: 'H264',
      resolutionProfile: 'UHD_FHD_FHD_HD_HD_SD',
      streamingFormat: 'CMAF',
      outputCodec: 'H264',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: false
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('5_drm_h264_h264_uhd_fhd_fhd_hd_hd_sd_cmaf', () => {
  it('5_drm_h264_h264_uhd_fhd_fhd_hd_hd_sd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '5_drm_h264_h264_uhd_fhd_fhd_hd_hd_sd_cmaf',
      cid: 'test',
      inputCodec: 'H264',
      resolutionProfile: 'UHD_FHD_FHD_HD_HD_SD',
      streamingFormat: 'CMAF',
      outputCodec: 'H264',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: true
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('6_drm_h264_h264_uhd_fhd_fhd_hd_hd_sd_cmaf', () => {
  it('6_drm_h264_h264_uhd_fhd_fhd_hd_hd_sd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '6_drm_h264_h264_uhd_fhd_fhd_hd_hd_sd_cmaf',
      cid: 'test',
      inputCodec: 'H264',
      resolutionProfile: 'UHD_FHD_FHD_HD_HD_SD',
      streamingFormat: 'CMAF',
      outputCodec: 'H264',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: false
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('7_drm_h264_h264_uhd_fhd_fhd_hd_hd_sd_cmaf', () => {
  it('7_drm_h264_h264_uhd_fhd_fhd_hd_hd_sd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '7_drm_h264_h264_uhd_fhd_fhd_hd_hd_sd_cmaf',
      cid: 'test',
      inputCodec: 'H264',
      resolutionProfile: 'UHD_FHD_FHD_HD_HD_SD',
      streamingFormat: 'CMAF',
      outputCodec: 'H264',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: true
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('8_drm_h264_h264_uhd_fhd_fhd_hd_hd_sd_cmaf', () => {
  it('8_drm_h264_h264_uhd_fhd_fhd_hd_hd_sd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '8_drm_h264_h264_uhd_fhd_fhd_hd_hd_sd_cmaf',
      cid: 'test',
      inputCodec: 'H264',
      resolutionProfile: 'UHD_FHD_FHD_HD_HD_SD',
      streamingFormat: 'CMAF',
      outputCodec: 'H264',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: false
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('9_drm_h264_h264_uhd_fhd_fhd_hd_hd_sd_cmaf', () => {
  it('9_drm_h264_h264_uhd_fhd_fhd_hd_hd_sd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '9_drm_h264_h264_uhd_fhd_fhd_hd_hd_sd_cmaf',
      cid: 'test',
      inputCodec: 'H264',
      resolutionProfile: 'UHD_FHD_FHD_HD_HD_SD',
      streamingFormat: 'CMAF',
      outputCodec: 'H264',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: true
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('10_drm_h264_h264_uhd_fhd_fhd_hd_hd_sd_cmaf', () => {
  it('10_drm_h264_h264_uhd_fhd_fhd_hd_hd_sd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '10_drm_h264_h264_uhd_fhd_fhd_hd_hd_sd_cmaf',
      cid: 'test',
      inputCodec: 'H264',
      resolutionProfile: 'UHD_FHD_FHD_HD_HD_SD',
      streamingFormat: 'CMAF',
      outputCodec: 'H264',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: false
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('11_drm_h264_h264_uhd_fhd_fhd_hd_hd_sd_cmaf', () => {
  it('11_drm_h264_h264_uhd_fhd_fhd_hd_hd_sd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '11_drm_h264_h264_uhd_fhd_fhd_hd_hd_sd_cmaf',
      cid: 'test',
      inputCodec: 'H264',
      resolutionProfile: 'UHD_FHD_FHD_HD_HD_SD',
      streamingFormat: 'CMAF',
      outputCodec: 'H264',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: true
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('12_drm_h264_h264_uhd_fhd_fhd_hd_hd_sd_cmaf', () => {
  it('12_drm_h264_h264_uhd_fhd_fhd_hd_hd_sd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '12_drm_h264_h264_uhd_fhd_fhd_hd_hd_sd_cmaf',
      cid: 'test',
      inputCodec: 'H264',
      resolutionProfile: 'UHD_FHD_FHD_HD_HD_SD',
      streamingFormat: 'CMAF',
      outputCodec: 'H264',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: false
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('13_drm_h264_h264_uhd_fhd_fhd_hd_hd_sd_cmaf', () => {
  it('13_drm_h264_h264_uhd_fhd_fhd_hd_hd_sd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '13_drm_h264_h264_uhd_fhd_fhd_hd_hd_sd_cmaf',
      cid: 'test',
      inputCodec: 'H264',
      resolutionProfile: 'UHD_FHD_FHD_HD_HD_SD',
      streamingFormat: 'CMAF',
      outputCodec: 'H264',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: true
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('14_drm_h264_h264_uhd_fhd_fhd_hd_hd_sd_cmaf', () => {
  it('14_drm_h264_h264_uhd_fhd_fhd_hd_hd_sd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '14_drm_h264_h264_uhd_fhd_fhd_hd_hd_sd_cmaf',
      cid: 'test',
      inputCodec: 'H264',
      resolutionProfile: 'UHD_FHD_FHD_HD_HD_SD',
      streamingFormat: 'CMAF',
      outputCodec: 'H264',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: false
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('15_drm_h264_h264_uhd_fhd_fhd_hd_hd_sd_cmaf', () => {
  it('15_drm_h264_h264_uhd_fhd_fhd_hd_hd_sd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '15_drm_h264_h264_uhd_fhd_fhd_hd_hd_sd_cmaf',
      cid: 'test',
      inputCodec: 'H264',
      resolutionProfile: 'UHD_FHD_FHD_HD_HD_SD',
      streamingFormat: 'CMAF',
      outputCodec: 'H264',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: true
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('16_drm_h264_h264_uhd_fhd_fhd_hd_hd_sd_cmaf', () => {
  it('16_drm_h264_h264_uhd_fhd_fhd_hd_hd_sd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '16_drm_h264_h264_uhd_fhd_fhd_hd_hd_sd_cmaf',
      cid: 'test',
      inputCodec: 'H264',
      resolutionProfile: 'UHD_FHD_FHD_HD_HD_SD',
      streamingFormat: 'CMAF',
      outputCodec: 'H264',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: false
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('17_drm_h264_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls', () => {
  it('17_drm_h264_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '17_drm_h264_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls',
      cid: 'test',
      inputCodec: 'H264',
      resolutionProfile: 'UHD_FHD_FHD_HD_HD_SD',
      streamingFormat: 'DASH_HLS',
      outputCodec: 'H264',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: true
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('18_drm_h264_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls', () => {
  it('18_drm_h264_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '18_drm_h264_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls',
      cid: 'test',
      inputCodec: 'H264',
      resolutionProfile: 'UHD_FHD_FHD_HD_HD_SD',
      streamingFormat: 'DASH_HLS',
      outputCodec: 'H264',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: false
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('19_drm_h264_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls', () => {
  it('19_drm_h264_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '19_drm_h264_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls',
      cid: 'test',
      inputCodec: 'H264',
      resolutionProfile: 'UHD_FHD_FHD_HD_HD_SD',
      streamingFormat: 'DASH_HLS',
      outputCodec: 'H264',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: true
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('20_drm_h264_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls', () => {
  it('20_drm_h264_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '20_drm_h264_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls',
      cid: 'test',
      inputCodec: 'H264',
      resolutionProfile: 'UHD_FHD_FHD_HD_HD_SD',
      streamingFormat: 'DASH_HLS',
      outputCodec: 'H264',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: false
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('21_drm_h264_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls', () => {
  it('21_drm_h264_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '21_drm_h264_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls',
      cid: 'test',
      inputCodec: 'H264',
      resolutionProfile: 'UHD_FHD_FHD_HD_HD_SD',
      streamingFormat: 'DASH_HLS',
      outputCodec: 'H264',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: true
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('22_drm_h264_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls', () => {
  it('22_drm_h264_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '22_drm_h264_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls',
      cid: 'test',
      inputCodec: 'H264',
      resolutionProfile: 'UHD_FHD_FHD_HD_HD_SD',
      streamingFormat: 'DASH_HLS',
      outputCodec: 'H264',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: false
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('23_drm_h264_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls', () => {
  it('23_drm_h264_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '23_drm_h264_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls',
      cid: 'test',
      inputCodec: 'H264',
      resolutionProfile: 'UHD_FHD_FHD_HD_HD_SD',
      streamingFormat: 'DASH_HLS',
      outputCodec: 'H264',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: true
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('24_drm_h264_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls', () => {
  it('24_drm_h264_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '24_drm_h264_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls',
      cid: 'test',
      inputCodec: 'H264',
      resolutionProfile: 'UHD_FHD_FHD_HD_HD_SD',
      streamingFormat: 'DASH_HLS',
      outputCodec: 'H264',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: false
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('25_drm_h264_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls', () => {
  it('25_drm_h264_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '25_drm_h264_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls',
      cid: 'test',
      inputCodec: 'H264',
      resolutionProfile: 'UHD_FHD_FHD_HD_HD_SD',
      streamingFormat: 'DASH_HLS',
      outputCodec: 'H264',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: true
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('26_drm_h264_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls', () => {
  it('26_drm_h264_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '26_drm_h264_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls',
      cid: 'test',
      inputCodec: 'H264',
      resolutionProfile: 'UHD_FHD_FHD_HD_HD_SD',
      streamingFormat: 'DASH_HLS',
      outputCodec: 'H264',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: false
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('27_drm_h264_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls', () => {
  it('27_drm_h264_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '27_drm_h264_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls',
      cid: 'test',
      inputCodec: 'H264',
      resolutionProfile: 'UHD_FHD_FHD_HD_HD_SD',
      streamingFormat: 'DASH_HLS',
      outputCodec: 'H264',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: true
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('28_drm_h264_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls', () => {
  it('28_drm_h264_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '28_drm_h264_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls',
      cid: 'test',
      inputCodec: 'H264',
      resolutionProfile: 'UHD_FHD_FHD_HD_HD_SD',
      streamingFormat: 'DASH_HLS',
      outputCodec: 'H264',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: false
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('29_drm_h264_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls', () => {
  it('29_drm_h264_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '29_drm_h264_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls',
      cid: 'test',
      inputCodec: 'H264',
      resolutionProfile: 'UHD_FHD_FHD_HD_HD_SD',
      streamingFormat: 'DASH_HLS',
      outputCodec: 'H264',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: true
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('30_drm_h264_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls', () => {
  it('30_drm_h264_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '30_drm_h264_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls',
      cid: 'test',
      inputCodec: 'H264',
      resolutionProfile: 'UHD_FHD_FHD_HD_HD_SD',
      streamingFormat: 'DASH_HLS',
      outputCodec: 'H264',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: false
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('31_drm_h264_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls', () => {
  it('31_drm_h264_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '31_drm_h264_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls',
      cid: 'test',
      inputCodec: 'H264',
      resolutionProfile: 'UHD_FHD_FHD_HD_HD_SD',
      streamingFormat: 'DASH_HLS',
      outputCodec: 'H264',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: true
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('32_drm_h264_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls', () => {
  it('32_drm_h264_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '32_drm_h264_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls',
      cid: 'test',
      inputCodec: 'H264',
      resolutionProfile: 'UHD_FHD_FHD_HD_HD_SD',
      streamingFormat: 'DASH_HLS',
      outputCodec: 'H264',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: false
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('33_drm_h265_h264_uhd_fhd_fhd_hd_hd_sd_cmaf', () => {
  it('33_drm_h265_h264_uhd_fhd_fhd_hd_hd_sd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '33_drm_h265_h264_uhd_fhd_fhd_hd_hd_sd_cmaf',
      cid: 'test',
      inputCodec: 'H265',
      resolutionProfile: 'UHD_FHD_FHD_HD_HD_SD',
      streamingFormat: 'CMAF',
      outputCodec: 'H264',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: true
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('34_drm_h265_h264_uhd_fhd_fhd_hd_hd_sd_cmaf', () => {
  it('34_drm_h265_h264_uhd_fhd_fhd_hd_hd_sd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '34_drm_h265_h264_uhd_fhd_fhd_hd_hd_sd_cmaf',
      cid: 'test',
      inputCodec: 'H265',
      resolutionProfile: 'UHD_FHD_FHD_HD_HD_SD',
      streamingFormat: 'CMAF',
      outputCodec: 'H264',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: false
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('35_drm_h265_h264_uhd_fhd_fhd_hd_hd_sd_cmaf', () => {
  it('35_drm_h265_h264_uhd_fhd_fhd_hd_hd_sd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '35_drm_h265_h264_uhd_fhd_fhd_hd_hd_sd_cmaf',
      cid: 'test',
      inputCodec: 'H265',
      resolutionProfile: 'UHD_FHD_FHD_HD_HD_SD',
      streamingFormat: 'CMAF',
      outputCodec: 'H264',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: true
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('36_drm_h265_h264_uhd_fhd_fhd_hd_hd_sd_cmaf', () => {
  it('36_drm_h265_h264_uhd_fhd_fhd_hd_hd_sd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '36_drm_h265_h264_uhd_fhd_fhd_hd_hd_sd_cmaf',
      cid: 'test',
      inputCodec: 'H265',
      resolutionProfile: 'UHD_FHD_FHD_HD_HD_SD',
      streamingFormat: 'CMAF',
      outputCodec: 'H264',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: false
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('37_drm_h265_h264_uhd_fhd_fhd_hd_hd_sd_cmaf', () => {
  it('37_drm_h265_h264_uhd_fhd_fhd_hd_hd_sd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '37_drm_h265_h264_uhd_fhd_fhd_hd_hd_sd_cmaf',
      cid: 'test',
      inputCodec: 'H265',
      resolutionProfile: 'UHD_FHD_FHD_HD_HD_SD',
      streamingFormat: 'CMAF',
      outputCodec: 'H264',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: true
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('38_drm_h265_h264_uhd_fhd_fhd_hd_hd_sd_cmaf', () => {
  it('38_drm_h265_h264_uhd_fhd_fhd_hd_hd_sd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '38_drm_h265_h264_uhd_fhd_fhd_hd_hd_sd_cmaf',
      cid: 'test',
      inputCodec: 'H265',
      resolutionProfile: 'UHD_FHD_FHD_HD_HD_SD',
      streamingFormat: 'CMAF',
      outputCodec: 'H264',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: false
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('39_drm_h265_h264_uhd_fhd_fhd_hd_hd_sd_cmaf', () => {
  it('39_drm_h265_h264_uhd_fhd_fhd_hd_hd_sd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '39_drm_h265_h264_uhd_fhd_fhd_hd_hd_sd_cmaf',
      cid: 'test',
      inputCodec: 'H265',
      resolutionProfile: 'UHD_FHD_FHD_HD_HD_SD',
      streamingFormat: 'CMAF',
      outputCodec: 'H264',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: true
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('40_drm_h265_h264_uhd_fhd_fhd_hd_hd_sd_cmaf', () => {
  it('40_drm_h265_h264_uhd_fhd_fhd_hd_hd_sd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '40_drm_h265_h264_uhd_fhd_fhd_hd_hd_sd_cmaf',
      cid: 'test',
      inputCodec: 'H265',
      resolutionProfile: 'UHD_FHD_FHD_HD_HD_SD',
      streamingFormat: 'CMAF',
      outputCodec: 'H264',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: false
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('41_drm_h265_h264_uhd_fhd_fhd_hd_hd_sd_cmaf', () => {
  it('41_drm_h265_h264_uhd_fhd_fhd_hd_hd_sd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '41_drm_h265_h264_uhd_fhd_fhd_hd_hd_sd_cmaf',
      cid: 'test',
      inputCodec: 'H265',
      resolutionProfile: 'UHD_FHD_FHD_HD_HD_SD',
      streamingFormat: 'CMAF',
      outputCodec: 'H264',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: true
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('42_drm_h265_h264_uhd_fhd_fhd_hd_hd_sd_cmaf', () => {
  it('42_drm_h265_h264_uhd_fhd_fhd_hd_hd_sd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '42_drm_h265_h264_uhd_fhd_fhd_hd_hd_sd_cmaf',
      cid: 'test',
      inputCodec: 'H265',
      resolutionProfile: 'UHD_FHD_FHD_HD_HD_SD',
      streamingFormat: 'CMAF',
      outputCodec: 'H264',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: false
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('43_drm_h265_h264_uhd_fhd_fhd_hd_hd_sd_cmaf', () => {
  it('43_drm_h265_h264_uhd_fhd_fhd_hd_hd_sd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '43_drm_h265_h264_uhd_fhd_fhd_hd_hd_sd_cmaf',
      cid: 'test',
      inputCodec: 'H265',
      resolutionProfile: 'UHD_FHD_FHD_HD_HD_SD',
      streamingFormat: 'CMAF',
      outputCodec: 'H264',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: true
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('44_drm_h265_h264_uhd_fhd_fhd_hd_hd_sd_cmaf', () => {
  it('44_drm_h265_h264_uhd_fhd_fhd_hd_hd_sd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '44_drm_h265_h264_uhd_fhd_fhd_hd_hd_sd_cmaf',
      cid: 'test',
      inputCodec: 'H265',
      resolutionProfile: 'UHD_FHD_FHD_HD_HD_SD',
      streamingFormat: 'CMAF',
      outputCodec: 'H264',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: false
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('45_drm_h265_h264_uhd_fhd_fhd_hd_hd_sd_cmaf', () => {
  it('45_drm_h265_h264_uhd_fhd_fhd_hd_hd_sd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '45_drm_h265_h264_uhd_fhd_fhd_hd_hd_sd_cmaf',
      cid: 'test',
      inputCodec: 'H265',
      resolutionProfile: 'UHD_FHD_FHD_HD_HD_SD',
      streamingFormat: 'CMAF',
      outputCodec: 'H264',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: true
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('46_drm_h265_h264_uhd_fhd_fhd_hd_hd_sd_cmaf', () => {
  it('46_drm_h265_h264_uhd_fhd_fhd_hd_hd_sd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '46_drm_h265_h264_uhd_fhd_fhd_hd_hd_sd_cmaf',
      cid: 'test',
      inputCodec: 'H265',
      resolutionProfile: 'UHD_FHD_FHD_HD_HD_SD',
      streamingFormat: 'CMAF',
      outputCodec: 'H264',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: false
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('47_drm_h265_h264_uhd_fhd_fhd_hd_hd_sd_cmaf', () => {
  it('47_drm_h265_h264_uhd_fhd_fhd_hd_hd_sd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '47_drm_h265_h264_uhd_fhd_fhd_hd_hd_sd_cmaf',
      cid: 'test',
      inputCodec: 'H265',
      resolutionProfile: 'UHD_FHD_FHD_HD_HD_SD',
      streamingFormat: 'CMAF',
      outputCodec: 'H264',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: true
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('48_drm_h265_h264_uhd_fhd_fhd_hd_hd_sd_cmaf', () => {
  it('48_drm_h265_h264_uhd_fhd_fhd_hd_hd_sd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '48_drm_h265_h264_uhd_fhd_fhd_hd_hd_sd_cmaf',
      cid: 'test',
      inputCodec: 'H265',
      resolutionProfile: 'UHD_FHD_FHD_HD_HD_SD',
      streamingFormat: 'CMAF',
      outputCodec: 'H264',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: false
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('49_drm_h265_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls', () => {
  it('49_drm_h265_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '49_drm_h265_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls',
      cid: 'test',
      inputCodec: 'H265',
      resolutionProfile: 'UHD_FHD_FHD_HD_HD_SD',
      streamingFormat: 'DASH_HLS',
      outputCodec: 'H264',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: true
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('50_drm_h265_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls', () => {
  it('50_drm_h265_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '50_drm_h265_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls',
      cid: 'test',
      inputCodec: 'H265',
      resolutionProfile: 'UHD_FHD_FHD_HD_HD_SD',
      streamingFormat: 'DASH_HLS',
      outputCodec: 'H264',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: false
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('51_drm_h265_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls', () => {
  it('51_drm_h265_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '51_drm_h265_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls',
      cid: 'test',
      inputCodec: 'H265',
      resolutionProfile: 'UHD_FHD_FHD_HD_HD_SD',
      streamingFormat: 'DASH_HLS',
      outputCodec: 'H264',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: true
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('52_drm_h265_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls', () => {
  it('52_drm_h265_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '52_drm_h265_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls',
      cid: 'test',
      inputCodec: 'H265',
      resolutionProfile: 'UHD_FHD_FHD_HD_HD_SD',
      streamingFormat: 'DASH_HLS',
      outputCodec: 'H264',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: false
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('53_drm_h265_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls', () => {
  it('53_drm_h265_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '53_drm_h265_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls',
      cid: 'test',
      inputCodec: 'H265',
      resolutionProfile: 'UHD_FHD_FHD_HD_HD_SD',
      streamingFormat: 'DASH_HLS',
      outputCodec: 'H264',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: true
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('54_drm_h265_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls', () => {
  it('54_drm_h265_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '54_drm_h265_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls',
      cid: 'test',
      inputCodec: 'H265',
      resolutionProfile: 'UHD_FHD_FHD_HD_HD_SD',
      streamingFormat: 'DASH_HLS',
      outputCodec: 'H264',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: false
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('55_drm_h265_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls', () => {
  it('55_drm_h265_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '55_drm_h265_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls',
      cid: 'test',
      inputCodec: 'H265',
      resolutionProfile: 'UHD_FHD_FHD_HD_HD_SD',
      streamingFormat: 'DASH_HLS',
      outputCodec: 'H264',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: true
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('56_drm_h265_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls', () => {
  it('56_drm_h265_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '56_drm_h265_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls',
      cid: 'test',
      inputCodec: 'H265',
      resolutionProfile: 'UHD_FHD_FHD_HD_HD_SD',
      streamingFormat: 'DASH_HLS',
      outputCodec: 'H264',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: false
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('57_drm_h265_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls', () => {
  it('57_drm_h265_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '57_drm_h265_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls',
      cid: 'test',
      inputCodec: 'H265',
      resolutionProfile: 'UHD_FHD_FHD_HD_HD_SD',
      streamingFormat: 'DASH_HLS',
      outputCodec: 'H264',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: true
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('58_drm_h265_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls', () => {
  it('58_drm_h265_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '58_drm_h265_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls',
      cid: 'test',
      inputCodec: 'H265',
      resolutionProfile: 'UHD_FHD_FHD_HD_HD_SD',
      streamingFormat: 'DASH_HLS',
      outputCodec: 'H264',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: false
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('59_drm_h265_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls', () => {
  it('59_drm_h265_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '59_drm_h265_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls',
      cid: 'test',
      inputCodec: 'H265',
      resolutionProfile: 'UHD_FHD_FHD_HD_HD_SD',
      streamingFormat: 'DASH_HLS',
      outputCodec: 'H264',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: true
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('60_drm_h265_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls', () => {
  it('60_drm_h265_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '60_drm_h265_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls',
      cid: 'test',
      inputCodec: 'H265',
      resolutionProfile: 'UHD_FHD_FHD_HD_HD_SD',
      streamingFormat: 'DASH_HLS',
      outputCodec: 'H264',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: false
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('61_drm_h265_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls', () => {
  it('61_drm_h265_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '61_drm_h265_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls',
      cid: 'test',
      inputCodec: 'H265',
      resolutionProfile: 'UHD_FHD_FHD_HD_HD_SD',
      streamingFormat: 'DASH_HLS',
      outputCodec: 'H264',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: true
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('62_drm_h265_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls', () => {
  it('62_drm_h265_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '62_drm_h265_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls',
      cid: 'test',
      inputCodec: 'H265',
      resolutionProfile: 'UHD_FHD_FHD_HD_HD_SD',
      streamingFormat: 'DASH_HLS',
      outputCodec: 'H264',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: false
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('63_drm_h265_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls', () => {
  it('63_drm_h265_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '63_drm_h265_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls',
      cid: 'test',
      inputCodec: 'H265',
      resolutionProfile: 'UHD_FHD_FHD_HD_HD_SD',
      streamingFormat: 'DASH_HLS',
      outputCodec: 'H264',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: true
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('64_drm_h265_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls', () => {
  it('64_drm_h265_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '64_drm_h265_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls',
      cid: 'test',
      inputCodec: 'H265',
      resolutionProfile: 'UHD_FHD_FHD_HD_HD_SD',
      streamingFormat: 'DASH_HLS',
      outputCodec: 'H264',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: false
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('65_drm_prores_h264_uhd_fhd_fhd_hd_hd_sd_cmaf', () => {
  it('65_drm_prores_h264_uhd_fhd_fhd_hd_hd_sd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '65_drm_prores_h264_uhd_fhd_fhd_hd_hd_sd_cmaf',
      cid: 'test',
      inputCodec: 'PRORES',
      resolutionProfile: 'UHD_FHD_FHD_HD_HD_SD',
      streamingFormat: 'CMAF',
      outputCodec: 'H264',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: true
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('66_drm_prores_h264_uhd_fhd_fhd_hd_hd_sd_cmaf', () => {
  it('66_drm_prores_h264_uhd_fhd_fhd_hd_hd_sd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '66_drm_prores_h264_uhd_fhd_fhd_hd_hd_sd_cmaf',
      cid: 'test',
      inputCodec: 'PRORES',
      resolutionProfile: 'UHD_FHD_FHD_HD_HD_SD',
      streamingFormat: 'CMAF',
      outputCodec: 'H264',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: false
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('67_drm_prores_h264_uhd_fhd_fhd_hd_hd_sd_cmaf', () => {
  it('67_drm_prores_h264_uhd_fhd_fhd_hd_hd_sd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '67_drm_prores_h264_uhd_fhd_fhd_hd_hd_sd_cmaf',
      cid: 'test',
      inputCodec: 'PRORES',
      resolutionProfile: 'UHD_FHD_FHD_HD_HD_SD',
      streamingFormat: 'CMAF',
      outputCodec: 'H264',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: true
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('68_drm_prores_h264_uhd_fhd_fhd_hd_hd_sd_cmaf', () => {
  it('68_drm_prores_h264_uhd_fhd_fhd_hd_hd_sd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '68_drm_prores_h264_uhd_fhd_fhd_hd_hd_sd_cmaf',
      cid: 'test',
      inputCodec: 'PRORES',
      resolutionProfile: 'UHD_FHD_FHD_HD_HD_SD',
      streamingFormat: 'CMAF',
      outputCodec: 'H264',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: false
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('69_drm_prores_h264_uhd_fhd_fhd_hd_hd_sd_cmaf', () => {
  it('69_drm_prores_h264_uhd_fhd_fhd_hd_hd_sd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '69_drm_prores_h264_uhd_fhd_fhd_hd_hd_sd_cmaf',
      cid: 'test',
      inputCodec: 'PRORES',
      resolutionProfile: 'UHD_FHD_FHD_HD_HD_SD',
      streamingFormat: 'CMAF',
      outputCodec: 'H264',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: true
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('70_drm_prores_h264_uhd_fhd_fhd_hd_hd_sd_cmaf', () => {
  it('70_drm_prores_h264_uhd_fhd_fhd_hd_hd_sd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '70_drm_prores_h264_uhd_fhd_fhd_hd_hd_sd_cmaf',
      cid: 'test',
      inputCodec: 'PRORES',
      resolutionProfile: 'UHD_FHD_FHD_HD_HD_SD',
      streamingFormat: 'CMAF',
      outputCodec: 'H264',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: false
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('71_drm_prores_h264_uhd_fhd_fhd_hd_hd_sd_cmaf', () => {
  it('71_drm_prores_h264_uhd_fhd_fhd_hd_hd_sd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '71_drm_prores_h264_uhd_fhd_fhd_hd_hd_sd_cmaf',
      cid: 'test',
      inputCodec: 'PRORES',
      resolutionProfile: 'UHD_FHD_FHD_HD_HD_SD',
      streamingFormat: 'CMAF',
      outputCodec: 'H264',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: true
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('72_drm_prores_h264_uhd_fhd_fhd_hd_hd_sd_cmaf', () => {
  it('72_drm_prores_h264_uhd_fhd_fhd_hd_hd_sd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '72_drm_prores_h264_uhd_fhd_fhd_hd_hd_sd_cmaf',
      cid: 'test',
      inputCodec: 'PRORES',
      resolutionProfile: 'UHD_FHD_FHD_HD_HD_SD',
      streamingFormat: 'CMAF',
      outputCodec: 'H264',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: false
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('73_drm_prores_h264_uhd_fhd_fhd_hd_hd_sd_cmaf', () => {
  it('73_drm_prores_h264_uhd_fhd_fhd_hd_hd_sd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '73_drm_prores_h264_uhd_fhd_fhd_hd_hd_sd_cmaf',
      cid: 'test',
      inputCodec: 'PRORES',
      resolutionProfile: 'UHD_FHD_FHD_HD_HD_SD',
      streamingFormat: 'CMAF',
      outputCodec: 'H264',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: true
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('74_drm_prores_h264_uhd_fhd_fhd_hd_hd_sd_cmaf', () => {
  it('74_drm_prores_h264_uhd_fhd_fhd_hd_hd_sd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '74_drm_prores_h264_uhd_fhd_fhd_hd_hd_sd_cmaf',
      cid: 'test',
      inputCodec: 'PRORES',
      resolutionProfile: 'UHD_FHD_FHD_HD_HD_SD',
      streamingFormat: 'CMAF',
      outputCodec: 'H264',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: false
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('75_drm_prores_h264_uhd_fhd_fhd_hd_hd_sd_cmaf', () => {
  it('75_drm_prores_h264_uhd_fhd_fhd_hd_hd_sd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '75_drm_prores_h264_uhd_fhd_fhd_hd_hd_sd_cmaf',
      cid: 'test',
      inputCodec: 'PRORES',
      resolutionProfile: 'UHD_FHD_FHD_HD_HD_SD',
      streamingFormat: 'CMAF',
      outputCodec: 'H264',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: true
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('76_drm_prores_h264_uhd_fhd_fhd_hd_hd_sd_cmaf', () => {
  it('76_drm_prores_h264_uhd_fhd_fhd_hd_hd_sd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '76_drm_prores_h264_uhd_fhd_fhd_hd_hd_sd_cmaf',
      cid: 'test',
      inputCodec: 'PRORES',
      resolutionProfile: 'UHD_FHD_FHD_HD_HD_SD',
      streamingFormat: 'CMAF',
      outputCodec: 'H264',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: false
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('77_drm_prores_h264_uhd_fhd_fhd_hd_hd_sd_cmaf', () => {
  it('77_drm_prores_h264_uhd_fhd_fhd_hd_hd_sd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '77_drm_prores_h264_uhd_fhd_fhd_hd_hd_sd_cmaf',
      cid: 'test',
      inputCodec: 'PRORES',
      resolutionProfile: 'UHD_FHD_FHD_HD_HD_SD',
      streamingFormat: 'CMAF',
      outputCodec: 'H264',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: true
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('78_drm_prores_h264_uhd_fhd_fhd_hd_hd_sd_cmaf', () => {
  it('78_drm_prores_h264_uhd_fhd_fhd_hd_hd_sd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '78_drm_prores_h264_uhd_fhd_fhd_hd_hd_sd_cmaf',
      cid: 'test',
      inputCodec: 'PRORES',
      resolutionProfile: 'UHD_FHD_FHD_HD_HD_SD',
      streamingFormat: 'CMAF',
      outputCodec: 'H264',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: false
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('79_drm_prores_h264_uhd_fhd_fhd_hd_hd_sd_cmaf', () => {
  it('79_drm_prores_h264_uhd_fhd_fhd_hd_hd_sd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '79_drm_prores_h264_uhd_fhd_fhd_hd_hd_sd_cmaf',
      cid: 'test',
      inputCodec: 'PRORES',
      resolutionProfile: 'UHD_FHD_FHD_HD_HD_SD',
      streamingFormat: 'CMAF',
      outputCodec: 'H264',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: true
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('80_drm_prores_h264_uhd_fhd_fhd_hd_hd_sd_cmaf', () => {
  it('80_drm_prores_h264_uhd_fhd_fhd_hd_hd_sd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '80_drm_prores_h264_uhd_fhd_fhd_hd_hd_sd_cmaf',
      cid: 'test',
      inputCodec: 'PRORES',
      resolutionProfile: 'UHD_FHD_FHD_HD_HD_SD',
      streamingFormat: 'CMAF',
      outputCodec: 'H264',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: false
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('81_drm_prores_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls', () => {
  it('81_drm_prores_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '81_drm_prores_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls',
      cid: 'test',
      inputCodec: 'PRORES',
      resolutionProfile: 'UHD_FHD_FHD_HD_HD_SD',
      streamingFormat: 'DASH_HLS',
      outputCodec: 'H264',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: true
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('82_drm_prores_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls', () => {
  it('82_drm_prores_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '82_drm_prores_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls',
      cid: 'test',
      inputCodec: 'PRORES',
      resolutionProfile: 'UHD_FHD_FHD_HD_HD_SD',
      streamingFormat: 'DASH_HLS',
      outputCodec: 'H264',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: false
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('83_drm_prores_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls', () => {
  it('83_drm_prores_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '83_drm_prores_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls',
      cid: 'test',
      inputCodec: 'PRORES',
      resolutionProfile: 'UHD_FHD_FHD_HD_HD_SD',
      streamingFormat: 'DASH_HLS',
      outputCodec: 'H264',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: true
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('84_drm_prores_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls', () => {
  it('84_drm_prores_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '84_drm_prores_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls',
      cid: 'test',
      inputCodec: 'PRORES',
      resolutionProfile: 'UHD_FHD_FHD_HD_HD_SD',
      streamingFormat: 'DASH_HLS',
      outputCodec: 'H264',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: false
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('85_drm_prores_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls', () => {
  it('85_drm_prores_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '85_drm_prores_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls',
      cid: 'test',
      inputCodec: 'PRORES',
      resolutionProfile: 'UHD_FHD_FHD_HD_HD_SD',
      streamingFormat: 'DASH_HLS',
      outputCodec: 'H264',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: true
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('86_drm_prores_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls', () => {
  it('86_drm_prores_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '86_drm_prores_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls',
      cid: 'test',
      inputCodec: 'PRORES',
      resolutionProfile: 'UHD_FHD_FHD_HD_HD_SD',
      streamingFormat: 'DASH_HLS',
      outputCodec: 'H264',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: false
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('87_drm_prores_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls', () => {
  it('87_drm_prores_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '87_drm_prores_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls',
      cid: 'test',
      inputCodec: 'PRORES',
      resolutionProfile: 'UHD_FHD_FHD_HD_HD_SD',
      streamingFormat: 'DASH_HLS',
      outputCodec: 'H264',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: true
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('88_drm_prores_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls', () => {
  it('88_drm_prores_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '88_drm_prores_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls',
      cid: 'test',
      inputCodec: 'PRORES',
      resolutionProfile: 'UHD_FHD_FHD_HD_HD_SD',
      streamingFormat: 'DASH_HLS',
      outputCodec: 'H264',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: false
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('89_drm_prores_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls', () => {
  it('89_drm_prores_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '89_drm_prores_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls',
      cid: 'test',
      inputCodec: 'PRORES',
      resolutionProfile: 'UHD_FHD_FHD_HD_HD_SD',
      streamingFormat: 'DASH_HLS',
      outputCodec: 'H264',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: true
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('90_drm_prores_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls', () => {
  it('90_drm_prores_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '90_drm_prores_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls',
      cid: 'test',
      inputCodec: 'PRORES',
      resolutionProfile: 'UHD_FHD_FHD_HD_HD_SD',
      streamingFormat: 'DASH_HLS',
      outputCodec: 'H264',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: false
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('91_drm_prores_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls', () => {
  it('91_drm_prores_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '91_drm_prores_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls',
      cid: 'test',
      inputCodec: 'PRORES',
      resolutionProfile: 'UHD_FHD_FHD_HD_HD_SD',
      streamingFormat: 'DASH_HLS',
      outputCodec: 'H264',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: true
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('92_drm_prores_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls', () => {
  it('92_drm_prores_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '92_drm_prores_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls',
      cid: 'test',
      inputCodec: 'PRORES',
      resolutionProfile: 'UHD_FHD_FHD_HD_HD_SD',
      streamingFormat: 'DASH_HLS',
      outputCodec: 'H264',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: false
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('93_drm_prores_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls', () => {
  it('93_drm_prores_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '93_drm_prores_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls',
      cid: 'test',
      inputCodec: 'PRORES',
      resolutionProfile: 'UHD_FHD_FHD_HD_HD_SD',
      streamingFormat: 'DASH_HLS',
      outputCodec: 'H264',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: true
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('94_drm_prores_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls', () => {
  it('94_drm_prores_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '94_drm_prores_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls',
      cid: 'test',
      inputCodec: 'PRORES',
      resolutionProfile: 'UHD_FHD_FHD_HD_HD_SD',
      streamingFormat: 'DASH_HLS',
      outputCodec: 'H264',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: false
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('95_drm_prores_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls', () => {
  it('95_drm_prores_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '95_drm_prores_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls',
      cid: 'test',
      inputCodec: 'PRORES',
      resolutionProfile: 'UHD_FHD_FHD_HD_HD_SD',
      streamingFormat: 'DASH_HLS',
      outputCodec: 'H264',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: true
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('96_drm_prores_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls', () => {
  it('96_drm_prores_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '96_drm_prores_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls',
      cid: 'test',
      inputCodec: 'PRORES',
      resolutionProfile: 'UHD_FHD_FHD_HD_HD_SD',
      streamingFormat: 'DASH_HLS',
      outputCodec: 'H264',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: false
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('97_drm_xdcam_h264_uhd_fhd_fhd_hd_hd_sd_cmaf', () => {
  it('97_drm_xdcam_h264_uhd_fhd_fhd_hd_hd_sd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '97_drm_xdcam_h264_uhd_fhd_fhd_hd_hd_sd_cmaf',
      cid: 'test',
      inputCodec: 'XDCAM',
      resolutionProfile: 'UHD_FHD_FHD_HD_HD_SD',
      streamingFormat: 'CMAF',
      outputCodec: 'H264',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: true
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('98_drm_xdcam_h264_uhd_fhd_fhd_hd_hd_sd_cmaf', () => {
  it('98_drm_xdcam_h264_uhd_fhd_fhd_hd_hd_sd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '98_drm_xdcam_h264_uhd_fhd_fhd_hd_hd_sd_cmaf',
      cid: 'test',
      inputCodec: 'XDCAM',
      resolutionProfile: 'UHD_FHD_FHD_HD_HD_SD',
      streamingFormat: 'CMAF',
      outputCodec: 'H264',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: false
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('99_drm_xdcam_h264_uhd_fhd_fhd_hd_hd_sd_cmaf', () => {
  it('99_drm_xdcam_h264_uhd_fhd_fhd_hd_hd_sd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '99_drm_xdcam_h264_uhd_fhd_fhd_hd_hd_sd_cmaf',
      cid: 'test',
      inputCodec: 'XDCAM',
      resolutionProfile: 'UHD_FHD_FHD_HD_HD_SD',
      streamingFormat: 'CMAF',
      outputCodec: 'H264',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: true
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('100_drm_xdcam_h264_uhd_fhd_fhd_hd_hd_sd_cmaf', () => {
  it('100_drm_xdcam_h264_uhd_fhd_fhd_hd_hd_sd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '100_drm_xdcam_h264_uhd_fhd_fhd_hd_hd_sd_cmaf',
      cid: 'test',
      inputCodec: 'XDCAM',
      resolutionProfile: 'UHD_FHD_FHD_HD_HD_SD',
      streamingFormat: 'CMAF',
      outputCodec: 'H264',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: false
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('101_drm_xdcam_h264_uhd_fhd_fhd_hd_hd_sd_cmaf', () => {
  it('101_drm_xdcam_h264_uhd_fhd_fhd_hd_hd_sd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '101_drm_xdcam_h264_uhd_fhd_fhd_hd_hd_sd_cmaf',
      cid: 'test',
      inputCodec: 'XDCAM',
      resolutionProfile: 'UHD_FHD_FHD_HD_HD_SD',
      streamingFormat: 'CMAF',
      outputCodec: 'H264',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: true
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('102_drm_xdcam_h264_uhd_fhd_fhd_hd_hd_sd_cmaf', () => {
  it('102_drm_xdcam_h264_uhd_fhd_fhd_hd_hd_sd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '102_drm_xdcam_h264_uhd_fhd_fhd_hd_hd_sd_cmaf',
      cid: 'test',
      inputCodec: 'XDCAM',
      resolutionProfile: 'UHD_FHD_FHD_HD_HD_SD',
      streamingFormat: 'CMAF',
      outputCodec: 'H264',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: false
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('103_drm_xdcam_h264_uhd_fhd_fhd_hd_hd_sd_cmaf', () => {
  it('103_drm_xdcam_h264_uhd_fhd_fhd_hd_hd_sd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '103_drm_xdcam_h264_uhd_fhd_fhd_hd_hd_sd_cmaf',
      cid: 'test',
      inputCodec: 'XDCAM',
      resolutionProfile: 'UHD_FHD_FHD_HD_HD_SD',
      streamingFormat: 'CMAF',
      outputCodec: 'H264',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: true
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('104_drm_xdcam_h264_uhd_fhd_fhd_hd_hd_sd_cmaf', () => {
  it('104_drm_xdcam_h264_uhd_fhd_fhd_hd_hd_sd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '104_drm_xdcam_h264_uhd_fhd_fhd_hd_hd_sd_cmaf',
      cid: 'test',
      inputCodec: 'XDCAM',
      resolutionProfile: 'UHD_FHD_FHD_HD_HD_SD',
      streamingFormat: 'CMAF',
      outputCodec: 'H264',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: false
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('105_drm_xdcam_h264_uhd_fhd_fhd_hd_hd_sd_cmaf', () => {
  it('105_drm_xdcam_h264_uhd_fhd_fhd_hd_hd_sd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '105_drm_xdcam_h264_uhd_fhd_fhd_hd_hd_sd_cmaf',
      cid: 'test',
      inputCodec: 'XDCAM',
      resolutionProfile: 'UHD_FHD_FHD_HD_HD_SD',
      streamingFormat: 'CMAF',
      outputCodec: 'H264',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: true
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('106_drm_xdcam_h264_uhd_fhd_fhd_hd_hd_sd_cmaf', () => {
  it('106_drm_xdcam_h264_uhd_fhd_fhd_hd_hd_sd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '106_drm_xdcam_h264_uhd_fhd_fhd_hd_hd_sd_cmaf',
      cid: 'test',
      inputCodec: 'XDCAM',
      resolutionProfile: 'UHD_FHD_FHD_HD_HD_SD',
      streamingFormat: 'CMAF',
      outputCodec: 'H264',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: false
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('107_drm_xdcam_h264_uhd_fhd_fhd_hd_hd_sd_cmaf', () => {
  it('107_drm_xdcam_h264_uhd_fhd_fhd_hd_hd_sd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '107_drm_xdcam_h264_uhd_fhd_fhd_hd_hd_sd_cmaf',
      cid: 'test',
      inputCodec: 'XDCAM',
      resolutionProfile: 'UHD_FHD_FHD_HD_HD_SD',
      streamingFormat: 'CMAF',
      outputCodec: 'H264',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: true
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('108_drm_xdcam_h264_uhd_fhd_fhd_hd_hd_sd_cmaf', () => {
  it('108_drm_xdcam_h264_uhd_fhd_fhd_hd_hd_sd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '108_drm_xdcam_h264_uhd_fhd_fhd_hd_hd_sd_cmaf',
      cid: 'test',
      inputCodec: 'XDCAM',
      resolutionProfile: 'UHD_FHD_FHD_HD_HD_SD',
      streamingFormat: 'CMAF',
      outputCodec: 'H264',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: false
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('109_drm_xdcam_h264_uhd_fhd_fhd_hd_hd_sd_cmaf', () => {
  it('109_drm_xdcam_h264_uhd_fhd_fhd_hd_hd_sd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '109_drm_xdcam_h264_uhd_fhd_fhd_hd_hd_sd_cmaf',
      cid: 'test',
      inputCodec: 'XDCAM',
      resolutionProfile: 'UHD_FHD_FHD_HD_HD_SD',
      streamingFormat: 'CMAF',
      outputCodec: 'H264',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: true
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('110_drm_xdcam_h264_uhd_fhd_fhd_hd_hd_sd_cmaf', () => {
  it('110_drm_xdcam_h264_uhd_fhd_fhd_hd_hd_sd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '110_drm_xdcam_h264_uhd_fhd_fhd_hd_hd_sd_cmaf',
      cid: 'test',
      inputCodec: 'XDCAM',
      resolutionProfile: 'UHD_FHD_FHD_HD_HD_SD',
      streamingFormat: 'CMAF',
      outputCodec: 'H264',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: false
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('111_drm_xdcam_h264_uhd_fhd_fhd_hd_hd_sd_cmaf', () => {
  it('111_drm_xdcam_h264_uhd_fhd_fhd_hd_hd_sd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '111_drm_xdcam_h264_uhd_fhd_fhd_hd_hd_sd_cmaf',
      cid: 'test',
      inputCodec: 'XDCAM',
      resolutionProfile: 'UHD_FHD_FHD_HD_HD_SD',
      streamingFormat: 'CMAF',
      outputCodec: 'H264',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: true
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('112_drm_xdcam_h264_uhd_fhd_fhd_hd_hd_sd_cmaf', () => {
  it('112_drm_xdcam_h264_uhd_fhd_fhd_hd_hd_sd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '112_drm_xdcam_h264_uhd_fhd_fhd_hd_hd_sd_cmaf',
      cid: 'test',
      inputCodec: 'XDCAM',
      resolutionProfile: 'UHD_FHD_FHD_HD_HD_SD',
      streamingFormat: 'CMAF',
      outputCodec: 'H264',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: false
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('113_drm_xdcam_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls', () => {
  it('113_drm_xdcam_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '113_drm_xdcam_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls',
      cid: 'test',
      inputCodec: 'XDCAM',
      resolutionProfile: 'UHD_FHD_FHD_HD_HD_SD',
      streamingFormat: 'DASH_HLS',
      outputCodec: 'H264',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: true
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('114_drm_xdcam_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls', () => {
  it('114_drm_xdcam_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '114_drm_xdcam_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls',
      cid: 'test',
      inputCodec: 'XDCAM',
      resolutionProfile: 'UHD_FHD_FHD_HD_HD_SD',
      streamingFormat: 'DASH_HLS',
      outputCodec: 'H264',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: false
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('115_drm_xdcam_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls', () => {
  it('115_drm_xdcam_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '115_drm_xdcam_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls',
      cid: 'test',
      inputCodec: 'XDCAM',
      resolutionProfile: 'UHD_FHD_FHD_HD_HD_SD',
      streamingFormat: 'DASH_HLS',
      outputCodec: 'H264',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: true
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('116_drm_xdcam_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls', () => {
  it('116_drm_xdcam_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '116_drm_xdcam_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls',
      cid: 'test',
      inputCodec: 'XDCAM',
      resolutionProfile: 'UHD_FHD_FHD_HD_HD_SD',
      streamingFormat: 'DASH_HLS',
      outputCodec: 'H264',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: false
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('117_drm_xdcam_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls', () => {
  it('117_drm_xdcam_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '117_drm_xdcam_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls',
      cid: 'test',
      inputCodec: 'XDCAM',
      resolutionProfile: 'UHD_FHD_FHD_HD_HD_SD',
      streamingFormat: 'DASH_HLS',
      outputCodec: 'H264',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: true
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('118_drm_xdcam_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls', () => {
  it('118_drm_xdcam_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '118_drm_xdcam_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls',
      cid: 'test',
      inputCodec: 'XDCAM',
      resolutionProfile: 'UHD_FHD_FHD_HD_HD_SD',
      streamingFormat: 'DASH_HLS',
      outputCodec: 'H264',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: false
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('119_drm_xdcam_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls', () => {
  it('119_drm_xdcam_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '119_drm_xdcam_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls',
      cid: 'test',
      inputCodec: 'XDCAM',
      resolutionProfile: 'UHD_FHD_FHD_HD_HD_SD',
      streamingFormat: 'DASH_HLS',
      outputCodec: 'H264',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: true
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('120_drm_xdcam_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls', () => {
  it('120_drm_xdcam_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '120_drm_xdcam_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls',
      cid: 'test',
      inputCodec: 'XDCAM',
      resolutionProfile: 'UHD_FHD_FHD_HD_HD_SD',
      streamingFormat: 'DASH_HLS',
      outputCodec: 'H264',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: false
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('121_drm_xdcam_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls', () => {
  it('121_drm_xdcam_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '121_drm_xdcam_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls',
      cid: 'test',
      inputCodec: 'XDCAM',
      resolutionProfile: 'UHD_FHD_FHD_HD_HD_SD',
      streamingFormat: 'DASH_HLS',
      outputCodec: 'H264',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: true
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('122_drm_xdcam_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls', () => {
  it('122_drm_xdcam_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '122_drm_xdcam_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls',
      cid: 'test',
      inputCodec: 'XDCAM',
      resolutionProfile: 'UHD_FHD_FHD_HD_HD_SD',
      streamingFormat: 'DASH_HLS',
      outputCodec: 'H264',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: false
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('123_drm_xdcam_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls', () => {
  it('123_drm_xdcam_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '123_drm_xdcam_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls',
      cid: 'test',
      inputCodec: 'XDCAM',
      resolutionProfile: 'UHD_FHD_FHD_HD_HD_SD',
      streamingFormat: 'DASH_HLS',
      outputCodec: 'H264',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: true
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('124_drm_xdcam_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls', () => {
  it('124_drm_xdcam_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '124_drm_xdcam_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls',
      cid: 'test',
      inputCodec: 'XDCAM',
      resolutionProfile: 'UHD_FHD_FHD_HD_HD_SD',
      streamingFormat: 'DASH_HLS',
      outputCodec: 'H264',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: false
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('125_drm_xdcam_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls', () => {
  it('125_drm_xdcam_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '125_drm_xdcam_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls',
      cid: 'test',
      inputCodec: 'XDCAM',
      resolutionProfile: 'UHD_FHD_FHD_HD_HD_SD',
      streamingFormat: 'DASH_HLS',
      outputCodec: 'H264',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: true
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('126_drm_xdcam_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls', () => {
  it('126_drm_xdcam_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '126_drm_xdcam_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls',
      cid: 'test',
      inputCodec: 'XDCAM',
      resolutionProfile: 'UHD_FHD_FHD_HD_HD_SD',
      streamingFormat: 'DASH_HLS',
      outputCodec: 'H264',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: false
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('127_drm_xdcam_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls', () => {
  it('127_drm_xdcam_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '127_drm_xdcam_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls',
      cid: 'test',
      inputCodec: 'XDCAM',
      resolutionProfile: 'UHD_FHD_FHD_HD_HD_SD',
      streamingFormat: 'DASH_HLS',
      outputCodec: 'H264',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: true
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('128_drm_xdcam_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls', () => {
  it('128_drm_xdcam_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '128_drm_xdcam_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls',
      cid: 'test',
      inputCodec: 'XDCAM',
      resolutionProfile: 'UHD_FHD_FHD_HD_HD_SD',
      streamingFormat: 'DASH_HLS',
      outputCodec: 'H264',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: false
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('129_drm_mkv_h264_uhd_fhd_fhd_hd_hd_sd_cmaf', () => {
  it('129_drm_mkv_h264_uhd_fhd_fhd_hd_hd_sd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '129_drm_mkv_h264_uhd_fhd_fhd_hd_hd_sd_cmaf',
      cid: 'test',
      inputCodec: 'MKV',
      resolutionProfile: 'UHD_FHD_FHD_HD_HD_SD',
      streamingFormat: 'CMAF',
      outputCodec: 'H264',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: true
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('130_drm_mkv_h264_uhd_fhd_fhd_hd_hd_sd_cmaf', () => {
  it('130_drm_mkv_h264_uhd_fhd_fhd_hd_hd_sd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '130_drm_mkv_h264_uhd_fhd_fhd_hd_hd_sd_cmaf',
      cid: 'test',
      inputCodec: 'MKV',
      resolutionProfile: 'UHD_FHD_FHD_HD_HD_SD',
      streamingFormat: 'CMAF',
      outputCodec: 'H264',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: false
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('131_drm_mkv_h264_uhd_fhd_fhd_hd_hd_sd_cmaf', () => {
  it('131_drm_mkv_h264_uhd_fhd_fhd_hd_hd_sd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '131_drm_mkv_h264_uhd_fhd_fhd_hd_hd_sd_cmaf',
      cid: 'test',
      inputCodec: 'MKV',
      resolutionProfile: 'UHD_FHD_FHD_HD_HD_SD',
      streamingFormat: 'CMAF',
      outputCodec: 'H264',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: true
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('132_drm_mkv_h264_uhd_fhd_fhd_hd_hd_sd_cmaf', () => {
  it('132_drm_mkv_h264_uhd_fhd_fhd_hd_hd_sd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '132_drm_mkv_h264_uhd_fhd_fhd_hd_hd_sd_cmaf',
      cid: 'test',
      inputCodec: 'MKV',
      resolutionProfile: 'UHD_FHD_FHD_HD_HD_SD',
      streamingFormat: 'CMAF',
      outputCodec: 'H264',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: false
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('133_drm_mkv_h264_uhd_fhd_fhd_hd_hd_sd_cmaf', () => {
  it('133_drm_mkv_h264_uhd_fhd_fhd_hd_hd_sd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '133_drm_mkv_h264_uhd_fhd_fhd_hd_hd_sd_cmaf',
      cid: 'test',
      inputCodec: 'MKV',
      resolutionProfile: 'UHD_FHD_FHD_HD_HD_SD',
      streamingFormat: 'CMAF',
      outputCodec: 'H264',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: true
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('134_drm_mkv_h264_uhd_fhd_fhd_hd_hd_sd_cmaf', () => {
  it('134_drm_mkv_h264_uhd_fhd_fhd_hd_hd_sd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '134_drm_mkv_h264_uhd_fhd_fhd_hd_hd_sd_cmaf',
      cid: 'test',
      inputCodec: 'MKV',
      resolutionProfile: 'UHD_FHD_FHD_HD_HD_SD',
      streamingFormat: 'CMAF',
      outputCodec: 'H264',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: false
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('135_drm_mkv_h264_uhd_fhd_fhd_hd_hd_sd_cmaf', () => {
  it('135_drm_mkv_h264_uhd_fhd_fhd_hd_hd_sd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '135_drm_mkv_h264_uhd_fhd_fhd_hd_hd_sd_cmaf',
      cid: 'test',
      inputCodec: 'MKV',
      resolutionProfile: 'UHD_FHD_FHD_HD_HD_SD',
      streamingFormat: 'CMAF',
      outputCodec: 'H264',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: true
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('136_drm_mkv_h264_uhd_fhd_fhd_hd_hd_sd_cmaf', () => {
  it('136_drm_mkv_h264_uhd_fhd_fhd_hd_hd_sd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '136_drm_mkv_h264_uhd_fhd_fhd_hd_hd_sd_cmaf',
      cid: 'test',
      inputCodec: 'MKV',
      resolutionProfile: 'UHD_FHD_FHD_HD_HD_SD',
      streamingFormat: 'CMAF',
      outputCodec: 'H264',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: false
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('137_drm_mkv_h264_uhd_fhd_fhd_hd_hd_sd_cmaf', () => {
  it('137_drm_mkv_h264_uhd_fhd_fhd_hd_hd_sd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '137_drm_mkv_h264_uhd_fhd_fhd_hd_hd_sd_cmaf',
      cid: 'test',
      inputCodec: 'MKV',
      resolutionProfile: 'UHD_FHD_FHD_HD_HD_SD',
      streamingFormat: 'CMAF',
      outputCodec: 'H264',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: true
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('138_drm_mkv_h264_uhd_fhd_fhd_hd_hd_sd_cmaf', () => {
  it('138_drm_mkv_h264_uhd_fhd_fhd_hd_hd_sd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '138_drm_mkv_h264_uhd_fhd_fhd_hd_hd_sd_cmaf',
      cid: 'test',
      inputCodec: 'MKV',
      resolutionProfile: 'UHD_FHD_FHD_HD_HD_SD',
      streamingFormat: 'CMAF',
      outputCodec: 'H264',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: false
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('139_drm_mkv_h264_uhd_fhd_fhd_hd_hd_sd_cmaf', () => {
  it('139_drm_mkv_h264_uhd_fhd_fhd_hd_hd_sd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '139_drm_mkv_h264_uhd_fhd_fhd_hd_hd_sd_cmaf',
      cid: 'test',
      inputCodec: 'MKV',
      resolutionProfile: 'UHD_FHD_FHD_HD_HD_SD',
      streamingFormat: 'CMAF',
      outputCodec: 'H264',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: true
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('140_drm_mkv_h264_uhd_fhd_fhd_hd_hd_sd_cmaf', () => {
  it('140_drm_mkv_h264_uhd_fhd_fhd_hd_hd_sd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '140_drm_mkv_h264_uhd_fhd_fhd_hd_hd_sd_cmaf',
      cid: 'test',
      inputCodec: 'MKV',
      resolutionProfile: 'UHD_FHD_FHD_HD_HD_SD',
      streamingFormat: 'CMAF',
      outputCodec: 'H264',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: false
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('141_drm_mkv_h264_uhd_fhd_fhd_hd_hd_sd_cmaf', () => {
  it('141_drm_mkv_h264_uhd_fhd_fhd_hd_hd_sd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '141_drm_mkv_h264_uhd_fhd_fhd_hd_hd_sd_cmaf',
      cid: 'test',
      inputCodec: 'MKV',
      resolutionProfile: 'UHD_FHD_FHD_HD_HD_SD',
      streamingFormat: 'CMAF',
      outputCodec: 'H264',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: true
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('142_drm_mkv_h264_uhd_fhd_fhd_hd_hd_sd_cmaf', () => {
  it('142_drm_mkv_h264_uhd_fhd_fhd_hd_hd_sd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '142_drm_mkv_h264_uhd_fhd_fhd_hd_hd_sd_cmaf',
      cid: 'test',
      inputCodec: 'MKV',
      resolutionProfile: 'UHD_FHD_FHD_HD_HD_SD',
      streamingFormat: 'CMAF',
      outputCodec: 'H264',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: false
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('143_drm_mkv_h264_uhd_fhd_fhd_hd_hd_sd_cmaf', () => {
  it('143_drm_mkv_h264_uhd_fhd_fhd_hd_hd_sd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '143_drm_mkv_h264_uhd_fhd_fhd_hd_hd_sd_cmaf',
      cid: 'test',
      inputCodec: 'MKV',
      resolutionProfile: 'UHD_FHD_FHD_HD_HD_SD',
      streamingFormat: 'CMAF',
      outputCodec: 'H264',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: true
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('144_drm_mkv_h264_uhd_fhd_fhd_hd_hd_sd_cmaf', () => {
  it('144_drm_mkv_h264_uhd_fhd_fhd_hd_hd_sd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '144_drm_mkv_h264_uhd_fhd_fhd_hd_hd_sd_cmaf',
      cid: 'test',
      inputCodec: 'MKV',
      resolutionProfile: 'UHD_FHD_FHD_HD_HD_SD',
      streamingFormat: 'CMAF',
      outputCodec: 'H264',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: false
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('145_drm_mkv_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls', () => {
  it('145_drm_mkv_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '145_drm_mkv_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls',
      cid: 'test',
      inputCodec: 'MKV',
      resolutionProfile: 'UHD_FHD_FHD_HD_HD_SD',
      streamingFormat: 'DASH_HLS',
      outputCodec: 'H264',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: true
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('146_drm_mkv_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls', () => {
  it('146_drm_mkv_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '146_drm_mkv_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls',
      cid: 'test',
      inputCodec: 'MKV',
      resolutionProfile: 'UHD_FHD_FHD_HD_HD_SD',
      streamingFormat: 'DASH_HLS',
      outputCodec: 'H264',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: false
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('147_drm_mkv_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls', () => {
  it('147_drm_mkv_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '147_drm_mkv_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls',
      cid: 'test',
      inputCodec: 'MKV',
      resolutionProfile: 'UHD_FHD_FHD_HD_HD_SD',
      streamingFormat: 'DASH_HLS',
      outputCodec: 'H264',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: true
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('148_drm_mkv_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls', () => {
  it('148_drm_mkv_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '148_drm_mkv_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls',
      cid: 'test',
      inputCodec: 'MKV',
      resolutionProfile: 'UHD_FHD_FHD_HD_HD_SD',
      streamingFormat: 'DASH_HLS',
      outputCodec: 'H264',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: false
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('149_drm_mkv_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls', () => {
  it('149_drm_mkv_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '149_drm_mkv_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls',
      cid: 'test',
      inputCodec: 'MKV',
      resolutionProfile: 'UHD_FHD_FHD_HD_HD_SD',
      streamingFormat: 'DASH_HLS',
      outputCodec: 'H264',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: true
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('150_drm_mkv_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls', () => {
  it('150_drm_mkv_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '150_drm_mkv_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls',
      cid: 'test',
      inputCodec: 'MKV',
      resolutionProfile: 'UHD_FHD_FHD_HD_HD_SD',
      streamingFormat: 'DASH_HLS',
      outputCodec: 'H264',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: false
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('151_drm_mkv_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls', () => {
  it('151_drm_mkv_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '151_drm_mkv_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls',
      cid: 'test',
      inputCodec: 'MKV',
      resolutionProfile: 'UHD_FHD_FHD_HD_HD_SD',
      streamingFormat: 'DASH_HLS',
      outputCodec: 'H264',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: true
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('152_drm_mkv_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls', () => {
  it('152_drm_mkv_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '152_drm_mkv_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls',
      cid: 'test',
      inputCodec: 'MKV',
      resolutionProfile: 'UHD_FHD_FHD_HD_HD_SD',
      streamingFormat: 'DASH_HLS',
      outputCodec: 'H264',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: false
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('153_drm_mkv_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls', () => {
  it('153_drm_mkv_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '153_drm_mkv_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls',
      cid: 'test',
      inputCodec: 'MKV',
      resolutionProfile: 'UHD_FHD_FHD_HD_HD_SD',
      streamingFormat: 'DASH_HLS',
      outputCodec: 'H264',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: true
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('154_drm_mkv_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls', () => {
  it('154_drm_mkv_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '154_drm_mkv_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls',
      cid: 'test',
      inputCodec: 'MKV',
      resolutionProfile: 'UHD_FHD_FHD_HD_HD_SD',
      streamingFormat: 'DASH_HLS',
      outputCodec: 'H264',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: false
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('155_drm_mkv_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls', () => {
  it('155_drm_mkv_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '155_drm_mkv_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls',
      cid: 'test',
      inputCodec: 'MKV',
      resolutionProfile: 'UHD_FHD_FHD_HD_HD_SD',
      streamingFormat: 'DASH_HLS',
      outputCodec: 'H264',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: true
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('156_drm_mkv_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls', () => {
  it('156_drm_mkv_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '156_drm_mkv_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls',
      cid: 'test',
      inputCodec: 'MKV',
      resolutionProfile: 'UHD_FHD_FHD_HD_HD_SD',
      streamingFormat: 'DASH_HLS',
      outputCodec: 'H264',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: false
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('157_drm_mkv_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls', () => {
  it('157_drm_mkv_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '157_drm_mkv_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls',
      cid: 'test',
      inputCodec: 'MKV',
      resolutionProfile: 'UHD_FHD_FHD_HD_HD_SD',
      streamingFormat: 'DASH_HLS',
      outputCodec: 'H264',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: true
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('158_drm_mkv_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls', () => {
  it('158_drm_mkv_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '158_drm_mkv_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls',
      cid: 'test',
      inputCodec: 'MKV',
      resolutionProfile: 'UHD_FHD_FHD_HD_HD_SD',
      streamingFormat: 'DASH_HLS',
      outputCodec: 'H264',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: false
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('159_drm_mkv_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls', () => {
  it('159_drm_mkv_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '159_drm_mkv_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls',
      cid: 'test',
      inputCodec: 'MKV',
      resolutionProfile: 'UHD_FHD_FHD_HD_HD_SD',
      streamingFormat: 'DASH_HLS',
      outputCodec: 'H264',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: true
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('160_drm_mkv_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls', () => {
  it('160_drm_mkv_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '160_drm_mkv_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls',
      cid: 'test',
      inputCodec: 'MKV',
      resolutionProfile: 'UHD_FHD_FHD_HD_HD_SD',
      streamingFormat: 'DASH_HLS',
      outputCodec: 'H264',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: false
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('161_drm_h264_h265_uhd_fhd_hd_cmaf', () => {
  it('161_drm_h264_h265_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '161_drm_h264_h265_uhd_fhd_hd_cmaf',
      cid: 'test',
      inputCodec: 'H264',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'CMAF',
      outputCodec: 'H265',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: true
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('162_drm_h264_h265_uhd_fhd_hd_cmaf', () => {
  it('162_drm_h264_h265_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '162_drm_h264_h265_uhd_fhd_hd_cmaf',
      cid: 'test',
      inputCodec: 'H264',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'CMAF',
      outputCodec: 'H265',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: false
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('163_drm_h264_h265_uhd_fhd_hd_cmaf', () => {
  it('163_drm_h264_h265_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '163_drm_h264_h265_uhd_fhd_hd_cmaf',
      cid: 'test',
      inputCodec: 'H264',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'CMAF',
      outputCodec: 'H265',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: true
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('164_drm_h264_h265_uhd_fhd_hd_cmaf', () => {
  it('164_drm_h264_h265_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '164_drm_h264_h265_uhd_fhd_hd_cmaf',
      cid: 'test',
      inputCodec: 'H264',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'CMAF',
      outputCodec: 'H265',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: false
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('165_drm_h264_h265_uhd_fhd_hd_cmaf', () => {
  it('165_drm_h264_h265_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '165_drm_h264_h265_uhd_fhd_hd_cmaf',
      cid: 'test',
      inputCodec: 'H264',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'CMAF',
      outputCodec: 'H265',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: true
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('166_drm_h264_h265_uhd_fhd_hd_cmaf', () => {
  it('166_drm_h264_h265_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '166_drm_h264_h265_uhd_fhd_hd_cmaf',
      cid: 'test',
      inputCodec: 'H264',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'CMAF',
      outputCodec: 'H265',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: false
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('167_drm_h264_h265_uhd_fhd_hd_cmaf', () => {
  it('167_drm_h264_h265_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '167_drm_h264_h265_uhd_fhd_hd_cmaf',
      cid: 'test',
      inputCodec: 'H264',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'CMAF',
      outputCodec: 'H265',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: true
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('168_drm_h264_h265_uhd_fhd_hd_cmaf', () => {
  it('168_drm_h264_h265_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '168_drm_h264_h265_uhd_fhd_hd_cmaf',
      cid: 'test',
      inputCodec: 'H264',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'CMAF',
      outputCodec: 'H265',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: false
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('169_drm_h264_h265_uhd_fhd_hd_cmaf', () => {
  it('169_drm_h264_h265_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '169_drm_h264_h265_uhd_fhd_hd_cmaf',
      cid: 'test',
      inputCodec: 'H264',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'CMAF',
      outputCodec: 'H265',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: true
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('170_drm_h264_h265_uhd_fhd_hd_cmaf', () => {
  it('170_drm_h264_h265_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '170_drm_h264_h265_uhd_fhd_hd_cmaf',
      cid: 'test',
      inputCodec: 'H264',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'CMAF',
      outputCodec: 'H265',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: false
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('171_drm_h264_h265_uhd_fhd_hd_cmaf', () => {
  it('171_drm_h264_h265_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '171_drm_h264_h265_uhd_fhd_hd_cmaf',
      cid: 'test',
      inputCodec: 'H264',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'CMAF',
      outputCodec: 'H265',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: true
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('172_drm_h264_h265_uhd_fhd_hd_cmaf', () => {
  it('172_drm_h264_h265_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '172_drm_h264_h265_uhd_fhd_hd_cmaf',
      cid: 'test',
      inputCodec: 'H264',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'CMAF',
      outputCodec: 'H265',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: false
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('173_drm_h264_h265_uhd_fhd_hd_cmaf', () => {
  it('173_drm_h264_h265_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '173_drm_h264_h265_uhd_fhd_hd_cmaf',
      cid: 'test',
      inputCodec: 'H264',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'CMAF',
      outputCodec: 'H265',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: true
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('174_drm_h264_h265_uhd_fhd_hd_cmaf', () => {
  it('174_drm_h264_h265_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '174_drm_h264_h265_uhd_fhd_hd_cmaf',
      cid: 'test',
      inputCodec: 'H264',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'CMAF',
      outputCodec: 'H265',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: false
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('175_drm_h264_h265_uhd_fhd_hd_cmaf', () => {
  it('175_drm_h264_h265_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '175_drm_h264_h265_uhd_fhd_hd_cmaf',
      cid: 'test',
      inputCodec: 'H264',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'CMAF',
      outputCodec: 'H265',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: true
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('176_drm_h264_h265_uhd_fhd_hd_cmaf', () => {
  it('176_drm_h264_h265_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '176_drm_h264_h265_uhd_fhd_hd_cmaf',
      cid: 'test',
      inputCodec: 'H264',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'CMAF',
      outputCodec: 'H265',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: false
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('177_drm_h264_h265_uhd_fhd_hd_dash_hls', () => {
  it('177_drm_h264_h265_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '177_drm_h264_h265_uhd_fhd_hd_dash_hls',
      cid: 'test',
      inputCodec: 'H264',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'DASH_HLS',
      outputCodec: 'H265',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: true
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('178_drm_h264_h265_uhd_fhd_hd_dash_hls', () => {
  it('178_drm_h264_h265_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '178_drm_h264_h265_uhd_fhd_hd_dash_hls',
      cid: 'test',
      inputCodec: 'H264',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'DASH_HLS',
      outputCodec: 'H265',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: false
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('179_drm_h264_h265_uhd_fhd_hd_dash_hls', () => {
  it('179_drm_h264_h265_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '179_drm_h264_h265_uhd_fhd_hd_dash_hls',
      cid: 'test',
      inputCodec: 'H264',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'DASH_HLS',
      outputCodec: 'H265',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: true
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('180_drm_h264_h265_uhd_fhd_hd_dash_hls', () => {
  it('180_drm_h264_h265_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '180_drm_h264_h265_uhd_fhd_hd_dash_hls',
      cid: 'test',
      inputCodec: 'H264',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'DASH_HLS',
      outputCodec: 'H265',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: false
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('181_drm_h264_h265_uhd_fhd_hd_dash_hls', () => {
  it('181_drm_h264_h265_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '181_drm_h264_h265_uhd_fhd_hd_dash_hls',
      cid: 'test',
      inputCodec: 'H264',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'DASH_HLS',
      outputCodec: 'H265',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: true
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('182_drm_h264_h265_uhd_fhd_hd_dash_hls', () => {
  it('182_drm_h264_h265_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '182_drm_h264_h265_uhd_fhd_hd_dash_hls',
      cid: 'test',
      inputCodec: 'H264',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'DASH_HLS',
      outputCodec: 'H265',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: false
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('183_drm_h264_h265_uhd_fhd_hd_dash_hls', () => {
  it('183_drm_h264_h265_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '183_drm_h264_h265_uhd_fhd_hd_dash_hls',
      cid: 'test',
      inputCodec: 'H264',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'DASH_HLS',
      outputCodec: 'H265',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: true
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('184_drm_h264_h265_uhd_fhd_hd_dash_hls', () => {
  it('184_drm_h264_h265_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '184_drm_h264_h265_uhd_fhd_hd_dash_hls',
      cid: 'test',
      inputCodec: 'H264',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'DASH_HLS',
      outputCodec: 'H265',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: false
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('185_drm_h264_h265_uhd_fhd_hd_dash_hls', () => {
  it('185_drm_h264_h265_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '185_drm_h264_h265_uhd_fhd_hd_dash_hls',
      cid: 'test',
      inputCodec: 'H264',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'DASH_HLS',
      outputCodec: 'H265',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: true
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('186_drm_h264_h265_uhd_fhd_hd_dash_hls', () => {
  it('186_drm_h264_h265_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '186_drm_h264_h265_uhd_fhd_hd_dash_hls',
      cid: 'test',
      inputCodec: 'H264',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'DASH_HLS',
      outputCodec: 'H265',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: false
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('187_drm_h264_h265_uhd_fhd_hd_dash_hls', () => {
  it('187_drm_h264_h265_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '187_drm_h264_h265_uhd_fhd_hd_dash_hls',
      cid: 'test',
      inputCodec: 'H264',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'DASH_HLS',
      outputCodec: 'H265',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: true
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('188_drm_h264_h265_uhd_fhd_hd_dash_hls', () => {
  it('188_drm_h264_h265_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '188_drm_h264_h265_uhd_fhd_hd_dash_hls',
      cid: 'test',
      inputCodec: 'H264',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'DASH_HLS',
      outputCodec: 'H265',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: false
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('189_drm_h264_h265_uhd_fhd_hd_dash_hls', () => {
  it('189_drm_h264_h265_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '189_drm_h264_h265_uhd_fhd_hd_dash_hls',
      cid: 'test',
      inputCodec: 'H264',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'DASH_HLS',
      outputCodec: 'H265',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: true
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('190_drm_h264_h265_uhd_fhd_hd_dash_hls', () => {
  it('190_drm_h264_h265_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '190_drm_h264_h265_uhd_fhd_hd_dash_hls',
      cid: 'test',
      inputCodec: 'H264',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'DASH_HLS',
      outputCodec: 'H265',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: false
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('191_drm_h264_h265_uhd_fhd_hd_dash_hls', () => {
  it('191_drm_h264_h265_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '191_drm_h264_h265_uhd_fhd_hd_dash_hls',
      cid: 'test',
      inputCodec: 'H264',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'DASH_HLS',
      outputCodec: 'H265',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: true
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('192_drm_h264_h265_uhd_fhd_hd_dash_hls', () => {
  it('192_drm_h264_h265_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '192_drm_h264_h265_uhd_fhd_hd_dash_hls',
      cid: 'test',
      inputCodec: 'H264',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'DASH_HLS',
      outputCodec: 'H265',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: false
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('193_drm_h265_h265_uhd_fhd_hd_cmaf', () => {
  it('193_drm_h265_h265_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '193_drm_h265_h265_uhd_fhd_hd_cmaf',
      cid: 'test',
      inputCodec: 'H265',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'CMAF',
      outputCodec: 'H265',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: true
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('194_drm_h265_h265_uhd_fhd_hd_cmaf', () => {
  it('194_drm_h265_h265_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '194_drm_h265_h265_uhd_fhd_hd_cmaf',
      cid: 'test',
      inputCodec: 'H265',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'CMAF',
      outputCodec: 'H265',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: false
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('195_drm_h265_h265_uhd_fhd_hd_cmaf', () => {
  it('195_drm_h265_h265_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '195_drm_h265_h265_uhd_fhd_hd_cmaf',
      cid: 'test',
      inputCodec: 'H265',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'CMAF',
      outputCodec: 'H265',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: true
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('196_drm_h265_h265_uhd_fhd_hd_cmaf', () => {
  it('196_drm_h265_h265_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '196_drm_h265_h265_uhd_fhd_hd_cmaf',
      cid: 'test',
      inputCodec: 'H265',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'CMAF',
      outputCodec: 'H265',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: false
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('197_drm_h265_h265_uhd_fhd_hd_cmaf', () => {
  it('197_drm_h265_h265_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '197_drm_h265_h265_uhd_fhd_hd_cmaf',
      cid: 'test',
      inputCodec: 'H265',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'CMAF',
      outputCodec: 'H265',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: true
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('198_drm_h265_h265_uhd_fhd_hd_cmaf', () => {
  it('198_drm_h265_h265_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '198_drm_h265_h265_uhd_fhd_hd_cmaf',
      cid: 'test',
      inputCodec: 'H265',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'CMAF',
      outputCodec: 'H265',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: false
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('199_drm_h265_h265_uhd_fhd_hd_cmaf', () => {
  it('199_drm_h265_h265_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '199_drm_h265_h265_uhd_fhd_hd_cmaf',
      cid: 'test',
      inputCodec: 'H265',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'CMAF',
      outputCodec: 'H265',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: true
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('200_drm_h265_h265_uhd_fhd_hd_cmaf', () => {
  it('200_drm_h265_h265_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '200_drm_h265_h265_uhd_fhd_hd_cmaf',
      cid: 'test',
      inputCodec: 'H265',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'CMAF',
      outputCodec: 'H265',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: false
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('201_drm_h265_h265_uhd_fhd_hd_cmaf', () => {
  it('201_drm_h265_h265_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '201_drm_h265_h265_uhd_fhd_hd_cmaf',
      cid: 'test',
      inputCodec: 'H265',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'CMAF',
      outputCodec: 'H265',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: true
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('202_drm_h265_h265_uhd_fhd_hd_cmaf', () => {
  it('202_drm_h265_h265_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '202_drm_h265_h265_uhd_fhd_hd_cmaf',
      cid: 'test',
      inputCodec: 'H265',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'CMAF',
      outputCodec: 'H265',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: false
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('203_drm_h265_h265_uhd_fhd_hd_cmaf', () => {
  it('203_drm_h265_h265_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '203_drm_h265_h265_uhd_fhd_hd_cmaf',
      cid: 'test',
      inputCodec: 'H265',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'CMAF',
      outputCodec: 'H265',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: true
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('204_drm_h265_h265_uhd_fhd_hd_cmaf', () => {
  it('204_drm_h265_h265_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '204_drm_h265_h265_uhd_fhd_hd_cmaf',
      cid: 'test',
      inputCodec: 'H265',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'CMAF',
      outputCodec: 'H265',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: false
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('205_drm_h265_h265_uhd_fhd_hd_cmaf', () => {
  it('205_drm_h265_h265_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '205_drm_h265_h265_uhd_fhd_hd_cmaf',
      cid: 'test',
      inputCodec: 'H265',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'CMAF',
      outputCodec: 'H265',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: true
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('206_drm_h265_h265_uhd_fhd_hd_cmaf', () => {
  it('206_drm_h265_h265_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '206_drm_h265_h265_uhd_fhd_hd_cmaf',
      cid: 'test',
      inputCodec: 'H265',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'CMAF',
      outputCodec: 'H265',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: false
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('207_drm_h265_h265_uhd_fhd_hd_cmaf', () => {
  it('207_drm_h265_h265_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '207_drm_h265_h265_uhd_fhd_hd_cmaf',
      cid: 'test',
      inputCodec: 'H265',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'CMAF',
      outputCodec: 'H265',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: true
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('208_drm_h265_h265_uhd_fhd_hd_cmaf', () => {
  it('208_drm_h265_h265_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '208_drm_h265_h265_uhd_fhd_hd_cmaf',
      cid: 'test',
      inputCodec: 'H265',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'CMAF',
      outputCodec: 'H265',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: false
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('209_drm_h265_h265_uhd_fhd_hd_dash_hls', () => {
  it('209_drm_h265_h265_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '209_drm_h265_h265_uhd_fhd_hd_dash_hls',
      cid: 'test',
      inputCodec: 'H265',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'DASH_HLS',
      outputCodec: 'H265',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: true
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('210_drm_h265_h265_uhd_fhd_hd_dash_hls', () => {
  it('210_drm_h265_h265_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '210_drm_h265_h265_uhd_fhd_hd_dash_hls',
      cid: 'test',
      inputCodec: 'H265',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'DASH_HLS',
      outputCodec: 'H265',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: false
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('211_drm_h265_h265_uhd_fhd_hd_dash_hls', () => {
  it('211_drm_h265_h265_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '211_drm_h265_h265_uhd_fhd_hd_dash_hls',
      cid: 'test',
      inputCodec: 'H265',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'DASH_HLS',
      outputCodec: 'H265',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: true
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('212_drm_h265_h265_uhd_fhd_hd_dash_hls', () => {
  it('212_drm_h265_h265_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '212_drm_h265_h265_uhd_fhd_hd_dash_hls',
      cid: 'test',
      inputCodec: 'H265',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'DASH_HLS',
      outputCodec: 'H265',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: false
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('213_drm_h265_h265_uhd_fhd_hd_dash_hls', () => {
  it('213_drm_h265_h265_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '213_drm_h265_h265_uhd_fhd_hd_dash_hls',
      cid: 'test',
      inputCodec: 'H265',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'DASH_HLS',
      outputCodec: 'H265',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: true
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('214_drm_h265_h265_uhd_fhd_hd_dash_hls', () => {
  it('214_drm_h265_h265_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '214_drm_h265_h265_uhd_fhd_hd_dash_hls',
      cid: 'test',
      inputCodec: 'H265',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'DASH_HLS',
      outputCodec: 'H265',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: false
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('215_drm_h265_h265_uhd_fhd_hd_dash_hls', () => {
  it('215_drm_h265_h265_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '215_drm_h265_h265_uhd_fhd_hd_dash_hls',
      cid: 'test',
      inputCodec: 'H265',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'DASH_HLS',
      outputCodec: 'H265',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: true
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('216_drm_h265_h265_uhd_fhd_hd_dash_hls', () => {
  it('216_drm_h265_h265_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '216_drm_h265_h265_uhd_fhd_hd_dash_hls',
      cid: 'test',
      inputCodec: 'H265',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'DASH_HLS',
      outputCodec: 'H265',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: false
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('217_drm_h265_h265_uhd_fhd_hd_dash_hls', () => {
  it('217_drm_h265_h265_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '217_drm_h265_h265_uhd_fhd_hd_dash_hls',
      cid: 'test',
      inputCodec: 'H265',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'DASH_HLS',
      outputCodec: 'H265',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: true
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('218_drm_h265_h265_uhd_fhd_hd_dash_hls', () => {
  it('218_drm_h265_h265_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '218_drm_h265_h265_uhd_fhd_hd_dash_hls',
      cid: 'test',
      inputCodec: 'H265',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'DASH_HLS',
      outputCodec: 'H265',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: false
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('219_drm_h265_h265_uhd_fhd_hd_dash_hls', () => {
  it('219_drm_h265_h265_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '219_drm_h265_h265_uhd_fhd_hd_dash_hls',
      cid: 'test',
      inputCodec: 'H265',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'DASH_HLS',
      outputCodec: 'H265',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: true
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('220_drm_h265_h265_uhd_fhd_hd_dash_hls', () => {
  it('220_drm_h265_h265_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '220_drm_h265_h265_uhd_fhd_hd_dash_hls',
      cid: 'test',
      inputCodec: 'H265',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'DASH_HLS',
      outputCodec: 'H265',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: false
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('221_drm_h265_h265_uhd_fhd_hd_dash_hls', () => {
  it('221_drm_h265_h265_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '221_drm_h265_h265_uhd_fhd_hd_dash_hls',
      cid: 'test',
      inputCodec: 'H265',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'DASH_HLS',
      outputCodec: 'H265',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: true
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('222_drm_h265_h265_uhd_fhd_hd_dash_hls', () => {
  it('222_drm_h265_h265_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '222_drm_h265_h265_uhd_fhd_hd_dash_hls',
      cid: 'test',
      inputCodec: 'H265',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'DASH_HLS',
      outputCodec: 'H265',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: false
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('223_drm_h265_h265_uhd_fhd_hd_dash_hls', () => {
  it('223_drm_h265_h265_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '223_drm_h265_h265_uhd_fhd_hd_dash_hls',
      cid: 'test',
      inputCodec: 'H265',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'DASH_HLS',
      outputCodec: 'H265',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: true
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('224_drm_h265_h265_uhd_fhd_hd_dash_hls', () => {
  it('224_drm_h265_h265_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '224_drm_h265_h265_uhd_fhd_hd_dash_hls',
      cid: 'test',
      inputCodec: 'H265',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'DASH_HLS',
      outputCodec: 'H265',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: false
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('225_drm_prores_h265_uhd_fhd_hd_cmaf', () => {
  it('225_drm_prores_h265_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '225_drm_prores_h265_uhd_fhd_hd_cmaf',
      cid: 'test',
      inputCodec: 'PRORES',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'CMAF',
      outputCodec: 'H265',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: true
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('226_drm_prores_h265_uhd_fhd_hd_cmaf', () => {
  it('226_drm_prores_h265_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '226_drm_prores_h265_uhd_fhd_hd_cmaf',
      cid: 'test',
      inputCodec: 'PRORES',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'CMAF',
      outputCodec: 'H265',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: false
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('227_drm_prores_h265_uhd_fhd_hd_cmaf', () => {
  it('227_drm_prores_h265_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '227_drm_prores_h265_uhd_fhd_hd_cmaf',
      cid: 'test',
      inputCodec: 'PRORES',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'CMAF',
      outputCodec: 'H265',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: true
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('228_drm_prores_h265_uhd_fhd_hd_cmaf', () => {
  it('228_drm_prores_h265_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '228_drm_prores_h265_uhd_fhd_hd_cmaf',
      cid: 'test',
      inputCodec: 'PRORES',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'CMAF',
      outputCodec: 'H265',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: false
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('229_drm_prores_h265_uhd_fhd_hd_cmaf', () => {
  it('229_drm_prores_h265_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '229_drm_prores_h265_uhd_fhd_hd_cmaf',
      cid: 'test',
      inputCodec: 'PRORES',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'CMAF',
      outputCodec: 'H265',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: true
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('230_drm_prores_h265_uhd_fhd_hd_cmaf', () => {
  it('230_drm_prores_h265_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '230_drm_prores_h265_uhd_fhd_hd_cmaf',
      cid: 'test',
      inputCodec: 'PRORES',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'CMAF',
      outputCodec: 'H265',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: false
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('231_drm_prores_h265_uhd_fhd_hd_cmaf', () => {
  it('231_drm_prores_h265_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '231_drm_prores_h265_uhd_fhd_hd_cmaf',
      cid: 'test',
      inputCodec: 'PRORES',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'CMAF',
      outputCodec: 'H265',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: true
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('232_drm_prores_h265_uhd_fhd_hd_cmaf', () => {
  it('232_drm_prores_h265_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '232_drm_prores_h265_uhd_fhd_hd_cmaf',
      cid: 'test',
      inputCodec: 'PRORES',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'CMAF',
      outputCodec: 'H265',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: false
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('233_drm_prores_h265_uhd_fhd_hd_cmaf', () => {
  it('233_drm_prores_h265_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '233_drm_prores_h265_uhd_fhd_hd_cmaf',
      cid: 'test',
      inputCodec: 'PRORES',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'CMAF',
      outputCodec: 'H265',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: true
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('234_drm_prores_h265_uhd_fhd_hd_cmaf', () => {
  it('234_drm_prores_h265_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '234_drm_prores_h265_uhd_fhd_hd_cmaf',
      cid: 'test',
      inputCodec: 'PRORES',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'CMAF',
      outputCodec: 'H265',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: false
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('235_drm_prores_h265_uhd_fhd_hd_cmaf', () => {
  it('235_drm_prores_h265_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '235_drm_prores_h265_uhd_fhd_hd_cmaf',
      cid: 'test',
      inputCodec: 'PRORES',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'CMAF',
      outputCodec: 'H265',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: true
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('236_drm_prores_h265_uhd_fhd_hd_cmaf', () => {
  it('236_drm_prores_h265_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '236_drm_prores_h265_uhd_fhd_hd_cmaf',
      cid: 'test',
      inputCodec: 'PRORES',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'CMAF',
      outputCodec: 'H265',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: false
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('237_drm_prores_h265_uhd_fhd_hd_cmaf', () => {
  it('237_drm_prores_h265_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '237_drm_prores_h265_uhd_fhd_hd_cmaf',
      cid: 'test',
      inputCodec: 'PRORES',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'CMAF',
      outputCodec: 'H265',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: true
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('238_drm_prores_h265_uhd_fhd_hd_cmaf', () => {
  it('238_drm_prores_h265_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '238_drm_prores_h265_uhd_fhd_hd_cmaf',
      cid: 'test',
      inputCodec: 'PRORES',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'CMAF',
      outputCodec: 'H265',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: false
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('239_drm_prores_h265_uhd_fhd_hd_cmaf', () => {
  it('239_drm_prores_h265_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '239_drm_prores_h265_uhd_fhd_hd_cmaf',
      cid: 'test',
      inputCodec: 'PRORES',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'CMAF',
      outputCodec: 'H265',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: true
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('240_drm_prores_h265_uhd_fhd_hd_cmaf', () => {
  it('240_drm_prores_h265_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '240_drm_prores_h265_uhd_fhd_hd_cmaf',
      cid: 'test',
      inputCodec: 'PRORES',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'CMAF',
      outputCodec: 'H265',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: false
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('241_drm_prores_h265_uhd_fhd_hd_dash_hls', () => {
  it('241_drm_prores_h265_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '241_drm_prores_h265_uhd_fhd_hd_dash_hls',
      cid: 'test',
      inputCodec: 'PRORES',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'DASH_HLS',
      outputCodec: 'H265',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: true
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('242_drm_prores_h265_uhd_fhd_hd_dash_hls', () => {
  it('242_drm_prores_h265_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '242_drm_prores_h265_uhd_fhd_hd_dash_hls',
      cid: 'test',
      inputCodec: 'PRORES',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'DASH_HLS',
      outputCodec: 'H265',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: false
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('243_drm_prores_h265_uhd_fhd_hd_dash_hls', () => {
  it('243_drm_prores_h265_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '243_drm_prores_h265_uhd_fhd_hd_dash_hls',
      cid: 'test',
      inputCodec: 'PRORES',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'DASH_HLS',
      outputCodec: 'H265',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: true
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('244_drm_prores_h265_uhd_fhd_hd_dash_hls', () => {
  it('244_drm_prores_h265_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '244_drm_prores_h265_uhd_fhd_hd_dash_hls',
      cid: 'test',
      inputCodec: 'PRORES',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'DASH_HLS',
      outputCodec: 'H265',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: false
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('245_drm_prores_h265_uhd_fhd_hd_dash_hls', () => {
  it('245_drm_prores_h265_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '245_drm_prores_h265_uhd_fhd_hd_dash_hls',
      cid: 'test',
      inputCodec: 'PRORES',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'DASH_HLS',
      outputCodec: 'H265',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: true
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('246_drm_prores_h265_uhd_fhd_hd_dash_hls', () => {
  it('246_drm_prores_h265_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '246_drm_prores_h265_uhd_fhd_hd_dash_hls',
      cid: 'test',
      inputCodec: 'PRORES',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'DASH_HLS',
      outputCodec: 'H265',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: false
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('247_drm_prores_h265_uhd_fhd_hd_dash_hls', () => {
  it('247_drm_prores_h265_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '247_drm_prores_h265_uhd_fhd_hd_dash_hls',
      cid: 'test',
      inputCodec: 'PRORES',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'DASH_HLS',
      outputCodec: 'H265',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: true
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('248_drm_prores_h265_uhd_fhd_hd_dash_hls', () => {
  it('248_drm_prores_h265_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '248_drm_prores_h265_uhd_fhd_hd_dash_hls',
      cid: 'test',
      inputCodec: 'PRORES',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'DASH_HLS',
      outputCodec: 'H265',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: false
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('249_drm_prores_h265_uhd_fhd_hd_dash_hls', () => {
  it('249_drm_prores_h265_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '249_drm_prores_h265_uhd_fhd_hd_dash_hls',
      cid: 'test',
      inputCodec: 'PRORES',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'DASH_HLS',
      outputCodec: 'H265',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: true
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('250_drm_prores_h265_uhd_fhd_hd_dash_hls', () => {
  it('250_drm_prores_h265_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '250_drm_prores_h265_uhd_fhd_hd_dash_hls',
      cid: 'test',
      inputCodec: 'PRORES',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'DASH_HLS',
      outputCodec: 'H265',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: false
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('251_drm_prores_h265_uhd_fhd_hd_dash_hls', () => {
  it('251_drm_prores_h265_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '251_drm_prores_h265_uhd_fhd_hd_dash_hls',
      cid: 'test',
      inputCodec: 'PRORES',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'DASH_HLS',
      outputCodec: 'H265',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: true
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('252_drm_prores_h265_uhd_fhd_hd_dash_hls', () => {
  it('252_drm_prores_h265_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '252_drm_prores_h265_uhd_fhd_hd_dash_hls',
      cid: 'test',
      inputCodec: 'PRORES',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'DASH_HLS',
      outputCodec: 'H265',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: false
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('253_drm_prores_h265_uhd_fhd_hd_dash_hls', () => {
  it('253_drm_prores_h265_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '253_drm_prores_h265_uhd_fhd_hd_dash_hls',
      cid: 'test',
      inputCodec: 'PRORES',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'DASH_HLS',
      outputCodec: 'H265',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: true
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('254_drm_prores_h265_uhd_fhd_hd_dash_hls', () => {
  it('254_drm_prores_h265_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '254_drm_prores_h265_uhd_fhd_hd_dash_hls',
      cid: 'test',
      inputCodec: 'PRORES',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'DASH_HLS',
      outputCodec: 'H265',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: false
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('255_drm_prores_h265_uhd_fhd_hd_dash_hls', () => {
  it('255_drm_prores_h265_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '255_drm_prores_h265_uhd_fhd_hd_dash_hls',
      cid: 'test',
      inputCodec: 'PRORES',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'DASH_HLS',
      outputCodec: 'H265',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: true
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('256_drm_prores_h265_uhd_fhd_hd_dash_hls', () => {
  it('256_drm_prores_h265_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '256_drm_prores_h265_uhd_fhd_hd_dash_hls',
      cid: 'test',
      inputCodec: 'PRORES',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'DASH_HLS',
      outputCodec: 'H265',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: false
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('257_drm_xdcam_h265_uhd_fhd_hd_cmaf', () => {
  it('257_drm_xdcam_h265_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '257_drm_xdcam_h265_uhd_fhd_hd_cmaf',
      cid: 'test',
      inputCodec: 'XDCAM',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'CMAF',
      outputCodec: 'H265',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: true
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('258_drm_xdcam_h265_uhd_fhd_hd_cmaf', () => {
  it('258_drm_xdcam_h265_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '258_drm_xdcam_h265_uhd_fhd_hd_cmaf',
      cid: 'test',
      inputCodec: 'XDCAM',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'CMAF',
      outputCodec: 'H265',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: false
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('259_drm_xdcam_h265_uhd_fhd_hd_cmaf', () => {
  it('259_drm_xdcam_h265_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '259_drm_xdcam_h265_uhd_fhd_hd_cmaf',
      cid: 'test',
      inputCodec: 'XDCAM',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'CMAF',
      outputCodec: 'H265',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: true
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('260_drm_xdcam_h265_uhd_fhd_hd_cmaf', () => {
  it('260_drm_xdcam_h265_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '260_drm_xdcam_h265_uhd_fhd_hd_cmaf',
      cid: 'test',
      inputCodec: 'XDCAM',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'CMAF',
      outputCodec: 'H265',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: false
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('261_drm_xdcam_h265_uhd_fhd_hd_cmaf', () => {
  it('261_drm_xdcam_h265_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '261_drm_xdcam_h265_uhd_fhd_hd_cmaf',
      cid: 'test',
      inputCodec: 'XDCAM',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'CMAF',
      outputCodec: 'H265',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: true
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('262_drm_xdcam_h265_uhd_fhd_hd_cmaf', () => {
  it('262_drm_xdcam_h265_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '262_drm_xdcam_h265_uhd_fhd_hd_cmaf',
      cid: 'test',
      inputCodec: 'XDCAM',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'CMAF',
      outputCodec: 'H265',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: false
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('263_drm_xdcam_h265_uhd_fhd_hd_cmaf', () => {
  it('263_drm_xdcam_h265_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '263_drm_xdcam_h265_uhd_fhd_hd_cmaf',
      cid: 'test',
      inputCodec: 'XDCAM',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'CMAF',
      outputCodec: 'H265',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: true
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('264_drm_xdcam_h265_uhd_fhd_hd_cmaf', () => {
  it('264_drm_xdcam_h265_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '264_drm_xdcam_h265_uhd_fhd_hd_cmaf',
      cid: 'test',
      inputCodec: 'XDCAM',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'CMAF',
      outputCodec: 'H265',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: false
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('265_drm_xdcam_h265_uhd_fhd_hd_cmaf', () => {
  it('265_drm_xdcam_h265_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '265_drm_xdcam_h265_uhd_fhd_hd_cmaf',
      cid: 'test',
      inputCodec: 'XDCAM',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'CMAF',
      outputCodec: 'H265',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: true
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('266_drm_xdcam_h265_uhd_fhd_hd_cmaf', () => {
  it('266_drm_xdcam_h265_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '266_drm_xdcam_h265_uhd_fhd_hd_cmaf',
      cid: 'test',
      inputCodec: 'XDCAM',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'CMAF',
      outputCodec: 'H265',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: false
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('267_drm_xdcam_h265_uhd_fhd_hd_cmaf', () => {
  it('267_drm_xdcam_h265_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '267_drm_xdcam_h265_uhd_fhd_hd_cmaf',
      cid: 'test',
      inputCodec: 'XDCAM',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'CMAF',
      outputCodec: 'H265',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: true
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('268_drm_xdcam_h265_uhd_fhd_hd_cmaf', () => {
  it('268_drm_xdcam_h265_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '268_drm_xdcam_h265_uhd_fhd_hd_cmaf',
      cid: 'test',
      inputCodec: 'XDCAM',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'CMAF',
      outputCodec: 'H265',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: false
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('269_drm_xdcam_h265_uhd_fhd_hd_cmaf', () => {
  it('269_drm_xdcam_h265_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '269_drm_xdcam_h265_uhd_fhd_hd_cmaf',
      cid: 'test',
      inputCodec: 'XDCAM',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'CMAF',
      outputCodec: 'H265',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: true
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('270_drm_xdcam_h265_uhd_fhd_hd_cmaf', () => {
  it('270_drm_xdcam_h265_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '270_drm_xdcam_h265_uhd_fhd_hd_cmaf',
      cid: 'test',
      inputCodec: 'XDCAM',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'CMAF',
      outputCodec: 'H265',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: false
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('271_drm_xdcam_h265_uhd_fhd_hd_cmaf', () => {
  it('271_drm_xdcam_h265_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '271_drm_xdcam_h265_uhd_fhd_hd_cmaf',
      cid: 'test',
      inputCodec: 'XDCAM',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'CMAF',
      outputCodec: 'H265',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: true
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('272_drm_xdcam_h265_uhd_fhd_hd_cmaf', () => {
  it('272_drm_xdcam_h265_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '272_drm_xdcam_h265_uhd_fhd_hd_cmaf',
      cid: 'test',
      inputCodec: 'XDCAM',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'CMAF',
      outputCodec: 'H265',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: false
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('273_drm_xdcam_h265_uhd_fhd_hd_dash_hls', () => {
  it('273_drm_xdcam_h265_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '273_drm_xdcam_h265_uhd_fhd_hd_dash_hls',
      cid: 'test',
      inputCodec: 'XDCAM',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'DASH_HLS',
      outputCodec: 'H265',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: true
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('274_drm_xdcam_h265_uhd_fhd_hd_dash_hls', () => {
  it('274_drm_xdcam_h265_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '274_drm_xdcam_h265_uhd_fhd_hd_dash_hls',
      cid: 'test',
      inputCodec: 'XDCAM',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'DASH_HLS',
      outputCodec: 'H265',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: false
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('275_drm_xdcam_h265_uhd_fhd_hd_dash_hls', () => {
  it('275_drm_xdcam_h265_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '275_drm_xdcam_h265_uhd_fhd_hd_dash_hls',
      cid: 'test',
      inputCodec: 'XDCAM',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'DASH_HLS',
      outputCodec: 'H265',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: true
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('276_drm_xdcam_h265_uhd_fhd_hd_dash_hls', () => {
  it('276_drm_xdcam_h265_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '276_drm_xdcam_h265_uhd_fhd_hd_dash_hls',
      cid: 'test',
      inputCodec: 'XDCAM',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'DASH_HLS',
      outputCodec: 'H265',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: false
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('277_drm_xdcam_h265_uhd_fhd_hd_dash_hls', () => {
  it('277_drm_xdcam_h265_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '277_drm_xdcam_h265_uhd_fhd_hd_dash_hls',
      cid: 'test',
      inputCodec: 'XDCAM',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'DASH_HLS',
      outputCodec: 'H265',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: true
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('278_drm_xdcam_h265_uhd_fhd_hd_dash_hls', () => {
  it('278_drm_xdcam_h265_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '278_drm_xdcam_h265_uhd_fhd_hd_dash_hls',
      cid: 'test',
      inputCodec: 'XDCAM',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'DASH_HLS',
      outputCodec: 'H265',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: false
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('279_drm_xdcam_h265_uhd_fhd_hd_dash_hls', () => {
  it('279_drm_xdcam_h265_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '279_drm_xdcam_h265_uhd_fhd_hd_dash_hls',
      cid: 'test',
      inputCodec: 'XDCAM',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'DASH_HLS',
      outputCodec: 'H265',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: true
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('280_drm_xdcam_h265_uhd_fhd_hd_dash_hls', () => {
  it('280_drm_xdcam_h265_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '280_drm_xdcam_h265_uhd_fhd_hd_dash_hls',
      cid: 'test',
      inputCodec: 'XDCAM',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'DASH_HLS',
      outputCodec: 'H265',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: false
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('281_drm_xdcam_h265_uhd_fhd_hd_dash_hls', () => {
  it('281_drm_xdcam_h265_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '281_drm_xdcam_h265_uhd_fhd_hd_dash_hls',
      cid: 'test',
      inputCodec: 'XDCAM',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'DASH_HLS',
      outputCodec: 'H265',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: true
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('282_drm_xdcam_h265_uhd_fhd_hd_dash_hls', () => {
  it('282_drm_xdcam_h265_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '282_drm_xdcam_h265_uhd_fhd_hd_dash_hls',
      cid: 'test',
      inputCodec: 'XDCAM',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'DASH_HLS',
      outputCodec: 'H265',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: false
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('283_drm_xdcam_h265_uhd_fhd_hd_dash_hls', () => {
  it('283_drm_xdcam_h265_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '283_drm_xdcam_h265_uhd_fhd_hd_dash_hls',
      cid: 'test',
      inputCodec: 'XDCAM',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'DASH_HLS',
      outputCodec: 'H265',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: true
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('284_drm_xdcam_h265_uhd_fhd_hd_dash_hls', () => {
  it('284_drm_xdcam_h265_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '284_drm_xdcam_h265_uhd_fhd_hd_dash_hls',
      cid: 'test',
      inputCodec: 'XDCAM',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'DASH_HLS',
      outputCodec: 'H265',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: false
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('285_drm_xdcam_h265_uhd_fhd_hd_dash_hls', () => {
  it('285_drm_xdcam_h265_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '285_drm_xdcam_h265_uhd_fhd_hd_dash_hls',
      cid: 'test',
      inputCodec: 'XDCAM',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'DASH_HLS',
      outputCodec: 'H265',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: true
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('286_drm_xdcam_h265_uhd_fhd_hd_dash_hls', () => {
  it('286_drm_xdcam_h265_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '286_drm_xdcam_h265_uhd_fhd_hd_dash_hls',
      cid: 'test',
      inputCodec: 'XDCAM',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'DASH_HLS',
      outputCodec: 'H265',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: false
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('287_drm_xdcam_h265_uhd_fhd_hd_dash_hls', () => {
  it('287_drm_xdcam_h265_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '287_drm_xdcam_h265_uhd_fhd_hd_dash_hls',
      cid: 'test',
      inputCodec: 'XDCAM',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'DASH_HLS',
      outputCodec: 'H265',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: true
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('288_drm_xdcam_h265_uhd_fhd_hd_dash_hls', () => {
  it('288_drm_xdcam_h265_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '288_drm_xdcam_h265_uhd_fhd_hd_dash_hls',
      cid: 'test',
      inputCodec: 'XDCAM',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'DASH_HLS',
      outputCodec: 'H265',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: false
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('289_drm_mkv_h265_uhd_fhd_hd_cmaf', () => {
  it('289_drm_mkv_h265_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '289_drm_mkv_h265_uhd_fhd_hd_cmaf',
      cid: 'test',
      inputCodec: 'MKV',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'CMAF',
      outputCodec: 'H265',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: true
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('290_drm_mkv_h265_uhd_fhd_hd_cmaf', () => {
  it('290_drm_mkv_h265_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '290_drm_mkv_h265_uhd_fhd_hd_cmaf',
      cid: 'test',
      inputCodec: 'MKV',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'CMAF',
      outputCodec: 'H265',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: false
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('291_drm_mkv_h265_uhd_fhd_hd_cmaf', () => {
  it('291_drm_mkv_h265_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '291_drm_mkv_h265_uhd_fhd_hd_cmaf',
      cid: 'test',
      inputCodec: 'MKV',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'CMAF',
      outputCodec: 'H265',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: true
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('292_drm_mkv_h265_uhd_fhd_hd_cmaf', () => {
  it('292_drm_mkv_h265_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '292_drm_mkv_h265_uhd_fhd_hd_cmaf',
      cid: 'test',
      inputCodec: 'MKV',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'CMAF',
      outputCodec: 'H265',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: false
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('293_drm_mkv_h265_uhd_fhd_hd_cmaf', () => {
  it('293_drm_mkv_h265_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '293_drm_mkv_h265_uhd_fhd_hd_cmaf',
      cid: 'test',
      inputCodec: 'MKV',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'CMAF',
      outputCodec: 'H265',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: true
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('294_drm_mkv_h265_uhd_fhd_hd_cmaf', () => {
  it('294_drm_mkv_h265_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '294_drm_mkv_h265_uhd_fhd_hd_cmaf',
      cid: 'test',
      inputCodec: 'MKV',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'CMAF',
      outputCodec: 'H265',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: false
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('295_drm_mkv_h265_uhd_fhd_hd_cmaf', () => {
  it('295_drm_mkv_h265_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '295_drm_mkv_h265_uhd_fhd_hd_cmaf',
      cid: 'test',
      inputCodec: 'MKV',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'CMAF',
      outputCodec: 'H265',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: true
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('296_drm_mkv_h265_uhd_fhd_hd_cmaf', () => {
  it('296_drm_mkv_h265_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '296_drm_mkv_h265_uhd_fhd_hd_cmaf',
      cid: 'test',
      inputCodec: 'MKV',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'CMAF',
      outputCodec: 'H265',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: false
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('297_drm_mkv_h265_uhd_fhd_hd_cmaf', () => {
  it('297_drm_mkv_h265_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '297_drm_mkv_h265_uhd_fhd_hd_cmaf',
      cid: 'test',
      inputCodec: 'MKV',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'CMAF',
      outputCodec: 'H265',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: true
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('298_drm_mkv_h265_uhd_fhd_hd_cmaf', () => {
  it('298_drm_mkv_h265_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '298_drm_mkv_h265_uhd_fhd_hd_cmaf',
      cid: 'test',
      inputCodec: 'MKV',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'CMAF',
      outputCodec: 'H265',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: false
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('299_drm_mkv_h265_uhd_fhd_hd_cmaf', () => {
  it('299_drm_mkv_h265_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '299_drm_mkv_h265_uhd_fhd_hd_cmaf',
      cid: 'test',
      inputCodec: 'MKV',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'CMAF',
      outputCodec: 'H265',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: true
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('300_drm_mkv_h265_uhd_fhd_hd_cmaf', () => {
  it('300_drm_mkv_h265_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '300_drm_mkv_h265_uhd_fhd_hd_cmaf',
      cid: 'test',
      inputCodec: 'MKV',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'CMAF',
      outputCodec: 'H265',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: false
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('301_drm_mkv_h265_uhd_fhd_hd_cmaf', () => {
  it('301_drm_mkv_h265_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '301_drm_mkv_h265_uhd_fhd_hd_cmaf',
      cid: 'test',
      inputCodec: 'MKV',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'CMAF',
      outputCodec: 'H265',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: true
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('302_drm_mkv_h265_uhd_fhd_hd_cmaf', () => {
  it('302_drm_mkv_h265_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '302_drm_mkv_h265_uhd_fhd_hd_cmaf',
      cid: 'test',
      inputCodec: 'MKV',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'CMAF',
      outputCodec: 'H265',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: false
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('303_drm_mkv_h265_uhd_fhd_hd_cmaf', () => {
  it('303_drm_mkv_h265_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '303_drm_mkv_h265_uhd_fhd_hd_cmaf',
      cid: 'test',
      inputCodec: 'MKV',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'CMAF',
      outputCodec: 'H265',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: true
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('304_drm_mkv_h265_uhd_fhd_hd_cmaf', () => {
  it('304_drm_mkv_h265_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '304_drm_mkv_h265_uhd_fhd_hd_cmaf',
      cid: 'test',
      inputCodec: 'MKV',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'CMAF',
      outputCodec: 'H265',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: false
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('305_drm_mkv_h265_uhd_fhd_hd_dash_hls', () => {
  it('305_drm_mkv_h265_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '305_drm_mkv_h265_uhd_fhd_hd_dash_hls',
      cid: 'test',
      inputCodec: 'MKV',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'DASH_HLS',
      outputCodec: 'H265',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: true
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('306_drm_mkv_h265_uhd_fhd_hd_dash_hls', () => {
  it('306_drm_mkv_h265_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '306_drm_mkv_h265_uhd_fhd_hd_dash_hls',
      cid: 'test',
      inputCodec: 'MKV',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'DASH_HLS',
      outputCodec: 'H265',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: false
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('307_drm_mkv_h265_uhd_fhd_hd_dash_hls', () => {
  it('307_drm_mkv_h265_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '307_drm_mkv_h265_uhd_fhd_hd_dash_hls',
      cid: 'test',
      inputCodec: 'MKV',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'DASH_HLS',
      outputCodec: 'H265',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: true
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('308_drm_mkv_h265_uhd_fhd_hd_dash_hls', () => {
  it('308_drm_mkv_h265_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '308_drm_mkv_h265_uhd_fhd_hd_dash_hls',
      cid: 'test',
      inputCodec: 'MKV',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'DASH_HLS',
      outputCodec: 'H265',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: false
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('309_drm_mkv_h265_uhd_fhd_hd_dash_hls', () => {
  it('309_drm_mkv_h265_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '309_drm_mkv_h265_uhd_fhd_hd_dash_hls',
      cid: 'test',
      inputCodec: 'MKV',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'DASH_HLS',
      outputCodec: 'H265',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: true
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('310_drm_mkv_h265_uhd_fhd_hd_dash_hls', () => {
  it('310_drm_mkv_h265_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '310_drm_mkv_h265_uhd_fhd_hd_dash_hls',
      cid: 'test',
      inputCodec: 'MKV',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'DASH_HLS',
      outputCodec: 'H265',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: false
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('311_drm_mkv_h265_uhd_fhd_hd_dash_hls', () => {
  it('311_drm_mkv_h265_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '311_drm_mkv_h265_uhd_fhd_hd_dash_hls',
      cid: 'test',
      inputCodec: 'MKV',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'DASH_HLS',
      outputCodec: 'H265',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: true
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('312_drm_mkv_h265_uhd_fhd_hd_dash_hls', () => {
  it('312_drm_mkv_h265_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '312_drm_mkv_h265_uhd_fhd_hd_dash_hls',
      cid: 'test',
      inputCodec: 'MKV',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'DASH_HLS',
      outputCodec: 'H265',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: false
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('313_drm_mkv_h265_uhd_fhd_hd_dash_hls', () => {
  it('313_drm_mkv_h265_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '313_drm_mkv_h265_uhd_fhd_hd_dash_hls',
      cid: 'test',
      inputCodec: 'MKV',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'DASH_HLS',
      outputCodec: 'H265',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: true
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('314_drm_mkv_h265_uhd_fhd_hd_dash_hls', () => {
  it('314_drm_mkv_h265_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '314_drm_mkv_h265_uhd_fhd_hd_dash_hls',
      cid: 'test',
      inputCodec: 'MKV',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'DASH_HLS',
      outputCodec: 'H265',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: false
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('315_drm_mkv_h265_uhd_fhd_hd_dash_hls', () => {
  it('315_drm_mkv_h265_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '315_drm_mkv_h265_uhd_fhd_hd_dash_hls',
      cid: 'test',
      inputCodec: 'MKV',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'DASH_HLS',
      outputCodec: 'H265',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: true
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('316_drm_mkv_h265_uhd_fhd_hd_dash_hls', () => {
  it('316_drm_mkv_h265_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '316_drm_mkv_h265_uhd_fhd_hd_dash_hls',
      cid: 'test',
      inputCodec: 'MKV',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'DASH_HLS',
      outputCodec: 'H265',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: false
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('317_drm_mkv_h265_uhd_fhd_hd_dash_hls', () => {
  it('317_drm_mkv_h265_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '317_drm_mkv_h265_uhd_fhd_hd_dash_hls',
      cid: 'test',
      inputCodec: 'MKV',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'DASH_HLS',
      outputCodec: 'H265',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: true
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('318_drm_mkv_h265_uhd_fhd_hd_dash_hls', () => {
  it('318_drm_mkv_h265_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '318_drm_mkv_h265_uhd_fhd_hd_dash_hls',
      cid: 'test',
      inputCodec: 'MKV',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'DASH_HLS',
      outputCodec: 'H265',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: false
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('319_drm_mkv_h265_uhd_fhd_hd_dash_hls', () => {
  it('319_drm_mkv_h265_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '319_drm_mkv_h265_uhd_fhd_hd_dash_hls',
      cid: 'test',
      inputCodec: 'MKV',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'DASH_HLS',
      outputCodec: 'H265',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: true
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('320_drm_mkv_h265_uhd_fhd_hd_dash_hls', () => {
  it('320_drm_mkv_h265_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '320_drm_mkv_h265_uhd_fhd_hd_dash_hls',
      cid: 'test',
      inputCodec: 'MKV',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'DASH_HLS',
      outputCodec: 'H265',
      type: 'DRM',
      aspectRatio: true,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: false
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('321_drm_fwm_h264_h264_uhd_fhd_hd_cmaf', () => {
  it('321_drm_fwm_h264_h264_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '321_drm_fwm_h264_h264_uhd_fhd_hd_cmaf',
      cid: 'test',
      inputCodec: 'H264',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'CMAF',
      outputCodec: 'H264',
      type: 'DRM_FWM',
      aspectRatio: false,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: true
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('322_drm_fwm_h264_h264_uhd_fhd_hd_cmaf', () => {
  it('322_drm_fwm_h264_h264_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '322_drm_fwm_h264_h264_uhd_fhd_hd_cmaf',
      cid: 'test',
      inputCodec: 'H264',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'CMAF',
      outputCodec: 'H264',
      type: 'DRM_FWM',
      aspectRatio: false,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: false
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('323_drm_fwm_h264_h264_uhd_fhd_hd_cmaf', () => {
  it('323_drm_fwm_h264_h264_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '323_drm_fwm_h264_h264_uhd_fhd_hd_cmaf',
      cid: 'test',
      inputCodec: 'H264',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'CMAF',
      outputCodec: 'H264',
      type: 'DRM_FWM',
      aspectRatio: false,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: true
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('324_drm_fwm_h264_h264_uhd_fhd_hd_cmaf', () => {
  it('324_drm_fwm_h264_h264_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '324_drm_fwm_h264_h264_uhd_fhd_hd_cmaf',
      cid: 'test',
      inputCodec: 'H264',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'CMAF',
      outputCodec: 'H264',
      type: 'DRM_FWM',
      aspectRatio: false,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: false
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('325_drm_fwm_h264_h264_uhd_fhd_hd_cmaf', () => {
  it('325_drm_fwm_h264_h264_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '325_drm_fwm_h264_h264_uhd_fhd_hd_cmaf',
      cid: 'test',
      inputCodec: 'H264',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'CMAF',
      outputCodec: 'H264',
      type: 'DRM_FWM',
      aspectRatio: false,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: true
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('326_drm_fwm_h264_h264_uhd_fhd_hd_cmaf', () => {
  it('326_drm_fwm_h264_h264_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '326_drm_fwm_h264_h264_uhd_fhd_hd_cmaf',
      cid: 'test',
      inputCodec: 'H264',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'CMAF',
      outputCodec: 'H264',
      type: 'DRM_FWM',
      aspectRatio: false,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: false
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('327_drm_fwm_h264_h264_uhd_fhd_hd_cmaf', () => {
  it('327_drm_fwm_h264_h264_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '327_drm_fwm_h264_h264_uhd_fhd_hd_cmaf',
      cid: 'test',
      inputCodec: 'H264',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'CMAF',
      outputCodec: 'H264',
      type: 'DRM_FWM',
      aspectRatio: false,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: true
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('328_drm_fwm_h264_h264_uhd_fhd_hd_cmaf', () => {
  it('328_drm_fwm_h264_h264_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '328_drm_fwm_h264_h264_uhd_fhd_hd_cmaf',
      cid: 'test',
      inputCodec: 'H264',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'CMAF',
      outputCodec: 'H264',
      type: 'DRM_FWM',
      aspectRatio: false,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: false
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('329_drm_fwm_h264_h264_uhd_fhd_hd_cmaf', () => {
  it('329_drm_fwm_h264_h264_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '329_drm_fwm_h264_h264_uhd_fhd_hd_cmaf',
      cid: 'test',
      inputCodec: 'H264',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'CMAF',
      outputCodec: 'H264',
      type: 'DRM_FWM',
      aspectRatio: false,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: true
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('330_drm_fwm_h264_h264_uhd_fhd_hd_cmaf', () => {
  it('330_drm_fwm_h264_h264_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '330_drm_fwm_h264_h264_uhd_fhd_hd_cmaf',
      cid: 'test',
      inputCodec: 'H264',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'CMAF',
      outputCodec: 'H264',
      type: 'DRM_FWM',
      aspectRatio: false,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: false
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('331_drm_fwm_h264_h264_uhd_fhd_hd_cmaf', () => {
  it('331_drm_fwm_h264_h264_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '331_drm_fwm_h264_h264_uhd_fhd_hd_cmaf',
      cid: 'test',
      inputCodec: 'H264',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'CMAF',
      outputCodec: 'H264',
      type: 'DRM_FWM',
      aspectRatio: false,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: true
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('332_drm_fwm_h264_h264_uhd_fhd_hd_cmaf', () => {
  it('332_drm_fwm_h264_h264_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '332_drm_fwm_h264_h264_uhd_fhd_hd_cmaf',
      cid: 'test',
      inputCodec: 'H264',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'CMAF',
      outputCodec: 'H264',
      type: 'DRM_FWM',
      aspectRatio: false,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: false
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('333_drm_fwm_h264_h264_uhd_fhd_hd_cmaf', () => {
  it('333_drm_fwm_h264_h264_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '333_drm_fwm_h264_h264_uhd_fhd_hd_cmaf',
      cid: 'test',
      inputCodec: 'H264',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'CMAF',
      outputCodec: 'H264',
      type: 'DRM_FWM',
      aspectRatio: false,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: true
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('334_drm_fwm_h264_h264_uhd_fhd_hd_cmaf', () => {
  it('334_drm_fwm_h264_h264_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '334_drm_fwm_h264_h264_uhd_fhd_hd_cmaf',
      cid: 'test',
      inputCodec: 'H264',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'CMAF',
      outputCodec: 'H264',
      type: 'DRM_FWM',
      aspectRatio: false,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: false
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('335_drm_fwm_h264_h264_uhd_fhd_hd_cmaf', () => {
  it('335_drm_fwm_h264_h264_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '335_drm_fwm_h264_h264_uhd_fhd_hd_cmaf',
      cid: 'test',
      inputCodec: 'H264',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'CMAF',
      outputCodec: 'H264',
      type: 'DRM_FWM',
      aspectRatio: false,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: true
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('336_drm_fwm_h264_h264_uhd_fhd_hd_cmaf', () => {
  it('336_drm_fwm_h264_h264_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '336_drm_fwm_h264_h264_uhd_fhd_hd_cmaf',
      cid: 'test',
      inputCodec: 'H264',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'CMAF',
      outputCodec: 'H264',
      type: 'DRM_FWM',
      aspectRatio: false,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: false
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('337_drm_fwm_h264_h264_uhd_fhd_hd_dash_hls', () => {
  it('337_drm_fwm_h264_h264_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '337_drm_fwm_h264_h264_uhd_fhd_hd_dash_hls',
      cid: 'test',
      inputCodec: 'H264',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'DASH_HLS',
      outputCodec: 'H264',
      type: 'DRM_FWM',
      aspectRatio: false,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: true
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('338_drm_fwm_h264_h264_uhd_fhd_hd_dash_hls', () => {
  it('338_drm_fwm_h264_h264_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '338_drm_fwm_h264_h264_uhd_fhd_hd_dash_hls',
      cid: 'test',
      inputCodec: 'H264',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'DASH_HLS',
      outputCodec: 'H264',
      type: 'DRM_FWM',
      aspectRatio: false,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: false
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('339_drm_fwm_h264_h264_uhd_fhd_hd_dash_hls', () => {
  it('339_drm_fwm_h264_h264_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '339_drm_fwm_h264_h264_uhd_fhd_hd_dash_hls',
      cid: 'test',
      inputCodec: 'H264',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'DASH_HLS',
      outputCodec: 'H264',
      type: 'DRM_FWM',
      aspectRatio: false,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: true
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('340_drm_fwm_h264_h264_uhd_fhd_hd_dash_hls', () => {
  it('340_drm_fwm_h264_h264_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '340_drm_fwm_h264_h264_uhd_fhd_hd_dash_hls',
      cid: 'test',
      inputCodec: 'H264',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'DASH_HLS',
      outputCodec: 'H264',
      type: 'DRM_FWM',
      aspectRatio: false,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: false
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('341_drm_fwm_h264_h264_uhd_fhd_hd_dash_hls', () => {
  it('341_drm_fwm_h264_h264_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '341_drm_fwm_h264_h264_uhd_fhd_hd_dash_hls',
      cid: 'test',
      inputCodec: 'H264',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'DASH_HLS',
      outputCodec: 'H264',
      type: 'DRM_FWM',
      aspectRatio: false,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: true
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('342_drm_fwm_h264_h264_uhd_fhd_hd_dash_hls', () => {
  it('342_drm_fwm_h264_h264_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '342_drm_fwm_h264_h264_uhd_fhd_hd_dash_hls',
      cid: 'test',
      inputCodec: 'H264',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'DASH_HLS',
      outputCodec: 'H264',
      type: 'DRM_FWM',
      aspectRatio: false,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: false
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('343_drm_fwm_h264_h264_uhd_fhd_hd_dash_hls', () => {
  it('343_drm_fwm_h264_h264_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '343_drm_fwm_h264_h264_uhd_fhd_hd_dash_hls',
      cid: 'test',
      inputCodec: 'H264',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'DASH_HLS',
      outputCodec: 'H264',
      type: 'DRM_FWM',
      aspectRatio: false,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: true
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('344_drm_fwm_h264_h264_uhd_fhd_hd_dash_hls', () => {
  it('344_drm_fwm_h264_h264_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '344_drm_fwm_h264_h264_uhd_fhd_hd_dash_hls',
      cid: 'test',
      inputCodec: 'H264',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'DASH_HLS',
      outputCodec: 'H264',
      type: 'DRM_FWM',
      aspectRatio: false,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: false
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('345_drm_fwm_h264_h264_uhd_fhd_hd_dash_hls', () => {
  it('345_drm_fwm_h264_h264_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '345_drm_fwm_h264_h264_uhd_fhd_hd_dash_hls',
      cid: 'test',
      inputCodec: 'H264',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'DASH_HLS',
      outputCodec: 'H264',
      type: 'DRM_FWM',
      aspectRatio: false,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: true
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('346_drm_fwm_h264_h264_uhd_fhd_hd_dash_hls', () => {
  it('346_drm_fwm_h264_h264_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '346_drm_fwm_h264_h264_uhd_fhd_hd_dash_hls',
      cid: 'test',
      inputCodec: 'H264',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'DASH_HLS',
      outputCodec: 'H264',
      type: 'DRM_FWM',
      aspectRatio: false,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: false
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('347_drm_fwm_h264_h264_uhd_fhd_hd_dash_hls', () => {
  it('347_drm_fwm_h264_h264_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '347_drm_fwm_h264_h264_uhd_fhd_hd_dash_hls',
      cid: 'test',
      inputCodec: 'H264',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'DASH_HLS',
      outputCodec: 'H264',
      type: 'DRM_FWM',
      aspectRatio: false,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: true
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('348_drm_fwm_h264_h264_uhd_fhd_hd_dash_hls', () => {
  it('348_drm_fwm_h264_h264_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '348_drm_fwm_h264_h264_uhd_fhd_hd_dash_hls',
      cid: 'test',
      inputCodec: 'H264',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'DASH_HLS',
      outputCodec: 'H264',
      type: 'DRM_FWM',
      aspectRatio: false,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: false
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('349_drm_fwm_h264_h264_uhd_fhd_hd_dash_hls', () => {
  it('349_drm_fwm_h264_h264_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '349_drm_fwm_h264_h264_uhd_fhd_hd_dash_hls',
      cid: 'test',
      inputCodec: 'H264',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'DASH_HLS',
      outputCodec: 'H264',
      type: 'DRM_FWM',
      aspectRatio: false,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: true
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('350_drm_fwm_h264_h264_uhd_fhd_hd_dash_hls', () => {
  it('350_drm_fwm_h264_h264_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '350_drm_fwm_h264_h264_uhd_fhd_hd_dash_hls',
      cid: 'test',
      inputCodec: 'H264',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'DASH_HLS',
      outputCodec: 'H264',
      type: 'DRM_FWM',
      aspectRatio: false,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: false
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('351_drm_fwm_h264_h264_uhd_fhd_hd_dash_hls', () => {
  it('351_drm_fwm_h264_h264_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '351_drm_fwm_h264_h264_uhd_fhd_hd_dash_hls',
      cid: 'test',
      inputCodec: 'H264',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'DASH_HLS',
      outputCodec: 'H264',
      type: 'DRM_FWM',
      aspectRatio: false,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: true
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('352_drm_fwm_h264_h264_uhd_fhd_hd_dash_hls', () => {
  it('352_drm_fwm_h264_h264_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '352_drm_fwm_h264_h264_uhd_fhd_hd_dash_hls',
      cid: 'test',
      inputCodec: 'H264',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'DASH_HLS',
      outputCodec: 'H264',
      type: 'DRM_FWM',
      aspectRatio: false,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: false
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('353_drm_fwm_h264_h264_fhd_fhd_hd_sd_sd_cmaf', () => {
  it('353_drm_fwm_h264_h264_fhd_fhd_hd_sd_sd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '353_drm_fwm_h264_h264_fhd_fhd_hd_sd_sd_cmaf',
      cid: 'test',
      inputCodec: 'H264',
      resolutionProfile: 'FHD_FHD_HD_SD_SD',
      streamingFormat: 'CMAF',
      outputCodec: 'H264',
      type: 'DRM_FWM',
      aspectRatio: false,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: true
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('354_drm_fwm_h264_h264_fhd_fhd_hd_sd_sd_cmaf', () => {
  it('354_drm_fwm_h264_h264_fhd_fhd_hd_sd_sd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '354_drm_fwm_h264_h264_fhd_fhd_hd_sd_sd_cmaf',
      cid: 'test',
      inputCodec: 'H264',
      resolutionProfile: 'FHD_FHD_HD_SD_SD',
      streamingFormat: 'CMAF',
      outputCodec: 'H264',
      type: 'DRM_FWM',
      aspectRatio: false,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: false
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('355_drm_fwm_h264_h264_fhd_fhd_hd_sd_sd_cmaf', () => {
  it('355_drm_fwm_h264_h264_fhd_fhd_hd_sd_sd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '355_drm_fwm_h264_h264_fhd_fhd_hd_sd_sd_cmaf',
      cid: 'test',
      inputCodec: 'H264',
      resolutionProfile: 'FHD_FHD_HD_SD_SD',
      streamingFormat: 'CMAF',
      outputCodec: 'H264',
      type: 'DRM_FWM',
      aspectRatio: false,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: true
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('356_drm_fwm_h264_h264_fhd_fhd_hd_sd_sd_cmaf', () => {
  it('356_drm_fwm_h264_h264_fhd_fhd_hd_sd_sd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '356_drm_fwm_h264_h264_fhd_fhd_hd_sd_sd_cmaf',
      cid: 'test',
      inputCodec: 'H264',
      resolutionProfile: 'FHD_FHD_HD_SD_SD',
      streamingFormat: 'CMAF',
      outputCodec: 'H264',
      type: 'DRM_FWM',
      aspectRatio: false,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: false
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('357_drm_fwm_h264_h264_fhd_fhd_hd_sd_sd_cmaf', () => {
  it('357_drm_fwm_h264_h264_fhd_fhd_hd_sd_sd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '357_drm_fwm_h264_h264_fhd_fhd_hd_sd_sd_cmaf',
      cid: 'test',
      inputCodec: 'H264',
      resolutionProfile: 'FHD_FHD_HD_SD_SD',
      streamingFormat: 'CMAF',
      outputCodec: 'H264',
      type: 'DRM_FWM',
      aspectRatio: false,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: true
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('358_drm_fwm_h264_h264_fhd_fhd_hd_sd_sd_cmaf', () => {
  it('358_drm_fwm_h264_h264_fhd_fhd_hd_sd_sd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '358_drm_fwm_h264_h264_fhd_fhd_hd_sd_sd_cmaf',
      cid: 'test',
      inputCodec: 'H264',
      resolutionProfile: 'FHD_FHD_HD_SD_SD',
      streamingFormat: 'CMAF',
      outputCodec: 'H264',
      type: 'DRM_FWM',
      aspectRatio: false,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: false
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('359_drm_fwm_h264_h264_fhd_fhd_hd_sd_sd_cmaf', () => {
  it('359_drm_fwm_h264_h264_fhd_fhd_hd_sd_sd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '359_drm_fwm_h264_h264_fhd_fhd_hd_sd_sd_cmaf',
      cid: 'test',
      inputCodec: 'H264',
      resolutionProfile: 'FHD_FHD_HD_SD_SD',
      streamingFormat: 'CMAF',
      outputCodec: 'H264',
      type: 'DRM_FWM',
      aspectRatio: false,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: true
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('360_drm_fwm_h264_h264_fhd_fhd_hd_sd_sd_cmaf', () => {
  it('360_drm_fwm_h264_h264_fhd_fhd_hd_sd_sd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '360_drm_fwm_h264_h264_fhd_fhd_hd_sd_sd_cmaf',
      cid: 'test',
      inputCodec: 'H264',
      resolutionProfile: 'FHD_FHD_HD_SD_SD',
      streamingFormat: 'CMAF',
      outputCodec: 'H264',
      type: 'DRM_FWM',
      aspectRatio: false,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: false
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('361_drm_fwm_h264_h264_fhd_fhd_hd_sd_sd_cmaf', () => {
  it('361_drm_fwm_h264_h264_fhd_fhd_hd_sd_sd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '361_drm_fwm_h264_h264_fhd_fhd_hd_sd_sd_cmaf',
      cid: 'test',
      inputCodec: 'H264',
      resolutionProfile: 'FHD_FHD_HD_SD_SD',
      streamingFormat: 'CMAF',
      outputCodec: 'H264',
      type: 'DRM_FWM',
      aspectRatio: false,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: true
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('362_drm_fwm_h264_h264_fhd_fhd_hd_sd_sd_cmaf', () => {
  it('362_drm_fwm_h264_h264_fhd_fhd_hd_sd_sd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '362_drm_fwm_h264_h264_fhd_fhd_hd_sd_sd_cmaf',
      cid: 'test',
      inputCodec: 'H264',
      resolutionProfile: 'FHD_FHD_HD_SD_SD',
      streamingFormat: 'CMAF',
      outputCodec: 'H264',
      type: 'DRM_FWM',
      aspectRatio: false,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: false
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('363_drm_fwm_h264_h264_fhd_fhd_hd_sd_sd_cmaf', () => {
  it('363_drm_fwm_h264_h264_fhd_fhd_hd_sd_sd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '363_drm_fwm_h264_h264_fhd_fhd_hd_sd_sd_cmaf',
      cid: 'test',
      inputCodec: 'H264',
      resolutionProfile: 'FHD_FHD_HD_SD_SD',
      streamingFormat: 'CMAF',
      outputCodec: 'H264',
      type: 'DRM_FWM',
      aspectRatio: false,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: true
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('364_drm_fwm_h264_h264_fhd_fhd_hd_sd_sd_cmaf', () => {
  it('364_drm_fwm_h264_h264_fhd_fhd_hd_sd_sd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '364_drm_fwm_h264_h264_fhd_fhd_hd_sd_sd_cmaf',
      cid: 'test',
      inputCodec: 'H264',
      resolutionProfile: 'FHD_FHD_HD_SD_SD',
      streamingFormat: 'CMAF',
      outputCodec: 'H264',
      type: 'DRM_FWM',
      aspectRatio: false,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: false
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('365_drm_fwm_h264_h264_fhd_fhd_hd_sd_sd_cmaf', () => {
  it('365_drm_fwm_h264_h264_fhd_fhd_hd_sd_sd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '365_drm_fwm_h264_h264_fhd_fhd_hd_sd_sd_cmaf',
      cid: 'test',
      inputCodec: 'H264',
      resolutionProfile: 'FHD_FHD_HD_SD_SD',
      streamingFormat: 'CMAF',
      outputCodec: 'H264',
      type: 'DRM_FWM',
      aspectRatio: false,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: true
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('366_drm_fwm_h264_h264_fhd_fhd_hd_sd_sd_cmaf', () => {
  it('366_drm_fwm_h264_h264_fhd_fhd_hd_sd_sd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '366_drm_fwm_h264_h264_fhd_fhd_hd_sd_sd_cmaf',
      cid: 'test',
      inputCodec: 'H264',
      resolutionProfile: 'FHD_FHD_HD_SD_SD',
      streamingFormat: 'CMAF',
      outputCodec: 'H264',
      type: 'DRM_FWM',
      aspectRatio: false,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: false
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('367_drm_fwm_h264_h264_fhd_fhd_hd_sd_sd_cmaf', () => {
  it('367_drm_fwm_h264_h264_fhd_fhd_hd_sd_sd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '367_drm_fwm_h264_h264_fhd_fhd_hd_sd_sd_cmaf',
      cid: 'test',
      inputCodec: 'H264',
      resolutionProfile: 'FHD_FHD_HD_SD_SD',
      streamingFormat: 'CMAF',
      outputCodec: 'H264',
      type: 'DRM_FWM',
      aspectRatio: false,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: true
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('368_drm_fwm_h264_h264_fhd_fhd_hd_sd_sd_cmaf', () => {
  it('368_drm_fwm_h264_h264_fhd_fhd_hd_sd_sd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '368_drm_fwm_h264_h264_fhd_fhd_hd_sd_sd_cmaf',
      cid: 'test',
      inputCodec: 'H264',
      resolutionProfile: 'FHD_FHD_HD_SD_SD',
      streamingFormat: 'CMAF',
      outputCodec: 'H264',
      type: 'DRM_FWM',
      aspectRatio: false,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: false
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('369_drm_fwm_h264_h264_fhd_fhd_hd_sd_sd_dash_hls', () => {
  it('369_drm_fwm_h264_h264_fhd_fhd_hd_sd_sd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '369_drm_fwm_h264_h264_fhd_fhd_hd_sd_sd_dash_hls',
      cid: 'test',
      inputCodec: 'H264',
      resolutionProfile: 'FHD_FHD_HD_SD_SD',
      streamingFormat: 'DASH_HLS',
      outputCodec: 'H264',
      type: 'DRM_FWM',
      aspectRatio: false,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: true
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('370_drm_fwm_h264_h264_fhd_fhd_hd_sd_sd_dash_hls', () => {
  it('370_drm_fwm_h264_h264_fhd_fhd_hd_sd_sd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '370_drm_fwm_h264_h264_fhd_fhd_hd_sd_sd_dash_hls',
      cid: 'test',
      inputCodec: 'H264',
      resolutionProfile: 'FHD_FHD_HD_SD_SD',
      streamingFormat: 'DASH_HLS',
      outputCodec: 'H264',
      type: 'DRM_FWM',
      aspectRatio: false,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: false
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('371_drm_fwm_h264_h264_fhd_fhd_hd_sd_sd_dash_hls', () => {
  it('371_drm_fwm_h264_h264_fhd_fhd_hd_sd_sd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '371_drm_fwm_h264_h264_fhd_fhd_hd_sd_sd_dash_hls',
      cid: 'test',
      inputCodec: 'H264',
      resolutionProfile: 'FHD_FHD_HD_SD_SD',
      streamingFormat: 'DASH_HLS',
      outputCodec: 'H264',
      type: 'DRM_FWM',
      aspectRatio: false,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: true
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('372_drm_fwm_h264_h264_fhd_fhd_hd_sd_sd_dash_hls', () => {
  it('372_drm_fwm_h264_h264_fhd_fhd_hd_sd_sd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '372_drm_fwm_h264_h264_fhd_fhd_hd_sd_sd_dash_hls',
      cid: 'test',
      inputCodec: 'H264',
      resolutionProfile: 'FHD_FHD_HD_SD_SD',
      streamingFormat: 'DASH_HLS',
      outputCodec: 'H264',
      type: 'DRM_FWM',
      aspectRatio: false,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: false
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('373_drm_fwm_h264_h264_fhd_fhd_hd_sd_sd_dash_hls', () => {
  it('373_drm_fwm_h264_h264_fhd_fhd_hd_sd_sd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '373_drm_fwm_h264_h264_fhd_fhd_hd_sd_sd_dash_hls',
      cid: 'test',
      inputCodec: 'H264',
      resolutionProfile: 'FHD_FHD_HD_SD_SD',
      streamingFormat: 'DASH_HLS',
      outputCodec: 'H264',
      type: 'DRM_FWM',
      aspectRatio: false,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: true
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('374_drm_fwm_h264_h264_fhd_fhd_hd_sd_sd_dash_hls', () => {
  it('374_drm_fwm_h264_h264_fhd_fhd_hd_sd_sd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '374_drm_fwm_h264_h264_fhd_fhd_hd_sd_sd_dash_hls',
      cid: 'test',
      inputCodec: 'H264',
      resolutionProfile: 'FHD_FHD_HD_SD_SD',
      streamingFormat: 'DASH_HLS',
      outputCodec: 'H264',
      type: 'DRM_FWM',
      aspectRatio: false,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: false
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('375_drm_fwm_h264_h264_fhd_fhd_hd_sd_sd_dash_hls', () => {
  it('375_drm_fwm_h264_h264_fhd_fhd_hd_sd_sd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '375_drm_fwm_h264_h264_fhd_fhd_hd_sd_sd_dash_hls',
      cid: 'test',
      inputCodec: 'H264',
      resolutionProfile: 'FHD_FHD_HD_SD_SD',
      streamingFormat: 'DASH_HLS',
      outputCodec: 'H264',
      type: 'DRM_FWM',
      aspectRatio: false,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: true
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('376_drm_fwm_h264_h264_fhd_fhd_hd_sd_sd_dash_hls', () => {
  it('376_drm_fwm_h264_h264_fhd_fhd_hd_sd_sd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '376_drm_fwm_h264_h264_fhd_fhd_hd_sd_sd_dash_hls',
      cid: 'test',
      inputCodec: 'H264',
      resolutionProfile: 'FHD_FHD_HD_SD_SD',
      streamingFormat: 'DASH_HLS',
      outputCodec: 'H264',
      type: 'DRM_FWM',
      aspectRatio: false,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: false
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('377_drm_fwm_h264_h264_fhd_fhd_hd_sd_sd_dash_hls', () => {
  it('377_drm_fwm_h264_h264_fhd_fhd_hd_sd_sd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '377_drm_fwm_h264_h264_fhd_fhd_hd_sd_sd_dash_hls',
      cid: 'test',
      inputCodec: 'H264',
      resolutionProfile: 'FHD_FHD_HD_SD_SD',
      streamingFormat: 'DASH_HLS',
      outputCodec: 'H264',
      type: 'DRM_FWM',
      aspectRatio: false,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: true
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('378_drm_fwm_h264_h264_fhd_fhd_hd_sd_sd_dash_hls', () => {
  it('378_drm_fwm_h264_h264_fhd_fhd_hd_sd_sd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '378_drm_fwm_h264_h264_fhd_fhd_hd_sd_sd_dash_hls',
      cid: 'test',
      inputCodec: 'H264',
      resolutionProfile: 'FHD_FHD_HD_SD_SD',
      streamingFormat: 'DASH_HLS',
      outputCodec: 'H264',
      type: 'DRM_FWM',
      aspectRatio: false,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: false
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('379_drm_fwm_h264_h264_fhd_fhd_hd_sd_sd_dash_hls', () => {
  it('379_drm_fwm_h264_h264_fhd_fhd_hd_sd_sd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '379_drm_fwm_h264_h264_fhd_fhd_hd_sd_sd_dash_hls',
      cid: 'test',
      inputCodec: 'H264',
      resolutionProfile: 'FHD_FHD_HD_SD_SD',
      streamingFormat: 'DASH_HLS',
      outputCodec: 'H264',
      type: 'DRM_FWM',
      aspectRatio: false,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: true
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('380_drm_fwm_h264_h264_fhd_fhd_hd_sd_sd_dash_hls', () => {
  it('380_drm_fwm_h264_h264_fhd_fhd_hd_sd_sd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '380_drm_fwm_h264_h264_fhd_fhd_hd_sd_sd_dash_hls',
      cid: 'test',
      inputCodec: 'H264',
      resolutionProfile: 'FHD_FHD_HD_SD_SD',
      streamingFormat: 'DASH_HLS',
      outputCodec: 'H264',
      type: 'DRM_FWM',
      aspectRatio: false,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: false
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('381_drm_fwm_h264_h264_fhd_fhd_hd_sd_sd_dash_hls', () => {
  it('381_drm_fwm_h264_h264_fhd_fhd_hd_sd_sd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '381_drm_fwm_h264_h264_fhd_fhd_hd_sd_sd_dash_hls',
      cid: 'test',
      inputCodec: 'H264',
      resolutionProfile: 'FHD_FHD_HD_SD_SD',
      streamingFormat: 'DASH_HLS',
      outputCodec: 'H264',
      type: 'DRM_FWM',
      aspectRatio: false,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: true
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('382_drm_fwm_h264_h264_fhd_fhd_hd_sd_sd_dash_hls', () => {
  it('382_drm_fwm_h264_h264_fhd_fhd_hd_sd_sd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '382_drm_fwm_h264_h264_fhd_fhd_hd_sd_sd_dash_hls',
      cid: 'test',
      inputCodec: 'H264',
      resolutionProfile: 'FHD_FHD_HD_SD_SD',
      streamingFormat: 'DASH_HLS',
      outputCodec: 'H264',
      type: 'DRM_FWM',
      aspectRatio: false,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: false
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('383_drm_fwm_h264_h264_fhd_fhd_hd_sd_sd_dash_hls', () => {
  it('383_drm_fwm_h264_h264_fhd_fhd_hd_sd_sd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '383_drm_fwm_h264_h264_fhd_fhd_hd_sd_sd_dash_hls',
      cid: 'test',
      inputCodec: 'H264',
      resolutionProfile: 'FHD_FHD_HD_SD_SD',
      streamingFormat: 'DASH_HLS',
      outputCodec: 'H264',
      type: 'DRM_FWM',
      aspectRatio: false,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: true
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('384_drm_fwm_h264_h264_fhd_fhd_hd_sd_sd_dash_hls', () => {
  it('384_drm_fwm_h264_h264_fhd_fhd_hd_sd_sd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '384_drm_fwm_h264_h264_fhd_fhd_hd_sd_sd_dash_hls',
      cid: 'test',
      inputCodec: 'H264',
      resolutionProfile: 'FHD_FHD_HD_SD_SD',
      streamingFormat: 'DASH_HLS',
      outputCodec: 'H264',
      type: 'DRM_FWM',
      aspectRatio: false,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: false
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('385_drm_fwm_h265_h264_uhd_fhd_hd_cmaf', () => {
  it('385_drm_fwm_h265_h264_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '385_drm_fwm_h265_h264_uhd_fhd_hd_cmaf',
      cid: 'test',
      inputCodec: 'H265',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'CMAF',
      outputCodec: 'H264',
      type: 'DRM_FWM',
      aspectRatio: false,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: true
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('386_drm_fwm_h265_h264_uhd_fhd_hd_cmaf', () => {
  it('386_drm_fwm_h265_h264_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '386_drm_fwm_h265_h264_uhd_fhd_hd_cmaf',
      cid: 'test',
      inputCodec: 'H265',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'CMAF',
      outputCodec: 'H264',
      type: 'DRM_FWM',
      aspectRatio: false,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: false
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('387_drm_fwm_h265_h264_uhd_fhd_hd_cmaf', () => {
  it('387_drm_fwm_h265_h264_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '387_drm_fwm_h265_h264_uhd_fhd_hd_cmaf',
      cid: 'test',
      inputCodec: 'H265',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'CMAF',
      outputCodec: 'H264',
      type: 'DRM_FWM',
      aspectRatio: false,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: true
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('388_drm_fwm_h265_h264_uhd_fhd_hd_cmaf', () => {
  it('388_drm_fwm_h265_h264_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '388_drm_fwm_h265_h264_uhd_fhd_hd_cmaf',
      cid: 'test',
      inputCodec: 'H265',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'CMAF',
      outputCodec: 'H264',
      type: 'DRM_FWM',
      aspectRatio: false,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: false
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('389_drm_fwm_h265_h264_uhd_fhd_hd_cmaf', () => {
  it('389_drm_fwm_h265_h264_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '389_drm_fwm_h265_h264_uhd_fhd_hd_cmaf',
      cid: 'test',
      inputCodec: 'H265',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'CMAF',
      outputCodec: 'H264',
      type: 'DRM_FWM',
      aspectRatio: false,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: true
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('390_drm_fwm_h265_h264_uhd_fhd_hd_cmaf', () => {
  it('390_drm_fwm_h265_h264_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '390_drm_fwm_h265_h264_uhd_fhd_hd_cmaf',
      cid: 'test',
      inputCodec: 'H265',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'CMAF',
      outputCodec: 'H264',
      type: 'DRM_FWM',
      aspectRatio: false,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: false
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('391_drm_fwm_h265_h264_uhd_fhd_hd_cmaf', () => {
  it('391_drm_fwm_h265_h264_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '391_drm_fwm_h265_h264_uhd_fhd_hd_cmaf',
      cid: 'test',
      inputCodec: 'H265',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'CMAF',
      outputCodec: 'H264',
      type: 'DRM_FWM',
      aspectRatio: false,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: true
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('392_drm_fwm_h265_h264_uhd_fhd_hd_cmaf', () => {
  it('392_drm_fwm_h265_h264_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '392_drm_fwm_h265_h264_uhd_fhd_hd_cmaf',
      cid: 'test',
      inputCodec: 'H265',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'CMAF',
      outputCodec: 'H264',
      type: 'DRM_FWM',
      aspectRatio: false,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: false
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('393_drm_fwm_h265_h264_uhd_fhd_hd_cmaf', () => {
  it('393_drm_fwm_h265_h264_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '393_drm_fwm_h265_h264_uhd_fhd_hd_cmaf',
      cid: 'test',
      inputCodec: 'H265',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'CMAF',
      outputCodec: 'H264',
      type: 'DRM_FWM',
      aspectRatio: false,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: true
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('394_drm_fwm_h265_h264_uhd_fhd_hd_cmaf', () => {
  it('394_drm_fwm_h265_h264_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '394_drm_fwm_h265_h264_uhd_fhd_hd_cmaf',
      cid: 'test',
      inputCodec: 'H265',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'CMAF',
      outputCodec: 'H264',
      type: 'DRM_FWM',
      aspectRatio: false,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: false
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('395_drm_fwm_h265_h264_uhd_fhd_hd_cmaf', () => {
  it('395_drm_fwm_h265_h264_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '395_drm_fwm_h265_h264_uhd_fhd_hd_cmaf',
      cid: 'test',
      inputCodec: 'H265',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'CMAF',
      outputCodec: 'H264',
      type: 'DRM_FWM',
      aspectRatio: false,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: true
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('396_drm_fwm_h265_h264_uhd_fhd_hd_cmaf', () => {
  it('396_drm_fwm_h265_h264_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '396_drm_fwm_h265_h264_uhd_fhd_hd_cmaf',
      cid: 'test',
      inputCodec: 'H265',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'CMAF',
      outputCodec: 'H264',
      type: 'DRM_FWM',
      aspectRatio: false,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: false
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('397_drm_fwm_h265_h264_uhd_fhd_hd_cmaf', () => {
  it('397_drm_fwm_h265_h264_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '397_drm_fwm_h265_h264_uhd_fhd_hd_cmaf',
      cid: 'test',
      inputCodec: 'H265',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'CMAF',
      outputCodec: 'H264',
      type: 'DRM_FWM',
      aspectRatio: false,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: true
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('398_drm_fwm_h265_h264_uhd_fhd_hd_cmaf', () => {
  it('398_drm_fwm_h265_h264_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '398_drm_fwm_h265_h264_uhd_fhd_hd_cmaf',
      cid: 'test',
      inputCodec: 'H265',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'CMAF',
      outputCodec: 'H264',
      type: 'DRM_FWM',
      aspectRatio: false,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: false
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('399_drm_fwm_h265_h264_uhd_fhd_hd_cmaf', () => {
  it('399_drm_fwm_h265_h264_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '399_drm_fwm_h265_h264_uhd_fhd_hd_cmaf',
      cid: 'test',
      inputCodec: 'H265',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'CMAF',
      outputCodec: 'H264',
      type: 'DRM_FWM',
      aspectRatio: false,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: true
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('400_drm_fwm_h265_h264_uhd_fhd_hd_cmaf', () => {
  it('400_drm_fwm_h265_h264_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '400_drm_fwm_h265_h264_uhd_fhd_hd_cmaf',
      cid: 'test',
      inputCodec: 'H265',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'CMAF',
      outputCodec: 'H264',
      type: 'DRM_FWM',
      aspectRatio: false,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: false
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('401_drm_fwm_h265_h264_uhd_fhd_hd_dash_hls', () => {
  it('401_drm_fwm_h265_h264_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '401_drm_fwm_h265_h264_uhd_fhd_hd_dash_hls',
      cid: 'test',
      inputCodec: 'H265',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'DASH_HLS',
      outputCodec: 'H264',
      type: 'DRM_FWM',
      aspectRatio: false,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: true
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('402_drm_fwm_h265_h264_uhd_fhd_hd_dash_hls', () => {
  it('402_drm_fwm_h265_h264_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '402_drm_fwm_h265_h264_uhd_fhd_hd_dash_hls',
      cid: 'test',
      inputCodec: 'H265',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'DASH_HLS',
      outputCodec: 'H264',
      type: 'DRM_FWM',
      aspectRatio: false,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: false
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('403_drm_fwm_h265_h264_uhd_fhd_hd_dash_hls', () => {
  it('403_drm_fwm_h265_h264_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '403_drm_fwm_h265_h264_uhd_fhd_hd_dash_hls',
      cid: 'test',
      inputCodec: 'H265',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'DASH_HLS',
      outputCodec: 'H264',
      type: 'DRM_FWM',
      aspectRatio: false,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: true
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('404_drm_fwm_h265_h264_uhd_fhd_hd_dash_hls', () => {
  it('404_drm_fwm_h265_h264_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '404_drm_fwm_h265_h264_uhd_fhd_hd_dash_hls',
      cid: 'test',
      inputCodec: 'H265',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'DASH_HLS',
      outputCodec: 'H264',
      type: 'DRM_FWM',
      aspectRatio: false,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: false
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('405_drm_fwm_h265_h264_uhd_fhd_hd_dash_hls', () => {
  it('405_drm_fwm_h265_h264_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '405_drm_fwm_h265_h264_uhd_fhd_hd_dash_hls',
      cid: 'test',
      inputCodec: 'H265',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'DASH_HLS',
      outputCodec: 'H264',
      type: 'DRM_FWM',
      aspectRatio: false,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: true
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('406_drm_fwm_h265_h264_uhd_fhd_hd_dash_hls', () => {
  it('406_drm_fwm_h265_h264_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '406_drm_fwm_h265_h264_uhd_fhd_hd_dash_hls',
      cid: 'test',
      inputCodec: 'H265',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'DASH_HLS',
      outputCodec: 'H264',
      type: 'DRM_FWM',
      aspectRatio: false,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: false
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('407_drm_fwm_h265_h264_uhd_fhd_hd_dash_hls', () => {
  it('407_drm_fwm_h265_h264_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '407_drm_fwm_h265_h264_uhd_fhd_hd_dash_hls',
      cid: 'test',
      inputCodec: 'H265',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'DASH_HLS',
      outputCodec: 'H264',
      type: 'DRM_FWM',
      aspectRatio: false,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: true
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('408_drm_fwm_h265_h264_uhd_fhd_hd_dash_hls', () => {
  it('408_drm_fwm_h265_h264_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '408_drm_fwm_h265_h264_uhd_fhd_hd_dash_hls',
      cid: 'test',
      inputCodec: 'H265',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'DASH_HLS',
      outputCodec: 'H264',
      type: 'DRM_FWM',
      aspectRatio: false,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: false
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('409_drm_fwm_h265_h264_uhd_fhd_hd_dash_hls', () => {
  it('409_drm_fwm_h265_h264_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '409_drm_fwm_h265_h264_uhd_fhd_hd_dash_hls',
      cid: 'test',
      inputCodec: 'H265',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'DASH_HLS',
      outputCodec: 'H264',
      type: 'DRM_FWM',
      aspectRatio: false,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: true
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('410_drm_fwm_h265_h264_uhd_fhd_hd_dash_hls', () => {
  it('410_drm_fwm_h265_h264_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '410_drm_fwm_h265_h264_uhd_fhd_hd_dash_hls',
      cid: 'test',
      inputCodec: 'H265',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'DASH_HLS',
      outputCodec: 'H264',
      type: 'DRM_FWM',
      aspectRatio: false,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: false
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('411_drm_fwm_h265_h264_uhd_fhd_hd_dash_hls', () => {
  it('411_drm_fwm_h265_h264_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '411_drm_fwm_h265_h264_uhd_fhd_hd_dash_hls',
      cid: 'test',
      inputCodec: 'H265',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'DASH_HLS',
      outputCodec: 'H264',
      type: 'DRM_FWM',
      aspectRatio: false,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: true
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('412_drm_fwm_h265_h264_uhd_fhd_hd_dash_hls', () => {
  it('412_drm_fwm_h265_h264_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '412_drm_fwm_h265_h264_uhd_fhd_hd_dash_hls',
      cid: 'test',
      inputCodec: 'H265',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'DASH_HLS',
      outputCodec: 'H264',
      type: 'DRM_FWM',
      aspectRatio: false,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: false
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('413_drm_fwm_h265_h264_uhd_fhd_hd_dash_hls', () => {
  it('413_drm_fwm_h265_h264_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '413_drm_fwm_h265_h264_uhd_fhd_hd_dash_hls',
      cid: 'test',
      inputCodec: 'H265',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'DASH_HLS',
      outputCodec: 'H264',
      type: 'DRM_FWM',
      aspectRatio: false,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: true
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('414_drm_fwm_h265_h264_uhd_fhd_hd_dash_hls', () => {
  it('414_drm_fwm_h265_h264_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '414_drm_fwm_h265_h264_uhd_fhd_hd_dash_hls',
      cid: 'test',
      inputCodec: 'H265',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'DASH_HLS',
      outputCodec: 'H264',
      type: 'DRM_FWM',
      aspectRatio: false,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: false
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('415_drm_fwm_h265_h264_uhd_fhd_hd_dash_hls', () => {
  it('415_drm_fwm_h265_h264_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '415_drm_fwm_h265_h264_uhd_fhd_hd_dash_hls',
      cid: 'test',
      inputCodec: 'H265',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'DASH_HLS',
      outputCodec: 'H264',
      type: 'DRM_FWM',
      aspectRatio: false,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: true
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('416_drm_fwm_h265_h264_uhd_fhd_hd_dash_hls', () => {
  it('416_drm_fwm_h265_h264_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '416_drm_fwm_h265_h264_uhd_fhd_hd_dash_hls',
      cid: 'test',
      inputCodec: 'H265',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'DASH_HLS',
      outputCodec: 'H264',
      type: 'DRM_FWM',
      aspectRatio: false,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: false
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('417_drm_fwm_h265_h264_fhd_fhd_hd_sd_sd_cmaf', () => {
  it('417_drm_fwm_h265_h264_fhd_fhd_hd_sd_sd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '417_drm_fwm_h265_h264_fhd_fhd_hd_sd_sd_cmaf',
      cid: 'test',
      inputCodec: 'H265',
      resolutionProfile: 'FHD_FHD_HD_SD_SD',
      streamingFormat: 'CMAF',
      outputCodec: 'H264',
      type: 'DRM_FWM',
      aspectRatio: false,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: true
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('418_drm_fwm_h265_h264_fhd_fhd_hd_sd_sd_cmaf', () => {
  it('418_drm_fwm_h265_h264_fhd_fhd_hd_sd_sd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '418_drm_fwm_h265_h264_fhd_fhd_hd_sd_sd_cmaf',
      cid: 'test',
      inputCodec: 'H265',
      resolutionProfile: 'FHD_FHD_HD_SD_SD',
      streamingFormat: 'CMAF',
      outputCodec: 'H264',
      type: 'DRM_FWM',
      aspectRatio: false,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: false
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('419_drm_fwm_h265_h264_fhd_fhd_hd_sd_sd_cmaf', () => {
  it('419_drm_fwm_h265_h264_fhd_fhd_hd_sd_sd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '419_drm_fwm_h265_h264_fhd_fhd_hd_sd_sd_cmaf',
      cid: 'test',
      inputCodec: 'H265',
      resolutionProfile: 'FHD_FHD_HD_SD_SD',
      streamingFormat: 'CMAF',
      outputCodec: 'H264',
      type: 'DRM_FWM',
      aspectRatio: false,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: true
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('420_drm_fwm_h265_h264_fhd_fhd_hd_sd_sd_cmaf', () => {
  it('420_drm_fwm_h265_h264_fhd_fhd_hd_sd_sd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '420_drm_fwm_h265_h264_fhd_fhd_hd_sd_sd_cmaf',
      cid: 'test',
      inputCodec: 'H265',
      resolutionProfile: 'FHD_FHD_HD_SD_SD',
      streamingFormat: 'CMAF',
      outputCodec: 'H264',
      type: 'DRM_FWM',
      aspectRatio: false,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: false
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('421_drm_fwm_h265_h264_fhd_fhd_hd_sd_sd_cmaf', () => {
  it('421_drm_fwm_h265_h264_fhd_fhd_hd_sd_sd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '421_drm_fwm_h265_h264_fhd_fhd_hd_sd_sd_cmaf',
      cid: 'test',
      inputCodec: 'H265',
      resolutionProfile: 'FHD_FHD_HD_SD_SD',
      streamingFormat: 'CMAF',
      outputCodec: 'H264',
      type: 'DRM_FWM',
      aspectRatio: false,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: true
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('422_drm_fwm_h265_h264_fhd_fhd_hd_sd_sd_cmaf', () => {
  it('422_drm_fwm_h265_h264_fhd_fhd_hd_sd_sd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '422_drm_fwm_h265_h264_fhd_fhd_hd_sd_sd_cmaf',
      cid: 'test',
      inputCodec: 'H265',
      resolutionProfile: 'FHD_FHD_HD_SD_SD',
      streamingFormat: 'CMAF',
      outputCodec: 'H264',
      type: 'DRM_FWM',
      aspectRatio: false,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: false
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('423_drm_fwm_h265_h264_fhd_fhd_hd_sd_sd_cmaf', () => {
  it('423_drm_fwm_h265_h264_fhd_fhd_hd_sd_sd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '423_drm_fwm_h265_h264_fhd_fhd_hd_sd_sd_cmaf',
      cid: 'test',
      inputCodec: 'H265',
      resolutionProfile: 'FHD_FHD_HD_SD_SD',
      streamingFormat: 'CMAF',
      outputCodec: 'H264',
      type: 'DRM_FWM',
      aspectRatio: false,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: true
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('424_drm_fwm_h265_h264_fhd_fhd_hd_sd_sd_cmaf', () => {
  it('424_drm_fwm_h265_h264_fhd_fhd_hd_sd_sd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '424_drm_fwm_h265_h264_fhd_fhd_hd_sd_sd_cmaf',
      cid: 'test',
      inputCodec: 'H265',
      resolutionProfile: 'FHD_FHD_HD_SD_SD',
      streamingFormat: 'CMAF',
      outputCodec: 'H264',
      type: 'DRM_FWM',
      aspectRatio: false,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: false
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('425_drm_fwm_h265_h264_fhd_fhd_hd_sd_sd_cmaf', () => {
  it('425_drm_fwm_h265_h264_fhd_fhd_hd_sd_sd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '425_drm_fwm_h265_h264_fhd_fhd_hd_sd_sd_cmaf',
      cid: 'test',
      inputCodec: 'H265',
      resolutionProfile: 'FHD_FHD_HD_SD_SD',
      streamingFormat: 'CMAF',
      outputCodec: 'H264',
      type: 'DRM_FWM',
      aspectRatio: false,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: true
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('426_drm_fwm_h265_h264_fhd_fhd_hd_sd_sd_cmaf', () => {
  it('426_drm_fwm_h265_h264_fhd_fhd_hd_sd_sd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '426_drm_fwm_h265_h264_fhd_fhd_hd_sd_sd_cmaf',
      cid: 'test',
      inputCodec: 'H265',
      resolutionProfile: 'FHD_FHD_HD_SD_SD',
      streamingFormat: 'CMAF',
      outputCodec: 'H264',
      type: 'DRM_FWM',
      aspectRatio: false,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: false
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('427_drm_fwm_h265_h264_fhd_fhd_hd_sd_sd_cmaf', () => {
  it('427_drm_fwm_h265_h264_fhd_fhd_hd_sd_sd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '427_drm_fwm_h265_h264_fhd_fhd_hd_sd_sd_cmaf',
      cid: 'test',
      inputCodec: 'H265',
      resolutionProfile: 'FHD_FHD_HD_SD_SD',
      streamingFormat: 'CMAF',
      outputCodec: 'H264',
      type: 'DRM_FWM',
      aspectRatio: false,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: true
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('428_drm_fwm_h265_h264_fhd_fhd_hd_sd_sd_cmaf', () => {
  it('428_drm_fwm_h265_h264_fhd_fhd_hd_sd_sd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '428_drm_fwm_h265_h264_fhd_fhd_hd_sd_sd_cmaf',
      cid: 'test',
      inputCodec: 'H265',
      resolutionProfile: 'FHD_FHD_HD_SD_SD',
      streamingFormat: 'CMAF',
      outputCodec: 'H264',
      type: 'DRM_FWM',
      aspectRatio: false,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: false
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('429_drm_fwm_h265_h264_fhd_fhd_hd_sd_sd_cmaf', () => {
  it('429_drm_fwm_h265_h264_fhd_fhd_hd_sd_sd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '429_drm_fwm_h265_h264_fhd_fhd_hd_sd_sd_cmaf',
      cid: 'test',
      inputCodec: 'H265',
      resolutionProfile: 'FHD_FHD_HD_SD_SD',
      streamingFormat: 'CMAF',
      outputCodec: 'H264',
      type: 'DRM_FWM',
      aspectRatio: false,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: true
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('430_drm_fwm_h265_h264_fhd_fhd_hd_sd_sd_cmaf', () => {
  it('430_drm_fwm_h265_h264_fhd_fhd_hd_sd_sd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '430_drm_fwm_h265_h264_fhd_fhd_hd_sd_sd_cmaf',
      cid: 'test',
      inputCodec: 'H265',
      resolutionProfile: 'FHD_FHD_HD_SD_SD',
      streamingFormat: 'CMAF',
      outputCodec: 'H264',
      type: 'DRM_FWM',
      aspectRatio: false,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: false
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('431_drm_fwm_h265_h264_fhd_fhd_hd_sd_sd_cmaf', () => {
  it('431_drm_fwm_h265_h264_fhd_fhd_hd_sd_sd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '431_drm_fwm_h265_h264_fhd_fhd_hd_sd_sd_cmaf',
      cid: 'test',
      inputCodec: 'H265',
      resolutionProfile: 'FHD_FHD_HD_SD_SD',
      streamingFormat: 'CMAF',
      outputCodec: 'H264',
      type: 'DRM_FWM',
      aspectRatio: false,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: true
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('432_drm_fwm_h265_h264_fhd_fhd_hd_sd_sd_cmaf', () => {
  it('432_drm_fwm_h265_h264_fhd_fhd_hd_sd_sd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '432_drm_fwm_h265_h264_fhd_fhd_hd_sd_sd_cmaf',
      cid: 'test',
      inputCodec: 'H265',
      resolutionProfile: 'FHD_FHD_HD_SD_SD',
      streamingFormat: 'CMAF',
      outputCodec: 'H264',
      type: 'DRM_FWM',
      aspectRatio: false,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: false
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('433_drm_fwm_h265_h264_fhd_fhd_hd_sd_sd_dash_hls', () => {
  it('433_drm_fwm_h265_h264_fhd_fhd_hd_sd_sd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '433_drm_fwm_h265_h264_fhd_fhd_hd_sd_sd_dash_hls',
      cid: 'test',
      inputCodec: 'H265',
      resolutionProfile: 'FHD_FHD_HD_SD_SD',
      streamingFormat: 'DASH_HLS',
      outputCodec: 'H264',
      type: 'DRM_FWM',
      aspectRatio: false,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: true
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('434_drm_fwm_h265_h264_fhd_fhd_hd_sd_sd_dash_hls', () => {
  it('434_drm_fwm_h265_h264_fhd_fhd_hd_sd_sd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '434_drm_fwm_h265_h264_fhd_fhd_hd_sd_sd_dash_hls',
      cid: 'test',
      inputCodec: 'H265',
      resolutionProfile: 'FHD_FHD_HD_SD_SD',
      streamingFormat: 'DASH_HLS',
      outputCodec: 'H264',
      type: 'DRM_FWM',
      aspectRatio: false,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: false
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('435_drm_fwm_h265_h264_fhd_fhd_hd_sd_sd_dash_hls', () => {
  it('435_drm_fwm_h265_h264_fhd_fhd_hd_sd_sd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '435_drm_fwm_h265_h264_fhd_fhd_hd_sd_sd_dash_hls',
      cid: 'test',
      inputCodec: 'H265',
      resolutionProfile: 'FHD_FHD_HD_SD_SD',
      streamingFormat: 'DASH_HLS',
      outputCodec: 'H264',
      type: 'DRM_FWM',
      aspectRatio: false,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: true
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('436_drm_fwm_h265_h264_fhd_fhd_hd_sd_sd_dash_hls', () => {
  it('436_drm_fwm_h265_h264_fhd_fhd_hd_sd_sd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '436_drm_fwm_h265_h264_fhd_fhd_hd_sd_sd_dash_hls',
      cid: 'test',
      inputCodec: 'H265',
      resolutionProfile: 'FHD_FHD_HD_SD_SD',
      streamingFormat: 'DASH_HLS',
      outputCodec: 'H264',
      type: 'DRM_FWM',
      aspectRatio: false,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: false
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('437_drm_fwm_h265_h264_fhd_fhd_hd_sd_sd_dash_hls', () => {
  it('437_drm_fwm_h265_h264_fhd_fhd_hd_sd_sd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '437_drm_fwm_h265_h264_fhd_fhd_hd_sd_sd_dash_hls',
      cid: 'test',
      inputCodec: 'H265',
      resolutionProfile: 'FHD_FHD_HD_SD_SD',
      streamingFormat: 'DASH_HLS',
      outputCodec: 'H264',
      type: 'DRM_FWM',
      aspectRatio: false,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: true
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('438_drm_fwm_h265_h264_fhd_fhd_hd_sd_sd_dash_hls', () => {
  it('438_drm_fwm_h265_h264_fhd_fhd_hd_sd_sd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '438_drm_fwm_h265_h264_fhd_fhd_hd_sd_sd_dash_hls',
      cid: 'test',
      inputCodec: 'H265',
      resolutionProfile: 'FHD_FHD_HD_SD_SD',
      streamingFormat: 'DASH_HLS',
      outputCodec: 'H264',
      type: 'DRM_FWM',
      aspectRatio: false,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: false
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('439_drm_fwm_h265_h264_fhd_fhd_hd_sd_sd_dash_hls', () => {
  it('439_drm_fwm_h265_h264_fhd_fhd_hd_sd_sd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '439_drm_fwm_h265_h264_fhd_fhd_hd_sd_sd_dash_hls',
      cid: 'test',
      inputCodec: 'H265',
      resolutionProfile: 'FHD_FHD_HD_SD_SD',
      streamingFormat: 'DASH_HLS',
      outputCodec: 'H264',
      type: 'DRM_FWM',
      aspectRatio: false,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: true
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('440_drm_fwm_h265_h264_fhd_fhd_hd_sd_sd_dash_hls', () => {
  it('440_drm_fwm_h265_h264_fhd_fhd_hd_sd_sd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '440_drm_fwm_h265_h264_fhd_fhd_hd_sd_sd_dash_hls',
      cid: 'test',
      inputCodec: 'H265',
      resolutionProfile: 'FHD_FHD_HD_SD_SD',
      streamingFormat: 'DASH_HLS',
      outputCodec: 'H264',
      type: 'DRM_FWM',
      aspectRatio: false,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: false
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('441_drm_fwm_h265_h264_fhd_fhd_hd_sd_sd_dash_hls', () => {
  it('441_drm_fwm_h265_h264_fhd_fhd_hd_sd_sd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '441_drm_fwm_h265_h264_fhd_fhd_hd_sd_sd_dash_hls',
      cid: 'test',
      inputCodec: 'H265',
      resolutionProfile: 'FHD_FHD_HD_SD_SD',
      streamingFormat: 'DASH_HLS',
      outputCodec: 'H264',
      type: 'DRM_FWM',
      aspectRatio: false,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: true
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('442_drm_fwm_h265_h264_fhd_fhd_hd_sd_sd_dash_hls', () => {
  it('442_drm_fwm_h265_h264_fhd_fhd_hd_sd_sd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '442_drm_fwm_h265_h264_fhd_fhd_hd_sd_sd_dash_hls',
      cid: 'test',
      inputCodec: 'H265',
      resolutionProfile: 'FHD_FHD_HD_SD_SD',
      streamingFormat: 'DASH_HLS',
      outputCodec: 'H264',
      type: 'DRM_FWM',
      aspectRatio: false,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: false
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('443_drm_fwm_h265_h264_fhd_fhd_hd_sd_sd_dash_hls', () => {
  it('443_drm_fwm_h265_h264_fhd_fhd_hd_sd_sd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '443_drm_fwm_h265_h264_fhd_fhd_hd_sd_sd_dash_hls',
      cid: 'test',
      inputCodec: 'H265',
      resolutionProfile: 'FHD_FHD_HD_SD_SD',
      streamingFormat: 'DASH_HLS',
      outputCodec: 'H264',
      type: 'DRM_FWM',
      aspectRatio: false,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: true
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('444_drm_fwm_h265_h264_fhd_fhd_hd_sd_sd_dash_hls', () => {
  it('444_drm_fwm_h265_h264_fhd_fhd_hd_sd_sd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '444_drm_fwm_h265_h264_fhd_fhd_hd_sd_sd_dash_hls',
      cid: 'test',
      inputCodec: 'H265',
      resolutionProfile: 'FHD_FHD_HD_SD_SD',
      streamingFormat: 'DASH_HLS',
      outputCodec: 'H264',
      type: 'DRM_FWM',
      aspectRatio: false,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: false
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('445_drm_fwm_h265_h264_fhd_fhd_hd_sd_sd_dash_hls', () => {
  it('445_drm_fwm_h265_h264_fhd_fhd_hd_sd_sd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '445_drm_fwm_h265_h264_fhd_fhd_hd_sd_sd_dash_hls',
      cid: 'test',
      inputCodec: 'H265',
      resolutionProfile: 'FHD_FHD_HD_SD_SD',
      streamingFormat: 'DASH_HLS',
      outputCodec: 'H264',
      type: 'DRM_FWM',
      aspectRatio: false,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: true
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('446_drm_fwm_h265_h264_fhd_fhd_hd_sd_sd_dash_hls', () => {
  it('446_drm_fwm_h265_h264_fhd_fhd_hd_sd_sd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '446_drm_fwm_h265_h264_fhd_fhd_hd_sd_sd_dash_hls',
      cid: 'test',
      inputCodec: 'H265',
      resolutionProfile: 'FHD_FHD_HD_SD_SD',
      streamingFormat: 'DASH_HLS',
      outputCodec: 'H264',
      type: 'DRM_FWM',
      aspectRatio: false,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: false
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('447_drm_fwm_h265_h264_fhd_fhd_hd_sd_sd_dash_hls', () => {
  it('447_drm_fwm_h265_h264_fhd_fhd_hd_sd_sd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '447_drm_fwm_h265_h264_fhd_fhd_hd_sd_sd_dash_hls',
      cid: 'test',
      inputCodec: 'H265',
      resolutionProfile: 'FHD_FHD_HD_SD_SD',
      streamingFormat: 'DASH_HLS',
      outputCodec: 'H264',
      type: 'DRM_FWM',
      aspectRatio: false,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: true
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('448_drm_fwm_h265_h264_fhd_fhd_hd_sd_sd_dash_hls', () => {
  it('448_drm_fwm_h265_h264_fhd_fhd_hd_sd_sd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '448_drm_fwm_h265_h264_fhd_fhd_hd_sd_sd_dash_hls',
      cid: 'test',
      inputCodec: 'H265',
      resolutionProfile: 'FHD_FHD_HD_SD_SD',
      streamingFormat: 'DASH_HLS',
      outputCodec: 'H264',
      type: 'DRM_FWM',
      aspectRatio: false,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: false
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('449_drm_fwm_h264_h265_uhd_fhd_hd_cmaf', () => {
  it('449_drm_fwm_h264_h265_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '449_drm_fwm_h264_h265_uhd_fhd_hd_cmaf',
      cid: 'test',
      inputCodec: 'H264',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'CMAF',
      outputCodec: 'H265',
      type: 'DRM_FWM',
      aspectRatio: false,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: true
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('450_drm_fwm_h264_h265_uhd_fhd_hd_cmaf', () => {
  it('450_drm_fwm_h264_h265_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '450_drm_fwm_h264_h265_uhd_fhd_hd_cmaf',
      cid: 'test',
      inputCodec: 'H264',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'CMAF',
      outputCodec: 'H265',
      type: 'DRM_FWM',
      aspectRatio: false,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: false
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('451_drm_fwm_h264_h265_uhd_fhd_hd_cmaf', () => {
  it('451_drm_fwm_h264_h265_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '451_drm_fwm_h264_h265_uhd_fhd_hd_cmaf',
      cid: 'test',
      inputCodec: 'H264',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'CMAF',
      outputCodec: 'H265',
      type: 'DRM_FWM',
      aspectRatio: false,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: true
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('452_drm_fwm_h264_h265_uhd_fhd_hd_cmaf', () => {
  it('452_drm_fwm_h264_h265_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '452_drm_fwm_h264_h265_uhd_fhd_hd_cmaf',
      cid: 'test',
      inputCodec: 'H264',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'CMAF',
      outputCodec: 'H265',
      type: 'DRM_FWM',
      aspectRatio: false,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: false
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('453_drm_fwm_h264_h265_uhd_fhd_hd_cmaf', () => {
  it('453_drm_fwm_h264_h265_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '453_drm_fwm_h264_h265_uhd_fhd_hd_cmaf',
      cid: 'test',
      inputCodec: 'H264',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'CMAF',
      outputCodec: 'H265',
      type: 'DRM_FWM',
      aspectRatio: false,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: true
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('454_drm_fwm_h264_h265_uhd_fhd_hd_cmaf', () => {
  it('454_drm_fwm_h264_h265_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '454_drm_fwm_h264_h265_uhd_fhd_hd_cmaf',
      cid: 'test',
      inputCodec: 'H264',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'CMAF',
      outputCodec: 'H265',
      type: 'DRM_FWM',
      aspectRatio: false,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: false
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('455_drm_fwm_h264_h265_uhd_fhd_hd_cmaf', () => {
  it('455_drm_fwm_h264_h265_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '455_drm_fwm_h264_h265_uhd_fhd_hd_cmaf',
      cid: 'test',
      inputCodec: 'H264',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'CMAF',
      outputCodec: 'H265',
      type: 'DRM_FWM',
      aspectRatio: false,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: true
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('456_drm_fwm_h264_h265_uhd_fhd_hd_cmaf', () => {
  it('456_drm_fwm_h264_h265_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '456_drm_fwm_h264_h265_uhd_fhd_hd_cmaf',
      cid: 'test',
      inputCodec: 'H264',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'CMAF',
      outputCodec: 'H265',
      type: 'DRM_FWM',
      aspectRatio: false,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: false
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('457_drm_fwm_h264_h265_uhd_fhd_hd_cmaf', () => {
  it('457_drm_fwm_h264_h265_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '457_drm_fwm_h264_h265_uhd_fhd_hd_cmaf',
      cid: 'test',
      inputCodec: 'H264',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'CMAF',
      outputCodec: 'H265',
      type: 'DRM_FWM',
      aspectRatio: false,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: true
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('458_drm_fwm_h264_h265_uhd_fhd_hd_cmaf', () => {
  it('458_drm_fwm_h264_h265_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '458_drm_fwm_h264_h265_uhd_fhd_hd_cmaf',
      cid: 'test',
      inputCodec: 'H264',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'CMAF',
      outputCodec: 'H265',
      type: 'DRM_FWM',
      aspectRatio: false,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: false
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('459_drm_fwm_h264_h265_uhd_fhd_hd_cmaf', () => {
  it('459_drm_fwm_h264_h265_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '459_drm_fwm_h264_h265_uhd_fhd_hd_cmaf',
      cid: 'test',
      inputCodec: 'H264',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'CMAF',
      outputCodec: 'H265',
      type: 'DRM_FWM',
      aspectRatio: false,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: true
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('460_drm_fwm_h264_h265_uhd_fhd_hd_cmaf', () => {
  it('460_drm_fwm_h264_h265_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '460_drm_fwm_h264_h265_uhd_fhd_hd_cmaf',
      cid: 'test',
      inputCodec: 'H264',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'CMAF',
      outputCodec: 'H265',
      type: 'DRM_FWM',
      aspectRatio: false,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: false
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('461_drm_fwm_h264_h265_uhd_fhd_hd_cmaf', () => {
  it('461_drm_fwm_h264_h265_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '461_drm_fwm_h264_h265_uhd_fhd_hd_cmaf',
      cid: 'test',
      inputCodec: 'H264',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'CMAF',
      outputCodec: 'H265',
      type: 'DRM_FWM',
      aspectRatio: false,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: true
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('462_drm_fwm_h264_h265_uhd_fhd_hd_cmaf', () => {
  it('462_drm_fwm_h264_h265_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '462_drm_fwm_h264_h265_uhd_fhd_hd_cmaf',
      cid: 'test',
      inputCodec: 'H264',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'CMAF',
      outputCodec: 'H265',
      type: 'DRM_FWM',
      aspectRatio: false,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: false
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('463_drm_fwm_h264_h265_uhd_fhd_hd_cmaf', () => {
  it('463_drm_fwm_h264_h265_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '463_drm_fwm_h264_h265_uhd_fhd_hd_cmaf',
      cid: 'test',
      inputCodec: 'H264',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'CMAF',
      outputCodec: 'H265',
      type: 'DRM_FWM',
      aspectRatio: false,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: true
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('464_drm_fwm_h264_h265_uhd_fhd_hd_cmaf', () => {
  it('464_drm_fwm_h264_h265_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '464_drm_fwm_h264_h265_uhd_fhd_hd_cmaf',
      cid: 'test',
      inputCodec: 'H264',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'CMAF',
      outputCodec: 'H265',
      type: 'DRM_FWM',
      aspectRatio: false,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: false
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('465_drm_fwm_h264_h265_uhd_fhd_hd_dash_hls', () => {
  it('465_drm_fwm_h264_h265_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '465_drm_fwm_h264_h265_uhd_fhd_hd_dash_hls',
      cid: 'test',
      inputCodec: 'H264',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'DASH_HLS',
      outputCodec: 'H265',
      type: 'DRM_FWM',
      aspectRatio: false,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: true
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('466_drm_fwm_h264_h265_uhd_fhd_hd_dash_hls', () => {
  it('466_drm_fwm_h264_h265_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '466_drm_fwm_h264_h265_uhd_fhd_hd_dash_hls',
      cid: 'test',
      inputCodec: 'H264',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'DASH_HLS',
      outputCodec: 'H265',
      type: 'DRM_FWM',
      aspectRatio: false,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: false
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('467_drm_fwm_h264_h265_uhd_fhd_hd_dash_hls', () => {
  it('467_drm_fwm_h264_h265_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '467_drm_fwm_h264_h265_uhd_fhd_hd_dash_hls',
      cid: 'test',
      inputCodec: 'H264',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'DASH_HLS',
      outputCodec: 'H265',
      type: 'DRM_FWM',
      aspectRatio: false,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: true
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('468_drm_fwm_h264_h265_uhd_fhd_hd_dash_hls', () => {
  it('468_drm_fwm_h264_h265_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '468_drm_fwm_h264_h265_uhd_fhd_hd_dash_hls',
      cid: 'test',
      inputCodec: 'H264',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'DASH_HLS',
      outputCodec: 'H265',
      type: 'DRM_FWM',
      aspectRatio: false,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: false
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('469_drm_fwm_h264_h265_uhd_fhd_hd_dash_hls', () => {
  it('469_drm_fwm_h264_h265_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '469_drm_fwm_h264_h265_uhd_fhd_hd_dash_hls',
      cid: 'test',
      inputCodec: 'H264',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'DASH_HLS',
      outputCodec: 'H265',
      type: 'DRM_FWM',
      aspectRatio: false,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: true
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('470_drm_fwm_h264_h265_uhd_fhd_hd_dash_hls', () => {
  it('470_drm_fwm_h264_h265_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '470_drm_fwm_h264_h265_uhd_fhd_hd_dash_hls',
      cid: 'test',
      inputCodec: 'H264',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'DASH_HLS',
      outputCodec: 'H265',
      type: 'DRM_FWM',
      aspectRatio: false,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: false
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('471_drm_fwm_h264_h265_uhd_fhd_hd_dash_hls', () => {
  it('471_drm_fwm_h264_h265_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '471_drm_fwm_h264_h265_uhd_fhd_hd_dash_hls',
      cid: 'test',
      inputCodec: 'H264',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'DASH_HLS',
      outputCodec: 'H265',
      type: 'DRM_FWM',
      aspectRatio: false,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: true
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('472_drm_fwm_h264_h265_uhd_fhd_hd_dash_hls', () => {
  it('472_drm_fwm_h264_h265_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '472_drm_fwm_h264_h265_uhd_fhd_hd_dash_hls',
      cid: 'test',
      inputCodec: 'H264',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'DASH_HLS',
      outputCodec: 'H265',
      type: 'DRM_FWM',
      aspectRatio: false,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: false
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('473_drm_fwm_h264_h265_uhd_fhd_hd_dash_hls', () => {
  it('473_drm_fwm_h264_h265_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '473_drm_fwm_h264_h265_uhd_fhd_hd_dash_hls',
      cid: 'test',
      inputCodec: 'H264',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'DASH_HLS',
      outputCodec: 'H265',
      type: 'DRM_FWM',
      aspectRatio: false,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: true
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('474_drm_fwm_h264_h265_uhd_fhd_hd_dash_hls', () => {
  it('474_drm_fwm_h264_h265_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '474_drm_fwm_h264_h265_uhd_fhd_hd_dash_hls',
      cid: 'test',
      inputCodec: 'H264',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'DASH_HLS',
      outputCodec: 'H265',
      type: 'DRM_FWM',
      aspectRatio: false,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: false
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('475_drm_fwm_h264_h265_uhd_fhd_hd_dash_hls', () => {
  it('475_drm_fwm_h264_h265_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '475_drm_fwm_h264_h265_uhd_fhd_hd_dash_hls',
      cid: 'test',
      inputCodec: 'H264',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'DASH_HLS',
      outputCodec: 'H265',
      type: 'DRM_FWM',
      aspectRatio: false,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: true
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('476_drm_fwm_h264_h265_uhd_fhd_hd_dash_hls', () => {
  it('476_drm_fwm_h264_h265_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '476_drm_fwm_h264_h265_uhd_fhd_hd_dash_hls',
      cid: 'test',
      inputCodec: 'H264',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'DASH_HLS',
      outputCodec: 'H265',
      type: 'DRM_FWM',
      aspectRatio: false,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: false
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('477_drm_fwm_h264_h265_uhd_fhd_hd_dash_hls', () => {
  it('477_drm_fwm_h264_h265_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '477_drm_fwm_h264_h265_uhd_fhd_hd_dash_hls',
      cid: 'test',
      inputCodec: 'H264',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'DASH_HLS',
      outputCodec: 'H265',
      type: 'DRM_FWM',
      aspectRatio: false,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: true
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('478_drm_fwm_h264_h265_uhd_fhd_hd_dash_hls', () => {
  it('478_drm_fwm_h264_h265_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '478_drm_fwm_h264_h265_uhd_fhd_hd_dash_hls',
      cid: 'test',
      inputCodec: 'H264',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'DASH_HLS',
      outputCodec: 'H265',
      type: 'DRM_FWM',
      aspectRatio: false,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: false
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('479_drm_fwm_h264_h265_uhd_fhd_hd_dash_hls', () => {
  it('479_drm_fwm_h264_h265_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '479_drm_fwm_h264_h265_uhd_fhd_hd_dash_hls',
      cid: 'test',
      inputCodec: 'H264',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'DASH_HLS',
      outputCodec: 'H265',
      type: 'DRM_FWM',
      aspectRatio: false,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: true
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('480_drm_fwm_h264_h265_uhd_fhd_hd_dash_hls', () => {
  it('480_drm_fwm_h264_h265_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '480_drm_fwm_h264_h265_uhd_fhd_hd_dash_hls',
      cid: 'test',
      inputCodec: 'H264',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'DASH_HLS',
      outputCodec: 'H265',
      type: 'DRM_FWM',
      aspectRatio: false,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: false
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('481_drm_fwm_h265_h265_uhd_fhd_hd_cmaf', () => {
  it('481_drm_fwm_h265_h265_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '481_drm_fwm_h265_h265_uhd_fhd_hd_cmaf',
      cid: 'test',
      inputCodec: 'H265',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'CMAF',
      outputCodec: 'H265',
      type: 'DRM_FWM',
      aspectRatio: false,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: true
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('482_drm_fwm_h265_h265_uhd_fhd_hd_cmaf', () => {
  it('482_drm_fwm_h265_h265_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '482_drm_fwm_h265_h265_uhd_fhd_hd_cmaf',
      cid: 'test',
      inputCodec: 'H265',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'CMAF',
      outputCodec: 'H265',
      type: 'DRM_FWM',
      aspectRatio: false,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: false
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('483_drm_fwm_h265_h265_uhd_fhd_hd_cmaf', () => {
  it('483_drm_fwm_h265_h265_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '483_drm_fwm_h265_h265_uhd_fhd_hd_cmaf',
      cid: 'test',
      inputCodec: 'H265',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'CMAF',
      outputCodec: 'H265',
      type: 'DRM_FWM',
      aspectRatio: false,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: true
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('484_drm_fwm_h265_h265_uhd_fhd_hd_cmaf', () => {
  it('484_drm_fwm_h265_h265_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '484_drm_fwm_h265_h265_uhd_fhd_hd_cmaf',
      cid: 'test',
      inputCodec: 'H265',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'CMAF',
      outputCodec: 'H265',
      type: 'DRM_FWM',
      aspectRatio: false,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: false
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('485_drm_fwm_h265_h265_uhd_fhd_hd_cmaf', () => {
  it('485_drm_fwm_h265_h265_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '485_drm_fwm_h265_h265_uhd_fhd_hd_cmaf',
      cid: 'test',
      inputCodec: 'H265',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'CMAF',
      outputCodec: 'H265',
      type: 'DRM_FWM',
      aspectRatio: false,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: true
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('486_drm_fwm_h265_h265_uhd_fhd_hd_cmaf', () => {
  it('486_drm_fwm_h265_h265_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '486_drm_fwm_h265_h265_uhd_fhd_hd_cmaf',
      cid: 'test',
      inputCodec: 'H265',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'CMAF',
      outputCodec: 'H265',
      type: 'DRM_FWM',
      aspectRatio: false,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: false
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('487_drm_fwm_h265_h265_uhd_fhd_hd_cmaf', () => {
  it('487_drm_fwm_h265_h265_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '487_drm_fwm_h265_h265_uhd_fhd_hd_cmaf',
      cid: 'test',
      inputCodec: 'H265',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'CMAF',
      outputCodec: 'H265',
      type: 'DRM_FWM',
      aspectRatio: false,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: true
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('488_drm_fwm_h265_h265_uhd_fhd_hd_cmaf', () => {
  it('488_drm_fwm_h265_h265_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '488_drm_fwm_h265_h265_uhd_fhd_hd_cmaf',
      cid: 'test',
      inputCodec: 'H265',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'CMAF',
      outputCodec: 'H265',
      type: 'DRM_FWM',
      aspectRatio: false,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: false
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('489_drm_fwm_h265_h265_uhd_fhd_hd_cmaf', () => {
  it('489_drm_fwm_h265_h265_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '489_drm_fwm_h265_h265_uhd_fhd_hd_cmaf',
      cid: 'test',
      inputCodec: 'H265',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'CMAF',
      outputCodec: 'H265',
      type: 'DRM_FWM',
      aspectRatio: false,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: true
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('490_drm_fwm_h265_h265_uhd_fhd_hd_cmaf', () => {
  it('490_drm_fwm_h265_h265_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '490_drm_fwm_h265_h265_uhd_fhd_hd_cmaf',
      cid: 'test',
      inputCodec: 'H265',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'CMAF',
      outputCodec: 'H265',
      type: 'DRM_FWM',
      aspectRatio: false,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: false
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('491_drm_fwm_h265_h265_uhd_fhd_hd_cmaf', () => {
  it('491_drm_fwm_h265_h265_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '491_drm_fwm_h265_h265_uhd_fhd_hd_cmaf',
      cid: 'test',
      inputCodec: 'H265',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'CMAF',
      outputCodec: 'H265',
      type: 'DRM_FWM',
      aspectRatio: false,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: true
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('492_drm_fwm_h265_h265_uhd_fhd_hd_cmaf', () => {
  it('492_drm_fwm_h265_h265_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '492_drm_fwm_h265_h265_uhd_fhd_hd_cmaf',
      cid: 'test',
      inputCodec: 'H265',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'CMAF',
      outputCodec: 'H265',
      type: 'DRM_FWM',
      aspectRatio: false,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: false
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('493_drm_fwm_h265_h265_uhd_fhd_hd_cmaf', () => {
  it('493_drm_fwm_h265_h265_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '493_drm_fwm_h265_h265_uhd_fhd_hd_cmaf',
      cid: 'test',
      inputCodec: 'H265',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'CMAF',
      outputCodec: 'H265',
      type: 'DRM_FWM',
      aspectRatio: false,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: true
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('494_drm_fwm_h265_h265_uhd_fhd_hd_cmaf', () => {
  it('494_drm_fwm_h265_h265_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '494_drm_fwm_h265_h265_uhd_fhd_hd_cmaf',
      cid: 'test',
      inputCodec: 'H265',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'CMAF',
      outputCodec: 'H265',
      type: 'DRM_FWM',
      aspectRatio: false,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: false
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('495_drm_fwm_h265_h265_uhd_fhd_hd_cmaf', () => {
  it('495_drm_fwm_h265_h265_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '495_drm_fwm_h265_h265_uhd_fhd_hd_cmaf',
      cid: 'test',
      inputCodec: 'H265',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'CMAF',
      outputCodec: 'H265',
      type: 'DRM_FWM',
      aspectRatio: false,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: true
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('496_drm_fwm_h265_h265_uhd_fhd_hd_cmaf', () => {
  it('496_drm_fwm_h265_h265_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '496_drm_fwm_h265_h265_uhd_fhd_hd_cmaf',
      cid: 'test',
      inputCodec: 'H265',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'CMAF',
      outputCodec: 'H265',
      type: 'DRM_FWM',
      aspectRatio: false,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: false
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('497_drm_fwm_h265_h265_uhd_fhd_hd_dash_hls', () => {
  it('497_drm_fwm_h265_h265_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '497_drm_fwm_h265_h265_uhd_fhd_hd_dash_hls',
      cid: 'test',
      inputCodec: 'H265',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'DASH_HLS',
      outputCodec: 'H265',
      type: 'DRM_FWM',
      aspectRatio: false,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: true
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('498_drm_fwm_h265_h265_uhd_fhd_hd_dash_hls', () => {
  it('498_drm_fwm_h265_h265_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '498_drm_fwm_h265_h265_uhd_fhd_hd_dash_hls',
      cid: 'test',
      inputCodec: 'H265',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'DASH_HLS',
      outputCodec: 'H265',
      type: 'DRM_FWM',
      aspectRatio: false,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: false
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('499_drm_fwm_h265_h265_uhd_fhd_hd_dash_hls', () => {
  it('499_drm_fwm_h265_h265_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '499_drm_fwm_h265_h265_uhd_fhd_hd_dash_hls',
      cid: 'test',
      inputCodec: 'H265',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'DASH_HLS',
      outputCodec: 'H265',
      type: 'DRM_FWM',
      aspectRatio: false,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: true
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('500_drm_fwm_h265_h265_uhd_fhd_hd_dash_hls', () => {
  it('500_drm_fwm_h265_h265_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '500_drm_fwm_h265_h265_uhd_fhd_hd_dash_hls',
      cid: 'test',
      inputCodec: 'H265',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'DASH_HLS',
      outputCodec: 'H265',
      type: 'DRM_FWM',
      aspectRatio: false,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: false
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('501_drm_fwm_h265_h265_uhd_fhd_hd_dash_hls', () => {
  it('501_drm_fwm_h265_h265_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '501_drm_fwm_h265_h265_uhd_fhd_hd_dash_hls',
      cid: 'test',
      inputCodec: 'H265',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'DASH_HLS',
      outputCodec: 'H265',
      type: 'DRM_FWM',
      aspectRatio: false,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: true
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('502_drm_fwm_h265_h265_uhd_fhd_hd_dash_hls', () => {
  it('502_drm_fwm_h265_h265_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '502_drm_fwm_h265_h265_uhd_fhd_hd_dash_hls',
      cid: 'test',
      inputCodec: 'H265',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'DASH_HLS',
      outputCodec: 'H265',
      type: 'DRM_FWM',
      aspectRatio: false,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: false
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('503_drm_fwm_h265_h265_uhd_fhd_hd_dash_hls', () => {
  it('503_drm_fwm_h265_h265_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '503_drm_fwm_h265_h265_uhd_fhd_hd_dash_hls',
      cid: 'test',
      inputCodec: 'H265',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'DASH_HLS',
      outputCodec: 'H265',
      type: 'DRM_FWM',
      aspectRatio: false,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: true
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('504_drm_fwm_h265_h265_uhd_fhd_hd_dash_hls', () => {
  it('504_drm_fwm_h265_h265_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '504_drm_fwm_h265_h265_uhd_fhd_hd_dash_hls',
      cid: 'test',
      inputCodec: 'H265',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'DASH_HLS',
      outputCodec: 'H265',
      type: 'DRM_FWM',
      aspectRatio: false,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: false
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('505_drm_fwm_h265_h265_uhd_fhd_hd_dash_hls', () => {
  it('505_drm_fwm_h265_h265_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '505_drm_fwm_h265_h265_uhd_fhd_hd_dash_hls',
      cid: 'test',
      inputCodec: 'H265',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'DASH_HLS',
      outputCodec: 'H265',
      type: 'DRM_FWM',
      aspectRatio: false,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: true
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('506_drm_fwm_h265_h265_uhd_fhd_hd_dash_hls', () => {
  it('506_drm_fwm_h265_h265_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '506_drm_fwm_h265_h265_uhd_fhd_hd_dash_hls',
      cid: 'test',
      inputCodec: 'H265',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'DASH_HLS',
      outputCodec: 'H265',
      type: 'DRM_FWM',
      aspectRatio: false,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: false
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('507_drm_fwm_h265_h265_uhd_fhd_hd_dash_hls', () => {
  it('507_drm_fwm_h265_h265_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '507_drm_fwm_h265_h265_uhd_fhd_hd_dash_hls',
      cid: 'test',
      inputCodec: 'H265',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'DASH_HLS',
      outputCodec: 'H265',
      type: 'DRM_FWM',
      aspectRatio: false,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: true
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('508_drm_fwm_h265_h265_uhd_fhd_hd_dash_hls', () => {
  it('508_drm_fwm_h265_h265_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '508_drm_fwm_h265_h265_uhd_fhd_hd_dash_hls',
      cid: 'test',
      inputCodec: 'H265',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'DASH_HLS',
      outputCodec: 'H265',
      type: 'DRM_FWM',
      aspectRatio: false,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: false
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('509_drm_fwm_h265_h265_uhd_fhd_hd_dash_hls', () => {
  it('509_drm_fwm_h265_h265_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '509_drm_fwm_h265_h265_uhd_fhd_hd_dash_hls',
      cid: 'test',
      inputCodec: 'H265',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'DASH_HLS',
      outputCodec: 'H265',
      type: 'DRM_FWM',
      aspectRatio: false,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: true
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('510_drm_fwm_h265_h265_uhd_fhd_hd_dash_hls', () => {
  it('510_drm_fwm_h265_h265_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '510_drm_fwm_h265_h265_uhd_fhd_hd_dash_hls',
      cid: 'test',
      inputCodec: 'H265',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'DASH_HLS',
      outputCodec: 'H265',
      type: 'DRM_FWM',
      aspectRatio: false,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: false
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('511_drm_fwm_h265_h265_uhd_fhd_hd_dash_hls', () => {
  it('511_drm_fwm_h265_h265_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '511_drm_fwm_h265_h265_uhd_fhd_hd_dash_hls',
      cid: 'test',
      inputCodec: 'H265',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'DASH_HLS',
      outputCodec: 'H265',
      type: 'DRM_FWM',
      aspectRatio: false,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: true
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});

describe('512_drm_fwm_h265_h265_uhd_fhd_hd_dash_hls', () => {
  it('512_drm_fwm_h265_h265_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login();

    cy.createDRMTask({
      taskName: '512_drm_fwm_h265_h265_uhd_fhd_hd_dash_hls',
      cid: 'test',
      inputCodec: 'H265',
      resolutionProfile: 'UHD_FHD_HD',
      streamingFormat: 'DASH_HLS',
      outputCodec: 'H265',
      type: 'DRM_FWM',
      aspectRatio: false,
      audioEncryption: false,
      multiKey: false,
      multiManifest: false,
      drmOff: false
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(`테스트 실패: ${this.currentTest.title}`);
      cy.screenshot(`실패_${this.currentTest.title}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
      testStats.failed++;
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});
