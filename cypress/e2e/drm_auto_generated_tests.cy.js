
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


// describe('1_drm_h264_h264_uhd_fhd_fhd_hd_hd_sd_cmaf', () => {
//   it('1_drm_h264_h264_uhd_fhd_fhd_hd_hd_sd_cmaf 작업생성', function() {
//     cy.viewport(1280, 720);
//     cy.login('jcg@inka.co.kr', 'Say1013!');

//     cy.createDRMTask({
//       taskName: '1_drm_h264_h264_uhd_fhd_fhd_hd_hd_sd_cmaf',
//       cid: 'test',
//       inputCodec: 'H264',
//       resolutionProfile: 'UHD_FHD_FHD_HD_HD_SD',
//       streamingFormat: 'CMAF',
//       outputCodec: 'H264',
//       type: 'DRM',
//       aspectRatio: true,
//       audioEncryption: false,
//       multiKey: false,
//       multiManifest: false,
//       drmOff: true
//     });
//   });

//   afterEach(function() {
//     if (this.currentTest.state === 'failed') {
//       cy.writelog(`테스트 실패: ${this.currentTest.title}`);
//       cy.screenshot(`실패_${this.currentTest.title}`);
//     }
//   });
// });


// describe('2_drm_h264_h264_uhd_fhd_fhd_hd_hd_sd_cmaf', () => {
//   it('2_drm_h264_h264_uhd_fhd_fhd_hd_hd_sd_cmaf 작업생성', function() {
//     cy.viewport(1280, 720);
//     cy.login('jcg@inka.co.kr', 'Say1013!');

//     cy.createDRMTask({
//       taskName: '2_drm_h264_h264_uhd_fhd_fhd_hd_hd_sd_cmaf',
//       cid: 'test',
//       inputCodec: 'H264',
//       resolutionProfile: 'UHD_FHD_FHD_HD_HD_SD',
//       streamingFormat: 'CMAF',
//       outputCodec: 'H264',
//       type: 'DRM',
//       aspectRatio: true,
//       audioEncryption: false,
//       multiKey: false,
//       multiManifest: false,
//       drmOff: false
//     });
//   });

//   afterEach(function() {
//     if (this.currentTest.state === 'failed') {
//       cy.writelog(`테스트 실패: ${this.currentTest.title}`);
//       cy.screenshot(`실패_${this.currentTest.title}`);
//     }
//   });
// });


// describe('3_drm_h264_h264_uhd_fhd_fhd_hd_hd_sd_cmaf', () => {
//   it('3_drm_h264_h264_uhd_fhd_fhd_hd_hd_sd_cmaf 작업생성', function() {
//     cy.viewport(1280, 720);
//     cy.login('jcg@inka.co.kr', 'Say1013!');

//     cy.createDRMTask({
//       taskName: '3_drm_h264_h264_uhd_fhd_fhd_hd_hd_sd_cmaf',
//       cid: 'test',
//       inputCodec: 'H264',
//       resolutionProfile: 'UHD_FHD_FHD_HD_HD_SD',
//       streamingFormat: 'CMAF',
//       outputCodec: 'H264',
//       type: 'DRM',
//       aspectRatio: true,
//       audioEncryption: false,
//       multiKey: false,
//       multiManifest: false,
//       drmOff: true
//     });
//   });

//   afterEach(function() {
//     if (this.currentTest.state === 'failed') {
//       cy.writelog(`테스트 실패: ${this.currentTest.title}`);
//       cy.screenshot(`실패_${this.currentTest.title}`);
//     }
//   });
// });


// describe('4_drm_h264_h264_uhd_fhd_fhd_hd_hd_sd_cmaf', () => {
//   it('4_drm_h264_h264_uhd_fhd_fhd_hd_hd_sd_cmaf 작업생성', function() {
//     cy.viewport(1280, 720);
//     cy.login('jcg@inka.co.kr', 'Say1013!');

//     cy.createDRMTask({
//       taskName: '4_drm_h264_h264_uhd_fhd_fhd_hd_hd_sd_cmaf',
//       cid: 'test',
//       inputCodec: 'H264',
//       resolutionProfile: 'UHD_FHD_FHD_HD_HD_SD',
//       streamingFormat: 'CMAF',
//       outputCodec: 'H264',
//       type: 'DRM',
//       aspectRatio: true,
//       audioEncryption: false,
//       multiKey: false,
//       multiManifest: false,
//       drmOff: false
//     });
//   });

//   afterEach(function() {
//     if (this.currentTest.state === 'failed') {
//       cy.writelog(`테스트 실패: ${this.currentTest.title}`);
//       cy.screenshot(`실패_${this.currentTest.title}`);
//     }
//   });
// });


// describe('5_drm_h264_h264_uhd_fhd_fhd_hd_hd_sd_cmaf', () => {
//   it('5_drm_h264_h264_uhd_fhd_fhd_hd_hd_sd_cmaf 작업생성', function() {
//     cy.viewport(1280, 720);
//     cy.login('jcg@inka.co.kr', 'Say1013!');

//     cy.createDRMTask({
//       taskName: '5_drm_h264_h264_uhd_fhd_fhd_hd_hd_sd_cmaf',
//       cid: 'test',
//       inputCodec: 'H264',
//       resolutionProfile: 'UHD_FHD_FHD_HD_HD_SD',
//       streamingFormat: 'CMAF',
//       outputCodec: 'H264',
//       type: 'DRM',
//       aspectRatio: true,
//       audioEncryption: false,
//       multiKey: false,
//       multiManifest: false,
//       drmOff: true
//     });
//   });

//   afterEach(function() {
//     if (this.currentTest.state === 'failed') {
//       cy.writelog(`테스트 실패: ${this.currentTest.title}`);
//       cy.screenshot(`실패_${this.currentTest.title}`);
//     }
//   });
// });


// describe('6_drm_h264_h264_uhd_fhd_fhd_hd_hd_sd_cmaf', () => {
//   it('6_drm_h264_h264_uhd_fhd_fhd_hd_hd_sd_cmaf 작업생성', function() {
//     cy.viewport(1280, 720);
//     cy.login('jcg@inka.co.kr', 'Say1013!');

//     cy.createDRMTask({
//       taskName: '6_drm_h264_h264_uhd_fhd_fhd_hd_hd_sd_cmaf',
//       cid: 'test',
//       inputCodec: 'H264',
//       resolutionProfile: 'UHD_FHD_FHD_HD_HD_SD',
//       streamingFormat: 'CMAF',
//       outputCodec: 'H264',
//       type: 'DRM',
//       aspectRatio: true,
//       audioEncryption: false,
//       multiKey: false,
//       multiManifest: false,
//       drmOff: false
//     });
//   });

//   afterEach(function() {
//     if (this.currentTest.state === 'failed') {
//       cy.writelog(`테스트 실패: ${this.currentTest.title}`);
//       cy.screenshot(`실패_${this.currentTest.title}`);
//     }
//   });
// });


// describe('7_drm_h264_h264_uhd_fhd_fhd_hd_hd_sd_cmaf', () => {
//   it('7_drm_h264_h264_uhd_fhd_fhd_hd_hd_sd_cmaf 작업생성', function() {
//     cy.viewport(1280, 720);
//     cy.login('jcg@inka.co.kr', 'Say1013!');

//     cy.createDRMTask({
//       taskName: '7_drm_h264_h264_uhd_fhd_fhd_hd_hd_sd_cmaf',
//       cid: 'test',
//       inputCodec: 'H264',
//       resolutionProfile: 'UHD_FHD_FHD_HD_HD_SD',
//       streamingFormat: 'CMAF',
//       outputCodec: 'H264',
//       type: 'DRM',
//       aspectRatio: true,
//       audioEncryption: false,
//       multiKey: false,
//       multiManifest: false,
//       drmOff: true
//     });
//   });

//   afterEach(function() {
//     if (this.currentTest.state === 'failed') {
//       cy.writelog(`테스트 실패: ${this.currentTest.title}`);
//       cy.screenshot(`실패_${this.currentTest.title}`);
//     }
//   });
// });


// describe('8_drm_h264_h264_uhd_fhd_fhd_hd_hd_sd_cmaf', () => {
//   it('8_drm_h264_h264_uhd_fhd_fhd_hd_hd_sd_cmaf 작업생성', function() {
//     cy.viewport(1280, 720);
//     cy.login('jcg@inka.co.kr', 'Say1013!');

//     cy.createDRMTask({
//       taskName: '8_drm_h264_h264_uhd_fhd_fhd_hd_hd_sd_cmaf',
//       cid: 'test',
//       inputCodec: 'H264',
//       resolutionProfile: 'UHD_FHD_FHD_HD_HD_SD',
//       streamingFormat: 'CMAF',
//       outputCodec: 'H264',
//       type: 'DRM',
//       aspectRatio: true,
//       audioEncryption: false,
//       multiKey: false,
//       multiManifest: false,
//       drmOff: false
//     });
//   });

//   afterEach(function() {
//     if (this.currentTest.state === 'failed') {
//       cy.writelog(`테스트 실패: ${this.currentTest.title}`);
//       cy.screenshot(`실패_${this.currentTest.title}`);
//     }
//   });
// });


// describe('9_drm_h264_h264_uhd_fhd_fhd_hd_hd_sd_cmaf', () => {
//   it('9_drm_h264_h264_uhd_fhd_fhd_hd_hd_sd_cmaf 작업생성', function() {
//     cy.viewport(1280, 720);
//     cy.login('jcg@inka.co.kr', 'Say1013!');

//     cy.createDRMTask({
//       taskName: '9_drm_h264_h264_uhd_fhd_fhd_hd_hd_sd_cmaf',
//       cid: 'test',
//       inputCodec: 'H264',
//       resolutionProfile: 'UHD_FHD_FHD_HD_HD_SD',
//       streamingFormat: 'CMAF',
//       outputCodec: 'H264',
//       type: 'DRM',
//       aspectRatio: true,
//       audioEncryption: false,
//       multiKey: false,
//       multiManifest: false,
//       drmOff: true
//     });
//   });

//   afterEach(function() {
//     if (this.currentTest.state === 'failed') {
//       cy.writelog(`테스트 실패: ${this.currentTest.title}`);
//       cy.screenshot(`실패_${this.currentTest.title}`);
//     }
//   });
// });


// describe('10_drm_h264_h264_uhd_fhd_fhd_hd_hd_sd_cmaf', () => {
//   it('10_drm_h264_h264_uhd_fhd_fhd_hd_hd_sd_cmaf 작업생성', function() {
//     cy.viewport(1280, 720);
//     cy.login('jcg@inka.co.kr', 'Say1013!');

//     cy.createDRMTask({
//       taskName: '10_drm_h264_h264_uhd_fhd_fhd_hd_hd_sd_cmaf',
//       cid: 'test',
//       inputCodec: 'H264',
//       resolutionProfile: 'UHD_FHD_FHD_HD_HD_SD',
//       streamingFormat: 'CMAF',
//       outputCodec: 'H264',
//       type: 'DRM',
//       aspectRatio: true,
//       audioEncryption: false,
//       multiKey: false,
//       multiManifest: false,
//       drmOff: false
//     });
//   });

//   afterEach(function() {
//     if (this.currentTest.state === 'failed') {
//       cy.writelog(`테스트 실패: ${this.currentTest.title}`);
//       cy.screenshot(`실패_${this.currentTest.title}`);
//     }
//   });
// });


// describe('11_drm_h264_h264_uhd_fhd_fhd_hd_hd_sd_cmaf', () => {
//   it('11_drm_h264_h264_uhd_fhd_fhd_hd_hd_sd_cmaf 작업생성', function() {
//     cy.viewport(1280, 720);
//     cy.login('jcg@inka.co.kr', 'Say1013!');

//     cy.createDRMTask({
//       taskName: '11_drm_h264_h264_uhd_fhd_fhd_hd_hd_sd_cmaf',
//       cid: 'test',
//       inputCodec: 'H264',
//       resolutionProfile: 'UHD_FHD_FHD_HD_HD_SD',
//       streamingFormat: 'CMAF',
//       outputCodec: 'H264',
//       type: 'DRM',
//       aspectRatio: true,
//       audioEncryption: false,
//       multiKey: false,
//       multiManifest: false,
//       drmOff: true
//     });
//   });

//   afterEach(function() {
//     if (this.currentTest.state === 'failed') {
//       cy.writelog(`테스트 실패: ${this.currentTest.title}`);
//       cy.screenshot(`실패_${this.currentTest.title}`);
//     }
//   });
// });


// describe('12_drm_h264_h264_uhd_fhd_fhd_hd_hd_sd_cmaf', () => {
//   it('12_drm_h264_h264_uhd_fhd_fhd_hd_hd_sd_cmaf 작업생성', function() {
//     cy.viewport(1280, 720);
//     cy.login('jcg@inka.co.kr', 'Say1013!');

//     cy.createDRMTask({
//       taskName: '12_drm_h264_h264_uhd_fhd_fhd_hd_hd_sd_cmaf',
//       cid: 'test',
//       inputCodec: 'H264',
//       resolutionProfile: 'UHD_FHD_FHD_HD_HD_SD',
//       streamingFormat: 'CMAF',
//       outputCodec: 'H264',
//       type: 'DRM',
//       aspectRatio: true,
//       audioEncryption: false,
//       multiKey: false,
//       multiManifest: false,
//       drmOff: false
//     });
//   });

//   afterEach(function() {
//     if (this.currentTest.state === 'failed') {
//       cy.writelog(`테스트 실패: ${this.currentTest.title}`);
//       cy.screenshot(`실패_${this.currentTest.title}`);
//     }
//   });
// });


// describe('13_drm_h264_h264_uhd_fhd_fhd_hd_hd_sd_cmaf', () => {
//   it('13_drm_h264_h264_uhd_fhd_fhd_hd_hd_sd_cmaf 작업생성', function() {
//     cy.viewport(1280, 720);
//     cy.login('jcg@inka.co.kr', 'Say1013!');

//     cy.createDRMTask({
//       taskName: '13_drm_h264_h264_uhd_fhd_fhd_hd_hd_sd_cmaf',
//       cid: 'test',
//       inputCodec: 'H264',
//       resolutionProfile: 'UHD_FHD_FHD_HD_HD_SD',
//       streamingFormat: 'CMAF',
//       outputCodec: 'H264',
//       type: 'DRM',
//       aspectRatio: true,
//       audioEncryption: false,
//       multiKey: false,
//       multiManifest: false,
//       drmOff: true
//     });
//   });

//   afterEach(function() {
//     if (this.currentTest.state === 'failed') {
//       cy.writelog(`테스트 실패: ${this.currentTest.title}`);
//       cy.screenshot(`실패_${this.currentTest.title}`);
//     }
//   });
// });


// describe('14_drm_h264_h264_uhd_fhd_fhd_hd_hd_sd_cmaf', () => {
//   it('14_drm_h264_h264_uhd_fhd_fhd_hd_hd_sd_cmaf 작업생성', function() {
//     cy.viewport(1280, 720);
//     cy.login('jcg@inka.co.kr', 'Say1013!');

//     cy.createDRMTask({
//       taskName: '14_drm_h264_h264_uhd_fhd_fhd_hd_hd_sd_cmaf',
//       cid: 'test',
//       inputCodec: 'H264',
//       resolutionProfile: 'UHD_FHD_FHD_HD_HD_SD',
//       streamingFormat: 'CMAF',
//       outputCodec: 'H264',
//       type: 'DRM',
//       aspectRatio: true,
//       audioEncryption: false,
//       multiKey: false,
//       multiManifest: false,
//       drmOff: false
//     });
//   });

//   afterEach(function() {
//     if (this.currentTest.state === 'failed') {
//       cy.writelog(`테스트 실패: ${this.currentTest.title}`);
//       cy.screenshot(`실패_${this.currentTest.title}`);
//     }
//   });
// });


// describe('15_drm_h264_h264_uhd_fhd_fhd_hd_hd_sd_cmaf', () => {
//   it('15_drm_h264_h264_uhd_fhd_fhd_hd_hd_sd_cmaf 작업생성', function() {
//     cy.viewport(1280, 720);
//     cy.login('jcg@inka.co.kr', 'Say1013!');

//     cy.createDRMTask({
//       taskName: '15_drm_h264_h264_uhd_fhd_fhd_hd_hd_sd_cmaf',
//       cid: 'test',
//       inputCodec: 'H264',
//       resolutionProfile: 'UHD_FHD_FHD_HD_HD_SD',
//       streamingFormat: 'CMAF',
//       outputCodec: 'H264',
//       type: 'DRM',
//       aspectRatio: true,
//       audioEncryption: false,
//       multiKey: false,
//       multiManifest: false,
//       drmOff: true
//     });
//   });

//   afterEach(function() {
//     if (this.currentTest.state === 'failed') {
//       cy.writelog(`테스트 실패: ${this.currentTest.title}`);
//       cy.screenshot(`실패_${this.currentTest.title}`);
//     }
//   });
// });


// describe('16_drm_h264_h264_uhd_fhd_fhd_hd_hd_sd_cmaf', () => {
//   it('16_drm_h264_h264_uhd_fhd_fhd_hd_hd_sd_cmaf 작업생성', function() {
//     cy.viewport(1280, 720);
//     cy.login('jcg@inka.co.kr', 'Say1013!');

//     cy.createDRMTask({
//       taskName: '16_drm_h264_h264_uhd_fhd_fhd_hd_hd_sd_cmaf',
//       cid: 'test',
//       inputCodec: 'H264',
//       resolutionProfile: 'UHD_FHD_FHD_HD_HD_SD',
//       streamingFormat: 'CMAF',
//       outputCodec: 'H264',
//       type: 'DRM',
//       aspectRatio: true,
//       audioEncryption: false,
//       multiKey: false,
//       multiManifest: false,
//       drmOff: false
//     });
//   });

//   afterEach(function() {
//     if (this.currentTest.state === 'failed') {
//       cy.writelog(`테스트 실패: ${this.currentTest.title}`);
//       cy.screenshot(`실패_${this.currentTest.title}`);
//     }
//   });
// });


// describe('17_drm_h264_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls', () => {
//   it('17_drm_h264_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls 작업생성', function() {
//     cy.viewport(1280, 720);
//     cy.login('jcg@inka.co.kr', 'Say1013!');

//     cy.createDRMTask({
//       taskName: '17_drm_h264_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls',
//       cid: 'test',
//       inputCodec: 'H264',
//       resolutionProfile: 'UHD_FHD_FHD_HD_HD_SD',
//       streamingFormat: 'DASH_HLS',
//       outputCodec: 'H264',
//       type: 'DRM',
//       aspectRatio: true,
//       audioEncryption: false,
//       multiKey: false,
//       multiManifest: false,
//       drmOff: true
//     });
//   });

//   afterEach(function() {
//     if (this.currentTest.state === 'failed') {
//       cy.writelog(`테스트 실패: ${this.currentTest.title}`);
//       cy.screenshot(`실패_${this.currentTest.title}`);
//     }
//   });
// });


// describe('18_drm_h264_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls', () => {
//   it('18_drm_h264_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls 작업생성', function() {
//     cy.viewport(1280, 720);
//     cy.login('jcg@inka.co.kr', 'Say1013!');

//     cy.createDRMTask({
//       taskName: '18_drm_h264_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls',
//       cid: 'test',
//       inputCodec: 'H264',
//       resolutionProfile: 'UHD_FHD_FHD_HD_HD_SD',
//       streamingFormat: 'DASH_HLS',
//       outputCodec: 'H264',
//       type: 'DRM',
//       aspectRatio: true,
//       audioEncryption: false,
//       multiKey: false,
//       multiManifest: false,
//       drmOff: false
//     });
//   });

//   afterEach(function() {
//     if (this.currentTest.state === 'failed') {
//       cy.writelog(`테스트 실패: ${this.currentTest.title}`);
//       cy.screenshot(`실패_${this.currentTest.title}`);
//     }
//   });
// });


// describe('19_drm_h264_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls', () => {
//   it('19_drm_h264_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls 작업생성', function() {
//     cy.viewport(1280, 720);
//     cy.login('jcg@inka.co.kr', 'Say1013!');

//     cy.createDRMTask({
//       taskName: '19_drm_h264_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls',
//       cid: 'test',
//       inputCodec: 'H264',
//       resolutionProfile: 'UHD_FHD_FHD_HD_HD_SD',
//       streamingFormat: 'DASH_HLS',
//       outputCodec: 'H264',
//       type: 'DRM',
//       aspectRatio: true,
//       audioEncryption: false,
//       multiKey: false,
//       multiManifest: false,
//       drmOff: true
//     });
//   });

//   afterEach(function() {
//     if (this.currentTest.state === 'failed') {
//       cy.writelog(`테스트 실패: ${this.currentTest.title}`);
//       cy.screenshot(`실패_${this.currentTest.title}`);
//     }
//   });
// });


// describe('20_drm_h264_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls', () => {
//   it('20_drm_h264_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls 작업생성', function() {
//     cy.viewport(1280, 720);
//     cy.login('jcg@inka.co.kr', 'Say1013!');

//     cy.createDRMTask({
//       taskName: '20_drm_h264_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls',
//       cid: 'test',
//       inputCodec: 'H264',
//       resolutionProfile: 'UHD_FHD_FHD_HD_HD_SD',
//       streamingFormat: 'DASH_HLS',
//       outputCodec: 'H264',
//       type: 'DRM',
//       aspectRatio: true,
//       audioEncryption: false,
//       multiKey: false,
//       multiManifest: false,
//       drmOff: false
//     });
//   });

//   afterEach(function() {
//     if (this.currentTest.state === 'failed') {
//       cy.writelog(`테스트 실패: ${this.currentTest.title}`);
//       cy.screenshot(`실패_${this.currentTest.title}`);
//     }
//   });
// });


// describe('21_drm_h264_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls', () => {
//   it('21_drm_h264_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls 작업생성', function() {
//     cy.viewport(1280, 720);
//     cy.login('jcg@inka.co.kr', 'Say1013!');

//     cy.createDRMTask({
//       taskName: '21_drm_h264_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls',
//       cid: 'test',
//       inputCodec: 'H264',
//       resolutionProfile: 'UHD_FHD_FHD_HD_HD_SD',
//       streamingFormat: 'DASH_HLS',
//       outputCodec: 'H264',
//       type: 'DRM',
//       aspectRatio: true,
//       audioEncryption: false,
//       multiKey: false,
//       multiManifest: false,
//       drmOff: true
//     });
//   });

//   afterEach(function() {
//     if (this.currentTest.state === 'failed') {
//       cy.writelog(`테스트 실패: ${this.currentTest.title}`);
//       cy.screenshot(`실패_${this.currentTest.title}`);
//     }
//   });
// });


// describe('22_drm_h264_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls', () => {
//   it('22_drm_h264_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls 작업생성', function() {
//     cy.viewport(1280, 720);
//     cy.login('jcg@inka.co.kr', 'Say1013!');

//     cy.createDRMTask({
//       taskName: '22_drm_h264_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls',
//       cid: 'test',
//       inputCodec: 'H264',
//       resolutionProfile: 'UHD_FHD_FHD_HD_HD_SD',
//       streamingFormat: 'DASH_HLS',
//       outputCodec: 'H264',
//       type: 'DRM',
//       aspectRatio: true,
//       audioEncryption: false,
//       multiKey: false,
//       multiManifest: false,
//       drmOff: false
//     });
//   });

//   afterEach(function() {
//     if (this.currentTest.state === 'failed') {
//       cy.writelog(`테스트 실패: ${this.currentTest.title}`);
//       cy.screenshot(`실패_${this.currentTest.title}`);
//     }
//   });
// });


// describe('23_drm_h264_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls', () => {
//   it('23_drm_h264_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls 작업생성', function() {
//     cy.viewport(1280, 720);
//     cy.login('jcg@inka.co.kr', 'Say1013!');

//     cy.createDRMTask({
//       taskName: '23_drm_h264_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls',
//       cid: 'test',
//       inputCodec: 'H264',
//       resolutionProfile: 'UHD_FHD_FHD_HD_HD_SD',
//       streamingFormat: 'DASH_HLS',
//       outputCodec: 'H264',
//       type: 'DRM',
//       aspectRatio: true,
//       audioEncryption: false,
//       multiKey: false,
//       multiManifest: false,
//       drmOff: true
//     });
//   });

//   afterEach(function() {
//     if (this.currentTest.state === 'failed') {
//       cy.writelog(`테스트 실패: ${this.currentTest.title}`);
//       cy.screenshot(`실패_${this.currentTest.title}`);
//     }
//   });
// });


// describe('24_drm_h264_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls', () => {
//   it('24_drm_h264_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls 작업생성', function() {
//     cy.viewport(1280, 720);
//     cy.login('jcg@inka.co.kr', 'Say1013!');

//     cy.createDRMTask({
//       taskName: '24_drm_h264_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls',
//       cid: 'test',
//       inputCodec: 'H264',
//       resolutionProfile: 'UHD_FHD_FHD_HD_HD_SD',
//       streamingFormat: 'DASH_HLS',
//       outputCodec: 'H264',
//       type: 'DRM',
//       aspectRatio: true,
//       audioEncryption: false,
//       multiKey: false,
//       multiManifest: false,
//       drmOff: false
//     });
//   });

//   afterEach(function() {
//     if (this.currentTest.state === 'failed') {
//       cy.writelog(`테스트 실패: ${this.currentTest.title}`);
//       cy.screenshot(`실패_${this.currentTest.title}`);
//     }
//   });
// });


// describe('25_drm_h264_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls', () => {
//   it('25_drm_h264_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls 작업생성', function() {
//     cy.viewport(1280, 720);
//     cy.login('jcg@inka.co.kr', 'Say1013!');

//     cy.createDRMTask({
//       taskName: '25_drm_h264_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls',
//       cid: 'test',
//       inputCodec: 'H264',
//       resolutionProfile: 'UHD_FHD_FHD_HD_HD_SD',
//       streamingFormat: 'DASH_HLS',
//       outputCodec: 'H264',
//       type: 'DRM',
//       aspectRatio: true,
//       audioEncryption: false,
//       multiKey: false,
//       multiManifest: false,
//       drmOff: true
//     });
//   });

//   afterEach(function() {
//     if (this.currentTest.state === 'failed') {
//       cy.writelog(`테스트 실패: ${this.currentTest.title}`);
//       cy.screenshot(`실패_${this.currentTest.title}`);
//     }
//   });
// });


// describe('26_drm_h264_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls', () => {
//   it('26_drm_h264_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls 작업생성', function() {
//     cy.viewport(1280, 720);
//     cy.login('jcg@inka.co.kr', 'Say1013!');

//     cy.createDRMTask({
//       taskName: '26_drm_h264_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls',
//       cid: 'test',
//       inputCodec: 'H264',
//       resolutionProfile: 'UHD_FHD_FHD_HD_HD_SD',
//       streamingFormat: 'DASH_HLS',
//       outputCodec: 'H264',
//       type: 'DRM',
//       aspectRatio: true,
//       audioEncryption: false,
//       multiKey: false,
//       multiManifest: false,
//       drmOff: false
//     });
//   });

//   afterEach(function() {
//     if (this.currentTest.state === 'failed') {
//       cy.writelog(`테스트 실패: ${this.currentTest.title}`);
//       cy.screenshot(`실패_${this.currentTest.title}`);
//     }
//   });
// });


// describe('27_drm_h264_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls', () => {
//   it('27_drm_h264_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls 작업생성', function() {
//     cy.viewport(1280, 720);
//     cy.login('jcg@inka.co.kr', 'Say1013!');

//     cy.createDRMTask({
//       taskName: '27_drm_h264_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls',
//       cid: 'test',
//       inputCodec: 'H264',
//       resolutionProfile: 'UHD_FHD_FHD_HD_HD_SD',
//       streamingFormat: 'DASH_HLS',
//       outputCodec: 'H264',
//       type: 'DRM',
//       aspectRatio: true,
//       audioEncryption: false,
//       multiKey: false,
//       multiManifest: false,
//       drmOff: true
//     });
//   });

//   afterEach(function() {
//     if (this.currentTest.state === 'failed') {
//       cy.writelog(`테스트 실패: ${this.currentTest.title}`);
//       cy.screenshot(`실패_${this.currentTest.title}`);
//     }
//   });
// });


// describe('28_drm_h264_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls', () => {
//   it('28_drm_h264_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls 작업생성', function() {
//     cy.viewport(1280, 720);
//     cy.login('jcg@inka.co.kr', 'Say1013!');

//     cy.createDRMTask({
//       taskName: '28_drm_h264_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls',
//       cid: 'test',
//       inputCodec: 'H264',
//       resolutionProfile: 'UHD_FHD_FHD_HD_HD_SD',
//       streamingFormat: 'DASH_HLS',
//       outputCodec: 'H264',
//       type: 'DRM',
//       aspectRatio: true,
//       audioEncryption: false,
//       multiKey: false,
//       multiManifest: false,
//       drmOff: false
//     });
//   });

//   afterEach(function() {
//     if (this.currentTest.state === 'failed') {
//       cy.writelog(`테스트 실패: ${this.currentTest.title}`);
//       cy.screenshot(`실패_${this.currentTest.title}`);
//     }
//   });
// });


// describe('29_drm_h264_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls', () => {
//   it('29_drm_h264_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls 작업생성', function() {
//     cy.viewport(1280, 720);
//     cy.login('jcg@inka.co.kr', 'Say1013!');

//     cy.createDRMTask({
//       taskName: '29_drm_h264_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls',
//       cid: 'test',
//       inputCodec: 'H264',
//       resolutionProfile: 'UHD_FHD_FHD_HD_HD_SD',
//       streamingFormat: 'DASH_HLS',
//       outputCodec: 'H264',
//       type: 'DRM',
//       aspectRatio: true,
//       audioEncryption: false,
//       multiKey: false,
//       multiManifest: false,
//       drmOff: true
//     });
//   });

//   afterEach(function() {
//     if (this.currentTest.state === 'failed') {
//       cy.writelog(`테스트 실패: ${this.currentTest.title}`);
//       cy.screenshot(`실패_${this.currentTest.title}`);
//     }
//   });
// });


// describe('30_drm_h264_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls', () => {
//   it('30_drm_h264_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls 작업생성', function() {
//     cy.viewport(1280, 720);
//     cy.login('jcg@inka.co.kr', 'Say1013!');

//     cy.createDRMTask({
//       taskName: '30_drm_h264_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls',
//       cid: 'test',
//       inputCodec: 'H264',
//       resolutionProfile: 'UHD_FHD_FHD_HD_HD_SD',
//       streamingFormat: 'DASH_HLS',
//       outputCodec: 'H264',
//       type: 'DRM',
//       aspectRatio: true,
//       audioEncryption: false,
//       multiKey: false,
//       multiManifest: false,
//       drmOff: false
//     });
//   });

//   afterEach(function() {
//     if (this.currentTest.state === 'failed') {
//       cy.writelog(`테스트 실패: ${this.currentTest.title}`);
//       cy.screenshot(`실패_${this.currentTest.title}`);
//     }
//   });
// });


// describe('31_drm_h264_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls', () => {
//   it('31_drm_h264_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls 작업생성', function() {
//     cy.viewport(1280, 720);
//     cy.login('jcg@inka.co.kr', 'Say1013!');

//     cy.createDRMTask({
//       taskName: '31_drm_h264_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls',
//       cid: 'test',
//       inputCodec: 'H264',
//       resolutionProfile: 'UHD_FHD_FHD_HD_HD_SD',
//       streamingFormat: 'DASH_HLS',
//       outputCodec: 'H264',
//       type: 'DRM',
//       aspectRatio: true,
//       audioEncryption: false,
//       multiKey: false,
//       multiManifest: false,
//       drmOff: true
//     });
//   });

//   afterEach(function() {
//     if (this.currentTest.state === 'failed') {
//       cy.writelog(`테스트 실패: ${this.currentTest.title}`);
//       cy.screenshot(`실패_${this.currentTest.title}`);
//     }
//   });
// });


// describe('32_drm_h264_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls', () => {
//   it('32_drm_h264_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls 작업생성', function() {
//     cy.viewport(1280, 720);
//     cy.login('jcg@inka.co.kr', 'Say1013!');

//     cy.createDRMTask({
//       taskName: '32_drm_h264_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls',
//       cid: 'test',
//       inputCodec: 'H264',
//       resolutionProfile: 'UHD_FHD_FHD_HD_HD_SD',
//       streamingFormat: 'DASH_HLS',
//       outputCodec: 'H264',
//       type: 'DRM',
//       aspectRatio: true,
//       audioEncryption: false,
//       multiKey: false,
//       multiManifest: false,
//       drmOff: false
//     });
//   });

//   afterEach(function() {
//     if (this.currentTest.state === 'failed') {
//       cy.writelog(`테스트 실패: ${this.currentTest.title}`);
//       cy.screenshot(`실패_${this.currentTest.title}`);
//     }
//   });
// });


// describe('33_drm_h265_h264_uhd_fhd_fhd_hd_hd_sd_cmaf', () => {
//   it('33_drm_h265_h264_uhd_fhd_fhd_hd_hd_sd_cmaf 작업생성', function() {
//     cy.viewport(1280, 720);
//     cy.login('jcg@inka.co.kr', 'Say1013!');

//     cy.createDRMTask({
//       taskName: '33_drm_h265_h264_uhd_fhd_fhd_hd_hd_sd_cmaf',
//       cid: 'test',
//       inputCodec: 'H265',
//       resolutionProfile: 'UHD_FHD_FHD_HD_HD_SD',
//       streamingFormat: 'CMAF',
//       outputCodec: 'H264',
//       type: 'DRM',
//       aspectRatio: true,
//       audioEncryption: false,
//       multiKey: false,
//       multiManifest: false,
//       drmOff: true
//     });
//   });

//   afterEach(function() {
//     if (this.currentTest.state === 'failed') {
//       cy.writelog(`테스트 실패: ${this.currentTest.title}`);
//       cy.screenshot(`실패_${this.currentTest.title}`);
//     }
//   });
// });


// describe('34_drm_h265_h264_uhd_fhd_fhd_hd_hd_sd_cmaf', () => {
//   it('34_drm_h265_h264_uhd_fhd_fhd_hd_hd_sd_cmaf 작업생성', function() {
//     cy.viewport(1280, 720);
//     cy.login('jcg@inka.co.kr', 'Say1013!');

//     cy.createDRMTask({
//       taskName: '34_drm_h265_h264_uhd_fhd_fhd_hd_hd_sd_cmaf',
//       cid: 'test',
//       inputCodec: 'H265',
//       resolutionProfile: 'UHD_FHD_FHD_HD_HD_SD',
//       streamingFormat: 'CMAF',
//       outputCodec: 'H264',
//       type: 'DRM',
//       aspectRatio: true,
//       audioEncryption: false,
//       multiKey: false,
//       multiManifest: false,
//       drmOff: false
//     });
//   });

//   afterEach(function() {
//     if (this.currentTest.state === 'failed') {
//       cy.writelog(`테스트 실패: ${this.currentTest.title}`);
//       cy.screenshot(`실패_${this.currentTest.title}`);
//     }
//   });
// });


// describe('35_drm_h265_h264_uhd_fhd_fhd_hd_hd_sd_cmaf', () => {
//   it('35_drm_h265_h264_uhd_fhd_fhd_hd_hd_sd_cmaf 작업생성', function() {
//     cy.viewport(1280, 720);
//     cy.login('jcg@inka.co.kr', 'Say1013!');

//     cy.createDRMTask({
//       taskName: '35_drm_h265_h264_uhd_fhd_fhd_hd_hd_sd_cmaf',
//       cid: 'test',
//       inputCodec: 'H265',
//       resolutionProfile: 'UHD_FHD_FHD_HD_HD_SD',
//       streamingFormat: 'CMAF',
//       outputCodec: 'H264',
//       type: 'DRM',
//       aspectRatio: true,
//       audioEncryption: false,
//       multiKey: false,
//       multiManifest: false,
//       drmOff: true
//     });
//   });

//   afterEach(function() {
//     if (this.currentTest.state === 'failed') {
//       cy.writelog(`테스트 실패: ${this.currentTest.title}`);
//       cy.screenshot(`실패_${this.currentTest.title}`);
//     }
//   });
// });


// describe('36_drm_h265_h264_uhd_fhd_fhd_hd_hd_sd_cmaf', () => {
//   it('36_drm_h265_h264_uhd_fhd_fhd_hd_hd_sd_cmaf 작업생성', function() {
//     cy.viewport(1280, 720);
//     cy.login('jcg@inka.co.kr', 'Say1013!');

//     cy.createDRMTask({
//       taskName: '36_drm_h265_h264_uhd_fhd_fhd_hd_hd_sd_cmaf',
//       cid: 'test',
//       inputCodec: 'H265',
//       resolutionProfile: 'UHD_FHD_FHD_HD_HD_SD',
//       streamingFormat: 'CMAF',
//       outputCodec: 'H264',
//       type: 'DRM',
//       aspectRatio: true,
//       audioEncryption: false,
//       multiKey: false,
//       multiManifest: false,
//       drmOff: false
//     });
//   });

//   afterEach(function() {
//     if (this.currentTest.state === 'failed') {
//       cy.writelog(`테스트 실패: ${this.currentTest.title}`);
//       cy.screenshot(`실패_${this.currentTest.title}`);
//     }
//   });
// });


// describe('37_drm_h265_h264_uhd_fhd_fhd_hd_hd_sd_cmaf', () => {
//   it('37_drm_h265_h264_uhd_fhd_fhd_hd_hd_sd_cmaf 작업생성', function() {
//     cy.viewport(1280, 720);
//     cy.login('jcg@inka.co.kr', 'Say1013!');

//     cy.createDRMTask({
//       taskName: '37_drm_h265_h264_uhd_fhd_fhd_hd_hd_sd_cmaf',
//       cid: 'test',
//       inputCodec: 'H265',
//       resolutionProfile: 'UHD_FHD_FHD_HD_HD_SD',
//       streamingFormat: 'CMAF',
//       outputCodec: 'H264',
//       type: 'DRM',
//       aspectRatio: true,
//       audioEncryption: false,
//       multiKey: false,
//       multiManifest: false,
//       drmOff: true
//     });
//   });

//   afterEach(function() {
//     if (this.currentTest.state === 'failed') {
//       cy.writelog(`테스트 실패: ${this.currentTest.title}`);
//       cy.screenshot(`실패_${this.currentTest.title}`);
//     }
//   });
// });


// describe('38_drm_h265_h264_uhd_fhd_fhd_hd_hd_sd_cmaf', () => {
//   it('38_drm_h265_h264_uhd_fhd_fhd_hd_hd_sd_cmaf 작업생성', function() {
//     cy.viewport(1280, 720);
//     cy.login('jcg@inka.co.kr', 'Say1013!');

//     cy.createDRMTask({
//       taskName: '38_drm_h265_h264_uhd_fhd_fhd_hd_hd_sd_cmaf',
//       cid: 'test',
//       inputCodec: 'H265',
//       resolutionProfile: 'UHD_FHD_FHD_HD_HD_SD',
//       streamingFormat: 'CMAF',
//       outputCodec: 'H264',
//       type: 'DRM',
//       aspectRatio: true,
//       audioEncryption: false,
//       multiKey: false,
//       multiManifest: false,
//       drmOff: false
//     });
//   });

//   afterEach(function() {
//     if (this.currentTest.state === 'failed') {
//       cy.writelog(`테스트 실패: ${this.currentTest.title}`);
//       cy.screenshot(`실패_${this.currentTest.title}`);
//     }
//   });
// });


// describe('39_drm_h265_h264_uhd_fhd_fhd_hd_hd_sd_cmaf', () => {
//   it('39_drm_h265_h264_uhd_fhd_fhd_hd_hd_sd_cmaf 작업생성', function() {
//     cy.viewport(1280, 720);
//     cy.login('jcg@inka.co.kr', 'Say1013!');

//     cy.createDRMTask({
//       taskName: '39_drm_h265_h264_uhd_fhd_fhd_hd_hd_sd_cmaf',
//       cid: 'test',
//       inputCodec: 'H265',
//       resolutionProfile: 'UHD_FHD_FHD_HD_HD_SD',
//       streamingFormat: 'CMAF',
//       outputCodec: 'H264',
//       type: 'DRM',
//       aspectRatio: true,
//       audioEncryption: false,
//       multiKey: false,
//       multiManifest: false,
//       drmOff: true
//     });
//   });

//   afterEach(function() {
//     if (this.currentTest.state === 'failed') {
//       cy.writelog(`테스트 실패: ${this.currentTest.title}`);
//       cy.screenshot(`실패_${this.currentTest.title}`);
//     }
//   });
// });


// describe('40_drm_h265_h264_uhd_fhd_fhd_hd_hd_sd_cmaf', () => {
//   it('40_drm_h265_h264_uhd_fhd_fhd_hd_hd_sd_cmaf 작업생성', function() {
//     cy.viewport(1280, 720);
//     cy.login('jcg@inka.co.kr', 'Say1013!');

//     cy.createDRMTask({
//       taskName: '40_drm_h265_h264_uhd_fhd_fhd_hd_hd_sd_cmaf',
//       cid: 'test',
//       inputCodec: 'H265',
//       resolutionProfile: 'UHD_FHD_FHD_HD_HD_SD',
//       streamingFormat: 'CMAF',
//       outputCodec: 'H264',
//       type: 'DRM',
//       aspectRatio: true,
//       audioEncryption: false,
//       multiKey: false,
//       multiManifest: false,
//       drmOff: false
//     });
//   });

//   afterEach(function() {
//     if (this.currentTest.state === 'failed') {
//       cy.writelog(`테스트 실패: ${this.currentTest.title}`);
//       cy.screenshot(`실패_${this.currentTest.title}`);
//     }
//   });
// });


// describe('41_drm_h265_h264_uhd_fhd_fhd_hd_hd_sd_cmaf', () => {
//   it('41_drm_h265_h264_uhd_fhd_fhd_hd_hd_sd_cmaf 작업생성', function() {
//     cy.viewport(1280, 720);
//     cy.login('jcg@inka.co.kr', 'Say1013!');

//     cy.createDRMTask({
//       taskName: '41_drm_h265_h264_uhd_fhd_fhd_hd_hd_sd_cmaf',
//       cid: 'test',
//       inputCodec: 'H265',
//       resolutionProfile: 'UHD_FHD_FHD_HD_HD_SD',
//       streamingFormat: 'CMAF',
//       outputCodec: 'H264',
//       type: 'DRM',
//       aspectRatio: true,
//       audioEncryption: false,
//       multiKey: false,
//       multiManifest: false,
//       drmOff: true
//     });
//   });

//   afterEach(function() {
//     if (this.currentTest.state === 'failed') {
//       cy.writelog(`테스트 실패: ${this.currentTest.title}`);
//       cy.screenshot(`실패_${this.currentTest.title}`);
//     }
//   });
// });


// describe('42_drm_h265_h264_uhd_fhd_fhd_hd_hd_sd_cmaf', () => {
//   it('42_drm_h265_h264_uhd_fhd_fhd_hd_hd_sd_cmaf 작업생성', function() {
//     cy.viewport(1280, 720);
//     cy.login('jcg@inka.co.kr', 'Say1013!');

//     cy.createDRMTask({
//       taskName: '42_drm_h265_h264_uhd_fhd_fhd_hd_hd_sd_cmaf',
//       cid: 'test',
//       inputCodec: 'H265',
//       resolutionProfile: 'UHD_FHD_FHD_HD_HD_SD',
//       streamingFormat: 'CMAF',
//       outputCodec: 'H264',
//       type: 'DRM',
//       aspectRatio: true,
//       audioEncryption: false,
//       multiKey: false,
//       multiManifest: false,
//       drmOff: false
//     });
//   });

//   afterEach(function() {
//     if (this.currentTest.state === 'failed') {
//       cy.writelog(`테스트 실패: ${this.currentTest.title}`);
//       cy.screenshot(`실패_${this.currentTest.title}`);
//     }
//   });
// });


// describe('43_drm_h265_h264_uhd_fhd_fhd_hd_hd_sd_cmaf', () => {
//   it('43_drm_h265_h264_uhd_fhd_fhd_hd_hd_sd_cmaf 작업생성', function() {
//     cy.viewport(1280, 720);
//     cy.login('jcg@inka.co.kr', 'Say1013!');

//     cy.createDRMTask({
//       taskName: '43_drm_h265_h264_uhd_fhd_fhd_hd_hd_sd_cmaf',
//       cid: 'test',
//       inputCodec: 'H265',
//       resolutionProfile: 'UHD_FHD_FHD_HD_HD_SD',
//       streamingFormat: 'CMAF',
//       outputCodec: 'H264',
//       type: 'DRM',
//       aspectRatio: true,
//       audioEncryption: false,
//       multiKey: false,
//       multiManifest: false,
//       drmOff: true
//     });
//   });

//   afterEach(function() {
//     if (this.currentTest.state === 'failed') {
//       cy.writelog(`테스트 실패: ${this.currentTest.title}`);
//       cy.screenshot(`실패_${this.currentTest.title}`);
//     }
//   });
// });


// describe('44_drm_h265_h264_uhd_fhd_fhd_hd_hd_sd_cmaf', () => {
//   it('44_drm_h265_h264_uhd_fhd_fhd_hd_hd_sd_cmaf 작업생성', function() {
//     cy.viewport(1280, 720);
//     cy.login('jcg@inka.co.kr', 'Say1013!');

//     cy.createDRMTask({
//       taskName: '44_drm_h265_h264_uhd_fhd_fhd_hd_hd_sd_cmaf',
//       cid: 'test',
//       inputCodec: 'H265',
//       resolutionProfile: 'UHD_FHD_FHD_HD_HD_SD',
//       streamingFormat: 'CMAF',
//       outputCodec: 'H264',
//       type: 'DRM',
//       aspectRatio: true,
//       audioEncryption: false,
//       multiKey: false,
//       multiManifest: false,
//       drmOff: false
//     });
//   });

//   afterEach(function() {
//     if (this.currentTest.state === 'failed') {
//       cy.writelog(`테스트 실패: ${this.currentTest.title}`);
//       cy.screenshot(`실패_${this.currentTest.title}`);
//     }
//   });
// });


// describe('45_drm_h265_h264_uhd_fhd_fhd_hd_hd_sd_cmaf', () => {
//   it('45_drm_h265_h264_uhd_fhd_fhd_hd_hd_sd_cmaf 작업생성', function() {
//     cy.viewport(1280, 720);
//     cy.login('jcg@inka.co.kr', 'Say1013!');

//     cy.createDRMTask({
//       taskName: '45_drm_h265_h264_uhd_fhd_fhd_hd_hd_sd_cmaf',
//       cid: 'test',
//       inputCodec: 'H265',
//       resolutionProfile: 'UHD_FHD_FHD_HD_HD_SD',
//       streamingFormat: 'CMAF',
//       outputCodec: 'H264',
//       type: 'DRM',
//       aspectRatio: true,
//       audioEncryption: false,
//       multiKey: false,
//       multiManifest: false,
//       drmOff: true
//     });
//   });

//   afterEach(function() {
//     if (this.currentTest.state === 'failed') {
//       cy.writelog(`테스트 실패: ${this.currentTest.title}`);
//       cy.screenshot(`실패_${this.currentTest.title}`);
//     }
//   });
// });


// describe('46_drm_h265_h264_uhd_fhd_fhd_hd_hd_sd_cmaf', () => {
//   it('46_drm_h265_h264_uhd_fhd_fhd_hd_hd_sd_cmaf 작업생성', function() {
//     cy.viewport(1280, 720);
//     cy.login('jcg@inka.co.kr', 'Say1013!');

//     cy.createDRMTask({
//       taskName: '46_drm_h265_h264_uhd_fhd_fhd_hd_hd_sd_cmaf',
//       cid: 'test',
//       inputCodec: 'H265',
//       resolutionProfile: 'UHD_FHD_FHD_HD_HD_SD',
//       streamingFormat: 'CMAF',
//       outputCodec: 'H264',
//       type: 'DRM',
//       aspectRatio: true,
//       audioEncryption: false,
//       multiKey: false,
//       multiManifest: false,
//       drmOff: false
//     });
//   });

//   afterEach(function() {
//     if (this.currentTest.state === 'failed') {
//       cy.writelog(`테스트 실패: ${this.currentTest.title}`);
//       cy.screenshot(`실패_${this.currentTest.title}`);
//     }
//   });
// });


// describe('47_drm_h265_h264_uhd_fhd_fhd_hd_hd_sd_cmaf', () => {
//   it('47_drm_h265_h264_uhd_fhd_fhd_hd_hd_sd_cmaf 작업생성', function() {
//     cy.viewport(1280, 720);
//     cy.login('jcg@inka.co.kr', 'Say1013!');

//     cy.createDRMTask({
//       taskName: '47_drm_h265_h264_uhd_fhd_fhd_hd_hd_sd_cmaf',
//       cid: 'test',
//       inputCodec: 'H265',
//       resolutionProfile: 'UHD_FHD_FHD_HD_HD_SD',
//       streamingFormat: 'CMAF',
//       outputCodec: 'H264',
//       type: 'DRM',
//       aspectRatio: true,
//       audioEncryption: false,
//       multiKey: false,
//       multiManifest: false,
//       drmOff: true
//     });
//   });

//   afterEach(function() {
//     if (this.currentTest.state === 'failed') {
//       cy.writelog(`테스트 실패: ${this.currentTest.title}`);
//       cy.screenshot(`실패_${this.currentTest.title}`);
//     }
//   });
// });


// describe('48_drm_h265_h264_uhd_fhd_fhd_hd_hd_sd_cmaf', () => {
//   it('48_drm_h265_h264_uhd_fhd_fhd_hd_hd_sd_cmaf 작업생성', function() {
//     cy.viewport(1280, 720);
//     cy.login('jcg@inka.co.kr', 'Say1013!');

//     cy.createDRMTask({
//       taskName: '48_drm_h265_h264_uhd_fhd_fhd_hd_hd_sd_cmaf',
//       cid: 'test',
//       inputCodec: 'H265',
//       resolutionProfile: 'UHD_FHD_FHD_HD_HD_SD',
//       streamingFormat: 'CMAF',
//       outputCodec: 'H264',
//       type: 'DRM',
//       aspectRatio: true,
//       audioEncryption: false,
//       multiKey: false,
//       multiManifest: false,
//       drmOff: false
//     });
//   });

//   afterEach(function() {
//     if (this.currentTest.state === 'failed') {
//       cy.writelog(`테스트 실패: ${this.currentTest.title}`);
//       cy.screenshot(`실패_${this.currentTest.title}`);
//     }
//   });
// });


// describe('49_drm_h265_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls', () => {
//   it('49_drm_h265_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls 작업생성', function() {
//     cy.viewport(1280, 720);
//     cy.login('jcg@inka.co.kr', 'Say1013!');

//     cy.createDRMTask({
//       taskName: '49_drm_h265_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls',
//       cid: 'test',
//       inputCodec: 'H265',
//       resolutionProfile: 'UHD_FHD_FHD_HD_HD_SD',
//       streamingFormat: 'DASH_HLS',
//       outputCodec: 'H264',
//       type: 'DRM',
//       aspectRatio: true,
//       audioEncryption: false,
//       multiKey: false,
//       multiManifest: false,
//       drmOff: true
//     });
//   });

//   afterEach(function() {
//     if (this.currentTest.state === 'failed') {
//       cy.writelog(`테스트 실패: ${this.currentTest.title}`);
//       cy.screenshot(`실패_${this.currentTest.title}`);
//     }
//   });
// });


// describe('50_drm_h265_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls', () => {
//   it('50_drm_h265_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls 작업생성', function() {
//     cy.viewport(1280, 720);
//     cy.login('jcg@inka.co.kr', 'Say1013!');

//     cy.createDRMTask({
//       taskName: '50_drm_h265_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls',
//       cid: 'test',
//       inputCodec: 'H265',
//       resolutionProfile: 'UHD_FHD_FHD_HD_HD_SD',
//       streamingFormat: 'DASH_HLS',
//       outputCodec: 'H264',
//       type: 'DRM',
//       aspectRatio: true,
//       audioEncryption: false,
//       multiKey: false,
//       multiManifest: false,
//       drmOff: false
//     });
//   });

//   afterEach(function() {
//     if (this.currentTest.state === 'failed') {
//       cy.writelog(`테스트 실패: ${this.currentTest.title}`);
//       cy.screenshot(`실패_${this.currentTest.title}`);
//     }
//   });
// });


// describe('51_drm_h265_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls', () => {
//   it('51_drm_h265_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls 작업생성', function() {
//     cy.viewport(1280, 720);
//     cy.login('jcg@inka.co.kr', 'Say1013!');

//     cy.createDRMTask({
//       taskName: '51_drm_h265_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls',
//       cid: 'test',
//       inputCodec: 'H265',
//       resolutionProfile: 'UHD_FHD_FHD_HD_HD_SD',
//       streamingFormat: 'DASH_HLS',
//       outputCodec: 'H264',
//       type: 'DRM',
//       aspectRatio: true,
//       audioEncryption: false,
//       multiKey: false,
//       multiManifest: false,
//       drmOff: true
//     });
//   });

//   afterEach(function() {
//     if (this.currentTest.state === 'failed') {
//       cy.writelog(`테스트 실패: ${this.currentTest.title}`);
//       cy.screenshot(`실패_${this.currentTest.title}`);
//     }
//   });
// });


// describe('52_drm_h265_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls', () => {
//   it('52_drm_h265_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls 작업생성', function() {
//     cy.viewport(1280, 720);
//     cy.login('jcg@inka.co.kr', 'Say1013!');

//     cy.createDRMTask({
//       taskName: '52_drm_h265_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls',
//       cid: 'test',
//       inputCodec: 'H265',
//       resolutionProfile: 'UHD_FHD_FHD_HD_HD_SD',
//       streamingFormat: 'DASH_HLS',
//       outputCodec: 'H264',
//       type: 'DRM',
//       aspectRatio: true,
//       audioEncryption: false,
//       multiKey: false,
//       multiManifest: false,
//       drmOff: false
//     });
//   });

//   afterEach(function() {
//     if (this.currentTest.state === 'failed') {
//       cy.writelog(`테스트 실패: ${this.currentTest.title}`);
//       cy.screenshot(`실패_${this.currentTest.title}`);
//     }
//   });
// });


// describe('53_drm_h265_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls', () => {
//   it('53_drm_h265_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls 작업생성', function() {
//     cy.viewport(1280, 720);
//     cy.login('jcg@inka.co.kr', 'Say1013!');

//     cy.createDRMTask({
//       taskName: '53_drm_h265_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls',
//       cid: 'test',
//       inputCodec: 'H265',
//       resolutionProfile: 'UHD_FHD_FHD_HD_HD_SD',
//       streamingFormat: 'DASH_HLS',
//       outputCodec: 'H264',
//       type: 'DRM',
//       aspectRatio: true,
//       audioEncryption: false,
//       multiKey: false,
//       multiManifest: false,
//       drmOff: true
//     });
//   });

//   afterEach(function() {
//     if (this.currentTest.state === 'failed') {
//       cy.writelog(`테스트 실패: ${this.currentTest.title}`);
//       cy.screenshot(`실패_${this.currentTest.title}`);
//     }
//   });
// });


// describe('54_drm_h265_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls', () => {
//   it('54_drm_h265_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls 작업생성', function() {
//     cy.viewport(1280, 720);
//     cy.login('jcg@inka.co.kr', 'Say1013!');

//     cy.createDRMTask({
//       taskName: '54_drm_h265_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls',
//       cid: 'test',
//       inputCodec: 'H265',
//       resolutionProfile: 'UHD_FHD_FHD_HD_HD_SD',
//       streamingFormat: 'DASH_HLS',
//       outputCodec: 'H264',
//       type: 'DRM',
//       aspectRatio: true,
//       audioEncryption: false,
//       multiKey: false,
//       multiManifest: false,
//       drmOff: false
//     });
//   });

//   afterEach(function() {
//     if (this.currentTest.state === 'failed') {
//       cy.writelog(`테스트 실패: ${this.currentTest.title}`);
//       cy.screenshot(`실패_${this.currentTest.title}`);
//     }
//   });
// });


// describe('55_drm_h265_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls', () => {
//   it('55_drm_h265_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls 작업생성', function() {
//     cy.viewport(1280, 720);
//     cy.login('jcg@inka.co.kr', 'Say1013!');

//     cy.createDRMTask({
//       taskName: '55_drm_h265_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls',
//       cid: 'test',
//       inputCodec: 'H265',
//       resolutionProfile: 'UHD_FHD_FHD_HD_HD_SD',
//       streamingFormat: 'DASH_HLS',
//       outputCodec: 'H264',
//       type: 'DRM',
//       aspectRatio: true,
//       audioEncryption: false,
//       multiKey: false,
//       multiManifest: false,
//       drmOff: true
//     });
//   });

//   afterEach(function() {
//     if (this.currentTest.state === 'failed') {
//       cy.writelog(`테스트 실패: ${this.currentTest.title}`);
//       cy.screenshot(`실패_${this.currentTest.title}`);
//     }
//   });
// });


// describe('56_drm_h265_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls', () => {
//   it('56_drm_h265_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls 작업생성', function() {
//     cy.viewport(1280, 720);
//     cy.login('jcg@inka.co.kr', 'Say1013!');

//     cy.createDRMTask({
//       taskName: '56_drm_h265_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls',
//       cid: 'test',
//       inputCodec: 'H265',
//       resolutionProfile: 'UHD_FHD_FHD_HD_HD_SD',
//       streamingFormat: 'DASH_HLS',
//       outputCodec: 'H264',
//       type: 'DRM',
//       aspectRatio: true,
//       audioEncryption: false,
//       multiKey: false,
//       multiManifest: false,
//       drmOff: false
//     });
//   });

//   afterEach(function() {
//     if (this.currentTest.state === 'failed') {
//       cy.writelog(`테스트 실패: ${this.currentTest.title}`);
//       cy.screenshot(`실패_${this.currentTest.title}`);
//     }
//   });
// });


// describe('57_drm_h265_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls', () => {
//   it('57_drm_h265_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls 작업생성', function() {
//     cy.viewport(1280, 720);
//     cy.login('jcg@inka.co.kr', 'Say1013!');

//     cy.createDRMTask({
//       taskName: '57_drm_h265_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls',
//       cid: 'test',
//       inputCodec: 'H265',
//       resolutionProfile: 'UHD_FHD_FHD_HD_HD_SD',
//       streamingFormat: 'DASH_HLS',
//       outputCodec: 'H264',
//       type: 'DRM',
//       aspectRatio: true,
//       audioEncryption: false,
//       multiKey: false,
//       multiManifest: false,
//       drmOff: true
//     });
//   });

//   afterEach(function() {
//     if (this.currentTest.state === 'failed') {
//       cy.writelog(`테스트 실패: ${this.currentTest.title}`);
//       cy.screenshot(`실패_${this.currentTest.title}`);
//     }
//   });
// });


// describe('58_drm_h265_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls', () => {
//   it('58_drm_h265_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls 작업생성', function() {
//     cy.viewport(1280, 720);
//     cy.login('jcg@inka.co.kr', 'Say1013!');

//     cy.createDRMTask({
//       taskName: '58_drm_h265_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls',
//       cid: 'test',
//       inputCodec: 'H265',
//       resolutionProfile: 'UHD_FHD_FHD_HD_HD_SD',
//       streamingFormat: 'DASH_HLS',
//       outputCodec: 'H264',
//       type: 'DRM',
//       aspectRatio: true,
//       audioEncryption: false,
//       multiKey: false,
//       multiManifest: false,
//       drmOff: false
//     });
//   });

//   afterEach(function() {
//     if (this.currentTest.state === 'failed') {
//       cy.writelog(`테스트 실패: ${this.currentTest.title}`);
//       cy.screenshot(`실패_${this.currentTest.title}`);
//     }
//   });
// });


// describe('59_drm_h265_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls', () => {
//   it('59_drm_h265_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls 작업생성', function() {
//     cy.viewport(1280, 720);
//     cy.login('jcg@inka.co.kr', 'Say1013!');

//     cy.createDRMTask({
//       taskName: '59_drm_h265_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls',
//       cid: 'test',
//       inputCodec: 'H265',
//       resolutionProfile: 'UHD_FHD_FHD_HD_HD_SD',
//       streamingFormat: 'DASH_HLS',
//       outputCodec: 'H264',
//       type: 'DRM',
//       aspectRatio: true,
//       audioEncryption: false,
//       multiKey: false,
//       multiManifest: false,
//       drmOff: true
//     });
//   });

//   afterEach(function() {
//     if (this.currentTest.state === 'failed') {
//       cy.writelog(`테스트 실패: ${this.currentTest.title}`);
//       cy.screenshot(`실패_${this.currentTest.title}`);
//     }
//   });
// });


// describe('60_drm_h265_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls', () => {
//   it('60_drm_h265_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls 작업생성', function() {
//     cy.viewport(1280, 720);
//     cy.login('jcg@inka.co.kr', 'Say1013!');

//     cy.createDRMTask({
//       taskName: '60_drm_h265_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls',
//       cid: 'test',
//       inputCodec: 'H265',
//       resolutionProfile: 'UHD_FHD_FHD_HD_HD_SD',
//       streamingFormat: 'DASH_HLS',
//       outputCodec: 'H264',
//       type: 'DRM',
//       aspectRatio: true,
//       audioEncryption: false,
//       multiKey: false,
//       multiManifest: false,
//       drmOff: false
//     });
//   });

//   afterEach(function() {
//     if (this.currentTest.state === 'failed') {
//       cy.writelog(`테스트 실패: ${this.currentTest.title}`);
//       cy.screenshot(`실패_${this.currentTest.title}`);
//     }
//   });
// });


// describe('61_drm_h265_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls', () => {
//   it('61_drm_h265_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls 작업생성', function() {
//     cy.viewport(1280, 720);
//     cy.login('jcg@inka.co.kr', 'Say1013!');

//     cy.createDRMTask({
//       taskName: '61_drm_h265_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls',
//       cid: 'test',
//       inputCodec: 'H265',
//       resolutionProfile: 'UHD_FHD_FHD_HD_HD_SD',
//       streamingFormat: 'DASH_HLS',
//       outputCodec: 'H264',
//       type: 'DRM',
//       aspectRatio: true,
//       audioEncryption: false,
//       multiKey: false,
//       multiManifest: false,
//       drmOff: true
//     });
//   });

//   afterEach(function() {
//     if (this.currentTest.state === 'failed') {
//       cy.writelog(`테스트 실패: ${this.currentTest.title}`);
//       cy.screenshot(`실패_${this.currentTest.title}`);
//     }
//   });
// });


// describe('62_drm_h265_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls', () => {
//   it('62_drm_h265_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls 작업생성', function() {
//     cy.viewport(1280, 720);
//     cy.login('jcg@inka.co.kr', 'Say1013!');

//     cy.createDRMTask({
//       taskName: '62_drm_h265_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls',
//       cid: 'test',
//       inputCodec: 'H265',
//       resolutionProfile: 'UHD_FHD_FHD_HD_HD_SD',
//       streamingFormat: 'DASH_HLS',
//       outputCodec: 'H264',
//       type: 'DRM',
//       aspectRatio: true,
//       audioEncryption: false,
//       multiKey: false,
//       multiManifest: false,
//       drmOff: false
//     });
//   });

//   afterEach(function() {
//     if (this.currentTest.state === 'failed') {
//       cy.writelog(`테스트 실패: ${this.currentTest.title}`);
//       cy.screenshot(`실패_${this.currentTest.title}`);
//     }
//   });
// });


// describe('63_drm_h265_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls', () => {
//   it('63_drm_h265_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls 작업생성', function() {
//     cy.viewport(1280, 720);
//     cy.login('jcg@inka.co.kr', 'Say1013!');

//     cy.createDRMTask({
//       taskName: '63_drm_h265_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls',
//       cid: 'test',
//       inputCodec: 'H265',
//       resolutionProfile: 'UHD_FHD_FHD_HD_HD_SD',
//       streamingFormat: 'DASH_HLS',
//       outputCodec: 'H264',
//       type: 'DRM',
//       aspectRatio: true,
//       audioEncryption: false,
//       multiKey: false,
//       multiManifest: false,
//       drmOff: true
//     });
//   });

//   afterEach(function() {
//     if (this.currentTest.state === 'failed') {
//       cy.writelog(`테스트 실패: ${this.currentTest.title}`);
//       cy.screenshot(`실패_${this.currentTest.title}`);
//     }
//   });
// });


// describe('64_drm_h265_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls', () => {
//   it('64_drm_h265_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls 작업생성', function() {
//     cy.viewport(1280, 720);
//     cy.login('jcg@inka.co.kr', 'Say1013!');

//     cy.createDRMTask({
//       taskName: '64_drm_h265_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls',
//       cid: 'test',
//       inputCodec: 'H265',
//       resolutionProfile: 'UHD_FHD_FHD_HD_HD_SD',
//       streamingFormat: 'DASH_HLS',
//       outputCodec: 'H264',
//       type: 'DRM',
//       aspectRatio: true,
//       audioEncryption: false,
//       multiKey: false,
//       multiManifest: false,
//       drmOff: false
//     });
//   });

//   afterEach(function() {
//     if (this.currentTest.state === 'failed') {
//       cy.writelog(`테스트 실패: ${this.currentTest.title}`);
//       cy.screenshot(`실패_${this.currentTest.title}`);
//     }
//   });
// });


// describe('65_drm_prores_h264_uhd_fhd_fhd_hd_hd_sd_cmaf', () => {
//   it('65_drm_prores_h264_uhd_fhd_fhd_hd_hd_sd_cmaf 작업생성', function() {
//     cy.viewport(1280, 720);
//     cy.login('jcg@inka.co.kr', 'Say1013!');

//     cy.createDRMTask({
//       taskName: '65_drm_prores_h264_uhd_fhd_fhd_hd_hd_sd_cmaf',
//       cid: 'test',
//       inputCodec: 'PRORES',
//       resolutionProfile: 'UHD_FHD_FHD_HD_HD_SD',
//       streamingFormat: 'CMAF',
//       outputCodec: 'H264',
//       type: 'DRM',
//       aspectRatio: true,
//       audioEncryption: false,
//       multiKey: false,
//       multiManifest: false,
//       drmOff: true
//     });
//   });

//   afterEach(function() {
//     if (this.currentTest.state === 'failed') {
//       cy.writelog(`테스트 실패: ${this.currentTest.title}`);
//       cy.screenshot(`실패_${this.currentTest.title}`);
//     }
//   });
// });


// describe('66_drm_prores_h264_uhd_fhd_fhd_hd_hd_sd_cmaf', () => {
//   it('66_drm_prores_h264_uhd_fhd_fhd_hd_hd_sd_cmaf 작업생성', function() {
//     cy.viewport(1280, 720);
//     cy.login('jcg@inka.co.kr', 'Say1013!');

//     cy.createDRMTask({
//       taskName: '66_drm_prores_h264_uhd_fhd_fhd_hd_hd_sd_cmaf',
//       cid: 'test',
//       inputCodec: 'PRORES',
//       resolutionProfile: 'UHD_FHD_FHD_HD_HD_SD',
//       streamingFormat: 'CMAF',
//       outputCodec: 'H264',
//       type: 'DRM',
//       aspectRatio: true,
//       audioEncryption: false,
//       multiKey: false,
//       multiManifest: false,
//       drmOff: false
//     });
//   });

//   afterEach(function() {
//     if (this.currentTest.state === 'failed') {
//       cy.writelog(`테스트 실패: ${this.currentTest.title}`);
//       cy.screenshot(`실패_${this.currentTest.title}`);
//     }
//   });
// });


// describe('67_drm_prores_h264_uhd_fhd_fhd_hd_hd_sd_cmaf', () => {
//   it('67_drm_prores_h264_uhd_fhd_fhd_hd_hd_sd_cmaf 작업생성', function() {
//     cy.viewport(1280, 720);
//     cy.login('jcg@inka.co.kr', 'Say1013!');

//     cy.createDRMTask({
//       taskName: '67_drm_prores_h264_uhd_fhd_fhd_hd_hd_sd_cmaf',
//       cid: 'test',
//       inputCodec: 'PRORES',
//       resolutionProfile: 'UHD_FHD_FHD_HD_HD_SD',
//       streamingFormat: 'CMAF',
//       outputCodec: 'H264',
//       type: 'DRM',
//       aspectRatio: true,
//       audioEncryption: false,
//       multiKey: false,
//       multiManifest: false,
//       drmOff: true
//     });
//   });

//   afterEach(function() {
//     if (this.currentTest.state === 'failed') {
//       cy.writelog(`테스트 실패: ${this.currentTest.title}`);
//       cy.screenshot(`실패_${this.currentTest.title}`);
//     }
//   });
// });


// describe('68_drm_prores_h264_uhd_fhd_fhd_hd_hd_sd_cmaf', () => {
//   it('68_drm_prores_h264_uhd_fhd_fhd_hd_hd_sd_cmaf 작업생성', function() {
//     cy.viewport(1280, 720);
//     cy.login('jcg@inka.co.kr', 'Say1013!');

//     cy.createDRMTask({
//       taskName: '68_drm_prores_h264_uhd_fhd_fhd_hd_hd_sd_cmaf',
//       cid: 'test',
//       inputCodec: 'PRORES',
//       resolutionProfile: 'UHD_FHD_FHD_HD_HD_SD',
//       streamingFormat: 'CMAF',
//       outputCodec: 'H264',
//       type: 'DRM',
//       aspectRatio: true,
//       audioEncryption: false,
//       multiKey: false,
//       multiManifest: false,
//       drmOff: false
//     });
//   });

//   afterEach(function() {
//     if (this.currentTest.state === 'failed') {
//       cy.writelog(`테스트 실패: ${this.currentTest.title}`);
//       cy.screenshot(`실패_${this.currentTest.title}`);
//     }
//   });
// });


// describe('69_drm_prores_h264_uhd_fhd_fhd_hd_hd_sd_cmaf', () => {
//   it('69_drm_prores_h264_uhd_fhd_fhd_hd_hd_sd_cmaf 작업생성', function() {
//     cy.viewport(1280, 720);
//     cy.login('jcg@inka.co.kr', 'Say1013!');

//     cy.createDRMTask({
//       taskName: '69_drm_prores_h264_uhd_fhd_fhd_hd_hd_sd_cmaf',
//       cid: 'test',
//       inputCodec: 'PRORES',
//       resolutionProfile: 'UHD_FHD_FHD_HD_HD_SD',
//       streamingFormat: 'CMAF',
//       outputCodec: 'H264',
//       type: 'DRM',
//       aspectRatio: true,
//       audioEncryption: false,
//       multiKey: false,
//       multiManifest: false,
//       drmOff: true
//     });
//   });

//   afterEach(function() {
//     if (this.currentTest.state === 'failed') {
//       cy.writelog(`테스트 실패: ${this.currentTest.title}`);
//       cy.screenshot(`실패_${this.currentTest.title}`);
//     }
//   });
// });


// describe('70_drm_prores_h264_uhd_fhd_fhd_hd_hd_sd_cmaf', () => {
//   it('70_drm_prores_h264_uhd_fhd_fhd_hd_hd_sd_cmaf 작업생성', function() {
//     cy.viewport(1280, 720);
//     cy.login('jcg@inka.co.kr', 'Say1013!');

//     cy.createDRMTask({
//       taskName: '70_drm_prores_h264_uhd_fhd_fhd_hd_hd_sd_cmaf',
//       cid: 'test',
//       inputCodec: 'PRORES',
//       resolutionProfile: 'UHD_FHD_FHD_HD_HD_SD',
//       streamingFormat: 'CMAF',
//       outputCodec: 'H264',
//       type: 'DRM',
//       aspectRatio: true,
//       audioEncryption: false,
//       multiKey: false,
//       multiManifest: false,
//       drmOff: false
//     });
//   });

//   afterEach(function() {
//     if (this.currentTest.state === 'failed') {
//       cy.writelog(`테스트 실패: ${this.currentTest.title}`);
//       cy.screenshot(`실패_${this.currentTest.title}`);
//     }
//   });
// });


// describe('71_drm_prores_h264_uhd_fhd_fhd_hd_hd_sd_cmaf', () => {
//   it('71_drm_prores_h264_uhd_fhd_fhd_hd_hd_sd_cmaf 작업생성', function() {
//     cy.viewport(1280, 720);
//     cy.login('jcg@inka.co.kr', 'Say1013!');

//     cy.createDRMTask({
//       taskName: '71_drm_prores_h264_uhd_fhd_fhd_hd_hd_sd_cmaf',
//       cid: 'test',
//       inputCodec: 'PRORES',
//       resolutionProfile: 'UHD_FHD_FHD_HD_HD_SD',
//       streamingFormat: 'CMAF',
//       outputCodec: 'H264',
//       type: 'DRM',
//       aspectRatio: true,
//       audioEncryption: false,
//       multiKey: false,
//       multiManifest: false,
//       drmOff: true
//     });
//   });

//   afterEach(function() {
//     if (this.currentTest.state === 'failed') {
//       cy.writelog(`테스트 실패: ${this.currentTest.title}`);
//       cy.screenshot(`실패_${this.currentTest.title}`);
//     }
//   });
// });


// describe('72_drm_prores_h264_uhd_fhd_fhd_hd_hd_sd_cmaf', () => {
//   it('72_drm_prores_h264_uhd_fhd_fhd_hd_hd_sd_cmaf 작업생성', function() {
//     cy.viewport(1280, 720);
//     cy.login('jcg@inka.co.kr', 'Say1013!');

//     cy.createDRMTask({
//       taskName: '72_drm_prores_h264_uhd_fhd_fhd_hd_hd_sd_cmaf',
//       cid: 'test',
//       inputCodec: 'PRORES',
//       resolutionProfile: 'UHD_FHD_FHD_HD_HD_SD',
//       streamingFormat: 'CMAF',
//       outputCodec: 'H264',
//       type: 'DRM',
//       aspectRatio: true,
//       audioEncryption: false,
//       multiKey: false,
//       multiManifest: false,
//       drmOff: false
//     });
//   });

//   afterEach(function() {
//     if (this.currentTest.state === 'failed') {
//       cy.writelog(`테스트 실패: ${this.currentTest.title}`);
//       cy.screenshot(`실패_${this.currentTest.title}`);
//     }
//   });
// });


// describe('73_drm_prores_h264_uhd_fhd_fhd_hd_hd_sd_cmaf', () => {
//   it('73_drm_prores_h264_uhd_fhd_fhd_hd_hd_sd_cmaf 작업생성', function() {
//     cy.viewport(1280, 720);
//     cy.login('jcg@inka.co.kr', 'Say1013!');

//     cy.createDRMTask({
//       taskName: '73_drm_prores_h264_uhd_fhd_fhd_hd_hd_sd_cmaf',
//       cid: 'test',
//       inputCodec: 'PRORES',
//       resolutionProfile: 'UHD_FHD_FHD_HD_HD_SD',
//       streamingFormat: 'CMAF',
//       outputCodec: 'H264',
//       type: 'DRM',
//       aspectRatio: true,
//       audioEncryption: false,
//       multiKey: false,
//       multiManifest: false,
//       drmOff: true
//     });
//   });

//   afterEach(function() {
//     if (this.currentTest.state === 'failed') {
//       cy.writelog(`테스트 실패: ${this.currentTest.title}`);
//       cy.screenshot(`실패_${this.currentTest.title}`);
//     }
//   });
// });


// describe('74_drm_prores_h264_uhd_fhd_fhd_hd_hd_sd_cmaf', () => {
//   it('74_drm_prores_h264_uhd_fhd_fhd_hd_hd_sd_cmaf 작업생성', function() {
//     cy.viewport(1280, 720);
//     cy.login('jcg@inka.co.kr', 'Say1013!');

//     cy.createDRMTask({
//       taskName: '74_drm_prores_h264_uhd_fhd_fhd_hd_hd_sd_cmaf',
//       cid: 'test',
//       inputCodec: 'PRORES',
//       resolutionProfile: 'UHD_FHD_FHD_HD_HD_SD',
//       streamingFormat: 'CMAF',
//       outputCodec: 'H264',
//       type: 'DRM',
//       aspectRatio: true,
//       audioEncryption: false,
//       multiKey: false,
//       multiManifest: false,
//       drmOff: false
//     });
//   });

//   afterEach(function() {
//     if (this.currentTest.state === 'failed') {
//       cy.writelog(`테스트 실패: ${this.currentTest.title}`);
//       cy.screenshot(`실패_${this.currentTest.title}`);
//     }
//   });
// });


// describe('75_drm_prores_h264_uhd_fhd_fhd_hd_hd_sd_cmaf', () => {
//   it('75_drm_prores_h264_uhd_fhd_fhd_hd_hd_sd_cmaf 작업생성', function() {
//     cy.viewport(1280, 720);
//     cy.login('jcg@inka.co.kr', 'Say1013!');

//     cy.createDRMTask({
//       taskName: '75_drm_prores_h264_uhd_fhd_fhd_hd_hd_sd_cmaf',
//       cid: 'test',
//       inputCodec: 'PRORES',
//       resolutionProfile: 'UHD_FHD_FHD_HD_HD_SD',
//       streamingFormat: 'CMAF',
//       outputCodec: 'H264',
//       type: 'DRM',
//       aspectRatio: true,
//       audioEncryption: false,
//       multiKey: false,
//       multiManifest: false,
//       drmOff: true
//     });
//   });

//   afterEach(function() {
//     if (this.currentTest.state === 'failed') {
//       cy.writelog(`테스트 실패: ${this.currentTest.title}`);
//       cy.screenshot(`실패_${this.currentTest.title}`);
//     }
//   });
// });


// describe('76_drm_prores_h264_uhd_fhd_fhd_hd_hd_sd_cmaf', () => {
//   it('76_drm_prores_h264_uhd_fhd_fhd_hd_hd_sd_cmaf 작업생성', function() {
//     cy.viewport(1280, 720);
//     cy.login('jcg@inka.co.kr', 'Say1013!');

//     cy.createDRMTask({
//       taskName: '76_drm_prores_h264_uhd_fhd_fhd_hd_hd_sd_cmaf',
//       cid: 'test',
//       inputCodec: 'PRORES',
//       resolutionProfile: 'UHD_FHD_FHD_HD_HD_SD',
//       streamingFormat: 'CMAF',
//       outputCodec: 'H264',
//       type: 'DRM',
//       aspectRatio: true,
//       audioEncryption: false,
//       multiKey: false,
//       multiManifest: false,
//       drmOff: false
//     });
//   });

//   afterEach(function() {
//     if (this.currentTest.state === 'failed') {
//       cy.writelog(`테스트 실패: ${this.currentTest.title}`);
//       cy.screenshot(`실패_${this.currentTest.title}`);
//     }
//   });
// });


describe('77_drm_prores_h264_uhd_fhd_fhd_hd_hd_sd_cmaf', () => {
  it('77_drm_prores_h264_uhd_fhd_fhd_hd_hd_sd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('78_drm_prores_h264_uhd_fhd_fhd_hd_hd_sd_cmaf', () => {
  it('78_drm_prores_h264_uhd_fhd_fhd_hd_hd_sd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('79_drm_prores_h264_uhd_fhd_fhd_hd_hd_sd_cmaf', () => {
  it('79_drm_prores_h264_uhd_fhd_fhd_hd_hd_sd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('80_drm_prores_h264_uhd_fhd_fhd_hd_hd_sd_cmaf', () => {
  it('80_drm_prores_h264_uhd_fhd_fhd_hd_hd_sd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('81_drm_prores_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls', () => {
  it('81_drm_prores_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('82_drm_prores_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls', () => {
  it('82_drm_prores_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('83_drm_prores_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls', () => {
  it('83_drm_prores_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('84_drm_prores_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls', () => {
  it('84_drm_prores_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('85_drm_prores_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls', () => {
  it('85_drm_prores_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('86_drm_prores_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls', () => {
  it('86_drm_prores_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('87_drm_prores_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls', () => {
  it('87_drm_prores_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('88_drm_prores_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls', () => {
  it('88_drm_prores_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('89_drm_prores_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls', () => {
  it('89_drm_prores_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('90_drm_prores_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls', () => {
  it('90_drm_prores_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('91_drm_prores_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls', () => {
  it('91_drm_prores_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('92_drm_prores_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls', () => {
  it('92_drm_prores_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('93_drm_prores_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls', () => {
  it('93_drm_prores_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('94_drm_prores_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls', () => {
  it('94_drm_prores_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('95_drm_prores_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls', () => {
  it('95_drm_prores_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('96_drm_prores_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls', () => {
  it('96_drm_prores_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('97_drm_xdcam_h264_uhd_fhd_fhd_hd_hd_sd_cmaf', () => {
  it('97_drm_xdcam_h264_uhd_fhd_fhd_hd_hd_sd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('98_drm_xdcam_h264_uhd_fhd_fhd_hd_hd_sd_cmaf', () => {
  it('98_drm_xdcam_h264_uhd_fhd_fhd_hd_hd_sd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('99_drm_xdcam_h264_uhd_fhd_fhd_hd_hd_sd_cmaf', () => {
  it('99_drm_xdcam_h264_uhd_fhd_fhd_hd_hd_sd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('100_drm_xdcam_h264_uhd_fhd_fhd_hd_hd_sd_cmaf', () => {
  it('100_drm_xdcam_h264_uhd_fhd_fhd_hd_hd_sd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('101_drm_xdcam_h264_uhd_fhd_fhd_hd_hd_sd_cmaf', () => {
  it('101_drm_xdcam_h264_uhd_fhd_fhd_hd_hd_sd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('102_drm_xdcam_h264_uhd_fhd_fhd_hd_hd_sd_cmaf', () => {
  it('102_drm_xdcam_h264_uhd_fhd_fhd_hd_hd_sd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('103_drm_xdcam_h264_uhd_fhd_fhd_hd_hd_sd_cmaf', () => {
  it('103_drm_xdcam_h264_uhd_fhd_fhd_hd_hd_sd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('104_drm_xdcam_h264_uhd_fhd_fhd_hd_hd_sd_cmaf', () => {
  it('104_drm_xdcam_h264_uhd_fhd_fhd_hd_hd_sd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('105_drm_xdcam_h264_uhd_fhd_fhd_hd_hd_sd_cmaf', () => {
  it('105_drm_xdcam_h264_uhd_fhd_fhd_hd_hd_sd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('106_drm_xdcam_h264_uhd_fhd_fhd_hd_hd_sd_cmaf', () => {
  it('106_drm_xdcam_h264_uhd_fhd_fhd_hd_hd_sd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('107_drm_xdcam_h264_uhd_fhd_fhd_hd_hd_sd_cmaf', () => {
  it('107_drm_xdcam_h264_uhd_fhd_fhd_hd_hd_sd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('108_drm_xdcam_h264_uhd_fhd_fhd_hd_hd_sd_cmaf', () => {
  it('108_drm_xdcam_h264_uhd_fhd_fhd_hd_hd_sd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('109_drm_xdcam_h264_uhd_fhd_fhd_hd_hd_sd_cmaf', () => {
  it('109_drm_xdcam_h264_uhd_fhd_fhd_hd_hd_sd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('110_drm_xdcam_h264_uhd_fhd_fhd_hd_hd_sd_cmaf', () => {
  it('110_drm_xdcam_h264_uhd_fhd_fhd_hd_hd_sd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('111_drm_xdcam_h264_uhd_fhd_fhd_hd_hd_sd_cmaf', () => {
  it('111_drm_xdcam_h264_uhd_fhd_fhd_hd_hd_sd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('112_drm_xdcam_h264_uhd_fhd_fhd_hd_hd_sd_cmaf', () => {
  it('112_drm_xdcam_h264_uhd_fhd_fhd_hd_hd_sd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('113_drm_xdcam_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls', () => {
  it('113_drm_xdcam_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('114_drm_xdcam_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls', () => {
  it('114_drm_xdcam_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('115_drm_xdcam_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls', () => {
  it('115_drm_xdcam_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('116_drm_xdcam_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls', () => {
  it('116_drm_xdcam_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('117_drm_xdcam_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls', () => {
  it('117_drm_xdcam_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('118_drm_xdcam_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls', () => {
  it('118_drm_xdcam_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('119_drm_xdcam_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls', () => {
  it('119_drm_xdcam_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('120_drm_xdcam_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls', () => {
  it('120_drm_xdcam_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('121_drm_xdcam_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls', () => {
  it('121_drm_xdcam_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('122_drm_xdcam_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls', () => {
  it('122_drm_xdcam_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('123_drm_xdcam_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls', () => {
  it('123_drm_xdcam_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('124_drm_xdcam_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls', () => {
  it('124_drm_xdcam_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('125_drm_xdcam_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls', () => {
  it('125_drm_xdcam_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('126_drm_xdcam_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls', () => {
  it('126_drm_xdcam_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('127_drm_xdcam_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls', () => {
  it('127_drm_xdcam_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('128_drm_xdcam_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls', () => {
  it('128_drm_xdcam_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('129_drm_mkv_h264_uhd_fhd_fhd_hd_hd_sd_cmaf', () => {
  it('129_drm_mkv_h264_uhd_fhd_fhd_hd_hd_sd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('130_drm_mkv_h264_uhd_fhd_fhd_hd_hd_sd_cmaf', () => {
  it('130_drm_mkv_h264_uhd_fhd_fhd_hd_hd_sd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('131_drm_mkv_h264_uhd_fhd_fhd_hd_hd_sd_cmaf', () => {
  it('131_drm_mkv_h264_uhd_fhd_fhd_hd_hd_sd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('132_drm_mkv_h264_uhd_fhd_fhd_hd_hd_sd_cmaf', () => {
  it('132_drm_mkv_h264_uhd_fhd_fhd_hd_hd_sd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('133_drm_mkv_h264_uhd_fhd_fhd_hd_hd_sd_cmaf', () => {
  it('133_drm_mkv_h264_uhd_fhd_fhd_hd_hd_sd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('134_drm_mkv_h264_uhd_fhd_fhd_hd_hd_sd_cmaf', () => {
  it('134_drm_mkv_h264_uhd_fhd_fhd_hd_hd_sd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('135_drm_mkv_h264_uhd_fhd_fhd_hd_hd_sd_cmaf', () => {
  it('135_drm_mkv_h264_uhd_fhd_fhd_hd_hd_sd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('136_drm_mkv_h264_uhd_fhd_fhd_hd_hd_sd_cmaf', () => {
  it('136_drm_mkv_h264_uhd_fhd_fhd_hd_hd_sd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('137_drm_mkv_h264_uhd_fhd_fhd_hd_hd_sd_cmaf', () => {
  it('137_drm_mkv_h264_uhd_fhd_fhd_hd_hd_sd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('138_drm_mkv_h264_uhd_fhd_fhd_hd_hd_sd_cmaf', () => {
  it('138_drm_mkv_h264_uhd_fhd_fhd_hd_hd_sd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('139_drm_mkv_h264_uhd_fhd_fhd_hd_hd_sd_cmaf', () => {
  it('139_drm_mkv_h264_uhd_fhd_fhd_hd_hd_sd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('140_drm_mkv_h264_uhd_fhd_fhd_hd_hd_sd_cmaf', () => {
  it('140_drm_mkv_h264_uhd_fhd_fhd_hd_hd_sd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('141_drm_mkv_h264_uhd_fhd_fhd_hd_hd_sd_cmaf', () => {
  it('141_drm_mkv_h264_uhd_fhd_fhd_hd_hd_sd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('142_drm_mkv_h264_uhd_fhd_fhd_hd_hd_sd_cmaf', () => {
  it('142_drm_mkv_h264_uhd_fhd_fhd_hd_hd_sd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('143_drm_mkv_h264_uhd_fhd_fhd_hd_hd_sd_cmaf', () => {
  it('143_drm_mkv_h264_uhd_fhd_fhd_hd_hd_sd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('144_drm_mkv_h264_uhd_fhd_fhd_hd_hd_sd_cmaf', () => {
  it('144_drm_mkv_h264_uhd_fhd_fhd_hd_hd_sd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('145_drm_mkv_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls', () => {
  it('145_drm_mkv_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('146_drm_mkv_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls', () => {
  it('146_drm_mkv_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('147_drm_mkv_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls', () => {
  it('147_drm_mkv_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('148_drm_mkv_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls', () => {
  it('148_drm_mkv_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('149_drm_mkv_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls', () => {
  it('149_drm_mkv_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('150_drm_mkv_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls', () => {
  it('150_drm_mkv_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('151_drm_mkv_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls', () => {
  it('151_drm_mkv_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('152_drm_mkv_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls', () => {
  it('152_drm_mkv_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('153_drm_mkv_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls', () => {
  it('153_drm_mkv_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('154_drm_mkv_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls', () => {
  it('154_drm_mkv_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('155_drm_mkv_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls', () => {
  it('155_drm_mkv_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('156_drm_mkv_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls', () => {
  it('156_drm_mkv_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('157_drm_mkv_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls', () => {
  it('157_drm_mkv_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('158_drm_mkv_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls', () => {
  it('158_drm_mkv_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('159_drm_mkv_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls', () => {
  it('159_drm_mkv_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('160_drm_mkv_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls', () => {
  it('160_drm_mkv_h264_uhd_fhd_fhd_hd_hd_sd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('161_drm_h264_h265_uhd_fhd_hd_cmaf', () => {
  it('161_drm_h264_h265_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('162_drm_h264_h265_uhd_fhd_hd_cmaf', () => {
  it('162_drm_h264_h265_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('163_drm_h264_h265_uhd_fhd_hd_cmaf', () => {
  it('163_drm_h264_h265_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('164_drm_h264_h265_uhd_fhd_hd_cmaf', () => {
  it('164_drm_h264_h265_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('165_drm_h264_h265_uhd_fhd_hd_cmaf', () => {
  it('165_drm_h264_h265_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('166_drm_h264_h265_uhd_fhd_hd_cmaf', () => {
  it('166_drm_h264_h265_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('167_drm_h264_h265_uhd_fhd_hd_cmaf', () => {
  it('167_drm_h264_h265_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('168_drm_h264_h265_uhd_fhd_hd_cmaf', () => {
  it('168_drm_h264_h265_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('169_drm_h264_h265_uhd_fhd_hd_cmaf', () => {
  it('169_drm_h264_h265_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('170_drm_h264_h265_uhd_fhd_hd_cmaf', () => {
  it('170_drm_h264_h265_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('171_drm_h264_h265_uhd_fhd_hd_cmaf', () => {
  it('171_drm_h264_h265_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('172_drm_h264_h265_uhd_fhd_hd_cmaf', () => {
  it('172_drm_h264_h265_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('173_drm_h264_h265_uhd_fhd_hd_cmaf', () => {
  it('173_drm_h264_h265_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('174_drm_h264_h265_uhd_fhd_hd_cmaf', () => {
  it('174_drm_h264_h265_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('175_drm_h264_h265_uhd_fhd_hd_cmaf', () => {
  it('175_drm_h264_h265_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('176_drm_h264_h265_uhd_fhd_hd_cmaf', () => {
  it('176_drm_h264_h265_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('177_drm_h264_h265_uhd_fhd_hd_dash_hls', () => {
  it('177_drm_h264_h265_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('178_drm_h264_h265_uhd_fhd_hd_dash_hls', () => {
  it('178_drm_h264_h265_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('179_drm_h264_h265_uhd_fhd_hd_dash_hls', () => {
  it('179_drm_h264_h265_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('180_drm_h264_h265_uhd_fhd_hd_dash_hls', () => {
  it('180_drm_h264_h265_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('181_drm_h264_h265_uhd_fhd_hd_dash_hls', () => {
  it('181_drm_h264_h265_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('182_drm_h264_h265_uhd_fhd_hd_dash_hls', () => {
  it('182_drm_h264_h265_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('183_drm_h264_h265_uhd_fhd_hd_dash_hls', () => {
  it('183_drm_h264_h265_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('184_drm_h264_h265_uhd_fhd_hd_dash_hls', () => {
  it('184_drm_h264_h265_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('185_drm_h264_h265_uhd_fhd_hd_dash_hls', () => {
  it('185_drm_h264_h265_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('186_drm_h264_h265_uhd_fhd_hd_dash_hls', () => {
  it('186_drm_h264_h265_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('187_drm_h264_h265_uhd_fhd_hd_dash_hls', () => {
  it('187_drm_h264_h265_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('188_drm_h264_h265_uhd_fhd_hd_dash_hls', () => {
  it('188_drm_h264_h265_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('189_drm_h264_h265_uhd_fhd_hd_dash_hls', () => {
  it('189_drm_h264_h265_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('190_drm_h264_h265_uhd_fhd_hd_dash_hls', () => {
  it('190_drm_h264_h265_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('191_drm_h264_h265_uhd_fhd_hd_dash_hls', () => {
  it('191_drm_h264_h265_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('192_drm_h264_h265_uhd_fhd_hd_dash_hls', () => {
  it('192_drm_h264_h265_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('193_drm_h265_h265_uhd_fhd_hd_cmaf', () => {
  it('193_drm_h265_h265_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('194_drm_h265_h265_uhd_fhd_hd_cmaf', () => {
  it('194_drm_h265_h265_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('195_drm_h265_h265_uhd_fhd_hd_cmaf', () => {
  it('195_drm_h265_h265_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('196_drm_h265_h265_uhd_fhd_hd_cmaf', () => {
  it('196_drm_h265_h265_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('197_drm_h265_h265_uhd_fhd_hd_cmaf', () => {
  it('197_drm_h265_h265_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('198_drm_h265_h265_uhd_fhd_hd_cmaf', () => {
  it('198_drm_h265_h265_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('199_drm_h265_h265_uhd_fhd_hd_cmaf', () => {
  it('199_drm_h265_h265_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('200_drm_h265_h265_uhd_fhd_hd_cmaf', () => {
  it('200_drm_h265_h265_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('201_drm_h265_h265_uhd_fhd_hd_cmaf', () => {
  it('201_drm_h265_h265_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('202_drm_h265_h265_uhd_fhd_hd_cmaf', () => {
  it('202_drm_h265_h265_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('203_drm_h265_h265_uhd_fhd_hd_cmaf', () => {
  it('203_drm_h265_h265_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('204_drm_h265_h265_uhd_fhd_hd_cmaf', () => {
  it('204_drm_h265_h265_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('205_drm_h265_h265_uhd_fhd_hd_cmaf', () => {
  it('205_drm_h265_h265_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('206_drm_h265_h265_uhd_fhd_hd_cmaf', () => {
  it('206_drm_h265_h265_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('207_drm_h265_h265_uhd_fhd_hd_cmaf', () => {
  it('207_drm_h265_h265_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('208_drm_h265_h265_uhd_fhd_hd_cmaf', () => {
  it('208_drm_h265_h265_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('209_drm_h265_h265_uhd_fhd_hd_dash_hls', () => {
  it('209_drm_h265_h265_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('210_drm_h265_h265_uhd_fhd_hd_dash_hls', () => {
  it('210_drm_h265_h265_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('211_drm_h265_h265_uhd_fhd_hd_dash_hls', () => {
  it('211_drm_h265_h265_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('212_drm_h265_h265_uhd_fhd_hd_dash_hls', () => {
  it('212_drm_h265_h265_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('213_drm_h265_h265_uhd_fhd_hd_dash_hls', () => {
  it('213_drm_h265_h265_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('214_drm_h265_h265_uhd_fhd_hd_dash_hls', () => {
  it('214_drm_h265_h265_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('215_drm_h265_h265_uhd_fhd_hd_dash_hls', () => {
  it('215_drm_h265_h265_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('216_drm_h265_h265_uhd_fhd_hd_dash_hls', () => {
  it('216_drm_h265_h265_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('217_drm_h265_h265_uhd_fhd_hd_dash_hls', () => {
  it('217_drm_h265_h265_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('218_drm_h265_h265_uhd_fhd_hd_dash_hls', () => {
  it('218_drm_h265_h265_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('219_drm_h265_h265_uhd_fhd_hd_dash_hls', () => {
  it('219_drm_h265_h265_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('220_drm_h265_h265_uhd_fhd_hd_dash_hls', () => {
  it('220_drm_h265_h265_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('221_drm_h265_h265_uhd_fhd_hd_dash_hls', () => {
  it('221_drm_h265_h265_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('222_drm_h265_h265_uhd_fhd_hd_dash_hls', () => {
  it('222_drm_h265_h265_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('223_drm_h265_h265_uhd_fhd_hd_dash_hls', () => {
  it('223_drm_h265_h265_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('224_drm_h265_h265_uhd_fhd_hd_dash_hls', () => {
  it('224_drm_h265_h265_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('225_drm_prores_h265_uhd_fhd_hd_cmaf', () => {
  it('225_drm_prores_h265_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('226_drm_prores_h265_uhd_fhd_hd_cmaf', () => {
  it('226_drm_prores_h265_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('227_drm_prores_h265_uhd_fhd_hd_cmaf', () => {
  it('227_drm_prores_h265_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('228_drm_prores_h265_uhd_fhd_hd_cmaf', () => {
  it('228_drm_prores_h265_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('229_drm_prores_h265_uhd_fhd_hd_cmaf', () => {
  it('229_drm_prores_h265_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('230_drm_prores_h265_uhd_fhd_hd_cmaf', () => {
  it('230_drm_prores_h265_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('231_drm_prores_h265_uhd_fhd_hd_cmaf', () => {
  it('231_drm_prores_h265_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('232_drm_prores_h265_uhd_fhd_hd_cmaf', () => {
  it('232_drm_prores_h265_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('233_drm_prores_h265_uhd_fhd_hd_cmaf', () => {
  it('233_drm_prores_h265_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('234_drm_prores_h265_uhd_fhd_hd_cmaf', () => {
  it('234_drm_prores_h265_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('235_drm_prores_h265_uhd_fhd_hd_cmaf', () => {
  it('235_drm_prores_h265_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('236_drm_prores_h265_uhd_fhd_hd_cmaf', () => {
  it('236_drm_prores_h265_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('237_drm_prores_h265_uhd_fhd_hd_cmaf', () => {
  it('237_drm_prores_h265_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('238_drm_prores_h265_uhd_fhd_hd_cmaf', () => {
  it('238_drm_prores_h265_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('239_drm_prores_h265_uhd_fhd_hd_cmaf', () => {
  it('239_drm_prores_h265_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('240_drm_prores_h265_uhd_fhd_hd_cmaf', () => {
  it('240_drm_prores_h265_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('241_drm_prores_h265_uhd_fhd_hd_dash_hls', () => {
  it('241_drm_prores_h265_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('242_drm_prores_h265_uhd_fhd_hd_dash_hls', () => {
  it('242_drm_prores_h265_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('243_drm_prores_h265_uhd_fhd_hd_dash_hls', () => {
  it('243_drm_prores_h265_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('244_drm_prores_h265_uhd_fhd_hd_dash_hls', () => {
  it('244_drm_prores_h265_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('245_drm_prores_h265_uhd_fhd_hd_dash_hls', () => {
  it('245_drm_prores_h265_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('246_drm_prores_h265_uhd_fhd_hd_dash_hls', () => {
  it('246_drm_prores_h265_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('247_drm_prores_h265_uhd_fhd_hd_dash_hls', () => {
  it('247_drm_prores_h265_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('248_drm_prores_h265_uhd_fhd_hd_dash_hls', () => {
  it('248_drm_prores_h265_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('249_drm_prores_h265_uhd_fhd_hd_dash_hls', () => {
  it('249_drm_prores_h265_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('250_drm_prores_h265_uhd_fhd_hd_dash_hls', () => {
  it('250_drm_prores_h265_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('251_drm_prores_h265_uhd_fhd_hd_dash_hls', () => {
  it('251_drm_prores_h265_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('252_drm_prores_h265_uhd_fhd_hd_dash_hls', () => {
  it('252_drm_prores_h265_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('253_drm_prores_h265_uhd_fhd_hd_dash_hls', () => {
  it('253_drm_prores_h265_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('254_drm_prores_h265_uhd_fhd_hd_dash_hls', () => {
  it('254_drm_prores_h265_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('255_drm_prores_h265_uhd_fhd_hd_dash_hls', () => {
  it('255_drm_prores_h265_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('256_drm_prores_h265_uhd_fhd_hd_dash_hls', () => {
  it('256_drm_prores_h265_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('257_drm_xdcam_h265_uhd_fhd_hd_cmaf', () => {
  it('257_drm_xdcam_h265_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('258_drm_xdcam_h265_uhd_fhd_hd_cmaf', () => {
  it('258_drm_xdcam_h265_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('259_drm_xdcam_h265_uhd_fhd_hd_cmaf', () => {
  it('259_drm_xdcam_h265_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('260_drm_xdcam_h265_uhd_fhd_hd_cmaf', () => {
  it('260_drm_xdcam_h265_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('261_drm_xdcam_h265_uhd_fhd_hd_cmaf', () => {
  it('261_drm_xdcam_h265_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('262_drm_xdcam_h265_uhd_fhd_hd_cmaf', () => {
  it('262_drm_xdcam_h265_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('263_drm_xdcam_h265_uhd_fhd_hd_cmaf', () => {
  it('263_drm_xdcam_h265_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('264_drm_xdcam_h265_uhd_fhd_hd_cmaf', () => {
  it('264_drm_xdcam_h265_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('265_drm_xdcam_h265_uhd_fhd_hd_cmaf', () => {
  it('265_drm_xdcam_h265_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('266_drm_xdcam_h265_uhd_fhd_hd_cmaf', () => {
  it('266_drm_xdcam_h265_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('267_drm_xdcam_h265_uhd_fhd_hd_cmaf', () => {
  it('267_drm_xdcam_h265_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('268_drm_xdcam_h265_uhd_fhd_hd_cmaf', () => {
  it('268_drm_xdcam_h265_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('269_drm_xdcam_h265_uhd_fhd_hd_cmaf', () => {
  it('269_drm_xdcam_h265_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('270_drm_xdcam_h265_uhd_fhd_hd_cmaf', () => {
  it('270_drm_xdcam_h265_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('271_drm_xdcam_h265_uhd_fhd_hd_cmaf', () => {
  it('271_drm_xdcam_h265_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('272_drm_xdcam_h265_uhd_fhd_hd_cmaf', () => {
  it('272_drm_xdcam_h265_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('273_drm_xdcam_h265_uhd_fhd_hd_dash_hls', () => {
  it('273_drm_xdcam_h265_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('274_drm_xdcam_h265_uhd_fhd_hd_dash_hls', () => {
  it('274_drm_xdcam_h265_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('275_drm_xdcam_h265_uhd_fhd_hd_dash_hls', () => {
  it('275_drm_xdcam_h265_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('276_drm_xdcam_h265_uhd_fhd_hd_dash_hls', () => {
  it('276_drm_xdcam_h265_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('277_drm_xdcam_h265_uhd_fhd_hd_dash_hls', () => {
  it('277_drm_xdcam_h265_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('278_drm_xdcam_h265_uhd_fhd_hd_dash_hls', () => {
  it('278_drm_xdcam_h265_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('279_drm_xdcam_h265_uhd_fhd_hd_dash_hls', () => {
  it('279_drm_xdcam_h265_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('280_drm_xdcam_h265_uhd_fhd_hd_dash_hls', () => {
  it('280_drm_xdcam_h265_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('281_drm_xdcam_h265_uhd_fhd_hd_dash_hls', () => {
  it('281_drm_xdcam_h265_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('282_drm_xdcam_h265_uhd_fhd_hd_dash_hls', () => {
  it('282_drm_xdcam_h265_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('283_drm_xdcam_h265_uhd_fhd_hd_dash_hls', () => {
  it('283_drm_xdcam_h265_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('284_drm_xdcam_h265_uhd_fhd_hd_dash_hls', () => {
  it('284_drm_xdcam_h265_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('285_drm_xdcam_h265_uhd_fhd_hd_dash_hls', () => {
  it('285_drm_xdcam_h265_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('286_drm_xdcam_h265_uhd_fhd_hd_dash_hls', () => {
  it('286_drm_xdcam_h265_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('287_drm_xdcam_h265_uhd_fhd_hd_dash_hls', () => {
  it('287_drm_xdcam_h265_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('288_drm_xdcam_h265_uhd_fhd_hd_dash_hls', () => {
  it('288_drm_xdcam_h265_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('289_drm_mkv_h265_uhd_fhd_hd_cmaf', () => {
  it('289_drm_mkv_h265_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('290_drm_mkv_h265_uhd_fhd_hd_cmaf', () => {
  it('290_drm_mkv_h265_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('291_drm_mkv_h265_uhd_fhd_hd_cmaf', () => {
  it('291_drm_mkv_h265_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('292_drm_mkv_h265_uhd_fhd_hd_cmaf', () => {
  it('292_drm_mkv_h265_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('293_drm_mkv_h265_uhd_fhd_hd_cmaf', () => {
  it('293_drm_mkv_h265_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('294_drm_mkv_h265_uhd_fhd_hd_cmaf', () => {
  it('294_drm_mkv_h265_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('295_drm_mkv_h265_uhd_fhd_hd_cmaf', () => {
  it('295_drm_mkv_h265_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('296_drm_mkv_h265_uhd_fhd_hd_cmaf', () => {
  it('296_drm_mkv_h265_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('297_drm_mkv_h265_uhd_fhd_hd_cmaf', () => {
  it('297_drm_mkv_h265_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('298_drm_mkv_h265_uhd_fhd_hd_cmaf', () => {
  it('298_drm_mkv_h265_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('299_drm_mkv_h265_uhd_fhd_hd_cmaf', () => {
  it('299_drm_mkv_h265_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('300_drm_mkv_h265_uhd_fhd_hd_cmaf', () => {
  it('300_drm_mkv_h265_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('301_drm_mkv_h265_uhd_fhd_hd_cmaf', () => {
  it('301_drm_mkv_h265_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('302_drm_mkv_h265_uhd_fhd_hd_cmaf', () => {
  it('302_drm_mkv_h265_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('303_drm_mkv_h265_uhd_fhd_hd_cmaf', () => {
  it('303_drm_mkv_h265_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('304_drm_mkv_h265_uhd_fhd_hd_cmaf', () => {
  it('304_drm_mkv_h265_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('305_drm_mkv_h265_uhd_fhd_hd_dash_hls', () => {
  it('305_drm_mkv_h265_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('306_drm_mkv_h265_uhd_fhd_hd_dash_hls', () => {
  it('306_drm_mkv_h265_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('307_drm_mkv_h265_uhd_fhd_hd_dash_hls', () => {
  it('307_drm_mkv_h265_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('308_drm_mkv_h265_uhd_fhd_hd_dash_hls', () => {
  it('308_drm_mkv_h265_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('309_drm_mkv_h265_uhd_fhd_hd_dash_hls', () => {
  it('309_drm_mkv_h265_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('310_drm_mkv_h265_uhd_fhd_hd_dash_hls', () => {
  it('310_drm_mkv_h265_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('311_drm_mkv_h265_uhd_fhd_hd_dash_hls', () => {
  it('311_drm_mkv_h265_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('312_drm_mkv_h265_uhd_fhd_hd_dash_hls', () => {
  it('312_drm_mkv_h265_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('313_drm_mkv_h265_uhd_fhd_hd_dash_hls', () => {
  it('313_drm_mkv_h265_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('314_drm_mkv_h265_uhd_fhd_hd_dash_hls', () => {
  it('314_drm_mkv_h265_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('315_drm_mkv_h265_uhd_fhd_hd_dash_hls', () => {
  it('315_drm_mkv_h265_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('316_drm_mkv_h265_uhd_fhd_hd_dash_hls', () => {
  it('316_drm_mkv_h265_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('317_drm_mkv_h265_uhd_fhd_hd_dash_hls', () => {
  it('317_drm_mkv_h265_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('318_drm_mkv_h265_uhd_fhd_hd_dash_hls', () => {
  it('318_drm_mkv_h265_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('319_drm_mkv_h265_uhd_fhd_hd_dash_hls', () => {
  it('319_drm_mkv_h265_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('320_drm_mkv_h265_uhd_fhd_hd_dash_hls', () => {
  it('320_drm_mkv_h265_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('321_drm_fwm_h264_h264_uhd_fhd_hd_cmaf', () => {
  it('321_drm_fwm_h264_h264_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('322_drm_fwm_h264_h264_uhd_fhd_hd_cmaf', () => {
  it('322_drm_fwm_h264_h264_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('323_drm_fwm_h264_h264_uhd_fhd_hd_cmaf', () => {
  it('323_drm_fwm_h264_h264_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('324_drm_fwm_h264_h264_uhd_fhd_hd_cmaf', () => {
  it('324_drm_fwm_h264_h264_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('325_drm_fwm_h264_h264_uhd_fhd_hd_cmaf', () => {
  it('325_drm_fwm_h264_h264_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('326_drm_fwm_h264_h264_uhd_fhd_hd_cmaf', () => {
  it('326_drm_fwm_h264_h264_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('327_drm_fwm_h264_h264_uhd_fhd_hd_cmaf', () => {
  it('327_drm_fwm_h264_h264_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('328_drm_fwm_h264_h264_uhd_fhd_hd_cmaf', () => {
  it('328_drm_fwm_h264_h264_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('329_drm_fwm_h264_h264_uhd_fhd_hd_cmaf', () => {
  it('329_drm_fwm_h264_h264_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('330_drm_fwm_h264_h264_uhd_fhd_hd_cmaf', () => {
  it('330_drm_fwm_h264_h264_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('331_drm_fwm_h264_h264_uhd_fhd_hd_cmaf', () => {
  it('331_drm_fwm_h264_h264_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('332_drm_fwm_h264_h264_uhd_fhd_hd_cmaf', () => {
  it('332_drm_fwm_h264_h264_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('333_drm_fwm_h264_h264_uhd_fhd_hd_cmaf', () => {
  it('333_drm_fwm_h264_h264_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('334_drm_fwm_h264_h264_uhd_fhd_hd_cmaf', () => {
  it('334_drm_fwm_h264_h264_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('335_drm_fwm_h264_h264_uhd_fhd_hd_cmaf', () => {
  it('335_drm_fwm_h264_h264_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('336_drm_fwm_h264_h264_uhd_fhd_hd_cmaf', () => {
  it('336_drm_fwm_h264_h264_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('337_drm_fwm_h264_h264_uhd_fhd_hd_dash_hls', () => {
  it('337_drm_fwm_h264_h264_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('338_drm_fwm_h264_h264_uhd_fhd_hd_dash_hls', () => {
  it('338_drm_fwm_h264_h264_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('339_drm_fwm_h264_h264_uhd_fhd_hd_dash_hls', () => {
  it('339_drm_fwm_h264_h264_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('340_drm_fwm_h264_h264_uhd_fhd_hd_dash_hls', () => {
  it('340_drm_fwm_h264_h264_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('341_drm_fwm_h264_h264_uhd_fhd_hd_dash_hls', () => {
  it('341_drm_fwm_h264_h264_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('342_drm_fwm_h264_h264_uhd_fhd_hd_dash_hls', () => {
  it('342_drm_fwm_h264_h264_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('343_drm_fwm_h264_h264_uhd_fhd_hd_dash_hls', () => {
  it('343_drm_fwm_h264_h264_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('344_drm_fwm_h264_h264_uhd_fhd_hd_dash_hls', () => {
  it('344_drm_fwm_h264_h264_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('345_drm_fwm_h264_h264_uhd_fhd_hd_dash_hls', () => {
  it('345_drm_fwm_h264_h264_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('346_drm_fwm_h264_h264_uhd_fhd_hd_dash_hls', () => {
  it('346_drm_fwm_h264_h264_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('347_drm_fwm_h264_h264_uhd_fhd_hd_dash_hls', () => {
  it('347_drm_fwm_h264_h264_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('348_drm_fwm_h264_h264_uhd_fhd_hd_dash_hls', () => {
  it('348_drm_fwm_h264_h264_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('349_drm_fwm_h264_h264_uhd_fhd_hd_dash_hls', () => {
  it('349_drm_fwm_h264_h264_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('350_drm_fwm_h264_h264_uhd_fhd_hd_dash_hls', () => {
  it('350_drm_fwm_h264_h264_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('351_drm_fwm_h264_h264_uhd_fhd_hd_dash_hls', () => {
  it('351_drm_fwm_h264_h264_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('352_drm_fwm_h264_h264_uhd_fhd_hd_dash_hls', () => {
  it('352_drm_fwm_h264_h264_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('353_drm_fwm_h264_h264_fhd_fhd_hd_sd_sd_cmaf', () => {
  it('353_drm_fwm_h264_h264_fhd_fhd_hd_sd_sd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('354_drm_fwm_h264_h264_fhd_fhd_hd_sd_sd_cmaf', () => {
  it('354_drm_fwm_h264_h264_fhd_fhd_hd_sd_sd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('355_drm_fwm_h264_h264_fhd_fhd_hd_sd_sd_cmaf', () => {
  it('355_drm_fwm_h264_h264_fhd_fhd_hd_sd_sd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('356_drm_fwm_h264_h264_fhd_fhd_hd_sd_sd_cmaf', () => {
  it('356_drm_fwm_h264_h264_fhd_fhd_hd_sd_sd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('357_drm_fwm_h264_h264_fhd_fhd_hd_sd_sd_cmaf', () => {
  it('357_drm_fwm_h264_h264_fhd_fhd_hd_sd_sd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('358_drm_fwm_h264_h264_fhd_fhd_hd_sd_sd_cmaf', () => {
  it('358_drm_fwm_h264_h264_fhd_fhd_hd_sd_sd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('359_drm_fwm_h264_h264_fhd_fhd_hd_sd_sd_cmaf', () => {
  it('359_drm_fwm_h264_h264_fhd_fhd_hd_sd_sd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('360_drm_fwm_h264_h264_fhd_fhd_hd_sd_sd_cmaf', () => {
  it('360_drm_fwm_h264_h264_fhd_fhd_hd_sd_sd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('361_drm_fwm_h264_h264_fhd_fhd_hd_sd_sd_cmaf', () => {
  it('361_drm_fwm_h264_h264_fhd_fhd_hd_sd_sd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('362_drm_fwm_h264_h264_fhd_fhd_hd_sd_sd_cmaf', () => {
  it('362_drm_fwm_h264_h264_fhd_fhd_hd_sd_sd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('363_drm_fwm_h264_h264_fhd_fhd_hd_sd_sd_cmaf', () => {
  it('363_drm_fwm_h264_h264_fhd_fhd_hd_sd_sd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('364_drm_fwm_h264_h264_fhd_fhd_hd_sd_sd_cmaf', () => {
  it('364_drm_fwm_h264_h264_fhd_fhd_hd_sd_sd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('365_drm_fwm_h264_h264_fhd_fhd_hd_sd_sd_cmaf', () => {
  it('365_drm_fwm_h264_h264_fhd_fhd_hd_sd_sd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('366_drm_fwm_h264_h264_fhd_fhd_hd_sd_sd_cmaf', () => {
  it('366_drm_fwm_h264_h264_fhd_fhd_hd_sd_sd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('367_drm_fwm_h264_h264_fhd_fhd_hd_sd_sd_cmaf', () => {
  it('367_drm_fwm_h264_h264_fhd_fhd_hd_sd_sd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('368_drm_fwm_h264_h264_fhd_fhd_hd_sd_sd_cmaf', () => {
  it('368_drm_fwm_h264_h264_fhd_fhd_hd_sd_sd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('369_drm_fwm_h264_h264_fhd_fhd_hd_sd_sd_dash_hls', () => {
  it('369_drm_fwm_h264_h264_fhd_fhd_hd_sd_sd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('370_drm_fwm_h264_h264_fhd_fhd_hd_sd_sd_dash_hls', () => {
  it('370_drm_fwm_h264_h264_fhd_fhd_hd_sd_sd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('371_drm_fwm_h264_h264_fhd_fhd_hd_sd_sd_dash_hls', () => {
  it('371_drm_fwm_h264_h264_fhd_fhd_hd_sd_sd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('372_drm_fwm_h264_h264_fhd_fhd_hd_sd_sd_dash_hls', () => {
  it('372_drm_fwm_h264_h264_fhd_fhd_hd_sd_sd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('373_drm_fwm_h264_h264_fhd_fhd_hd_sd_sd_dash_hls', () => {
  it('373_drm_fwm_h264_h264_fhd_fhd_hd_sd_sd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('374_drm_fwm_h264_h264_fhd_fhd_hd_sd_sd_dash_hls', () => {
  it('374_drm_fwm_h264_h264_fhd_fhd_hd_sd_sd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('375_drm_fwm_h264_h264_fhd_fhd_hd_sd_sd_dash_hls', () => {
  it('375_drm_fwm_h264_h264_fhd_fhd_hd_sd_sd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('376_drm_fwm_h264_h264_fhd_fhd_hd_sd_sd_dash_hls', () => {
  it('376_drm_fwm_h264_h264_fhd_fhd_hd_sd_sd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('377_drm_fwm_h264_h264_fhd_fhd_hd_sd_sd_dash_hls', () => {
  it('377_drm_fwm_h264_h264_fhd_fhd_hd_sd_sd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('378_drm_fwm_h264_h264_fhd_fhd_hd_sd_sd_dash_hls', () => {
  it('378_drm_fwm_h264_h264_fhd_fhd_hd_sd_sd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('379_drm_fwm_h264_h264_fhd_fhd_hd_sd_sd_dash_hls', () => {
  it('379_drm_fwm_h264_h264_fhd_fhd_hd_sd_sd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('380_drm_fwm_h264_h264_fhd_fhd_hd_sd_sd_dash_hls', () => {
  it('380_drm_fwm_h264_h264_fhd_fhd_hd_sd_sd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('381_drm_fwm_h264_h264_fhd_fhd_hd_sd_sd_dash_hls', () => {
  it('381_drm_fwm_h264_h264_fhd_fhd_hd_sd_sd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('382_drm_fwm_h264_h264_fhd_fhd_hd_sd_sd_dash_hls', () => {
  it('382_drm_fwm_h264_h264_fhd_fhd_hd_sd_sd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('383_drm_fwm_h264_h264_fhd_fhd_hd_sd_sd_dash_hls', () => {
  it('383_drm_fwm_h264_h264_fhd_fhd_hd_sd_sd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('384_drm_fwm_h264_h264_fhd_fhd_hd_sd_sd_dash_hls', () => {
  it('384_drm_fwm_h264_h264_fhd_fhd_hd_sd_sd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('385_drm_fwm_h265_h264_uhd_fhd_hd_cmaf', () => {
  it('385_drm_fwm_h265_h264_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('386_drm_fwm_h265_h264_uhd_fhd_hd_cmaf', () => {
  it('386_drm_fwm_h265_h264_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('387_drm_fwm_h265_h264_uhd_fhd_hd_cmaf', () => {
  it('387_drm_fwm_h265_h264_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('388_drm_fwm_h265_h264_uhd_fhd_hd_cmaf', () => {
  it('388_drm_fwm_h265_h264_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('389_drm_fwm_h265_h264_uhd_fhd_hd_cmaf', () => {
  it('389_drm_fwm_h265_h264_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('390_drm_fwm_h265_h264_uhd_fhd_hd_cmaf', () => {
  it('390_drm_fwm_h265_h264_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('391_drm_fwm_h265_h264_uhd_fhd_hd_cmaf', () => {
  it('391_drm_fwm_h265_h264_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('392_drm_fwm_h265_h264_uhd_fhd_hd_cmaf', () => {
  it('392_drm_fwm_h265_h264_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('393_drm_fwm_h265_h264_uhd_fhd_hd_cmaf', () => {
  it('393_drm_fwm_h265_h264_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('394_drm_fwm_h265_h264_uhd_fhd_hd_cmaf', () => {
  it('394_drm_fwm_h265_h264_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('395_drm_fwm_h265_h264_uhd_fhd_hd_cmaf', () => {
  it('395_drm_fwm_h265_h264_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('396_drm_fwm_h265_h264_uhd_fhd_hd_cmaf', () => {
  it('396_drm_fwm_h265_h264_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('397_drm_fwm_h265_h264_uhd_fhd_hd_cmaf', () => {
  it('397_drm_fwm_h265_h264_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('398_drm_fwm_h265_h264_uhd_fhd_hd_cmaf', () => {
  it('398_drm_fwm_h265_h264_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('399_drm_fwm_h265_h264_uhd_fhd_hd_cmaf', () => {
  it('399_drm_fwm_h265_h264_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('400_drm_fwm_h265_h264_uhd_fhd_hd_cmaf', () => {
  it('400_drm_fwm_h265_h264_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('401_drm_fwm_h265_h264_uhd_fhd_hd_dash_hls', () => {
  it('401_drm_fwm_h265_h264_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('402_drm_fwm_h265_h264_uhd_fhd_hd_dash_hls', () => {
  it('402_drm_fwm_h265_h264_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('403_drm_fwm_h265_h264_uhd_fhd_hd_dash_hls', () => {
  it('403_drm_fwm_h265_h264_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('404_drm_fwm_h265_h264_uhd_fhd_hd_dash_hls', () => {
  it('404_drm_fwm_h265_h264_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('405_drm_fwm_h265_h264_uhd_fhd_hd_dash_hls', () => {
  it('405_drm_fwm_h265_h264_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('406_drm_fwm_h265_h264_uhd_fhd_hd_dash_hls', () => {
  it('406_drm_fwm_h265_h264_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('407_drm_fwm_h265_h264_uhd_fhd_hd_dash_hls', () => {
  it('407_drm_fwm_h265_h264_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('408_drm_fwm_h265_h264_uhd_fhd_hd_dash_hls', () => {
  it('408_drm_fwm_h265_h264_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('409_drm_fwm_h265_h264_uhd_fhd_hd_dash_hls', () => {
  it('409_drm_fwm_h265_h264_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('410_drm_fwm_h265_h264_uhd_fhd_hd_dash_hls', () => {
  it('410_drm_fwm_h265_h264_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('411_drm_fwm_h265_h264_uhd_fhd_hd_dash_hls', () => {
  it('411_drm_fwm_h265_h264_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('412_drm_fwm_h265_h264_uhd_fhd_hd_dash_hls', () => {
  it('412_drm_fwm_h265_h264_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('413_drm_fwm_h265_h264_uhd_fhd_hd_dash_hls', () => {
  it('413_drm_fwm_h265_h264_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('414_drm_fwm_h265_h264_uhd_fhd_hd_dash_hls', () => {
  it('414_drm_fwm_h265_h264_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('415_drm_fwm_h265_h264_uhd_fhd_hd_dash_hls', () => {
  it('415_drm_fwm_h265_h264_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('416_drm_fwm_h265_h264_uhd_fhd_hd_dash_hls', () => {
  it('416_drm_fwm_h265_h264_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('417_drm_fwm_h265_h264_fhd_fhd_hd_sd_sd_cmaf', () => {
  it('417_drm_fwm_h265_h264_fhd_fhd_hd_sd_sd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('418_drm_fwm_h265_h264_fhd_fhd_hd_sd_sd_cmaf', () => {
  it('418_drm_fwm_h265_h264_fhd_fhd_hd_sd_sd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('419_drm_fwm_h265_h264_fhd_fhd_hd_sd_sd_cmaf', () => {
  it('419_drm_fwm_h265_h264_fhd_fhd_hd_sd_sd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('420_drm_fwm_h265_h264_fhd_fhd_hd_sd_sd_cmaf', () => {
  it('420_drm_fwm_h265_h264_fhd_fhd_hd_sd_sd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('421_drm_fwm_h265_h264_fhd_fhd_hd_sd_sd_cmaf', () => {
  it('421_drm_fwm_h265_h264_fhd_fhd_hd_sd_sd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('422_drm_fwm_h265_h264_fhd_fhd_hd_sd_sd_cmaf', () => {
  it('422_drm_fwm_h265_h264_fhd_fhd_hd_sd_sd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('423_drm_fwm_h265_h264_fhd_fhd_hd_sd_sd_cmaf', () => {
  it('423_drm_fwm_h265_h264_fhd_fhd_hd_sd_sd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('424_drm_fwm_h265_h264_fhd_fhd_hd_sd_sd_cmaf', () => {
  it('424_drm_fwm_h265_h264_fhd_fhd_hd_sd_sd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('425_drm_fwm_h265_h264_fhd_fhd_hd_sd_sd_cmaf', () => {
  it('425_drm_fwm_h265_h264_fhd_fhd_hd_sd_sd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('426_drm_fwm_h265_h264_fhd_fhd_hd_sd_sd_cmaf', () => {
  it('426_drm_fwm_h265_h264_fhd_fhd_hd_sd_sd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('427_drm_fwm_h265_h264_fhd_fhd_hd_sd_sd_cmaf', () => {
  it('427_drm_fwm_h265_h264_fhd_fhd_hd_sd_sd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('428_drm_fwm_h265_h264_fhd_fhd_hd_sd_sd_cmaf', () => {
  it('428_drm_fwm_h265_h264_fhd_fhd_hd_sd_sd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('429_drm_fwm_h265_h264_fhd_fhd_hd_sd_sd_cmaf', () => {
  it('429_drm_fwm_h265_h264_fhd_fhd_hd_sd_sd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('430_drm_fwm_h265_h264_fhd_fhd_hd_sd_sd_cmaf', () => {
  it('430_drm_fwm_h265_h264_fhd_fhd_hd_sd_sd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('431_drm_fwm_h265_h264_fhd_fhd_hd_sd_sd_cmaf', () => {
  it('431_drm_fwm_h265_h264_fhd_fhd_hd_sd_sd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('432_drm_fwm_h265_h264_fhd_fhd_hd_sd_sd_cmaf', () => {
  it('432_drm_fwm_h265_h264_fhd_fhd_hd_sd_sd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('433_drm_fwm_h265_h264_fhd_fhd_hd_sd_sd_dash_hls', () => {
  it('433_drm_fwm_h265_h264_fhd_fhd_hd_sd_sd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('434_drm_fwm_h265_h264_fhd_fhd_hd_sd_sd_dash_hls', () => {
  it('434_drm_fwm_h265_h264_fhd_fhd_hd_sd_sd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('435_drm_fwm_h265_h264_fhd_fhd_hd_sd_sd_dash_hls', () => {
  it('435_drm_fwm_h265_h264_fhd_fhd_hd_sd_sd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('436_drm_fwm_h265_h264_fhd_fhd_hd_sd_sd_dash_hls', () => {
  it('436_drm_fwm_h265_h264_fhd_fhd_hd_sd_sd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('437_drm_fwm_h265_h264_fhd_fhd_hd_sd_sd_dash_hls', () => {
  it('437_drm_fwm_h265_h264_fhd_fhd_hd_sd_sd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('438_drm_fwm_h265_h264_fhd_fhd_hd_sd_sd_dash_hls', () => {
  it('438_drm_fwm_h265_h264_fhd_fhd_hd_sd_sd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('439_drm_fwm_h265_h264_fhd_fhd_hd_sd_sd_dash_hls', () => {
  it('439_drm_fwm_h265_h264_fhd_fhd_hd_sd_sd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('440_drm_fwm_h265_h264_fhd_fhd_hd_sd_sd_dash_hls', () => {
  it('440_drm_fwm_h265_h264_fhd_fhd_hd_sd_sd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('441_drm_fwm_h265_h264_fhd_fhd_hd_sd_sd_dash_hls', () => {
  it('441_drm_fwm_h265_h264_fhd_fhd_hd_sd_sd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('442_drm_fwm_h265_h264_fhd_fhd_hd_sd_sd_dash_hls', () => {
  it('442_drm_fwm_h265_h264_fhd_fhd_hd_sd_sd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('443_drm_fwm_h265_h264_fhd_fhd_hd_sd_sd_dash_hls', () => {
  it('443_drm_fwm_h265_h264_fhd_fhd_hd_sd_sd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('444_drm_fwm_h265_h264_fhd_fhd_hd_sd_sd_dash_hls', () => {
  it('444_drm_fwm_h265_h264_fhd_fhd_hd_sd_sd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('445_drm_fwm_h265_h264_fhd_fhd_hd_sd_sd_dash_hls', () => {
  it('445_drm_fwm_h265_h264_fhd_fhd_hd_sd_sd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('446_drm_fwm_h265_h264_fhd_fhd_hd_sd_sd_dash_hls', () => {
  it('446_drm_fwm_h265_h264_fhd_fhd_hd_sd_sd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('447_drm_fwm_h265_h264_fhd_fhd_hd_sd_sd_dash_hls', () => {
  it('447_drm_fwm_h265_h264_fhd_fhd_hd_sd_sd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('448_drm_fwm_h265_h264_fhd_fhd_hd_sd_sd_dash_hls', () => {
  it('448_drm_fwm_h265_h264_fhd_fhd_hd_sd_sd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

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
    }
  });
});


describe('449_drm_fwm_prores_h264_uhd_fhd_hd_cmaf', () => {
  it('449_drm_fwm_prores_h264_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createDRMTask({
      taskName: '449_drm_fwm_prores_h264_uhd_fhd_hd_cmaf',
      cid: 'test',
      inputCodec: 'PRORES',
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
    }
  });
});


describe('450_drm_fwm_prores_h264_uhd_fhd_hd_cmaf', () => {
  it('450_drm_fwm_prores_h264_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createDRMTask({
      taskName: '450_drm_fwm_prores_h264_uhd_fhd_hd_cmaf',
      cid: 'test',
      inputCodec: 'PRORES',
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
    }
  });
});


describe('451_drm_fwm_prores_h264_uhd_fhd_hd_cmaf', () => {
  it('451_drm_fwm_prores_h264_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createDRMTask({
      taskName: '451_drm_fwm_prores_h264_uhd_fhd_hd_cmaf',
      cid: 'test',
      inputCodec: 'PRORES',
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
    }
  });
});


describe('452_drm_fwm_prores_h264_uhd_fhd_hd_cmaf', () => {
  it('452_drm_fwm_prores_h264_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createDRMTask({
      taskName: '452_drm_fwm_prores_h264_uhd_fhd_hd_cmaf',
      cid: 'test',
      inputCodec: 'PRORES',
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
    }
  });
});


describe('453_drm_fwm_prores_h264_uhd_fhd_hd_cmaf', () => {
  it('453_drm_fwm_prores_h264_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createDRMTask({
      taskName: '453_drm_fwm_prores_h264_uhd_fhd_hd_cmaf',
      cid: 'test',
      inputCodec: 'PRORES',
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
    }
  });
});


describe('454_drm_fwm_prores_h264_uhd_fhd_hd_cmaf', () => {
  it('454_drm_fwm_prores_h264_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createDRMTask({
      taskName: '454_drm_fwm_prores_h264_uhd_fhd_hd_cmaf',
      cid: 'test',
      inputCodec: 'PRORES',
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
    }
  });
});


describe('455_drm_fwm_prores_h264_uhd_fhd_hd_cmaf', () => {
  it('455_drm_fwm_prores_h264_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createDRMTask({
      taskName: '455_drm_fwm_prores_h264_uhd_fhd_hd_cmaf',
      cid: 'test',
      inputCodec: 'PRORES',
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
    }
  });
});


describe('456_drm_fwm_prores_h264_uhd_fhd_hd_cmaf', () => {
  it('456_drm_fwm_prores_h264_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createDRMTask({
      taskName: '456_drm_fwm_prores_h264_uhd_fhd_hd_cmaf',
      cid: 'test',
      inputCodec: 'PRORES',
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
    }
  });
});


describe('457_drm_fwm_prores_h264_uhd_fhd_hd_cmaf', () => {
  it('457_drm_fwm_prores_h264_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createDRMTask({
      taskName: '457_drm_fwm_prores_h264_uhd_fhd_hd_cmaf',
      cid: 'test',
      inputCodec: 'PRORES',
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
    }
  });
});


describe('458_drm_fwm_prores_h264_uhd_fhd_hd_cmaf', () => {
  it('458_drm_fwm_prores_h264_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createDRMTask({
      taskName: '458_drm_fwm_prores_h264_uhd_fhd_hd_cmaf',
      cid: 'test',
      inputCodec: 'PRORES',
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
    }
  });
});


describe('459_drm_fwm_prores_h264_uhd_fhd_hd_cmaf', () => {
  it('459_drm_fwm_prores_h264_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createDRMTask({
      taskName: '459_drm_fwm_prores_h264_uhd_fhd_hd_cmaf',
      cid: 'test',
      inputCodec: 'PRORES',
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
    }
  });
});


describe('460_drm_fwm_prores_h264_uhd_fhd_hd_cmaf', () => {
  it('460_drm_fwm_prores_h264_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createDRMTask({
      taskName: '460_drm_fwm_prores_h264_uhd_fhd_hd_cmaf',
      cid: 'test',
      inputCodec: 'PRORES',
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
    }
  });
});


describe('461_drm_fwm_prores_h264_uhd_fhd_hd_cmaf', () => {
  it('461_drm_fwm_prores_h264_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createDRMTask({
      taskName: '461_drm_fwm_prores_h264_uhd_fhd_hd_cmaf',
      cid: 'test',
      inputCodec: 'PRORES',
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
    }
  });
});


describe('462_drm_fwm_prores_h264_uhd_fhd_hd_cmaf', () => {
  it('462_drm_fwm_prores_h264_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createDRMTask({
      taskName: '462_drm_fwm_prores_h264_uhd_fhd_hd_cmaf',
      cid: 'test',
      inputCodec: 'PRORES',
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
    }
  });
});


describe('463_drm_fwm_prores_h264_uhd_fhd_hd_cmaf', () => {
  it('463_drm_fwm_prores_h264_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createDRMTask({
      taskName: '463_drm_fwm_prores_h264_uhd_fhd_hd_cmaf',
      cid: 'test',
      inputCodec: 'PRORES',
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
    }
  });
});


describe('464_drm_fwm_prores_h264_uhd_fhd_hd_cmaf', () => {
  it('464_drm_fwm_prores_h264_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createDRMTask({
      taskName: '464_drm_fwm_prores_h264_uhd_fhd_hd_cmaf',
      cid: 'test',
      inputCodec: 'PRORES',
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
    }
  });
});


describe('465_drm_fwm_prores_h264_uhd_fhd_hd_dash_hls', () => {
  it('465_drm_fwm_prores_h264_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createDRMTask({
      taskName: '465_drm_fwm_prores_h264_uhd_fhd_hd_dash_hls',
      cid: 'test',
      inputCodec: 'PRORES',
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
    }
  });
});


describe('466_drm_fwm_prores_h264_uhd_fhd_hd_dash_hls', () => {
  it('466_drm_fwm_prores_h264_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createDRMTask({
      taskName: '466_drm_fwm_prores_h264_uhd_fhd_hd_dash_hls',
      cid: 'test',
      inputCodec: 'PRORES',
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
    }
  });
});


describe('467_drm_fwm_prores_h264_uhd_fhd_hd_dash_hls', () => {
  it('467_drm_fwm_prores_h264_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createDRMTask({
      taskName: '467_drm_fwm_prores_h264_uhd_fhd_hd_dash_hls',
      cid: 'test',
      inputCodec: 'PRORES',
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
    }
  });
});


describe('468_drm_fwm_prores_h264_uhd_fhd_hd_dash_hls', () => {
  it('468_drm_fwm_prores_h264_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createDRMTask({
      taskName: '468_drm_fwm_prores_h264_uhd_fhd_hd_dash_hls',
      cid: 'test',
      inputCodec: 'PRORES',
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
    }
  });
});


describe('469_drm_fwm_prores_h264_uhd_fhd_hd_dash_hls', () => {
  it('469_drm_fwm_prores_h264_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createDRMTask({
      taskName: '469_drm_fwm_prores_h264_uhd_fhd_hd_dash_hls',
      cid: 'test',
      inputCodec: 'PRORES',
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
    }
  });
});


describe('470_drm_fwm_prores_h264_uhd_fhd_hd_dash_hls', () => {
  it('470_drm_fwm_prores_h264_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createDRMTask({
      taskName: '470_drm_fwm_prores_h264_uhd_fhd_hd_dash_hls',
      cid: 'test',
      inputCodec: 'PRORES',
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
    }
  });
});


describe('471_drm_fwm_prores_h264_uhd_fhd_hd_dash_hls', () => {
  it('471_drm_fwm_prores_h264_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createDRMTask({
      taskName: '471_drm_fwm_prores_h264_uhd_fhd_hd_dash_hls',
      cid: 'test',
      inputCodec: 'PRORES',
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
    }
  });
});


describe('472_drm_fwm_prores_h264_uhd_fhd_hd_dash_hls', () => {
  it('472_drm_fwm_prores_h264_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createDRMTask({
      taskName: '472_drm_fwm_prores_h264_uhd_fhd_hd_dash_hls',
      cid: 'test',
      inputCodec: 'PRORES',
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
    }
  });
});


describe('473_drm_fwm_prores_h264_uhd_fhd_hd_dash_hls', () => {
  it('473_drm_fwm_prores_h264_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createDRMTask({
      taskName: '473_drm_fwm_prores_h264_uhd_fhd_hd_dash_hls',
      cid: 'test',
      inputCodec: 'PRORES',
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
    }
  });
});


describe('474_drm_fwm_prores_h264_uhd_fhd_hd_dash_hls', () => {
  it('474_drm_fwm_prores_h264_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createDRMTask({
      taskName: '474_drm_fwm_prores_h264_uhd_fhd_hd_dash_hls',
      cid: 'test',
      inputCodec: 'PRORES',
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
    }
  });
});


describe('475_drm_fwm_prores_h264_uhd_fhd_hd_dash_hls', () => {
  it('475_drm_fwm_prores_h264_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createDRMTask({
      taskName: '475_drm_fwm_prores_h264_uhd_fhd_hd_dash_hls',
      cid: 'test',
      inputCodec: 'PRORES',
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
    }
  });
});


describe('476_drm_fwm_prores_h264_uhd_fhd_hd_dash_hls', () => {
  it('476_drm_fwm_prores_h264_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createDRMTask({
      taskName: '476_drm_fwm_prores_h264_uhd_fhd_hd_dash_hls',
      cid: 'test',
      inputCodec: 'PRORES',
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
    }
  });
});


describe('477_drm_fwm_prores_h264_uhd_fhd_hd_dash_hls', () => {
  it('477_drm_fwm_prores_h264_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createDRMTask({
      taskName: '477_drm_fwm_prores_h264_uhd_fhd_hd_dash_hls',
      cid: 'test',
      inputCodec: 'PRORES',
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
    }
  });
});


describe('478_drm_fwm_prores_h264_uhd_fhd_hd_dash_hls', () => {
  it('478_drm_fwm_prores_h264_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createDRMTask({
      taskName: '478_drm_fwm_prores_h264_uhd_fhd_hd_dash_hls',
      cid: 'test',
      inputCodec: 'PRORES',
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
    }
  });
});


describe('479_drm_fwm_prores_h264_uhd_fhd_hd_dash_hls', () => {
  it('479_drm_fwm_prores_h264_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createDRMTask({
      taskName: '479_drm_fwm_prores_h264_uhd_fhd_hd_dash_hls',
      cid: 'test',
      inputCodec: 'PRORES',
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
    }
  });
});


describe('480_drm_fwm_prores_h264_uhd_fhd_hd_dash_hls', () => {
  it('480_drm_fwm_prores_h264_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createDRMTask({
      taskName: '480_drm_fwm_prores_h264_uhd_fhd_hd_dash_hls',
      cid: 'test',
      inputCodec: 'PRORES',
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
    }
  });
});


describe('481_drm_fwm_prores_h264_fhd_fhd_hd_sd_sd_cmaf', () => {
  it('481_drm_fwm_prores_h264_fhd_fhd_hd_sd_sd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createDRMTask({
      taskName: '481_drm_fwm_prores_h264_fhd_fhd_hd_sd_sd_cmaf',
      cid: 'test',
      inputCodec: 'PRORES',
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
    }
  });
});


describe('482_drm_fwm_prores_h264_fhd_fhd_hd_sd_sd_cmaf', () => {
  it('482_drm_fwm_prores_h264_fhd_fhd_hd_sd_sd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createDRMTask({
      taskName: '482_drm_fwm_prores_h264_fhd_fhd_hd_sd_sd_cmaf',
      cid: 'test',
      inputCodec: 'PRORES',
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
    }
  });
});


describe('483_drm_fwm_prores_h264_fhd_fhd_hd_sd_sd_cmaf', () => {
  it('483_drm_fwm_prores_h264_fhd_fhd_hd_sd_sd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createDRMTask({
      taskName: '483_drm_fwm_prores_h264_fhd_fhd_hd_sd_sd_cmaf',
      cid: 'test',
      inputCodec: 'PRORES',
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
    }
  });
});


describe('484_drm_fwm_prores_h264_fhd_fhd_hd_sd_sd_cmaf', () => {
  it('484_drm_fwm_prores_h264_fhd_fhd_hd_sd_sd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createDRMTask({
      taskName: '484_drm_fwm_prores_h264_fhd_fhd_hd_sd_sd_cmaf',
      cid: 'test',
      inputCodec: 'PRORES',
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
    }
  });
});


describe('485_drm_fwm_prores_h264_fhd_fhd_hd_sd_sd_cmaf', () => {
  it('485_drm_fwm_prores_h264_fhd_fhd_hd_sd_sd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createDRMTask({
      taskName: '485_drm_fwm_prores_h264_fhd_fhd_hd_sd_sd_cmaf',
      cid: 'test',
      inputCodec: 'PRORES',
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
    }
  });
});


describe('486_drm_fwm_prores_h264_fhd_fhd_hd_sd_sd_cmaf', () => {
  it('486_drm_fwm_prores_h264_fhd_fhd_hd_sd_sd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createDRMTask({
      taskName: '486_drm_fwm_prores_h264_fhd_fhd_hd_sd_sd_cmaf',
      cid: 'test',
      inputCodec: 'PRORES',
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
    }
  });
});


describe('487_drm_fwm_prores_h264_fhd_fhd_hd_sd_sd_cmaf', () => {
  it('487_drm_fwm_prores_h264_fhd_fhd_hd_sd_sd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createDRMTask({
      taskName: '487_drm_fwm_prores_h264_fhd_fhd_hd_sd_sd_cmaf',
      cid: 'test',
      inputCodec: 'PRORES',
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
    }
  });
});


describe('488_drm_fwm_prores_h264_fhd_fhd_hd_sd_sd_cmaf', () => {
  it('488_drm_fwm_prores_h264_fhd_fhd_hd_sd_sd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createDRMTask({
      taskName: '488_drm_fwm_prores_h264_fhd_fhd_hd_sd_sd_cmaf',
      cid: 'test',
      inputCodec: 'PRORES',
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
    }
  });
});


describe('489_drm_fwm_prores_h264_fhd_fhd_hd_sd_sd_cmaf', () => {
  it('489_drm_fwm_prores_h264_fhd_fhd_hd_sd_sd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createDRMTask({
      taskName: '489_drm_fwm_prores_h264_fhd_fhd_hd_sd_sd_cmaf',
      cid: 'test',
      inputCodec: 'PRORES',
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
    }
  });
});


describe('490_drm_fwm_prores_h264_fhd_fhd_hd_sd_sd_cmaf', () => {
  it('490_drm_fwm_prores_h264_fhd_fhd_hd_sd_sd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createDRMTask({
      taskName: '490_drm_fwm_prores_h264_fhd_fhd_hd_sd_sd_cmaf',
      cid: 'test',
      inputCodec: 'PRORES',
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
    }
  });
});


describe('491_drm_fwm_prores_h264_fhd_fhd_hd_sd_sd_cmaf', () => {
  it('491_drm_fwm_prores_h264_fhd_fhd_hd_sd_sd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createDRMTask({
      taskName: '491_drm_fwm_prores_h264_fhd_fhd_hd_sd_sd_cmaf',
      cid: 'test',
      inputCodec: 'PRORES',
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
    }
  });
});


describe('492_drm_fwm_prores_h264_fhd_fhd_hd_sd_sd_cmaf', () => {
  it('492_drm_fwm_prores_h264_fhd_fhd_hd_sd_sd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createDRMTask({
      taskName: '492_drm_fwm_prores_h264_fhd_fhd_hd_sd_sd_cmaf',
      cid: 'test',
      inputCodec: 'PRORES',
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
    }
  });
});


describe('493_drm_fwm_prores_h264_fhd_fhd_hd_sd_sd_cmaf', () => {
  it('493_drm_fwm_prores_h264_fhd_fhd_hd_sd_sd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createDRMTask({
      taskName: '493_drm_fwm_prores_h264_fhd_fhd_hd_sd_sd_cmaf',
      cid: 'test',
      inputCodec: 'PRORES',
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
    }
  });
});


describe('494_drm_fwm_prores_h264_fhd_fhd_hd_sd_sd_cmaf', () => {
  it('494_drm_fwm_prores_h264_fhd_fhd_hd_sd_sd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createDRMTask({
      taskName: '494_drm_fwm_prores_h264_fhd_fhd_hd_sd_sd_cmaf',
      cid: 'test',
      inputCodec: 'PRORES',
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
    }
  });
});


describe('495_drm_fwm_prores_h264_fhd_fhd_hd_sd_sd_cmaf', () => {
  it('495_drm_fwm_prores_h264_fhd_fhd_hd_sd_sd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createDRMTask({
      taskName: '495_drm_fwm_prores_h264_fhd_fhd_hd_sd_sd_cmaf',
      cid: 'test',
      inputCodec: 'PRORES',
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
    }
  });
});


describe('496_drm_fwm_prores_h264_fhd_fhd_hd_sd_sd_cmaf', () => {
  it('496_drm_fwm_prores_h264_fhd_fhd_hd_sd_sd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createDRMTask({
      taskName: '496_drm_fwm_prores_h264_fhd_fhd_hd_sd_sd_cmaf',
      cid: 'test',
      inputCodec: 'PRORES',
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
    }
  });
});


describe('497_drm_fwm_prores_h264_fhd_fhd_hd_sd_sd_dash_hls', () => {
  it('497_drm_fwm_prores_h264_fhd_fhd_hd_sd_sd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createDRMTask({
      taskName: '497_drm_fwm_prores_h264_fhd_fhd_hd_sd_sd_dash_hls',
      cid: 'test',
      inputCodec: 'PRORES',
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
    }
  });
});


describe('498_drm_fwm_prores_h264_fhd_fhd_hd_sd_sd_dash_hls', () => {
  it('498_drm_fwm_prores_h264_fhd_fhd_hd_sd_sd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createDRMTask({
      taskName: '498_drm_fwm_prores_h264_fhd_fhd_hd_sd_sd_dash_hls',
      cid: 'test',
      inputCodec: 'PRORES',
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
    }
  });
});


describe('499_drm_fwm_prores_h264_fhd_fhd_hd_sd_sd_dash_hls', () => {
  it('499_drm_fwm_prores_h264_fhd_fhd_hd_sd_sd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createDRMTask({
      taskName: '499_drm_fwm_prores_h264_fhd_fhd_hd_sd_sd_dash_hls',
      cid: 'test',
      inputCodec: 'PRORES',
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
    }
  });
});


describe('500_drm_fwm_prores_h264_fhd_fhd_hd_sd_sd_dash_hls', () => {
  it('500_drm_fwm_prores_h264_fhd_fhd_hd_sd_sd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createDRMTask({
      taskName: '500_drm_fwm_prores_h264_fhd_fhd_hd_sd_sd_dash_hls',
      cid: 'test',
      inputCodec: 'PRORES',
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
    }
  });
});


describe('501_drm_fwm_prores_h264_fhd_fhd_hd_sd_sd_dash_hls', () => {
  it('501_drm_fwm_prores_h264_fhd_fhd_hd_sd_sd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createDRMTask({
      taskName: '501_drm_fwm_prores_h264_fhd_fhd_hd_sd_sd_dash_hls',
      cid: 'test',
      inputCodec: 'PRORES',
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
    }
  });
});


describe('502_drm_fwm_prores_h264_fhd_fhd_hd_sd_sd_dash_hls', () => {
  it('502_drm_fwm_prores_h264_fhd_fhd_hd_sd_sd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createDRMTask({
      taskName: '502_drm_fwm_prores_h264_fhd_fhd_hd_sd_sd_dash_hls',
      cid: 'test',
      inputCodec: 'PRORES',
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
    }
  });
});


describe('503_drm_fwm_prores_h264_fhd_fhd_hd_sd_sd_dash_hls', () => {
  it('503_drm_fwm_prores_h264_fhd_fhd_hd_sd_sd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createDRMTask({
      taskName: '503_drm_fwm_prores_h264_fhd_fhd_hd_sd_sd_dash_hls',
      cid: 'test',
      inputCodec: 'PRORES',
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
    }
  });
});


describe('504_drm_fwm_prores_h264_fhd_fhd_hd_sd_sd_dash_hls', () => {
  it('504_drm_fwm_prores_h264_fhd_fhd_hd_sd_sd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createDRMTask({
      taskName: '504_drm_fwm_prores_h264_fhd_fhd_hd_sd_sd_dash_hls',
      cid: 'test',
      inputCodec: 'PRORES',
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
    }
  });
});


describe('505_drm_fwm_prores_h264_fhd_fhd_hd_sd_sd_dash_hls', () => {
  it('505_drm_fwm_prores_h264_fhd_fhd_hd_sd_sd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createDRMTask({
      taskName: '505_drm_fwm_prores_h264_fhd_fhd_hd_sd_sd_dash_hls',
      cid: 'test',
      inputCodec: 'PRORES',
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
    }
  });
});


describe('506_drm_fwm_prores_h264_fhd_fhd_hd_sd_sd_dash_hls', () => {
  it('506_drm_fwm_prores_h264_fhd_fhd_hd_sd_sd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createDRMTask({
      taskName: '506_drm_fwm_prores_h264_fhd_fhd_hd_sd_sd_dash_hls',
      cid: 'test',
      inputCodec: 'PRORES',
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
    }
  });
});


describe('507_drm_fwm_prores_h264_fhd_fhd_hd_sd_sd_dash_hls', () => {
  it('507_drm_fwm_prores_h264_fhd_fhd_hd_sd_sd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createDRMTask({
      taskName: '507_drm_fwm_prores_h264_fhd_fhd_hd_sd_sd_dash_hls',
      cid: 'test',
      inputCodec: 'PRORES',
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
    }
  });
});


describe('508_drm_fwm_prores_h264_fhd_fhd_hd_sd_sd_dash_hls', () => {
  it('508_drm_fwm_prores_h264_fhd_fhd_hd_sd_sd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createDRMTask({
      taskName: '508_drm_fwm_prores_h264_fhd_fhd_hd_sd_sd_dash_hls',
      cid: 'test',
      inputCodec: 'PRORES',
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
    }
  });
});


describe('509_drm_fwm_prores_h264_fhd_fhd_hd_sd_sd_dash_hls', () => {
  it('509_drm_fwm_prores_h264_fhd_fhd_hd_sd_sd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createDRMTask({
      taskName: '509_drm_fwm_prores_h264_fhd_fhd_hd_sd_sd_dash_hls',
      cid: 'test',
      inputCodec: 'PRORES',
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
    }
  });
});


describe('510_drm_fwm_prores_h264_fhd_fhd_hd_sd_sd_dash_hls', () => {
  it('510_drm_fwm_prores_h264_fhd_fhd_hd_sd_sd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createDRMTask({
      taskName: '510_drm_fwm_prores_h264_fhd_fhd_hd_sd_sd_dash_hls',
      cid: 'test',
      inputCodec: 'PRORES',
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
    }
  });
});


describe('511_drm_fwm_prores_h264_fhd_fhd_hd_sd_sd_dash_hls', () => {
  it('511_drm_fwm_prores_h264_fhd_fhd_hd_sd_sd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createDRMTask({
      taskName: '511_drm_fwm_prores_h264_fhd_fhd_hd_sd_sd_dash_hls',
      cid: 'test',
      inputCodec: 'PRORES',
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
    }
  });
});


describe('512_drm_fwm_prores_h264_fhd_fhd_hd_sd_sd_dash_hls', () => {
  it('512_drm_fwm_prores_h264_fhd_fhd_hd_sd_sd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createDRMTask({
      taskName: '512_drm_fwm_prores_h264_fhd_fhd_hd_sd_sd_dash_hls',
      cid: 'test',
      inputCodec: 'PRORES',
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
    }
  });
});


describe('513_drm_fwm_xdcam_h264_uhd_fhd_hd_cmaf', () => {
  it('513_drm_fwm_xdcam_h264_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createDRMTask({
      taskName: '513_drm_fwm_xdcam_h264_uhd_fhd_hd_cmaf',
      cid: 'test',
      inputCodec: 'XDCAM',
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
    }
  });
});


describe('514_drm_fwm_xdcam_h264_uhd_fhd_hd_cmaf', () => {
  it('514_drm_fwm_xdcam_h264_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createDRMTask({
      taskName: '514_drm_fwm_xdcam_h264_uhd_fhd_hd_cmaf',
      cid: 'test',
      inputCodec: 'XDCAM',
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
    }
  });
});


describe('515_drm_fwm_xdcam_h264_uhd_fhd_hd_cmaf', () => {
  it('515_drm_fwm_xdcam_h264_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createDRMTask({
      taskName: '515_drm_fwm_xdcam_h264_uhd_fhd_hd_cmaf',
      cid: 'test',
      inputCodec: 'XDCAM',
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
    }
  });
});


describe('516_drm_fwm_xdcam_h264_uhd_fhd_hd_cmaf', () => {
  it('516_drm_fwm_xdcam_h264_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createDRMTask({
      taskName: '516_drm_fwm_xdcam_h264_uhd_fhd_hd_cmaf',
      cid: 'test',
      inputCodec: 'XDCAM',
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
    }
  });
});


describe('517_drm_fwm_xdcam_h264_uhd_fhd_hd_cmaf', () => {
  it('517_drm_fwm_xdcam_h264_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createDRMTask({
      taskName: '517_drm_fwm_xdcam_h264_uhd_fhd_hd_cmaf',
      cid: 'test',
      inputCodec: 'XDCAM',
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
    }
  });
});


describe('518_drm_fwm_xdcam_h264_uhd_fhd_hd_cmaf', () => {
  it('518_drm_fwm_xdcam_h264_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createDRMTask({
      taskName: '518_drm_fwm_xdcam_h264_uhd_fhd_hd_cmaf',
      cid: 'test',
      inputCodec: 'XDCAM',
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
    }
  });
});


describe('519_drm_fwm_xdcam_h264_uhd_fhd_hd_cmaf', () => {
  it('519_drm_fwm_xdcam_h264_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createDRMTask({
      taskName: '519_drm_fwm_xdcam_h264_uhd_fhd_hd_cmaf',
      cid: 'test',
      inputCodec: 'XDCAM',
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
    }
  });
});


describe('520_drm_fwm_xdcam_h264_uhd_fhd_hd_cmaf', () => {
  it('520_drm_fwm_xdcam_h264_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createDRMTask({
      taskName: '520_drm_fwm_xdcam_h264_uhd_fhd_hd_cmaf',
      cid: 'test',
      inputCodec: 'XDCAM',
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
    }
  });
});


describe('521_drm_fwm_xdcam_h264_uhd_fhd_hd_cmaf', () => {
  it('521_drm_fwm_xdcam_h264_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createDRMTask({
      taskName: '521_drm_fwm_xdcam_h264_uhd_fhd_hd_cmaf',
      cid: 'test',
      inputCodec: 'XDCAM',
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
    }
  });
});


describe('522_drm_fwm_xdcam_h264_uhd_fhd_hd_cmaf', () => {
  it('522_drm_fwm_xdcam_h264_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createDRMTask({
      taskName: '522_drm_fwm_xdcam_h264_uhd_fhd_hd_cmaf',
      cid: 'test',
      inputCodec: 'XDCAM',
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
    }
  });
});


describe('523_drm_fwm_xdcam_h264_uhd_fhd_hd_cmaf', () => {
  it('523_drm_fwm_xdcam_h264_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createDRMTask({
      taskName: '523_drm_fwm_xdcam_h264_uhd_fhd_hd_cmaf',
      cid: 'test',
      inputCodec: 'XDCAM',
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
    }
  });
});


describe('524_drm_fwm_xdcam_h264_uhd_fhd_hd_cmaf', () => {
  it('524_drm_fwm_xdcam_h264_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createDRMTask({
      taskName: '524_drm_fwm_xdcam_h264_uhd_fhd_hd_cmaf',
      cid: 'test',
      inputCodec: 'XDCAM',
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
    }
  });
});


describe('525_drm_fwm_xdcam_h264_uhd_fhd_hd_cmaf', () => {
  it('525_drm_fwm_xdcam_h264_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createDRMTask({
      taskName: '525_drm_fwm_xdcam_h264_uhd_fhd_hd_cmaf',
      cid: 'test',
      inputCodec: 'XDCAM',
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
    }
  });
});


describe('526_drm_fwm_xdcam_h264_uhd_fhd_hd_cmaf', () => {
  it('526_drm_fwm_xdcam_h264_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createDRMTask({
      taskName: '526_drm_fwm_xdcam_h264_uhd_fhd_hd_cmaf',
      cid: 'test',
      inputCodec: 'XDCAM',
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
    }
  });
});


describe('527_drm_fwm_xdcam_h264_uhd_fhd_hd_cmaf', () => {
  it('527_drm_fwm_xdcam_h264_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createDRMTask({
      taskName: '527_drm_fwm_xdcam_h264_uhd_fhd_hd_cmaf',
      cid: 'test',
      inputCodec: 'XDCAM',
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
    }
  });
});


describe('528_drm_fwm_xdcam_h264_uhd_fhd_hd_cmaf', () => {
  it('528_drm_fwm_xdcam_h264_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createDRMTask({
      taskName: '528_drm_fwm_xdcam_h264_uhd_fhd_hd_cmaf',
      cid: 'test',
      inputCodec: 'XDCAM',
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
    }
  });
});


describe('529_drm_fwm_xdcam_h264_uhd_fhd_hd_dash_hls', () => {
  it('529_drm_fwm_xdcam_h264_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createDRMTask({
      taskName: '529_drm_fwm_xdcam_h264_uhd_fhd_hd_dash_hls',
      cid: 'test',
      inputCodec: 'XDCAM',
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
    }
  });
});


describe('530_drm_fwm_xdcam_h264_uhd_fhd_hd_dash_hls', () => {
  it('530_drm_fwm_xdcam_h264_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createDRMTask({
      taskName: '530_drm_fwm_xdcam_h264_uhd_fhd_hd_dash_hls',
      cid: 'test',
      inputCodec: 'XDCAM',
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
    }
  });
});


describe('531_drm_fwm_xdcam_h264_uhd_fhd_hd_dash_hls', () => {
  it('531_drm_fwm_xdcam_h264_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createDRMTask({
      taskName: '531_drm_fwm_xdcam_h264_uhd_fhd_hd_dash_hls',
      cid: 'test',
      inputCodec: 'XDCAM',
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
    }
  });
});


describe('532_drm_fwm_xdcam_h264_uhd_fhd_hd_dash_hls', () => {
  it('532_drm_fwm_xdcam_h264_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createDRMTask({
      taskName: '532_drm_fwm_xdcam_h264_uhd_fhd_hd_dash_hls',
      cid: 'test',
      inputCodec: 'XDCAM',
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
    }
  });
});


describe('533_drm_fwm_xdcam_h264_uhd_fhd_hd_dash_hls', () => {
  it('533_drm_fwm_xdcam_h264_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createDRMTask({
      taskName: '533_drm_fwm_xdcam_h264_uhd_fhd_hd_dash_hls',
      cid: 'test',
      inputCodec: 'XDCAM',
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
    }
  });
});


describe('534_drm_fwm_xdcam_h264_uhd_fhd_hd_dash_hls', () => {
  it('534_drm_fwm_xdcam_h264_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createDRMTask({
      taskName: '534_drm_fwm_xdcam_h264_uhd_fhd_hd_dash_hls',
      cid: 'test',
      inputCodec: 'XDCAM',
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
    }
  });
});


describe('535_drm_fwm_xdcam_h264_uhd_fhd_hd_dash_hls', () => {
  it('535_drm_fwm_xdcam_h264_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createDRMTask({
      taskName: '535_drm_fwm_xdcam_h264_uhd_fhd_hd_dash_hls',
      cid: 'test',
      inputCodec: 'XDCAM',
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
    }
  });
});


describe('536_drm_fwm_xdcam_h264_uhd_fhd_hd_dash_hls', () => {
  it('536_drm_fwm_xdcam_h264_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createDRMTask({
      taskName: '536_drm_fwm_xdcam_h264_uhd_fhd_hd_dash_hls',
      cid: 'test',
      inputCodec: 'XDCAM',
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
    }
  });
});


describe('537_drm_fwm_xdcam_h264_uhd_fhd_hd_dash_hls', () => {
  it('537_drm_fwm_xdcam_h264_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createDRMTask({
      taskName: '537_drm_fwm_xdcam_h264_uhd_fhd_hd_dash_hls',
      cid: 'test',
      inputCodec: 'XDCAM',
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
    }
  });
});


describe('538_drm_fwm_xdcam_h264_uhd_fhd_hd_dash_hls', () => {
  it('538_drm_fwm_xdcam_h264_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createDRMTask({
      taskName: '538_drm_fwm_xdcam_h264_uhd_fhd_hd_dash_hls',
      cid: 'test',
      inputCodec: 'XDCAM',
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
    }
  });
});


describe('539_drm_fwm_xdcam_h264_uhd_fhd_hd_dash_hls', () => {
  it('539_drm_fwm_xdcam_h264_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createDRMTask({
      taskName: '539_drm_fwm_xdcam_h264_uhd_fhd_hd_dash_hls',
      cid: 'test',
      inputCodec: 'XDCAM',
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
    }
  });
});


describe('540_drm_fwm_xdcam_h264_uhd_fhd_hd_dash_hls', () => {
  it('540_drm_fwm_xdcam_h264_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createDRMTask({
      taskName: '540_drm_fwm_xdcam_h264_uhd_fhd_hd_dash_hls',
      cid: 'test',
      inputCodec: 'XDCAM',
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
    }
  });
});


describe('541_drm_fwm_xdcam_h264_uhd_fhd_hd_dash_hls', () => {
  it('541_drm_fwm_xdcam_h264_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createDRMTask({
      taskName: '541_drm_fwm_xdcam_h264_uhd_fhd_hd_dash_hls',
      cid: 'test',
      inputCodec: 'XDCAM',
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
    }
  });
});


describe('542_drm_fwm_xdcam_h264_uhd_fhd_hd_dash_hls', () => {
  it('542_drm_fwm_xdcam_h264_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createDRMTask({
      taskName: '542_drm_fwm_xdcam_h264_uhd_fhd_hd_dash_hls',
      cid: 'test',
      inputCodec: 'XDCAM',
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
    }
  });
});


describe('543_drm_fwm_xdcam_h264_uhd_fhd_hd_dash_hls', () => {
  it('543_drm_fwm_xdcam_h264_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createDRMTask({
      taskName: '543_drm_fwm_xdcam_h264_uhd_fhd_hd_dash_hls',
      cid: 'test',
      inputCodec: 'XDCAM',
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
    }
  });
});


describe('544_drm_fwm_xdcam_h264_uhd_fhd_hd_dash_hls', () => {
  it('544_drm_fwm_xdcam_h264_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createDRMTask({
      taskName: '544_drm_fwm_xdcam_h264_uhd_fhd_hd_dash_hls',
      cid: 'test',
      inputCodec: 'XDCAM',
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
    }
  });
});


describe('545_drm_fwm_xdcam_h264_fhd_fhd_hd_sd_sd_cmaf', () => {
  it('545_drm_fwm_xdcam_h264_fhd_fhd_hd_sd_sd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createDRMTask({
      taskName: '545_drm_fwm_xdcam_h264_fhd_fhd_hd_sd_sd_cmaf',
      cid: 'test',
      inputCodec: 'XDCAM',
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
    }
  });
});


describe('546_drm_fwm_xdcam_h264_fhd_fhd_hd_sd_sd_cmaf', () => {
  it('546_drm_fwm_xdcam_h264_fhd_fhd_hd_sd_sd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createDRMTask({
      taskName: '546_drm_fwm_xdcam_h264_fhd_fhd_hd_sd_sd_cmaf',
      cid: 'test',
      inputCodec: 'XDCAM',
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
    }
  });
});


describe('547_drm_fwm_xdcam_h264_fhd_fhd_hd_sd_sd_cmaf', () => {
  it('547_drm_fwm_xdcam_h264_fhd_fhd_hd_sd_sd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createDRMTask({
      taskName: '547_drm_fwm_xdcam_h264_fhd_fhd_hd_sd_sd_cmaf',
      cid: 'test',
      inputCodec: 'XDCAM',
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
    }
  });
});


describe('548_drm_fwm_xdcam_h264_fhd_fhd_hd_sd_sd_cmaf', () => {
  it('548_drm_fwm_xdcam_h264_fhd_fhd_hd_sd_sd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createDRMTask({
      taskName: '548_drm_fwm_xdcam_h264_fhd_fhd_hd_sd_sd_cmaf',
      cid: 'test',
      inputCodec: 'XDCAM',
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
    }
  });
});


describe('549_drm_fwm_xdcam_h264_fhd_fhd_hd_sd_sd_cmaf', () => {
  it('549_drm_fwm_xdcam_h264_fhd_fhd_hd_sd_sd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createDRMTask({
      taskName: '549_drm_fwm_xdcam_h264_fhd_fhd_hd_sd_sd_cmaf',
      cid: 'test',
      inputCodec: 'XDCAM',
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
    }
  });
});


describe('550_drm_fwm_xdcam_h264_fhd_fhd_hd_sd_sd_cmaf', () => {
  it('550_drm_fwm_xdcam_h264_fhd_fhd_hd_sd_sd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createDRMTask({
      taskName: '550_drm_fwm_xdcam_h264_fhd_fhd_hd_sd_sd_cmaf',
      cid: 'test',
      inputCodec: 'XDCAM',
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
    }
  });
});


describe('551_drm_fwm_xdcam_h264_fhd_fhd_hd_sd_sd_cmaf', () => {
  it('551_drm_fwm_xdcam_h264_fhd_fhd_hd_sd_sd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createDRMTask({
      taskName: '551_drm_fwm_xdcam_h264_fhd_fhd_hd_sd_sd_cmaf',
      cid: 'test',
      inputCodec: 'XDCAM',
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
    }
  });
});


describe('552_drm_fwm_xdcam_h264_fhd_fhd_hd_sd_sd_cmaf', () => {
  it('552_drm_fwm_xdcam_h264_fhd_fhd_hd_sd_sd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createDRMTask({
      taskName: '552_drm_fwm_xdcam_h264_fhd_fhd_hd_sd_sd_cmaf',
      cid: 'test',
      inputCodec: 'XDCAM',
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
    }
  });
});


describe('553_drm_fwm_xdcam_h264_fhd_fhd_hd_sd_sd_cmaf', () => {
  it('553_drm_fwm_xdcam_h264_fhd_fhd_hd_sd_sd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createDRMTask({
      taskName: '553_drm_fwm_xdcam_h264_fhd_fhd_hd_sd_sd_cmaf',
      cid: 'test',
      inputCodec: 'XDCAM',
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
    }
  });
});


describe('554_drm_fwm_xdcam_h264_fhd_fhd_hd_sd_sd_cmaf', () => {
  it('554_drm_fwm_xdcam_h264_fhd_fhd_hd_sd_sd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createDRMTask({
      taskName: '554_drm_fwm_xdcam_h264_fhd_fhd_hd_sd_sd_cmaf',
      cid: 'test',
      inputCodec: 'XDCAM',
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
    }
  });
});


describe('555_drm_fwm_xdcam_h264_fhd_fhd_hd_sd_sd_cmaf', () => {
  it('555_drm_fwm_xdcam_h264_fhd_fhd_hd_sd_sd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createDRMTask({
      taskName: '555_drm_fwm_xdcam_h264_fhd_fhd_hd_sd_sd_cmaf',
      cid: 'test',
      inputCodec: 'XDCAM',
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
    }
  });
});


describe('556_drm_fwm_xdcam_h264_fhd_fhd_hd_sd_sd_cmaf', () => {
  it('556_drm_fwm_xdcam_h264_fhd_fhd_hd_sd_sd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createDRMTask({
      taskName: '556_drm_fwm_xdcam_h264_fhd_fhd_hd_sd_sd_cmaf',
      cid: 'test',
      inputCodec: 'XDCAM',
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
    }
  });
});


describe('557_drm_fwm_xdcam_h264_fhd_fhd_hd_sd_sd_cmaf', () => {
  it('557_drm_fwm_xdcam_h264_fhd_fhd_hd_sd_sd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createDRMTask({
      taskName: '557_drm_fwm_xdcam_h264_fhd_fhd_hd_sd_sd_cmaf',
      cid: 'test',
      inputCodec: 'XDCAM',
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
    }
  });
});


describe('558_drm_fwm_xdcam_h264_fhd_fhd_hd_sd_sd_cmaf', () => {
  it('558_drm_fwm_xdcam_h264_fhd_fhd_hd_sd_sd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createDRMTask({
      taskName: '558_drm_fwm_xdcam_h264_fhd_fhd_hd_sd_sd_cmaf',
      cid: 'test',
      inputCodec: 'XDCAM',
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
    }
  });
});


describe('559_drm_fwm_xdcam_h264_fhd_fhd_hd_sd_sd_cmaf', () => {
  it('559_drm_fwm_xdcam_h264_fhd_fhd_hd_sd_sd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createDRMTask({
      taskName: '559_drm_fwm_xdcam_h264_fhd_fhd_hd_sd_sd_cmaf',
      cid: 'test',
      inputCodec: 'XDCAM',
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
    }
  });
});


describe('560_drm_fwm_xdcam_h264_fhd_fhd_hd_sd_sd_cmaf', () => {
  it('560_drm_fwm_xdcam_h264_fhd_fhd_hd_sd_sd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createDRMTask({
      taskName: '560_drm_fwm_xdcam_h264_fhd_fhd_hd_sd_sd_cmaf',
      cid: 'test',
      inputCodec: 'XDCAM',
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
    }
  });
});


describe('561_drm_fwm_xdcam_h264_fhd_fhd_hd_sd_sd_dash_hls', () => {
  it('561_drm_fwm_xdcam_h264_fhd_fhd_hd_sd_sd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createDRMTask({
      taskName: '561_drm_fwm_xdcam_h264_fhd_fhd_hd_sd_sd_dash_hls',
      cid: 'test',
      inputCodec: 'XDCAM',
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
    }
  });
});


describe('562_drm_fwm_xdcam_h264_fhd_fhd_hd_sd_sd_dash_hls', () => {
  it('562_drm_fwm_xdcam_h264_fhd_fhd_hd_sd_sd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createDRMTask({
      taskName: '562_drm_fwm_xdcam_h264_fhd_fhd_hd_sd_sd_dash_hls',
      cid: 'test',
      inputCodec: 'XDCAM',
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
    }
  });
});


describe('563_drm_fwm_xdcam_h264_fhd_fhd_hd_sd_sd_dash_hls', () => {
  it('563_drm_fwm_xdcam_h264_fhd_fhd_hd_sd_sd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createDRMTask({
      taskName: '563_drm_fwm_xdcam_h264_fhd_fhd_hd_sd_sd_dash_hls',
      cid: 'test',
      inputCodec: 'XDCAM',
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
    }
  });
});


describe('564_drm_fwm_xdcam_h264_fhd_fhd_hd_sd_sd_dash_hls', () => {
  it('564_drm_fwm_xdcam_h264_fhd_fhd_hd_sd_sd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createDRMTask({
      taskName: '564_drm_fwm_xdcam_h264_fhd_fhd_hd_sd_sd_dash_hls',
      cid: 'test',
      inputCodec: 'XDCAM',
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
    }
  });
});


describe('565_drm_fwm_xdcam_h264_fhd_fhd_hd_sd_sd_dash_hls', () => {
  it('565_drm_fwm_xdcam_h264_fhd_fhd_hd_sd_sd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createDRMTask({
      taskName: '565_drm_fwm_xdcam_h264_fhd_fhd_hd_sd_sd_dash_hls',
      cid: 'test',
      inputCodec: 'XDCAM',
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
    }
  });
});


describe('566_drm_fwm_xdcam_h264_fhd_fhd_hd_sd_sd_dash_hls', () => {
  it('566_drm_fwm_xdcam_h264_fhd_fhd_hd_sd_sd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createDRMTask({
      taskName: '566_drm_fwm_xdcam_h264_fhd_fhd_hd_sd_sd_dash_hls',
      cid: 'test',
      inputCodec: 'XDCAM',
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
    }
  });
});


describe('567_drm_fwm_xdcam_h264_fhd_fhd_hd_sd_sd_dash_hls', () => {
  it('567_drm_fwm_xdcam_h264_fhd_fhd_hd_sd_sd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createDRMTask({
      taskName: '567_drm_fwm_xdcam_h264_fhd_fhd_hd_sd_sd_dash_hls',
      cid: 'test',
      inputCodec: 'XDCAM',
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
    }
  });
});


describe('568_drm_fwm_xdcam_h264_fhd_fhd_hd_sd_sd_dash_hls', () => {
  it('568_drm_fwm_xdcam_h264_fhd_fhd_hd_sd_sd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createDRMTask({
      taskName: '568_drm_fwm_xdcam_h264_fhd_fhd_hd_sd_sd_dash_hls',
      cid: 'test',
      inputCodec: 'XDCAM',
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
    }
  });
});


describe('569_drm_fwm_xdcam_h264_fhd_fhd_hd_sd_sd_dash_hls', () => {
  it('569_drm_fwm_xdcam_h264_fhd_fhd_hd_sd_sd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createDRMTask({
      taskName: '569_drm_fwm_xdcam_h264_fhd_fhd_hd_sd_sd_dash_hls',
      cid: 'test',
      inputCodec: 'XDCAM',
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
    }
  });
});


describe('570_drm_fwm_xdcam_h264_fhd_fhd_hd_sd_sd_dash_hls', () => {
  it('570_drm_fwm_xdcam_h264_fhd_fhd_hd_sd_sd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createDRMTask({
      taskName: '570_drm_fwm_xdcam_h264_fhd_fhd_hd_sd_sd_dash_hls',
      cid: 'test',
      inputCodec: 'XDCAM',
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
    }
  });
});


describe('571_drm_fwm_xdcam_h264_fhd_fhd_hd_sd_sd_dash_hls', () => {
  it('571_drm_fwm_xdcam_h264_fhd_fhd_hd_sd_sd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createDRMTask({
      taskName: '571_drm_fwm_xdcam_h264_fhd_fhd_hd_sd_sd_dash_hls',
      cid: 'test',
      inputCodec: 'XDCAM',
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
    }
  });
});


describe('572_drm_fwm_xdcam_h264_fhd_fhd_hd_sd_sd_dash_hls', () => {
  it('572_drm_fwm_xdcam_h264_fhd_fhd_hd_sd_sd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createDRMTask({
      taskName: '572_drm_fwm_xdcam_h264_fhd_fhd_hd_sd_sd_dash_hls',
      cid: 'test',
      inputCodec: 'XDCAM',
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
    }
  });
});


describe('573_drm_fwm_xdcam_h264_fhd_fhd_hd_sd_sd_dash_hls', () => {
  it('573_drm_fwm_xdcam_h264_fhd_fhd_hd_sd_sd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createDRMTask({
      taskName: '573_drm_fwm_xdcam_h264_fhd_fhd_hd_sd_sd_dash_hls',
      cid: 'test',
      inputCodec: 'XDCAM',
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
    }
  });
});


describe('574_drm_fwm_xdcam_h264_fhd_fhd_hd_sd_sd_dash_hls', () => {
  it('574_drm_fwm_xdcam_h264_fhd_fhd_hd_sd_sd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createDRMTask({
      taskName: '574_drm_fwm_xdcam_h264_fhd_fhd_hd_sd_sd_dash_hls',
      cid: 'test',
      inputCodec: 'XDCAM',
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
    }
  });
});


describe('575_drm_fwm_xdcam_h264_fhd_fhd_hd_sd_sd_dash_hls', () => {
  it('575_drm_fwm_xdcam_h264_fhd_fhd_hd_sd_sd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createDRMTask({
      taskName: '575_drm_fwm_xdcam_h264_fhd_fhd_hd_sd_sd_dash_hls',
      cid: 'test',
      inputCodec: 'XDCAM',
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
    }
  });
});


describe('576_drm_fwm_xdcam_h264_fhd_fhd_hd_sd_sd_dash_hls', () => {
  it('576_drm_fwm_xdcam_h264_fhd_fhd_hd_sd_sd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createDRMTask({
      taskName: '576_drm_fwm_xdcam_h264_fhd_fhd_hd_sd_sd_dash_hls',
      cid: 'test',
      inputCodec: 'XDCAM',
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
    }
  });
});


describe('577_drm_fwm_mkv_h264_uhd_fhd_hd_cmaf', () => {
  it('577_drm_fwm_mkv_h264_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createDRMTask({
      taskName: '577_drm_fwm_mkv_h264_uhd_fhd_hd_cmaf',
      cid: 'test',
      inputCodec: 'MKV',
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
    }
  });
});


describe('578_drm_fwm_mkv_h264_uhd_fhd_hd_cmaf', () => {
  it('578_drm_fwm_mkv_h264_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createDRMTask({
      taskName: '578_drm_fwm_mkv_h264_uhd_fhd_hd_cmaf',
      cid: 'test',
      inputCodec: 'MKV',
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
    }
  });
});


describe('579_drm_fwm_mkv_h264_uhd_fhd_hd_cmaf', () => {
  it('579_drm_fwm_mkv_h264_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createDRMTask({
      taskName: '579_drm_fwm_mkv_h264_uhd_fhd_hd_cmaf',
      cid: 'test',
      inputCodec: 'MKV',
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
    }
  });
});


describe('580_drm_fwm_mkv_h264_uhd_fhd_hd_cmaf', () => {
  it('580_drm_fwm_mkv_h264_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createDRMTask({
      taskName: '580_drm_fwm_mkv_h264_uhd_fhd_hd_cmaf',
      cid: 'test',
      inputCodec: 'MKV',
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
    }
  });
});


describe('581_drm_fwm_mkv_h264_uhd_fhd_hd_cmaf', () => {
  it('581_drm_fwm_mkv_h264_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createDRMTask({
      taskName: '581_drm_fwm_mkv_h264_uhd_fhd_hd_cmaf',
      cid: 'test',
      inputCodec: 'MKV',
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
    }
  });
});


describe('582_drm_fwm_mkv_h264_uhd_fhd_hd_cmaf', () => {
  it('582_drm_fwm_mkv_h264_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createDRMTask({
      taskName: '582_drm_fwm_mkv_h264_uhd_fhd_hd_cmaf',
      cid: 'test',
      inputCodec: 'MKV',
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
    }
  });
});


describe('583_drm_fwm_mkv_h264_uhd_fhd_hd_cmaf', () => {
  it('583_drm_fwm_mkv_h264_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createDRMTask({
      taskName: '583_drm_fwm_mkv_h264_uhd_fhd_hd_cmaf',
      cid: 'test',
      inputCodec: 'MKV',
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
    }
  });
});


describe('584_drm_fwm_mkv_h264_uhd_fhd_hd_cmaf', () => {
  it('584_drm_fwm_mkv_h264_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createDRMTask({
      taskName: '584_drm_fwm_mkv_h264_uhd_fhd_hd_cmaf',
      cid: 'test',
      inputCodec: 'MKV',
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
    }
  });
});


describe('585_drm_fwm_mkv_h264_uhd_fhd_hd_cmaf', () => {
  it('585_drm_fwm_mkv_h264_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createDRMTask({
      taskName: '585_drm_fwm_mkv_h264_uhd_fhd_hd_cmaf',
      cid: 'test',
      inputCodec: 'MKV',
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
    }
  });
});


describe('586_drm_fwm_mkv_h264_uhd_fhd_hd_cmaf', () => {
  it('586_drm_fwm_mkv_h264_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createDRMTask({
      taskName: '586_drm_fwm_mkv_h264_uhd_fhd_hd_cmaf',
      cid: 'test',
      inputCodec: 'MKV',
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
    }
  });
});


describe('587_drm_fwm_mkv_h264_uhd_fhd_hd_cmaf', () => {
  it('587_drm_fwm_mkv_h264_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createDRMTask({
      taskName: '587_drm_fwm_mkv_h264_uhd_fhd_hd_cmaf',
      cid: 'test',
      inputCodec: 'MKV',
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
    }
  });
});


describe('588_drm_fwm_mkv_h264_uhd_fhd_hd_cmaf', () => {
  it('588_drm_fwm_mkv_h264_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createDRMTask({
      taskName: '588_drm_fwm_mkv_h264_uhd_fhd_hd_cmaf',
      cid: 'test',
      inputCodec: 'MKV',
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
    }
  });
});


describe('589_drm_fwm_mkv_h264_uhd_fhd_hd_cmaf', () => {
  it('589_drm_fwm_mkv_h264_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createDRMTask({
      taskName: '589_drm_fwm_mkv_h264_uhd_fhd_hd_cmaf',
      cid: 'test',
      inputCodec: 'MKV',
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
    }
  });
});


describe('590_drm_fwm_mkv_h264_uhd_fhd_hd_cmaf', () => {
  it('590_drm_fwm_mkv_h264_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createDRMTask({
      taskName: '590_drm_fwm_mkv_h264_uhd_fhd_hd_cmaf',
      cid: 'test',
      inputCodec: 'MKV',
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
    }
  });
});


describe('591_drm_fwm_mkv_h264_uhd_fhd_hd_cmaf', () => {
  it('591_drm_fwm_mkv_h264_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createDRMTask({
      taskName: '591_drm_fwm_mkv_h264_uhd_fhd_hd_cmaf',
      cid: 'test',
      inputCodec: 'MKV',
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
    }
  });
});


describe('592_drm_fwm_mkv_h264_uhd_fhd_hd_cmaf', () => {
  it('592_drm_fwm_mkv_h264_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createDRMTask({
      taskName: '592_drm_fwm_mkv_h264_uhd_fhd_hd_cmaf',
      cid: 'test',
      inputCodec: 'MKV',
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
    }
  });
});


describe('593_drm_fwm_mkv_h264_uhd_fhd_hd_dash_hls', () => {
  it('593_drm_fwm_mkv_h264_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createDRMTask({
      taskName: '593_drm_fwm_mkv_h264_uhd_fhd_hd_dash_hls',
      cid: 'test',
      inputCodec: 'MKV',
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
    }
  });
});


describe('594_drm_fwm_mkv_h264_uhd_fhd_hd_dash_hls', () => {
  it('594_drm_fwm_mkv_h264_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createDRMTask({
      taskName: '594_drm_fwm_mkv_h264_uhd_fhd_hd_dash_hls',
      cid: 'test',
      inputCodec: 'MKV',
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
    }
  });
});


describe('595_drm_fwm_mkv_h264_uhd_fhd_hd_dash_hls', () => {
  it('595_drm_fwm_mkv_h264_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createDRMTask({
      taskName: '595_drm_fwm_mkv_h264_uhd_fhd_hd_dash_hls',
      cid: 'test',
      inputCodec: 'MKV',
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
    }
  });
});


describe('596_drm_fwm_mkv_h264_uhd_fhd_hd_dash_hls', () => {
  it('596_drm_fwm_mkv_h264_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createDRMTask({
      taskName: '596_drm_fwm_mkv_h264_uhd_fhd_hd_dash_hls',
      cid: 'test',
      inputCodec: 'MKV',
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
    }
  });
});


describe('597_drm_fwm_mkv_h264_uhd_fhd_hd_dash_hls', () => {
  it('597_drm_fwm_mkv_h264_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createDRMTask({
      taskName: '597_drm_fwm_mkv_h264_uhd_fhd_hd_dash_hls',
      cid: 'test',
      inputCodec: 'MKV',
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
    }
  });
});


describe('598_drm_fwm_mkv_h264_uhd_fhd_hd_dash_hls', () => {
  it('598_drm_fwm_mkv_h264_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createDRMTask({
      taskName: '598_drm_fwm_mkv_h264_uhd_fhd_hd_dash_hls',
      cid: 'test',
      inputCodec: 'MKV',
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
    }
  });
});


describe('599_drm_fwm_mkv_h264_uhd_fhd_hd_dash_hls', () => {
  it('599_drm_fwm_mkv_h264_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createDRMTask({
      taskName: '599_drm_fwm_mkv_h264_uhd_fhd_hd_dash_hls',
      cid: 'test',
      inputCodec: 'MKV',
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
    }
  });
});


describe('600_drm_fwm_mkv_h264_uhd_fhd_hd_dash_hls', () => {
  it('600_drm_fwm_mkv_h264_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createDRMTask({
      taskName: '600_drm_fwm_mkv_h264_uhd_fhd_hd_dash_hls',
      cid: 'test',
      inputCodec: 'MKV',
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
    }
  });
});


describe('601_drm_fwm_mkv_h264_uhd_fhd_hd_dash_hls', () => {
  it('601_drm_fwm_mkv_h264_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createDRMTask({
      taskName: '601_drm_fwm_mkv_h264_uhd_fhd_hd_dash_hls',
      cid: 'test',
      inputCodec: 'MKV',
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
    }
  });
});


describe('602_drm_fwm_mkv_h264_uhd_fhd_hd_dash_hls', () => {
  it('602_drm_fwm_mkv_h264_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createDRMTask({
      taskName: '602_drm_fwm_mkv_h264_uhd_fhd_hd_dash_hls',
      cid: 'test',
      inputCodec: 'MKV',
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
    }
  });
});


describe('603_drm_fwm_mkv_h264_uhd_fhd_hd_dash_hls', () => {
  it('603_drm_fwm_mkv_h264_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createDRMTask({
      taskName: '603_drm_fwm_mkv_h264_uhd_fhd_hd_dash_hls',
      cid: 'test',
      inputCodec: 'MKV',
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
    }
  });
});


describe('604_drm_fwm_mkv_h264_uhd_fhd_hd_dash_hls', () => {
  it('604_drm_fwm_mkv_h264_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createDRMTask({
      taskName: '604_drm_fwm_mkv_h264_uhd_fhd_hd_dash_hls',
      cid: 'test',
      inputCodec: 'MKV',
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
    }
  });
});


describe('605_drm_fwm_mkv_h264_uhd_fhd_hd_dash_hls', () => {
  it('605_drm_fwm_mkv_h264_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createDRMTask({
      taskName: '605_drm_fwm_mkv_h264_uhd_fhd_hd_dash_hls',
      cid: 'test',
      inputCodec: 'MKV',
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
    }
  });
});


describe('606_drm_fwm_mkv_h264_uhd_fhd_hd_dash_hls', () => {
  it('606_drm_fwm_mkv_h264_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createDRMTask({
      taskName: '606_drm_fwm_mkv_h264_uhd_fhd_hd_dash_hls',
      cid: 'test',
      inputCodec: 'MKV',
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
    }
  });
});


describe('607_drm_fwm_mkv_h264_uhd_fhd_hd_dash_hls', () => {
  it('607_drm_fwm_mkv_h264_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createDRMTask({
      taskName: '607_drm_fwm_mkv_h264_uhd_fhd_hd_dash_hls',
      cid: 'test',
      inputCodec: 'MKV',
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
    }
  });
});


describe('608_drm_fwm_mkv_h264_uhd_fhd_hd_dash_hls', () => {
  it('608_drm_fwm_mkv_h264_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createDRMTask({
      taskName: '608_drm_fwm_mkv_h264_uhd_fhd_hd_dash_hls',
      cid: 'test',
      inputCodec: 'MKV',
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
    }
  });
});


describe('609_drm_fwm_mkv_h264_fhd_fhd_hd_sd_sd_cmaf', () => {
  it('609_drm_fwm_mkv_h264_fhd_fhd_hd_sd_sd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createDRMTask({
      taskName: '609_drm_fwm_mkv_h264_fhd_fhd_hd_sd_sd_cmaf',
      cid: 'test',
      inputCodec: 'MKV',
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
    }
  });
});


describe('610_drm_fwm_mkv_h264_fhd_fhd_hd_sd_sd_cmaf', () => {
  it('610_drm_fwm_mkv_h264_fhd_fhd_hd_sd_sd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createDRMTask({
      taskName: '610_drm_fwm_mkv_h264_fhd_fhd_hd_sd_sd_cmaf',
      cid: 'test',
      inputCodec: 'MKV',
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
    }
  });
});


describe('611_drm_fwm_mkv_h264_fhd_fhd_hd_sd_sd_cmaf', () => {
  it('611_drm_fwm_mkv_h264_fhd_fhd_hd_sd_sd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createDRMTask({
      taskName: '611_drm_fwm_mkv_h264_fhd_fhd_hd_sd_sd_cmaf',
      cid: 'test',
      inputCodec: 'MKV',
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
    }
  });
});


describe('612_drm_fwm_mkv_h264_fhd_fhd_hd_sd_sd_cmaf', () => {
  it('612_drm_fwm_mkv_h264_fhd_fhd_hd_sd_sd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createDRMTask({
      taskName: '612_drm_fwm_mkv_h264_fhd_fhd_hd_sd_sd_cmaf',
      cid: 'test',
      inputCodec: 'MKV',
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
    }
  });
});


describe('613_drm_fwm_mkv_h264_fhd_fhd_hd_sd_sd_cmaf', () => {
  it('613_drm_fwm_mkv_h264_fhd_fhd_hd_sd_sd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createDRMTask({
      taskName: '613_drm_fwm_mkv_h264_fhd_fhd_hd_sd_sd_cmaf',
      cid: 'test',
      inputCodec: 'MKV',
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
    }
  });
});


describe('614_drm_fwm_mkv_h264_fhd_fhd_hd_sd_sd_cmaf', () => {
  it('614_drm_fwm_mkv_h264_fhd_fhd_hd_sd_sd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createDRMTask({
      taskName: '614_drm_fwm_mkv_h264_fhd_fhd_hd_sd_sd_cmaf',
      cid: 'test',
      inputCodec: 'MKV',
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
    }
  });
});


describe('615_drm_fwm_mkv_h264_fhd_fhd_hd_sd_sd_cmaf', () => {
  it('615_drm_fwm_mkv_h264_fhd_fhd_hd_sd_sd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createDRMTask({
      taskName: '615_drm_fwm_mkv_h264_fhd_fhd_hd_sd_sd_cmaf',
      cid: 'test',
      inputCodec: 'MKV',
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
    }
  });
});


describe('616_drm_fwm_mkv_h264_fhd_fhd_hd_sd_sd_cmaf', () => {
  it('616_drm_fwm_mkv_h264_fhd_fhd_hd_sd_sd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createDRMTask({
      taskName: '616_drm_fwm_mkv_h264_fhd_fhd_hd_sd_sd_cmaf',
      cid: 'test',
      inputCodec: 'MKV',
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
    }
  });
});


describe('617_drm_fwm_mkv_h264_fhd_fhd_hd_sd_sd_cmaf', () => {
  it('617_drm_fwm_mkv_h264_fhd_fhd_hd_sd_sd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createDRMTask({
      taskName: '617_drm_fwm_mkv_h264_fhd_fhd_hd_sd_sd_cmaf',
      cid: 'test',
      inputCodec: 'MKV',
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
    }
  });
});


describe('618_drm_fwm_mkv_h264_fhd_fhd_hd_sd_sd_cmaf', () => {
  it('618_drm_fwm_mkv_h264_fhd_fhd_hd_sd_sd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createDRMTask({
      taskName: '618_drm_fwm_mkv_h264_fhd_fhd_hd_sd_sd_cmaf',
      cid: 'test',
      inputCodec: 'MKV',
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
    }
  });
});


describe('619_drm_fwm_mkv_h264_fhd_fhd_hd_sd_sd_cmaf', () => {
  it('619_drm_fwm_mkv_h264_fhd_fhd_hd_sd_sd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createDRMTask({
      taskName: '619_drm_fwm_mkv_h264_fhd_fhd_hd_sd_sd_cmaf',
      cid: 'test',
      inputCodec: 'MKV',
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
    }
  });
});


describe('620_drm_fwm_mkv_h264_fhd_fhd_hd_sd_sd_cmaf', () => {
  it('620_drm_fwm_mkv_h264_fhd_fhd_hd_sd_sd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createDRMTask({
      taskName: '620_drm_fwm_mkv_h264_fhd_fhd_hd_sd_sd_cmaf',
      cid: 'test',
      inputCodec: 'MKV',
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
    }
  });
});


describe('621_drm_fwm_mkv_h264_fhd_fhd_hd_sd_sd_cmaf', () => {
  it('621_drm_fwm_mkv_h264_fhd_fhd_hd_sd_sd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createDRMTask({
      taskName: '621_drm_fwm_mkv_h264_fhd_fhd_hd_sd_sd_cmaf',
      cid: 'test',
      inputCodec: 'MKV',
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
    }
  });
});


describe('622_drm_fwm_mkv_h264_fhd_fhd_hd_sd_sd_cmaf', () => {
  it('622_drm_fwm_mkv_h264_fhd_fhd_hd_sd_sd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createDRMTask({
      taskName: '622_drm_fwm_mkv_h264_fhd_fhd_hd_sd_sd_cmaf',
      cid: 'test',
      inputCodec: 'MKV',
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
    }
  });
});


describe('623_drm_fwm_mkv_h264_fhd_fhd_hd_sd_sd_cmaf', () => {
  it('623_drm_fwm_mkv_h264_fhd_fhd_hd_sd_sd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createDRMTask({
      taskName: '623_drm_fwm_mkv_h264_fhd_fhd_hd_sd_sd_cmaf',
      cid: 'test',
      inputCodec: 'MKV',
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
    }
  });
});


describe('624_drm_fwm_mkv_h264_fhd_fhd_hd_sd_sd_cmaf', () => {
  it('624_drm_fwm_mkv_h264_fhd_fhd_hd_sd_sd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createDRMTask({
      taskName: '624_drm_fwm_mkv_h264_fhd_fhd_hd_sd_sd_cmaf',
      cid: 'test',
      inputCodec: 'MKV',
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
    }
  });
});


describe('625_drm_fwm_mkv_h264_fhd_fhd_hd_sd_sd_dash_hls', () => {
  it('625_drm_fwm_mkv_h264_fhd_fhd_hd_sd_sd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createDRMTask({
      taskName: '625_drm_fwm_mkv_h264_fhd_fhd_hd_sd_sd_dash_hls',
      cid: 'test',
      inputCodec: 'MKV',
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
    }
  });
});


describe('626_drm_fwm_mkv_h264_fhd_fhd_hd_sd_sd_dash_hls', () => {
  it('626_drm_fwm_mkv_h264_fhd_fhd_hd_sd_sd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createDRMTask({
      taskName: '626_drm_fwm_mkv_h264_fhd_fhd_hd_sd_sd_dash_hls',
      cid: 'test',
      inputCodec: 'MKV',
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
    }
  });
});


describe('627_drm_fwm_mkv_h264_fhd_fhd_hd_sd_sd_dash_hls', () => {
  it('627_drm_fwm_mkv_h264_fhd_fhd_hd_sd_sd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createDRMTask({
      taskName: '627_drm_fwm_mkv_h264_fhd_fhd_hd_sd_sd_dash_hls',
      cid: 'test',
      inputCodec: 'MKV',
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
    }
  });
});


describe('628_drm_fwm_mkv_h264_fhd_fhd_hd_sd_sd_dash_hls', () => {
  it('628_drm_fwm_mkv_h264_fhd_fhd_hd_sd_sd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createDRMTask({
      taskName: '628_drm_fwm_mkv_h264_fhd_fhd_hd_sd_sd_dash_hls',
      cid: 'test',
      inputCodec: 'MKV',
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
    }
  });
});


describe('629_drm_fwm_mkv_h264_fhd_fhd_hd_sd_sd_dash_hls', () => {
  it('629_drm_fwm_mkv_h264_fhd_fhd_hd_sd_sd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createDRMTask({
      taskName: '629_drm_fwm_mkv_h264_fhd_fhd_hd_sd_sd_dash_hls',
      cid: 'test',
      inputCodec: 'MKV',
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
    }
  });
});


describe('630_drm_fwm_mkv_h264_fhd_fhd_hd_sd_sd_dash_hls', () => {
  it('630_drm_fwm_mkv_h264_fhd_fhd_hd_sd_sd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createDRMTask({
      taskName: '630_drm_fwm_mkv_h264_fhd_fhd_hd_sd_sd_dash_hls',
      cid: 'test',
      inputCodec: 'MKV',
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
    }
  });
});


describe('631_drm_fwm_mkv_h264_fhd_fhd_hd_sd_sd_dash_hls', () => {
  it('631_drm_fwm_mkv_h264_fhd_fhd_hd_sd_sd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createDRMTask({
      taskName: '631_drm_fwm_mkv_h264_fhd_fhd_hd_sd_sd_dash_hls',
      cid: 'test',
      inputCodec: 'MKV',
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
    }
  });
});


describe('632_drm_fwm_mkv_h264_fhd_fhd_hd_sd_sd_dash_hls', () => {
  it('632_drm_fwm_mkv_h264_fhd_fhd_hd_sd_sd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createDRMTask({
      taskName: '632_drm_fwm_mkv_h264_fhd_fhd_hd_sd_sd_dash_hls',
      cid: 'test',
      inputCodec: 'MKV',
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
    }
  });
});


describe('633_drm_fwm_mkv_h264_fhd_fhd_hd_sd_sd_dash_hls', () => {
  it('633_drm_fwm_mkv_h264_fhd_fhd_hd_sd_sd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createDRMTask({
      taskName: '633_drm_fwm_mkv_h264_fhd_fhd_hd_sd_sd_dash_hls',
      cid: 'test',
      inputCodec: 'MKV',
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
    }
  });
});


describe('634_drm_fwm_mkv_h264_fhd_fhd_hd_sd_sd_dash_hls', () => {
  it('634_drm_fwm_mkv_h264_fhd_fhd_hd_sd_sd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createDRMTask({
      taskName: '634_drm_fwm_mkv_h264_fhd_fhd_hd_sd_sd_dash_hls',
      cid: 'test',
      inputCodec: 'MKV',
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
    }
  });
});


describe('635_drm_fwm_mkv_h264_fhd_fhd_hd_sd_sd_dash_hls', () => {
  it('635_drm_fwm_mkv_h264_fhd_fhd_hd_sd_sd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createDRMTask({
      taskName: '635_drm_fwm_mkv_h264_fhd_fhd_hd_sd_sd_dash_hls',
      cid: 'test',
      inputCodec: 'MKV',
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
    }
  });
});


describe('636_drm_fwm_mkv_h264_fhd_fhd_hd_sd_sd_dash_hls', () => {
  it('636_drm_fwm_mkv_h264_fhd_fhd_hd_sd_sd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createDRMTask({
      taskName: '636_drm_fwm_mkv_h264_fhd_fhd_hd_sd_sd_dash_hls',
      cid: 'test',
      inputCodec: 'MKV',
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
    }
  });
});


describe('637_drm_fwm_mkv_h264_fhd_fhd_hd_sd_sd_dash_hls', () => {
  it('637_drm_fwm_mkv_h264_fhd_fhd_hd_sd_sd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createDRMTask({
      taskName: '637_drm_fwm_mkv_h264_fhd_fhd_hd_sd_sd_dash_hls',
      cid: 'test',
      inputCodec: 'MKV',
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
    }
  });
});


describe('638_drm_fwm_mkv_h264_fhd_fhd_hd_sd_sd_dash_hls', () => {
  it('638_drm_fwm_mkv_h264_fhd_fhd_hd_sd_sd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createDRMTask({
      taskName: '638_drm_fwm_mkv_h264_fhd_fhd_hd_sd_sd_dash_hls',
      cid: 'test',
      inputCodec: 'MKV',
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
    }
  });
});


describe('639_drm_fwm_mkv_h264_fhd_fhd_hd_sd_sd_dash_hls', () => {
  it('639_drm_fwm_mkv_h264_fhd_fhd_hd_sd_sd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createDRMTask({
      taskName: '639_drm_fwm_mkv_h264_fhd_fhd_hd_sd_sd_dash_hls',
      cid: 'test',
      inputCodec: 'MKV',
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
    }
  });
});


describe('640_drm_fwm_mkv_h264_fhd_fhd_hd_sd_sd_dash_hls', () => {
  it('640_drm_fwm_mkv_h264_fhd_fhd_hd_sd_sd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createDRMTask({
      taskName: '640_drm_fwm_mkv_h264_fhd_fhd_hd_sd_sd_dash_hls',
      cid: 'test',
      inputCodec: 'MKV',
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
    }
  });
});


describe('641_drm_fwm_h264_h265_uhd_fhd_hd_cmaf', () => {
  it('641_drm_fwm_h264_h265_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createDRMTask({
      taskName: '641_drm_fwm_h264_h265_uhd_fhd_hd_cmaf',
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
    }
  });
});


describe('642_drm_fwm_h264_h265_uhd_fhd_hd_cmaf', () => {
  it('642_drm_fwm_h264_h265_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createDRMTask({
      taskName: '642_drm_fwm_h264_h265_uhd_fhd_hd_cmaf',
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
    }
  });
});


describe('643_drm_fwm_h264_h265_uhd_fhd_hd_cmaf', () => {
  it('643_drm_fwm_h264_h265_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createDRMTask({
      taskName: '643_drm_fwm_h264_h265_uhd_fhd_hd_cmaf',
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
    }
  });
});


describe('644_drm_fwm_h264_h265_uhd_fhd_hd_cmaf', () => {
  it('644_drm_fwm_h264_h265_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createDRMTask({
      taskName: '644_drm_fwm_h264_h265_uhd_fhd_hd_cmaf',
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
    }
  });
});


describe('645_drm_fwm_h264_h265_uhd_fhd_hd_cmaf', () => {
  it('645_drm_fwm_h264_h265_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createDRMTask({
      taskName: '645_drm_fwm_h264_h265_uhd_fhd_hd_cmaf',
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
    }
  });
});


describe('646_drm_fwm_h264_h265_uhd_fhd_hd_cmaf', () => {
  it('646_drm_fwm_h264_h265_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createDRMTask({
      taskName: '646_drm_fwm_h264_h265_uhd_fhd_hd_cmaf',
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
    }
  });
});


describe('647_drm_fwm_h264_h265_uhd_fhd_hd_cmaf', () => {
  it('647_drm_fwm_h264_h265_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createDRMTask({
      taskName: '647_drm_fwm_h264_h265_uhd_fhd_hd_cmaf',
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
    }
  });
});


describe('648_drm_fwm_h264_h265_uhd_fhd_hd_cmaf', () => {
  it('648_drm_fwm_h264_h265_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createDRMTask({
      taskName: '648_drm_fwm_h264_h265_uhd_fhd_hd_cmaf',
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
    }
  });
});


describe('649_drm_fwm_h264_h265_uhd_fhd_hd_cmaf', () => {
  it('649_drm_fwm_h264_h265_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createDRMTask({
      taskName: '649_drm_fwm_h264_h265_uhd_fhd_hd_cmaf',
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
    }
  });
});


describe('650_drm_fwm_h264_h265_uhd_fhd_hd_cmaf', () => {
  it('650_drm_fwm_h264_h265_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createDRMTask({
      taskName: '650_drm_fwm_h264_h265_uhd_fhd_hd_cmaf',
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
    }
  });
});


describe('651_drm_fwm_h264_h265_uhd_fhd_hd_cmaf', () => {
  it('651_drm_fwm_h264_h265_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createDRMTask({
      taskName: '651_drm_fwm_h264_h265_uhd_fhd_hd_cmaf',
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
    }
  });
});


describe('652_drm_fwm_h264_h265_uhd_fhd_hd_cmaf', () => {
  it('652_drm_fwm_h264_h265_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createDRMTask({
      taskName: '652_drm_fwm_h264_h265_uhd_fhd_hd_cmaf',
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
    }
  });
});


describe('653_drm_fwm_h264_h265_uhd_fhd_hd_cmaf', () => {
  it('653_drm_fwm_h264_h265_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createDRMTask({
      taskName: '653_drm_fwm_h264_h265_uhd_fhd_hd_cmaf',
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
    }
  });
});


describe('654_drm_fwm_h264_h265_uhd_fhd_hd_cmaf', () => {
  it('654_drm_fwm_h264_h265_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createDRMTask({
      taskName: '654_drm_fwm_h264_h265_uhd_fhd_hd_cmaf',
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
    }
  });
});


describe('655_drm_fwm_h264_h265_uhd_fhd_hd_cmaf', () => {
  it('655_drm_fwm_h264_h265_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createDRMTask({
      taskName: '655_drm_fwm_h264_h265_uhd_fhd_hd_cmaf',
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
    }
  });
});


describe('656_drm_fwm_h264_h265_uhd_fhd_hd_cmaf', () => {
  it('656_drm_fwm_h264_h265_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createDRMTask({
      taskName: '656_drm_fwm_h264_h265_uhd_fhd_hd_cmaf',
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
    }
  });
});


describe('657_drm_fwm_h264_h265_uhd_fhd_hd_dash_hls', () => {
  it('657_drm_fwm_h264_h265_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createDRMTask({
      taskName: '657_drm_fwm_h264_h265_uhd_fhd_hd_dash_hls',
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
    }
  });
});


describe('658_drm_fwm_h264_h265_uhd_fhd_hd_dash_hls', () => {
  it('658_drm_fwm_h264_h265_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createDRMTask({
      taskName: '658_drm_fwm_h264_h265_uhd_fhd_hd_dash_hls',
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
    }
  });
});


describe('659_drm_fwm_h264_h265_uhd_fhd_hd_dash_hls', () => {
  it('659_drm_fwm_h264_h265_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createDRMTask({
      taskName: '659_drm_fwm_h264_h265_uhd_fhd_hd_dash_hls',
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
    }
  });
});


describe('660_drm_fwm_h264_h265_uhd_fhd_hd_dash_hls', () => {
  it('660_drm_fwm_h264_h265_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createDRMTask({
      taskName: '660_drm_fwm_h264_h265_uhd_fhd_hd_dash_hls',
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
    }
  });
});


describe('661_drm_fwm_h264_h265_uhd_fhd_hd_dash_hls', () => {
  it('661_drm_fwm_h264_h265_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createDRMTask({
      taskName: '661_drm_fwm_h264_h265_uhd_fhd_hd_dash_hls',
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
    }
  });
});


describe('662_drm_fwm_h264_h265_uhd_fhd_hd_dash_hls', () => {
  it('662_drm_fwm_h264_h265_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createDRMTask({
      taskName: '662_drm_fwm_h264_h265_uhd_fhd_hd_dash_hls',
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
    }
  });
});


describe('663_drm_fwm_h264_h265_uhd_fhd_hd_dash_hls', () => {
  it('663_drm_fwm_h264_h265_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createDRMTask({
      taskName: '663_drm_fwm_h264_h265_uhd_fhd_hd_dash_hls',
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
    }
  });
});


describe('664_drm_fwm_h264_h265_uhd_fhd_hd_dash_hls', () => {
  it('664_drm_fwm_h264_h265_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createDRMTask({
      taskName: '664_drm_fwm_h264_h265_uhd_fhd_hd_dash_hls',
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
    }
  });
});


describe('665_drm_fwm_h264_h265_uhd_fhd_hd_dash_hls', () => {
  it('665_drm_fwm_h264_h265_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createDRMTask({
      taskName: '665_drm_fwm_h264_h265_uhd_fhd_hd_dash_hls',
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
    }
  });
});


describe('666_drm_fwm_h264_h265_uhd_fhd_hd_dash_hls', () => {
  it('666_drm_fwm_h264_h265_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createDRMTask({
      taskName: '666_drm_fwm_h264_h265_uhd_fhd_hd_dash_hls',
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
    }
  });
});


describe('667_drm_fwm_h264_h265_uhd_fhd_hd_dash_hls', () => {
  it('667_drm_fwm_h264_h265_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createDRMTask({
      taskName: '667_drm_fwm_h264_h265_uhd_fhd_hd_dash_hls',
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
    }
  });
});


describe('668_drm_fwm_h264_h265_uhd_fhd_hd_dash_hls', () => {
  it('668_drm_fwm_h264_h265_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createDRMTask({
      taskName: '668_drm_fwm_h264_h265_uhd_fhd_hd_dash_hls',
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
    }
  });
});


describe('669_drm_fwm_h264_h265_uhd_fhd_hd_dash_hls', () => {
  it('669_drm_fwm_h264_h265_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createDRMTask({
      taskName: '669_drm_fwm_h264_h265_uhd_fhd_hd_dash_hls',
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
    }
  });
});


describe('670_drm_fwm_h264_h265_uhd_fhd_hd_dash_hls', () => {
  it('670_drm_fwm_h264_h265_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createDRMTask({
      taskName: '670_drm_fwm_h264_h265_uhd_fhd_hd_dash_hls',
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
    }
  });
});


describe('671_drm_fwm_h264_h265_uhd_fhd_hd_dash_hls', () => {
  it('671_drm_fwm_h264_h265_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createDRMTask({
      taskName: '671_drm_fwm_h264_h265_uhd_fhd_hd_dash_hls',
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
    }
  });
});


describe('672_drm_fwm_h264_h265_uhd_fhd_hd_dash_hls', () => {
  it('672_drm_fwm_h264_h265_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createDRMTask({
      taskName: '672_drm_fwm_h264_h265_uhd_fhd_hd_dash_hls',
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
    }
  });
});


describe('673_drm_fwm_h265_h265_uhd_fhd_hd_cmaf', () => {
  it('673_drm_fwm_h265_h265_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createDRMTask({
      taskName: '673_drm_fwm_h265_h265_uhd_fhd_hd_cmaf',
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
    }
  });
});


describe('674_drm_fwm_h265_h265_uhd_fhd_hd_cmaf', () => {
  it('674_drm_fwm_h265_h265_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createDRMTask({
      taskName: '674_drm_fwm_h265_h265_uhd_fhd_hd_cmaf',
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
    }
  });
});


describe('675_drm_fwm_h265_h265_uhd_fhd_hd_cmaf', () => {
  it('675_drm_fwm_h265_h265_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createDRMTask({
      taskName: '675_drm_fwm_h265_h265_uhd_fhd_hd_cmaf',
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
    }
  });
});


describe('676_drm_fwm_h265_h265_uhd_fhd_hd_cmaf', () => {
  it('676_drm_fwm_h265_h265_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createDRMTask({
      taskName: '676_drm_fwm_h265_h265_uhd_fhd_hd_cmaf',
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
    }
  });
});


describe('677_drm_fwm_h265_h265_uhd_fhd_hd_cmaf', () => {
  it('677_drm_fwm_h265_h265_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createDRMTask({
      taskName: '677_drm_fwm_h265_h265_uhd_fhd_hd_cmaf',
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
    }
  });
});


describe('678_drm_fwm_h265_h265_uhd_fhd_hd_cmaf', () => {
  it('678_drm_fwm_h265_h265_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createDRMTask({
      taskName: '678_drm_fwm_h265_h265_uhd_fhd_hd_cmaf',
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
    }
  });
});


describe('679_drm_fwm_h265_h265_uhd_fhd_hd_cmaf', () => {
  it('679_drm_fwm_h265_h265_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createDRMTask({
      taskName: '679_drm_fwm_h265_h265_uhd_fhd_hd_cmaf',
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
    }
  });
});


describe('680_drm_fwm_h265_h265_uhd_fhd_hd_cmaf', () => {
  it('680_drm_fwm_h265_h265_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createDRMTask({
      taskName: '680_drm_fwm_h265_h265_uhd_fhd_hd_cmaf',
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
    }
  });
});


describe('681_drm_fwm_h265_h265_uhd_fhd_hd_cmaf', () => {
  it('681_drm_fwm_h265_h265_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createDRMTask({
      taskName: '681_drm_fwm_h265_h265_uhd_fhd_hd_cmaf',
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
    }
  });
});


describe('682_drm_fwm_h265_h265_uhd_fhd_hd_cmaf', () => {
  it('682_drm_fwm_h265_h265_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createDRMTask({
      taskName: '682_drm_fwm_h265_h265_uhd_fhd_hd_cmaf',
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
    }
  });
});


describe('683_drm_fwm_h265_h265_uhd_fhd_hd_cmaf', () => {
  it('683_drm_fwm_h265_h265_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createDRMTask({
      taskName: '683_drm_fwm_h265_h265_uhd_fhd_hd_cmaf',
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
    }
  });
});


describe('684_drm_fwm_h265_h265_uhd_fhd_hd_cmaf', () => {
  it('684_drm_fwm_h265_h265_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createDRMTask({
      taskName: '684_drm_fwm_h265_h265_uhd_fhd_hd_cmaf',
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
    }
  });
});


describe('685_drm_fwm_h265_h265_uhd_fhd_hd_cmaf', () => {
  it('685_drm_fwm_h265_h265_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createDRMTask({
      taskName: '685_drm_fwm_h265_h265_uhd_fhd_hd_cmaf',
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
    }
  });
});


describe('686_drm_fwm_h265_h265_uhd_fhd_hd_cmaf', () => {
  it('686_drm_fwm_h265_h265_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createDRMTask({
      taskName: '686_drm_fwm_h265_h265_uhd_fhd_hd_cmaf',
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
    }
  });
});


describe('687_drm_fwm_h265_h265_uhd_fhd_hd_cmaf', () => {
  it('687_drm_fwm_h265_h265_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createDRMTask({
      taskName: '687_drm_fwm_h265_h265_uhd_fhd_hd_cmaf',
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
    }
  });
});


describe('688_drm_fwm_h265_h265_uhd_fhd_hd_cmaf', () => {
  it('688_drm_fwm_h265_h265_uhd_fhd_hd_cmaf 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createDRMTask({
      taskName: '688_drm_fwm_h265_h265_uhd_fhd_hd_cmaf',
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
    }
  });
});


describe('689_drm_fwm_h265_h265_uhd_fhd_hd_dash_hls', () => {
  it('689_drm_fwm_h265_h265_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createDRMTask({
      taskName: '689_drm_fwm_h265_h265_uhd_fhd_hd_dash_hls',
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
    }
  });
});


describe('690_drm_fwm_h265_h265_uhd_fhd_hd_dash_hls', () => {
  it('690_drm_fwm_h265_h265_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createDRMTask({
      taskName: '690_drm_fwm_h265_h265_uhd_fhd_hd_dash_hls',
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
    }
  });
});


describe('691_drm_fwm_h265_h265_uhd_fhd_hd_dash_hls', () => {
  it('691_drm_fwm_h265_h265_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createDRMTask({
      taskName: '691_drm_fwm_h265_h265_uhd_fhd_hd_dash_hls',
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
    }
  });
});


describe('692_drm_fwm_h265_h265_uhd_fhd_hd_dash_hls', () => {
  it('692_drm_fwm_h265_h265_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createDRMTask({
      taskName: '692_drm_fwm_h265_h265_uhd_fhd_hd_dash_hls',
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
    }
  });
});


describe('693_drm_fwm_h265_h265_uhd_fhd_hd_dash_hls', () => {
  it('693_drm_fwm_h265_h265_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createDRMTask({
      taskName: '693_drm_fwm_h265_h265_uhd_fhd_hd_dash_hls',
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
    }
  });
});


describe('694_drm_fwm_h265_h265_uhd_fhd_hd_dash_hls', () => {
  it('694_drm_fwm_h265_h265_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createDRMTask({
      taskName: '694_drm_fwm_h265_h265_uhd_fhd_hd_dash_hls',
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
    }
  });
});


describe('695_drm_fwm_h265_h265_uhd_fhd_hd_dash_hls', () => {
  it('695_drm_fwm_h265_h265_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createDRMTask({
      taskName: '695_drm_fwm_h265_h265_uhd_fhd_hd_dash_hls',
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
    }
  });
});


describe('696_drm_fwm_h265_h265_uhd_fhd_hd_dash_hls', () => {
  it('696_drm_fwm_h265_h265_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createDRMTask({
      taskName: '696_drm_fwm_h265_h265_uhd_fhd_hd_dash_hls',
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
    }
  });
});


describe('697_drm_fwm_h265_h265_uhd_fhd_hd_dash_hls', () => {
  it('697_drm_fwm_h265_h265_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createDRMTask({
      taskName: '697_drm_fwm_h265_h265_uhd_fhd_hd_dash_hls',
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
    }
  });
});


describe('698_drm_fwm_h265_h265_uhd_fhd_hd_dash_hls', () => {
  it('698_drm_fwm_h265_h265_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createDRMTask({
      taskName: '698_drm_fwm_h265_h265_uhd_fhd_hd_dash_hls',
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
    }
  });
});


describe('699_drm_fwm_h265_h265_uhd_fhd_hd_dash_hls', () => {
  it('699_drm_fwm_h265_h265_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createDRMTask({
      taskName: '699_drm_fwm_h265_h265_uhd_fhd_hd_dash_hls',
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
    }
  });
});


describe('700_drm_fwm_h265_h265_uhd_fhd_hd_dash_hls', () => {
  it('700_drm_fwm_h265_h265_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createDRMTask({
      taskName: '700_drm_fwm_h265_h265_uhd_fhd_hd_dash_hls',
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
    }
  });
});


describe('701_drm_fwm_h265_h265_uhd_fhd_hd_dash_hls', () => {
  it('701_drm_fwm_h265_h265_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createDRMTask({
      taskName: '701_drm_fwm_h265_h265_uhd_fhd_hd_dash_hls',
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
    }
  });
});


describe('702_drm_fwm_h265_h265_uhd_fhd_hd_dash_hls', () => {
  it('702_drm_fwm_h265_h265_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createDRMTask({
      taskName: '702_drm_fwm_h265_h265_uhd_fhd_hd_dash_hls',
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
    }
  });
});


describe('703_drm_fwm_h265_h265_uhd_fhd_hd_dash_hls', () => {
  it('703_drm_fwm_h265_h265_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createDRMTask({
      taskName: '703_drm_fwm_h265_h265_uhd_fhd_hd_dash_hls',
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
    }
  });
});


describe('704_drm_fwm_h265_h265_uhd_fhd_hd_dash_hls', () => {
  it('704_drm_fwm_h265_h265_uhd_fhd_hd_dash_hls 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createDRMTask({
      taskName: '704_drm_fwm_h265_h265_uhd_fhd_hd_dash_hls',
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
    }
  });
});

