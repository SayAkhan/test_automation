const fs = require('fs');
const path = require('path');

// drm_combinations.txt 파일 경로
const combinationsPath = path.join(__dirname, 'drm_combinations.txt');

// 파일 내용 읽기
const fileContent = fs.readFileSync(combinationsPath, 'utf8');
const lines = fileContent.split('\n');

// 작업타입 파싱
let currentType = 'DRM';
let currentInputCodec = '';
let currentOutputCodec = '';
let currentResolution = '';
let currentStreamingFormat = '';
let currentAspectRatio = false;
let currentAudioEncryption = false;
let currentMultiKey = false;
let currentMultiManifest = false;
let currentDrmOff = false;

const testCases = [];

// Helper function to add a test case and reset variables
function addTestCaseAndReset() {
  if (currentInputCodec && currentOutputCodec && currentResolution && currentStreamingFormat) {
    testCases.push({
      taskName: `${testCases.length + 1}_${currentType.toLowerCase()}_${currentInputCodec}_${currentOutputCodec}_${currentResolution}_${currentStreamingFormat}`,
      type: currentType,
      cid: 'test',
      inputCodec: currentInputCodec,
      outputCodec: currentOutputCodec,
      resolutionProfile: currentResolution,
      streamingFormat: currentStreamingFormat,
      aspectRatio: currentAspectRatio,
      audioEncryption: currentAudioEncryption,
      multiKey: currentMultiKey,
      multiManifest: currentMultiManifest,
      drmOff: currentDrmOff
    });
  }
  // Reset variables for the next test case
  currentInputCodec = '';
  currentOutputCodec = '';
  currentResolution = '';
  currentStreamingFormat = '';
  currentAspectRatio = false;
  currentAudioEncryption = false;
  currentMultiKey = false;
  currentMultiManifest = false;
  currentDrmOff = false;
}

for (const line of lines) {
  if (line.includes('작업타입:')) {
    // Before processing the new type, add the previously collected test case
    addTestCaseAndReset();

    // Parse the new type
    const typeMatch = line.match(/작업타입:\s*(\w+)(?:\+(\w+))?/);
    if (typeMatch) {
      if (typeMatch[2]) {
        currentType = `${typeMatch[1]}_${typeMatch[2]}`.toUpperCase();
      } else {
        currentType = typeMatch[1].toUpperCase();
      }
    }
  } else if (line.includes('입력파일:')) {
    currentInputCodec = line.split(':')[1].trim().toLowerCase();
  } else if (line.includes('출력 코덱:')) {
    currentOutputCodec = line.split(':')[1].trim().toLowerCase();
  } else if (line.includes('해상도:')) {
    currentResolution = line.split(':')[1].trim().toLowerCase().replace(/\+/g, '_');
  } else if (line.includes('스트리밍 포멧:')) {
    currentStreamingFormat = line.split(':')[1].trim().toLowerCase().replace(/\+/g, '_');
  } else if (line.includes('비율옵션:')) {
    const aspectRatioValue = line.split(':')[1].trim();
    if (aspectRatioValue === '체크') {
      currentAspectRatio = true;
    } else if (aspectRatioValue === '체크해제') {
      currentAspectRatio = false;
    }
  } else if (line.includes('오디오 암호화:')) {
    currentAudioEncryption = line.split(':')[1].trim() === '체크';
  } else if (line.includes('멀티키:')) {
    currentMultiKey = line.split(':')[1].trim() === '체크';
  } else if (line.includes('멀티매니페스트:')) {
    currentMultiManifest = line.split(':')[1].trim() === '체크';
  } else if (line.includes('DRM 비활성화 구간:')) {
    currentDrmOff = line.split(':')[1].trim() === '설정';
    // No need to push test case here anymore
  }
}

// Add the very last test case after the loop finishes
addTestCaseAndReset();

if (testCases.length === 0) {
  console.error('테스트 케이스가 생성되지 않았습니다.');
  process.exit(1);
}

// 테스트 파일 내용 생성
const testFileContent = `
// 자동 생성된 테스트 파일
before(() => {
  // 새로운 로그 파일 생성
  cy.task('generateLogFileName').then((fileName) => {
    Cypress.env('currentLogFile', fileName);
  });
//테스트 시작 로그 기록
cy.writelog('Test Start');
cy.sendTestStartMessage();
});

after(() => {
  // 테스트 종료 후 로그 마무리
  cy.writelog('Test End');
  cy.sendTestCompletionMessage(testStats);
});

${testCases.map(testCase => `
describe('${testCase.taskName}', () => {
  it('${testCase.taskName} 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createDRMTask({
      taskName: '${testCase.taskName}',
      cid: '${testCase.cid}',
      inputCodec: '${testCase.inputCodec.toUpperCase()}',
      resolutionProfile: '${testCase.resolutionProfile.toUpperCase()}',
      streamingFormat: '${testCase.streamingFormat.toUpperCase()}',
      outputCodec: '${testCase.outputCodec.toUpperCase()}',
      type: '${testCase.type}',
      aspectRatio: ${testCase.aspectRatio},
      audioEncryption: ${testCase.audioEncryption},
      multiKey: ${testCase.multiKey},
      multiManifest: ${testCase.multiManifest},
      drmOff: ${testCase.drmOff}
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(\`테스트 실패: \${this.currentTest.title}\`);
      cy.screenshot(\`실패_\${this.currentTest.title}\`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
    } else if (this.currentTest.state === 'passed') {
      testStats.passed++;
    }
    testStats.total++;
  });
});
`).join('\n')}
`;

// 테스트 파일 저장
const outputPath = path.join(__dirname, 'drm_auto_generated_tests.cy.js');
fs.writeFileSync(outputPath, testFileContent);

console.log('테스트 파일이 생성되었습니다:', outputPath);
console.log('생성된 테스트 케이스 수:', testCases.length); 