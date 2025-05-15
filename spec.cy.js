// 실행할 테스트 개수 설정
const TEST_COUNT = 200;

// 테스트 실행 상태 추적을 위한 변수
let testStats = {
  total: 0,
  passed: 0,
  failed: 0
};

// Fisher-Yates 셔플 알고리즘
const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

// 선택된 테스트 케이스를 저장할 전역 변수
let selectedTests = [];
let testsGenerated = false;

// 테스트 시작 전 로그 파일 생성 및 테스트 케이스 선택
before(() => {
  // 새로운 로그 파일 생성
  cy.task('generateLogFileName').then((fileName) => {
    Cypress.env('currentLogFile', fileName);
    cy.writelog('Test Start');

    // 수정된 태스크 호출: specIdentifier에 Cypress.spec.name 사용
    cy.task('sendStartMessage', {
      message: '🚀 자동화 테스트가 시작되었습니다.',
      specIdentifier: Cypress.spec.name 
    });
  });

  // 테스트 케이스 로드 및 선택
  cy.readFile('cypress/e2e/drm_auto_generated_tests.cy.js').then((content) => {
    // describe 블록과 그 안의 it 블록 추출
    const regex = /describe\('(\d+)_drm_([^']+)'[^{]*{([^}]+)it\(['"](.*?)['"].*?\)/g;
    const matches = [...content.matchAll(regex)];
    
    const allTests = matches.map(match => ({
      number: parseInt(match[1]),
      name: `${match[1]}_drm_${match[2]}`,
      itName: match[4] || '기본 테스트'
    }));

    // 랜덤하게 섞고 TEST_COUNT 만큼 선택
    selectedTests = shuffleArray([...allTests]).slice(0, TEST_COUNT);
    testsGenerated = true;
  });
});

// 테스트 종료 후 로그 기록
after(() => {
  cy.writelog('Test End');
  cy.sendTestCompletionMessage(testStats);
});

// 테스트 실패 시 로그 및 스크린샷
afterEach(function() {
  testStats.total++;
  if (this.currentTest.state === 'failed') {
    testStats.failed++;
    cy.writelog(`테스트 실패: ${this.currentTest.title}`);
    cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
  } else if (this.currentTest.state === 'passed') {
    testStats.passed++;
  }
});

describe('DRM 랜덤 시나리오 테스트', () => {
  // 테스트 생성 및 실행
  for (let i = 1; i <= TEST_COUNT; i++) {
    it(`[${i}/${TEST_COUNT}]`, function() {
      // 선택된 테스트가 로드되었는지 확인
      cy.wrap(testsGenerated).should('be.true');
      
      // 선택된 테스트 케이스 정보 가져오기
      const testCase = selectedTests[i-1];

      // 선택된 테스트의 이름을 현재 테스트 제목으로 변경
      Cypress.currentTest.title = `${testCase.itName}`;
      
      // 뷰포트 설정 및 로그인
      cy.viewport(1280, 720);
      cy.login('jcg@inka.co.kr', 'Say1013!');
      
      // 테스트 실행 로그
      cy.writelog(`테스트 실행: [${i}/${TEST_COUNT}] ${testCase.number}번 시나리오 - ${testCase.itName}`);
      
      // 로그에 테스트 정보 표시
      cy.log(`[${i}/${TEST_COUNT}] ${testCase.number}번 시나리오 - ${testCase.itName}`);
      
      // 테스트 실행
      cy.task('getTestFromFile', { testNumber: testCase.number }).then((testContent) => {
        // 테스트 내용에서 필요한 정보 추출
        const match = testContent.match(/taskName: '([^']+)'/);
        const taskName = match ? match[1] : `${testCase.number}_drm_test`;
        const inputCodec = (testContent.match(/inputCodec: '([^']+)'/) || [])[1] || 'H264';
        const type = (testContent.match(/type: '([^']+)'/) || [])[1] || 'DRM';

        // DRM 태스크 생성 및 실행
        cy.createDRMTask({
          taskName: taskName,
          cid: 'test',
          inputCodec: inputCodec,
          resolutionProfile: (testContent.match(/resolutionProfile: '([^']+)'/) || [])[1] || 'UHD_FHD_FHD_HD_HD_SD',
          streamingFormat: (testContent.match(/streamingFormat: '([^']+)'/) || [])[1] || 'CMAF',
          outputCodec: (testContent.match(/outputCodec: '([^']+)'/) || [])[1] || 'H264',
          type: type,
          aspectRatio: testContent.includes('aspectRatio: true'),
          audioEncryption: testContent.includes('audioEncryption: true'),
          multiKey: testContent.includes('multiKey: true'),
          multiManifest: testContent.includes('multiManifest: true'),
          drmOff: testContent.includes('drmOff: true')
        });
      });
    });
  }
});


  