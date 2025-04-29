import os
import re
from pathlib import Path

# drm_combinations.txt 파일 경로
current_dir = Path(__file__).parent
combinations_path = current_dir / 'drm_combinations.txt'

# 파일 내용 읽기
with open(combinations_path, 'r', encoding='utf-8') as file:
    lines = file.readlines()

# 작업타입 파싱
current_type = 'DRM'
current_input_codec = ''
current_output_codec = ''
current_resolution = ''
current_streaming_format = ''
current_aspect_ratio = False
current_audio_encryption = False
current_multi_key = False
current_multi_manifest = False
current_drm_off = False

test_cases = []

def add_test_case_and_reset():
    global current_input_codec, current_output_codec, current_resolution, current_streaming_format
    global current_aspect_ratio, current_audio_encryption, current_multi_key, current_multi_manifest, current_drm_off
    
    if current_input_codec and current_output_codec and current_resolution and current_streaming_format:
        test_cases.append({
            'taskName': f"{len(test_cases) + 1}_{current_type.lower()}_{current_input_codec}_{current_output_codec}_{current_resolution}_{current_streaming_format}",
            'type': current_type,
            'cid': 'test',
            'inputCodec': current_input_codec,
            'outputCodec': current_output_codec,
            'resolutionProfile': current_resolution,
            'streamingFormat': current_streaming_format,
            'aspectRatio': current_aspect_ratio,
            'audioEncryption': current_audio_encryption,
            'multiKey': current_multi_key,
            'multiManifest': current_multi_manifest,
            'drmOff': current_drm_off
        })
    
    # Reset variables for the next test case
    current_input_codec = ''
    current_output_codec = ''
    current_resolution = ''
    current_streaming_format = ''
    current_aspect_ratio = False
    current_audio_encryption = False
    current_multi_key = False
    current_multi_manifest = False
    current_drm_off = False

for line in lines:
    line = line.strip()
    if '작업타입:' in line:
        # Before processing the new type, add the previously collected test case
        add_test_case_and_reset()

        # Parse the new type
        type_match = re.match(r'작업타입:\s*(\w+)(?:\+(\w+))?', line)
        if type_match:
            if type_match.group(2):
                current_type = f"{type_match.group(1)}_{type_match.group(2)}".upper()
            else:
                current_type = type_match.group(1).upper()
    elif '입력파일:' in line:
        current_input_codec = line.split(':')[1].strip().lower()
    elif '출력 코덱:' in line:
        current_output_codec = line.split(':')[1].strip().lower()
    elif '해상도:' in line:
        current_resolution = line.split(':')[1].strip().lower().replace('+', '_')
    elif '스트리밍 포멧:' in line:
        current_streaming_format = line.split(':')[1].strip().lower().replace('+', '_')
    elif '비율옵션:' in line:
        aspect_ratio_value = line.split(':')[1].strip()
        current_aspect_ratio = aspect_ratio_value == '체크'
    elif '오디오 암호화:' in line:
        current_audio_encryption = line.split(':')[1].strip() == '체크'
    elif '멀티키:' in line:
        current_multi_key = line.split(':')[1].strip() == '체크'
    elif '멀티매니페스트:' in line:
        current_multi_manifest = line.split(':')[1].strip() == '체크'
    elif 'DRM 비활성화 구간:' in line:
        current_drm_off = line.split(':')[1].strip() == '설정'

# Add the very last test case after the loop finishes
add_test_case_and_reset()

if not test_cases:
    print('테스트 케이스가 생성되지 않았습니다.')
    exit(1)

# 테스트 파일 내용 생성
test_file_content = f"""
const TEST_COUNT = {len(test_cases)}; // 총 테스트 수
let testStats = {{
  total: 0,
  passed: 0,
  failed: 0
}};  

// 자동 생성된 테스트 파일
before(() => {{
  // 새로운 로그 파일 생성
  cy.task('generateLogFileName').then((fileName) => {{
    Cypress.env('currentLogFile', fileName);
  }});
//테스트 시작 로그 기록
cy.writelog('Test Start');
cy.sendTestStartMessage('🚀 DRM 자동화 테스트가 시작되었습니다.');
}});

beforeEach(function() {{
  cy.writelog(`생성 시작: ${{this.currentTest.title}}`);
}});

after(() => {{
  // 테스트 종료 후 로그 마무리
  cy.writelog('Test End');
  cy.sendTestCompletionMessage(testStats);
}});

"""

for test_case in test_cases:
    test_file_content += f"""
describe('{test_case['taskName']}', () => {{
  it('{test_case['taskName']} 작업생성', function() {{
    cy.viewport(1280, 720);
    cy.login('jcg@inka.co.kr', 'Say1013!');

    cy.createDRMTask({{
      taskName: '{test_case['taskName']}',
      cid: '{test_case['cid']}',
      inputCodec: '{test_case['inputCodec'].upper()}',
      resolutionProfile: '{test_case['resolutionProfile'].upper()}',
      streamingFormat: '{test_case['streamingFormat'].upper()}',
      outputCodec: '{test_case['outputCodec'].upper()}',
      type: '{test_case['type']}',
      aspectRatio: {str(test_case['aspectRatio']).lower()},
      audioEncryption: {str(test_case['audioEncryption']).lower()},
      multiKey: {str(test_case['multiKey']).lower()},
      multiManifest: {str(test_case['multiManifest']).lower()},
      drmOff: {str(test_case['drmOff']).lower()}
    }});
  }});

  afterEach(function() {{
    if (this.currentTest.state === 'failed') {{
      cy.writelog(`테스트 실패: ${{this.currentTest.title}}`);
      cy.screenshot(`실패_${{this.currentTest.title}}`);
      cy.sendTestFailureMessage(this.currentTest.title, this.currentTest.err);
    }} else if (this.currentTest.state === 'passed') {{
      testStats.passed++;
    }}
    testStats.total++;
  }});
}});
"""

# 테스트 파일 저장
output_path = current_dir / 'drm_auto_generated_tests.cy.js'
with open(output_path, 'w', encoding='utf-8') as file:
    file.write(test_file_content)

print('테스트 파일이 생성되었습니다:', output_path)
print('생성된 테스트 케이스 수:', len(test_cases)) 