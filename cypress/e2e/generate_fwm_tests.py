import os
from pathlib import Path

# 기본 조합 정의
default_combinations = [
    # H264 조합 (8개)
    'h264_h264_uhd_fhd_hd_cmaf',
    'h264_h264_uhd_fhd_hd_dash',
    'h264_h264_uhd_fhd_hd_hls',
    'h264_h264_fhd_fhd_hd_sd_sd_cmaf',
    'h264_h264_fhd_fhd_hd_sd_sd_dash',
    'h264_h264_fhd_fhd_hd_sd_sd_hls',
    'h265_h264_uhd_fhd_hd_cmaf',
    'h265_h264_fhd_fhd_hd_sd_sd_cmaf',
    
    # H265 조합 (4개)
    'h264_h265_uhd_fhd_hd_cmaf',
    'h264_h265_uhd_fhd_hd_dash',
    'h264_h265_uhd_fhd_hd_hls',
    'h265_h265_uhd_fhd_hd_cmaf',
    
    # H264 조합 (4개)
    'h264_h264_uhd_fhd_hd_cmaf',
    'h264_h264_uhd_fhd_hd_dash',
    'h264_h264_uhd_fhd_hd_hls',
    'h264_h264_fhd_fhd_hd_sd_sd_cmaf'
]

# fwm_combinations.txt 파일 경로
current_dir = Path(__file__).parent
combinations_path = current_dir / 'fwm_combinations.txt'

# 파일이 없으면 기본 조합으로 생성
if not combinations_path.exists():
    file_content = [
        '# H264 조합',
        *default_combinations[:6],
        '',
        '# H265 조합',
        *default_combinations[6:]
    ]
    
    with open(combinations_path, 'w', encoding='utf-8') as file:
        file.write('\n'.join(file_content))
    print('기본 조합 파일이 생성되었습니다.')

# 파일 내용 읽기
with open(combinations_path, 'r', encoding='utf-8') as file:
    lines = file.readlines()

# 작업타입 파싱
current_type = 'FWM'
current_input_codec = ''
current_output_codec = ''
current_resolution = ''
current_streaming_format = ''

test_cases = []

def add_test_case_and_reset():
    global current_input_codec, current_output_codec, current_resolution, current_streaming_format
    
    if current_input_codec and current_output_codec and current_resolution and current_streaming_format:
        test_cases.append({
            'taskName': f"{len(test_cases) + 1}_{current_type.lower()}_{current_input_codec}_{current_output_codec}_{current_resolution}_{current_streaming_format}",
            'type': current_type,
            'cid': 'test',
            'inputCodec': current_input_codec,
            'outputCodec': current_output_codec,
            'resolutionProfile': current_resolution,
            'streamingFormat': current_streaming_format
        })
    
    # Reset variables for the next test case
    current_input_codec = ''
    current_output_codec = ''
    current_resolution = ''
    current_streaming_format = ''

for line in lines:
    line = line.strip()
    if not line or line.startswith('#'):
        continue
        
    parts = line.split('_')
    if len(parts) >= 5:
        current_input_codec = parts[0]
        current_output_codec = parts[1]
        current_resolution = '_'.join(parts[2:-1])
        current_streaming_format = parts[-1]
        add_test_case_and_reset()

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
cy.sendTestStartMessage('🚀 FWM 자동화 테스트가 시작되었습니다.');
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

    cy.createFWMTask({{
      taskName: '{test_case['taskName']}',
      cid: '{test_case['cid']}',
      inputCodec: '{test_case['inputCodec'].upper()}',
      resolutionProfile: '{test_case['resolutionProfile'].upper()}',
      streamingFormat: '{test_case['streamingFormat'].upper()}',
      outputCodec: '{test_case['outputCodec'].upper()}',
      type: '{test_case['type']}'
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
output_path = current_dir / 'fwm_auto_generated_tests.cy.js'
with open(output_path, 'w', encoding='utf-8') as file:
    file.write(test_file_content)

print('테스트 파일이 생성되었습니다:', output_path)
print('생성된 테스트 케이스 수:', len(test_cases))