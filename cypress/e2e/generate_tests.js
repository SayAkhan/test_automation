const fs = require('fs');
const path = require('path');

// fwm_combinations.txt 파일 경로 설정
const combinationsFilePath = path.join(__dirname, 'fwm_combinations.txt');
console.log('파일 경로:', combinationsFilePath);

// 파일이 없으면 생성
if (!fs.existsSync(combinationsFilePath)) {
  console.log('파일이 존재하지 않습니다. 기본 파일을 생성합니다.');
  const defaultCombinations = `=== FWM H264 조합 ===
총 조합 수: 8

조합 1: 추가완료
작업타입: FWM
입력파일: H264
출력 코덱: H264
해상도: UHD+FHD+HD
스트리밍 포멧: CMAF

조합 2: 추가 완료
작업타입: FWM
입력파일: H264
출력 코덱: H264
해상도: UHD+FHD+HD
스트리밍 포멧: DASH+HLS`;

  fs.writeFileSync(combinationsFilePath, defaultCombinations);
  console.log('기본 조합 파일이 생성되었습니다.');
}

// fwm_combinations.txt 파일 읽기
const combinations = fs.readFileSync(combinationsFilePath, 'utf8');
console.log('파일 내용:', combinations);

// 각 조합을 파싱하여 테스트 케이스 생성
const lines = combinations.split('\n');
console.log('분할된 줄 수:', lines.length);

let currentCombination = null;
const testCases = [];

for (let i = 0; i < lines.length; i++) {
  const line = lines[i].trim();
  
  // 새로운 조합 시작
  if (line.startsWith('조합')) {
    if (currentCombination) {
      testCases.push(currentCombination);
    }
    currentCombination = {
      inputCodec: '',
      outputCodec: '',
      resolutionProfile: '',
      streamingFormat: ''
    };
  }
  
  // 조합 정보 파싱
  if (currentCombination) {
    if (line.includes('입력파일:')) {
      currentCombination.inputCodec = line.split(':')[1].trim();
    } else if (line.includes('출력 코덱:')) {
      currentCombination.outputCodec = line.split(':')[1].trim();
    } else if (line.includes('해상도:')) {
      currentCombination.resolutionProfile = line.split(':')[1].trim().replace(/\+/g, '_');
    } else if (line.includes('스트리밍 포멧:')) {
      currentCombination.streamingFormat = line.split(':')[1].trim().replace(/\+/g, '_');
    }
  }
}

// 마지막 조합 추가
if (currentCombination) {
  testCases.push(currentCombination);
}

// taskName 설정
testCases.forEach(testCase => {
  testCase.taskName = `fwm_${testCase.inputCodec}_${testCase.outputCodec}_${testCase.resolutionProfile}_${testCase.streamingFormat}`.toLowerCase();
});

console.log('파싱된 테스트 케이스:', testCases);
console.log('최종 테스트 케이스 수:', testCases.length);

if (testCases.length === 0) {
  console.error('테스트 케이스가 생성되지 않았습니다. 파일 내용을 확인해주세요.');
  process.exit(1);
}

// 테스트 파일 생성
const testFileContent = `before(() => {
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

${testCases.map(testCase => `
describe('${testCase.taskName}', () => {
  it('${testCase.taskName} 작업생성', function() {
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createFWMTask({
      taskName: '${testCase.taskName}',
      cid: 'test',
      inputCodec: '${testCase.inputCodec}',
      resolutionProfile: '${testCase.resolutionProfile}',
      streamingFormat: '${testCase.streamingFormat}',
      outputCodec: '${testCase.outputCodec}'
    });
  });

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.writelog(\`테스트 실패: \${this.currentTest.title}\`);
      cy.screenshot(\`실패_\${this.currentTest.title}\`);
    }
  });
});`).join('\n')}`;

// 테스트 파일 저장
const outputPath = path.join(__dirname, 'fwm_auto_generated_tests.cy.js');
fs.writeFileSync(outputPath, testFileContent);

console.log(`테스트 파일이 생성되었습니다: ${outputPath}`);
console.log(`생성된 테스트 케이스 수: ${testCases.length}`); 