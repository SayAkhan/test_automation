// 실행할 테스트 개수 설정 (1-704 사이의 값으로 변경 가능)
const TEST_COUNT = 200;

// Fisher-Yates 셔플 알고리즘을 사용하여 배열을 완전히 랜덤하게 섞음
const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

// 테스트 번호 배열 생성 (1부터 704까지)
const testNumbers = Array.from({ length: 704 }, (_, i) => i + 1);

// 테스트 번호를 랜덤하게 섞음
const shuffledTests = shuffleArray(testNumbers);

// 처음부터 TEST_COUNT 개수만큼의 테스트만 선택
const selectedTests = shuffledTests.slice(0, TEST_COUNT);

// 선택된 테스트에 대해 describe 블록 생성
describe('랜덤 DRM 테스트 실행', () => {
  selectedTests.forEach((testNumber, index) => {
    describe(`[${index + 1}/${TEST_COUNT}] ${testNumber}_drm_test`, () => {
      it(`${testNumber}_drm_test 작업생성`, () => {
        cy.viewport(1280, 720);
        cy.login('jcg@inka.co.kr', 'Say1013!');

        cy.createDRMTask({
          taskName: `${testNumber}_drm_test`,
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
        }
      });
    });
  });
});

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


  