# TNP 작업생성 자동화 프로젝트

이 프로젝트는 TNP 작업 생성 테스트를 자동화하기 위한 Cypress 기반의 코드입니다.

## 주요 기능

- DRM / FWM / DRM+FWM 작업 생성 자동화
- 각 서비스가 지원하는 코덱 및 포맷 지원 (H264, H265, MKV, PRORES, XDCAM)
- 멀티키, 멀티매니페스트, 오디오 암호화 등 DRM 옵션 설정
- 자동 로그 기록 및 Slack 알림

## 설치 및 설정

1. Node.js 설치 (v14 이상 권장)
2. 프로젝트 의존성 설치:
   ```bash
   npm install
   ```
3. Cypress 설치:
   ```bash
   npx cypress install
   ```

## 테스트 실행

1. 조합 파일 생성:
   ```bash
   python cypress/e2e/generate_combinations.py
   ```

2. 테스트 생성:
   ```bash
   node cypress/e2e/generate_drm_tests.js
   node cypress/e2e/generate_fwm_tests.js
   ```

2. Cypress 테스트 실행:
   ```bash
   npx cypress run
   ```

## 프로젝트 구조

```
cypress/
├── e2e/
│   ├── generate_drm_tests.js           # DRM 테스트 케이스 생성 스크립트
│   ├── drm_auto_generated_tests.cy.js  # 자동 생성된 테스트 파일
│   ├── generate_fwm_tests.js           # DRM 테스트 케이스 생성 스크립트
│   ├── fwm_auto_generated_tests.cy.js  # 자동 생성된 테스트 파일
│   ├── generate_combinations.py        # 조합가능한 모든 작업생성 케이스 생성 스크립트
│   ├── drm_combinations.txt            # 스크립트로 생성된 DRM 조합 설정 파일
│   └── fwm_combinations.txt            # 스크립트로 생성된 FWM 조합 설정 파일
├── support/
│   └── commands.js              # 작업 생성에 필요한 코드 파일
└── logs/                        # 테스트 실행 로그 저장 디렉토리
```



## 로그 및 알림

- 테스트 실행 로그는 `cypress/logs` 디렉토리에 저장됩니다.
- 테스트 시작, 실패, 완료 시 Slack으로 알림이 전송됩니다.

## 환경 변수

다음 환경 변수를 설정해야 합니다:

- `SLACK_WEBHOOK_URL`: Slack 웹훅 URL
- `TEST_USER_EMAIL`: 테스트 사용자 이메일
- `TEST_USER_PASSWORD`: 테스트 사용자 비밀번호

## 참고사항

- 테스트 실행 전 `drm_combinations.txt` 파일을 확인하고 필요한 조합을 설정하세요.
- 테스트 실행 시 간헐적으로 요소를 못 찾는 에러가 발생 할 수 있습니다.
- 로그 파일은 자동으로 생성되며, 테스트 실행 시간이 파일명에 포함됩니다. 