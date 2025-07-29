// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


  // 새로운 테스트 실행 시 기존 로그 파일 내용 초기화
 
  let logFileName;
  // logfile의 이름을 테스트를 실행한 날짜로 지정 (YYYY-MM-dd_hh-mm-ss 형식)
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  
  const formattedDate = `${year}-${month}-${day}T${hours}_${minutes}_${seconds}`;
  logFileName = `./cypress/logs/cypress_log_${formattedDate}.txt`;

  // log 기록 함수 - 시간 포맷 동일하게 변경
  Cypress.Commands.add('writelog', (message) => {
    try {
      // 로그 메시지의 시간도 동일한 YYYY-MM-ddThh:mm:ss 형식으로 변경
      const currentTime = new Date();
      const logYear = currentTime.getFullYear();
      const logMonth = String(currentTime.getMonth() + 1).padStart(2, '0');
      const logDay = String(currentTime.getDate()).padStart(2, '0');
      const logHours = String(currentTime.getHours()).padStart(2, '0');
      const logMinutes = String(currentTime.getMinutes()).padStart(2, '0');
      const logSeconds = String(currentTime.getSeconds()).padStart(2, '0');
      
      const logTimeFormat = `${logYear}-${logMonth}-${logDay}_${logHours}:${logMinutes}:${logSeconds}`;
      const logMessage = `${logTimeFormat} ${message}\n`;
      
      // 로그 파일 쓰기 시도
      cy.writeFile(logFileName, logMessage, { 
        flag: 'a+',
        timeout: 30000 // 타임아웃 시간 증가
      }).then(() => {
        // 성공적으로 쓰여졌을 때 아무것도 하지 않음
      }).catch(() => {
        // 실패했을 때 콘솔에만 출력
        console.log(logMessage);
      });
    } catch (error) {
      // 예외 발생 시 콘솔에만 출력
      console.log(`[ERROR] ${message}`);
    }
  });

//사이트 login 함수. 쿠키 유지가 안되서 폐기
// Cypress.Commands.add('login', (username, password) => {
//   cy.session([username, password], () => {
//     cy.visit('SITE');
//     cy.get('#mui-2').type(username);
//     cy.get('#mui-3').type(`${password}{enter}`, { log: false });
//   });
// });

// 로그인 함수 추가
Cypress.Commands.add('login', (email = Cypress.env('LOGIN_EMAIL'), password = Cypress.env('LOGIN_PASSWORD')) => {
  cy.visit('https://qa-contentsecurity.doverunner.com/#ko');
  
  // 페이지 로딩 완료 검증
  cy.get('body').should('be.visible');
  
  // 이메일 입력
  cy.get('input[type="email"]')
    .should('be.visible')
    .should('not.be.disabled')
    .type(email, { delay: 50 })
    .should('have.value', email);

  // 비밀번호 입력
  cy.get('input[type="password"]')
    .should('be.visible')
    .should('not.be.disabled')
    .type(`${password}{enter}`, { delay: 50 });
    
  // 로그인 성공 검증
  cy.url().should('include', 'https://qa-contentsecurity.doverunner.com/#ko');
  cy.get('body').should('be.visible');
  cy.writelog('로그인 성공');
  cy.get('.MuiButton-outlined').click();
});

// 클릭 작업을 위한 안전한 공통 함수
Cypress.Commands.add('safeClick', function(selector, options = {}) {
  return cy.get(selector)
    .should('be.visible')
    .should('not.be.disabled')
    .then($elements => {
      if ($elements.length > 1) {
        return cy.wrap($elements.first()).click({ multiple: true, ...options });
      } else {
        return cy.wrap($elements).click(options);
      }
    });
});

// TNP 진입을 위한 공통 함수
Cypress.Commands.add('navigateToTNP', function() {
  return cy.then(() => {
    cy.safeClick('.side-bar-main > :nth-child(1) > :nth-child(2)');
    cy.url().should('include', 'tnp');
    cy.get('body').should('be.visible');
    cy.writelog('TNP 진입 성공');
  });
});

// 작업 생성 페이지 진입을 위한 공통 함수
Cypress.Commands.add('navigateToCreateTask', function() {
  return cy.then(() => {
    cy.get('body').should('be.visible');
    cy.safeClick('.sidebar-submenu > :nth-child(5)'); 
    cy.writelog('작업생성 페이지 진입 성공');
    cy.wait(1000); //사용자 정보 로드 대기
  });
});

// FWM 선택을 위한 공통 함수
Cypress.Commands.add('selectFWM', function() {
  return cy.then(() => {
    cy.safeClick('#container');
    cy.get('body').should('be.visible');
    cy.safeClick(':nth-child(3) > td > label > h3');
    cy.writelog('fwm 선택');
  });
});

Cypress.Commands.add('selectDRM', function() {
  return cy.then(() => {
    cy.safeClick('#container');
    cy.get('body').should('be.visible');
    cy.safeClick(':nth-child(2) > td > label > h3');
    cy.writelog('drm 선택');
  });
});

Cypress.Commands.add('selectDRM_FWM', function() {
  return cy.then(() => {
    cy.safeClick('#container');
    cy.get('body').should('be.visible');
    cy.safeClick(':nth-child(1) > td > label > h3');
    cy.writelog('drm+fwm 선택');
  });
});

// 작업 정보 입력을 위한 공통 함수
Cypress.Commands.add('inputTaskInfo', function(options) {
  const taskName = options.taskName;
  const cid = options.cid || 'test';
  const inputPath = options.inputPath || 'test/7min_sdr.mp4';
  const outputPath = taskName;

  return cy.then(() => {
    // 작업 생성 버튼 클릭
    cy.get('.align-right > .outlined_btn')
      .should('be.visible')
      .click();

    // 페이지 로드 대기
    cy.wait(2000);

    // 작업명 입력
    cy.get(':nth-child(1) > :nth-child(2) > :nth-child(1) > :nth-child(2) > input')
      .should('be.visible')
      .clear()
      .type(taskName, { delay: 50 });
    cy.writelog('작업명 입력');
    
    // CID 입력
    cy.get(':nth-child(1) > :nth-child(2) > :nth-child(2) > :nth-child(2) > input')
      .should('be.visible')
      .clear()
      .type(cid, { delay: 50 });
    cy.writelog('cid 입력');
    
    // 입력 스토리지 선택
    cy.get(':nth-child(4) > :nth-child(2) > .select-box > .css-yk16xz-control > .css-1hwfws3 > .css-1wa3eu0-placeholder')
      .should('be.visible')
      .click();
    cy.get('#react-select-3-option-0')
      .should('be.visible')
      .click();
    cy.writelog('입력 스토리지 선택');
    
    // 입력 파일 경로 입력
    cy.get(':nth-child(1) > :nth-child(2) > :nth-child(5) > :nth-child(2) > input')
      .should('be.visible')
      .clear()
      .type(inputPath, { delay: 50 });
    cy.writelog('입력 파일 경로 입력');
    
    // 출력 스토리지 선택
    cy.get(':nth-child(8) > :nth-child(2) > .select-box > .css-yk16xz-control > .css-1hwfws3')
      .should('be.visible')
      .click();
    cy.get('#react-select-4-option-2')
      .should('be.visible')
      .click();
    cy.writelog('출력 스토리지 선택');
    
    // 출력 경로 입력
    cy.get(':nth-child(9) > :nth-child(2) > .width325')
      .should('be.visible')
      .clear()
      .type(outputPath, { delay: 50 });
    cy.writelog('출력 경로 입력');
  });
});

// 비디오 설정 페이지 진입을 위한 공통 함수
Cypress.Commands.add('navigateToVideoSettings', function() {
  return cy.then(() => {
    cy.safeClick('.align-right > .outlined_btn');
    cy.get('body').should('be.visible');
    cy.writelog('비디오 설정으로 이동');
  });
});

// 스트리밍 포맷(CMAF) 설정을 위한 공통 함수
Cypress.Commands.add('selectCMAFFormat', function() {
  return cy.then(() => {
    //DASH 옵션 해제
    cy.get(':nth-child(2) > :nth-child(1) > label')
      .should('be.visible')
      .first()
      .click();
    //HLS 옵션 해제
    cy.get(':nth-child(2) > label')
      .should('be.visible')
      .first()
      .click();
    //CMAF 옵션 선택
    cy.get(':nth-child(3) > label')
      .should('be.visible')
      .first()
      .click();
    cy.writelog('스트리밍 포멧 : CMAF 선택');
  });
});

// 스트리밍 포맷(DASH) 설정을 위한 공통 함수
Cypress.Commands.add('selectDashFormat', function() {
  return cy.then(() => {
    //HLS 옵션 해제
    cy.get(':nth-child(2) > label')
      .should('be.visible')
      .first()
      .click();
    cy.writelog('스트리밍 포멧 : DASH 선택');
  });
});

// 스트리밍 포맷(HLS) 설정을 위한 공통 함수
Cypress.Commands.add('selectHLSFormat', function() {
  return cy.then(() => {
    //DASH 옵션 해제
    cy.get(':nth-child(1) > :nth-child(2) > :nth-child(1) > label')
      .should('be.visible')
      .first()
      .click();
    cy.writelog('스트리밍 포멧 : HLS 선택');
  });
});

// 출력 포맷 설정을 위한 공통 함수
Cypress.Commands.add('setOutputFormat', function(format) {
  return cy.then(() => {
    // 셀렉트 박스 요소를 찾고 클릭
    if (format === 'H265') {
      cy.get('.select-box.width160.css-2b097c-container .css-yk16xz-control .css-1hwfws3')
        .should('be.visible')
        .first()
        .click();
      cy.get('#react-select-6-option-1')
        .should('be.visible')
        .click();
    }
    cy.writelog(`출력 포맷 설정: ${format}`);
  });
});

// 비디오 설정 초기화를 위한 공통 함수
Cypress.Commands.add('resetVideoSettings', function() {
  return cy.then(() => {
    for(let i = 0; i < 5; i++) {
      cy.safeClick(':nth-child(1) > .align-left > .x-icon > .svg-inline--fa');
    }
    cy.writelog('출력 비디오 설정 초기화');
  });
});

// 단일 해상도 설정을 위한 공통 함수
Cypress.Commands.add('addResolution', function(resolution) {
  const height = resolution.height;
  const bitrate = resolution.bitrate;
  const name = resolution.name;

  return cy.then(() => {
    cy.safeClick('.messageTable > :nth-child(2) > :nth-child(2)');
    cy.get('tbody > :nth-child(2) > :nth-child(3) > input').clear().type(height);
    cy.get(':nth-child(5) > table > tbody > :nth-child(2) > td > input').clear().type(bitrate);
    cy.safeClick('.floatRight');
    cy.writelog(name + ' 추가');

  });
});

// 해상도 프로파일을 이용한 설정 함수
Cypress.Commands.add('configureResolutionsFromProfile', function(profileName) {
  return cy.then(() => {
    cy.resetVideoSettings();
    
    cy.fixture('resolutions.json').then(profiles => {
      const profile = profiles[profileName];
      if (!profile) {
        throw new Error('Resolution profile not found: ' + profileName);
      }

      profile.resolutions.forEach(resolution => {
        cy.addResolution(resolution);
      });
    });
  });
});

// 오디오/자막 설정 페이지 진입을 위한 공통 함수
Cypress.Commands.add('navigateToAudioSubtitleSettings', function() {
  return cy.then(() => {
    cy.safeClick('.align-right > .outlined_btn');
    cy.writelog('오디오, 자막 설정 페이지 진입');
  });
});

// 작업 동작 페이지 진입을 위한 공통 함수
Cypress.Commands.add('navigateToTaskOperation', function() {
  return cy.then(() => {
    cy.safeClick('.align-right > .outlined_btn');
    cy.writelog('작업 동작 페이지 진입');
  });
});

// 해상도 설정을 위한 공통 함수
Cypress.Commands.add('selectResolution', function(resolution) {
  return cy.then(() => {
    // 첫 번째 요소 클릭
    cy.safeClick('#container');
    
    // 두 번째 요소 클릭
    cy.safeClick(':nth-child(3) > td > label > h3');
    
    cy.writelog(`해상도 : ${resolution} 선택`);
  });
});


// 코덱 선택을 위한 공통 함수
Cypress.Commands.add('selectCodec', function(codec) {
  return cy.then(() => {
    cy.safeClick('.css-1hwfws3');
    if (codec === 'H265') {
      cy.safeClick('#react-select-6-option-1');
    } else {
      cy.safeClick('#react-select-6-option-0');
    }
    cy.writelog(`코덱 : ${codec} 선택`);
  });
});

// 작업 타입 선택을 위한 공통 함수
Cypress.Commands.add('selectTaskType', function(taskType) {
  return cy.then(() => {
    cy.safeClick('#container');
    cy.get('body').should('be.visible');
    cy.safeClick(':nth-child(3) > td > label > h3');
    cy.writelog(`작업 타입 : ${taskType} 선택`);
  });
});


// 작업 생성 완료를 위한 공통 함수
Cypress.Commands.add('completeTaskCreation', function(taskName, type) {
  return cy.then(() => {
    // if (type === 'DRM_FWM') {
    //   cy.get('.align-center > .primary_btn')
    //     .should('be.visible')
    //     .click();
    // } else {
    //   cy.get(':nth-child(4) > .primary_btn')
    //     .should('be.visible')
    //     .click();
    // }
    // cy.safeClick('#alert_btn');
    cy.writelog(`작업 생성 완료: ${taskName}`);
  });
});

Cypress.Commands.add('inputDRMTaskInfo', function(options) {
  const taskName = options.taskName;
  const cid = options.cid || 'test';
  const inputPath = options.inputPath || 'test/7min_sdr.mp4';
  const outputPath = taskName;

  return cy.then(() => {
    cy.get('.align-right > .outlined_btn')
      .should('be.visible')
      .click();
    
    // 작업명 입력
    cy.get(':nth-child(1) > :nth-child(2) > :nth-child(1) > :nth-child(2) > input')
      .should('be.visible')
      .clear()
      .type(taskName, { delay: 50 });
    cy.writelog('작업명 입력');
    
    // CID 입력
    cy.get(':nth-child(1) > :nth-child(2) > :nth-child(2) > :nth-child(2) > input')
      .should('be.visible')
      .clear()
      .type(cid)
      .should('have.value', cid);
    cy.writelog('cid 입력');
    
    // 입력 스토리지 선택
    cy.get(':nth-child(4) > :nth-child(2) > .select-box > .css-yk16xz-control > .css-1hwfws3 > .css-1wa3eu0-placeholder')
      .should('be.visible')
      .click();
    cy.get('#react-select-3-option-0')
      .should('be.visible')
      .click();
    cy.writelog('입력 스토리지 선택');
    
    // 입력 파일 경로 입력
    cy.get(':nth-child(1) > :nth-child(2) > :nth-child(5) > :nth-child(2) > input')
      .should('be.visible')
      .clear()
      .type(inputPath);
    cy.writelog('입력 파일 경로 입력');

    //추가 오디오파일 입력
    cy.get(':nth-child(6) > :nth-child(2) > .fwmInputTable > tbody > tr > td > .floatLeft').type('test/sample2.aac');
    cy.writelog('추가 오디오파일 입력');
    //추가 자막파일 입력
    cy.get(':nth-child(7) > :nth-child(2) > .fwmInputTable > tbody > tr > td > .floatLeft').type('test/h264_5min_sample.vtt');
    cy.writelog('추가 자막파일 입력');
    
    // 출력 스토리지 선택
    cy.get(':nth-child(8) > :nth-child(2) > .select-box > .css-yk16xz-control > .css-1hwfws3')
      .should('be.visible')
      .click();
    cy.get('#react-select-4-option-2')
      .should('be.visible')
      .click();
    cy.writelog('출력 스토리지 선택');
    
    // 출력 경로 입력
    cy.get(':nth-child(9) > :nth-child(2) > .width325')
      .should('be.visible')
      .clear()
      .type(outputPath, { delay: 50 });
    cy.writelog('출력 경로 입력');
  });
});

Cypress.Commands.add('aspectRatio', function(aspectRatio) {
  if (aspectRatio === true) {
    cy.wait(1000);
    cy.get('body').then($body => {
      const label = $body.find(':nth-child(4) > :nth-child(2) > .inline-block > label');
      if (label.length > 0) {
        cy.wrap(label)
          .should('be.visible')
          .click();
        cy.writelog('비율옵션 활성화');
      } else {
        // 요소를 찾지 못했을 때 로그를 남기지 않음
        cy.log('비율옵션 비활성화.');
      }
    });
  }
});

Cypress.Commands.add('navigateToDRMTaskOperation', function(type) {
  return cy.then(() => {
    // DASH 자막옵션
    if (type === 'DASH' || type === 'DASH_HLS') {
      const dashOptions = [':nth-child(1) > :nth-child(2) > .width200 > label', 
                         ':nth-child(1) > :nth-child(2) > :nth-child(2) > label',
                         ':nth-child(1) > :nth-child(2) > :nth-child(3) > label'];
      const randomDashIndex = Math.floor(Math.random() * dashOptions.length);
      cy.get(dashOptions[randomDashIndex])
        .should('be.visible')
        .click();
      cy.writelog(`DASH 자막 옵션 ${randomDashIndex + 1} 선택`);
    }

    // HLS 자막옵션
    if (type === 'HLS' || type === 'DASH_HLS') {
      const hlsOptions = [':nth-child(2) > :nth-child(2) > .width200 > label',
                         ':nth-child(2) > :nth-child(2) > :nth-child(2) > label',
                         ':nth-child(2) > :nth-child(2) > :nth-child(3) > label'];
      const randomHlsIndex = Math.floor(Math.random() * hlsOptions.length);
      cy.get(hlsOptions[randomHlsIndex])
        .should('be.visible')
        .click();
      cy.writelog(`HLS 자막 옵션 ${randomHlsIndex + 1} 선택`);
    }

    // CMAF 자막옵션
    if (type === 'CMAF') {
      const cmafOptions = [':nth-child(3) > :nth-child(2) > .width200 > label',
                          ':nth-child(3) > :nth-child(2) > .width130 > label'];
      const randomCmafIndex = Math.floor(Math.random() * cmafOptions.length);
      cy.get(cmafOptions[randomCmafIndex])
        .should('be.visible')
        .click();
      cy.writelog(`CMAF 자막 옵션 ${randomCmafIndex + 1} 선택`);
    }

     // 언어코드 선택
    cy.get('.css-1hwfws3')
      .should('be.visible')
      .first()
      .click();
    
      
    // type이 DRM_FWM일 때는 selectbox 변수명이 #react-select-7-option-1로 변경됨.
    if (type === 'DRM_FWM') {
      cy.get('#react-select-7-option-1')
        .should('be.visible')
        .click();
    } else {
      cy.get('#react-select-8-option-1')
        .should('be.visible')
        .click();
    }
    cy.writelog('언어코드 선택 완료');

    // 다음 단계로 이동
    cy.safeClick('.align-right > .outlined_btn');
    cy.writelog('작업 동작 페이지 진입');
  });
});


Cypress.Commands.add('completeDRMTaskCreation', function(options) {
  const {
    taskName,
    audioEncryption,
    multiKey,
    multiManifest,
    drmOff
  } = options;

  //오디오 트랙 암호화
  if (audioEncryption === false) {
    cy.get(':nth-child(2) > td > label')
      .should('be.visible')
      .click();
  } else {
    cy.writelog('오디오 트랙 암호화 활성화');
  }

  //멀티키
  if (multiKey === true) {
    cy.get(':nth-child(3) > td > label')
      .should('be.visible')
      .first()
      .click();
    
    cy.get('#max_sd_height')
      .should('be.visible')
      .clear()
      .type('480');
    cy.writelog('sd 최대 해상도 480p 설정');

    cy.get('#max_hd_height')
      .should('be.visible')
      .clear()
      .type('1080');
    cy.writelog('hd 최대 해상도 1080p 설정');

    cy.get('#max_uhd1_height')
      .should('be.visible')
      .clear()
      .type('2160');
    cy.writelog('uhd 최대 해상도 2160p 설정');
    cy.writelog('멀티키 활성화');
  }

  //멀티매니페스트
  if (multiManifest === true) {
    cy.get(':nth-child(7) > td > label')
      .should('be.visible')
      .click();
    cy.writelog('멀티매니페스트 활성화');
  }

  //drm 비활성화
  if (drmOff === true) {
    cy.get(':nth-child(2) > div > input')
      .should('be.visible')
      .clear()
      .type('5');
    cy.writelog('drm 비활성화 구간 5초 설정');
  }

  // 작업 생성 완료
  // cy.get('.align-center > .primary_btn')
  //   .should('be.visible')
  //   .click();
  // cy.safeClick('#alert_btn');
  cy.writelog(`작업 생성 완료: ${taskName}`);
});

// FWM 작업 생성 함수
Cypress.Commands.add('createFWMTask', (options) => {
  const {
    taskName,
    cid,
    inputCodec,
    resolutionProfile,
    streamingFormat,
    outputCodec,
    type
  } = options;

  // 입력 파일 코덱에 따른 입력파일 경로 설정
  const inputPath = inputCodec === 'H265' 
    ? 'test/h265_5min_sample.mp4'
    : 'test/h264_5min_sample.mp4';
  
  //TNP 페이지 이동
  cy.navigateToTNP();

  //작업 생성 페이지 이동
  cy.navigateToCreateTask();

  //작업 타입 선택
  if (type === 'DRM') {
    cy.selectDRM();
  } else if (type === 'FWM') {
    cy.selectFWM();
  } else if (type === 'DRM_FWM') {
    cy.selectFWM();
    cy.selectDRM_FWM();
  }

  //입력 파일 정보 입력
  cy.inputTaskInfo({
    taskName,
    cid,
    inputPath,
    outputPath: taskName
  });

  //비디오 설정 페이지 이동
  cy.navigateToVideoSettings();

  //스트리밍 포맷 선택
  if (streamingFormat === 'CMAF') {
    cy.selectCMAFFormat();
  } else if (streamingFormat === 'DASH') {
    cy.selectDashFormat();
  } else if (streamingFormat === 'HLS') {
    cy.selectHLSFormat();
  }

  //출력이 H265포맷일 경우
  if (outputCodec === 'H265') {
    cy.setOutputFormat('H265');
  }

  //해상도 프로파일 선택
  cy.configureResolutionsFromProfile(resolutionProfile);

  //오디오/자막 설정 페이지 이동
  cy.navigateToAudioSubtitleSettings();

  //작업 동작 페이지 이동
  cy.navigateToTaskOperation();

  //작업 생성 완료
  cy.completeTaskCreation(taskName, type);
});

//DRM 작업 생성 함수
Cypress.Commands.add('createDRMTask', (options) => {
  const {
    taskName,
    cid,
    inputCodec,
    aspectRatio,
    resolutionProfile,
    streamingFormat,
    outputCodec,
    type,
    audioEncryption,
    multiKey,
    multiManifest,
    drmOff
  } = options;

  // 입력 파일 코덱에 따른 입력파일 경로 설정
  const inputPath = inputCodec === 'H265' 
    ? 'test/h265_5min_sample.mp4'
    : inputCodec === 'MKV'
    ? 'test/h264_5min_sample.mkv'
    : inputCodec === 'PRORES'
    ? 'test/prores_sample.mov'
    : inputCodec === 'XDCAM'
    ? 'test/xdcam_sample.mxf'
    : 'test/h264_5min_sample.mp4';

  //TNP 페이지 이동
  cy.navigateToTNP();

  //작업 생성 페이지 이동
  cy.navigateToCreateTask();

  //작업 타입 선택
  if (type === 'DRM') {
    cy.selectDRM();
  } else if (type === 'FWM') {
    cy.selectFWM();
  } else if (type === 'DRM_FWM') {
    cy.selectFWM();
    cy.selectDRM_FWM();


  }
  //입력 파일 정보 입력
  cy.inputDRMTaskInfo({
    taskName,
    cid,
    inputPath,
    outputPath: taskName,
  });

  //비디오 설정 페이지 이동
  cy.navigateToVideoSettings();

  //비율옵션 선택
  cy.aspectRatio(aspectRatio);

  //스트리밍 포맷 선택
  if (streamingFormat === 'CMAF') {
    cy.selectCMAFFormat();
  } else if (streamingFormat === 'DASH') {
    cy.selectDashFormat();
  } else if (streamingFormat === 'HLS') {
    cy.selectHLSFormat();
  }

  //출력이 H265포맷일 경우
  if (outputCodec === 'H265') {
    cy.setOutputFormat('H265');
  }

  //해상도 프로파일 선택
  cy.configureResolutionsFromProfile(resolutionProfile);

  //오디오/자막 설정 페이지 이동
  cy.navigateToAudioSubtitleSettings();

  // DRM 작업 동작 페이지 이동
  cy.navigateToDRMTaskOperation(streamingFormat);

  // DRM 작업 생성 완료
  cy.completeDRMTaskCreation({
    taskName,
    audioEncryption,
    multiKey,
    multiManifest,
    drmOff
  });

});

// 테스트 실패 시 Slack 메시지 전송
Cypress.Commands.add('sendTestFailureMessage', (testTitle, error) => {
  const message = `❌ 테스트 실패\n` +
    `- 테스트 이름: ${testTitle}\n` +
    `- 오류 메시지: ${error.message}\n` +
    `- 스택 트레이스: ${error.stack}`;
  
  cy.task('sendSlackMessage', message);
});

// 테스트 종료 시 Slack 메시지 전송
Cypress.Commands.add('sendTestCompletionMessage', (stats) => {
  const message = `📊 테스트 결과:\n` +
    `- 총 테스트 수: ${stats.total}\n` +
    `- 성공: ${stats.passed}\n` +
    `- 실패: ${stats.failed}`;
  
  cy.task('sendSlackMessage', message);
});


