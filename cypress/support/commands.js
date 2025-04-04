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
    // 로그 메시지의 시간도 동일한 YYYY-MM-ddThh:mm:ss 형식으로 변경
    const currentTime = new Date();
    const logYear = currentTime.getFullYear();
    const logMonth = String(currentTime.getMonth() + 1).padStart(2, '0');
    const logDay = String(currentTime.getDate()).padStart(2, '0');
    const logHours = String(currentTime.getHours()).padStart(2, '0');
    const logMinutes = String(currentTime.getMinutes()).padStart(2, '0');
    const logSeconds = String(currentTime.getSeconds()).padStart(2, '0');
    
    const logTimeFormat = `${logYear}-${logMonth}-${logDay}_${logHours}:${logMinutes}:${logSeconds}`;
    cy.writeFile(logFileName, `${logTimeFormat} ${message}\n`, { flag: 'a+' });
  });

//사이트 login 함수. 쿠키 유지가 안되서 폐기
// Cypress.Commands.add('login', (username, password) => {
//   cy.session([username, password], () => {
//     cy.visit('https://login-sqa.pallycon.com/');
//     cy.get('#mui-2').type(username);
//     cy.get('#mui-3').type(`${password}{enter}`, { log: false });
//   });
// });

// 로그인 함수 추가
Cypress.Commands.add('login', (email, password) => {
  cy.visit('https://qa-contentsecurity.doverunner.com/#ko');
  
  // 페이지 로딩 완료 검증
  cy.get('body').should('be.visible');
  cy.get('input[type="email"]')
    .should('be.visible')
    .type(email)
    .should('have.value', email);

  cy.get('input[type="password"]')
    .should('be.visible')
    .type(`${password}{enter}`);
    
  // 로그인 성공 검증
  cy.url().should('include', 'qa-contentsecurity.doverunner.com');
  cy.get('body').should('be.visible');
  cy.writelog('로그인 성공');
});

// 재시도 로직을 위한 공통 함수
Cypress.Commands.add('retryOperation', function(operation, operationName, maxAttempts = 3) {
  let attempts = 0;
  
  function retry() {
    attempts++;
    
    return cy.then(() => {
      return operation().then(() => {
        if (attempts > 1) {
          cy.writelog(`[재시도 성공] ${operationName} - ${attempts}번째 시도에서 성공`);
        } else {
          cy.writelog(`[성공] ${operationName}`);
        }
      }).catch((error) => {
        cy.writelog(`[재시도 ${attempts}/${maxAttempts}] ${operationName} 실패: ${error.message}`);
        
        if (attempts < maxAttempts) {
          cy.wait(1000); // 재시도 전 1초 대기
          return retry();
        } else {
          cy.writelog(`[최종 실패] ${operationName} - 최대 재시도 횟수(${maxAttempts}회) 초과`);
          throw error;
        }
      });
    });
  }
  
  return retry();
});

// 클릭 작업을 위한 안전한 공통 함수
Cypress.Commands.add('safeClick', function(selector, options = {}) {
  return cy.get(selector, { timeout: 5000 })
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
    cy.safeClick('.sidebar-submenu > :nth-child(5)');
    cy.get('body').should('be.visible');
    cy.writelog('작업생성 페이지 진입 성공');
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

// 작업 정보 입력을 위한 공통 함수
Cypress.Commands.add('inputTaskInfo', function(options) {
  const taskName = options.taskName;
  const cid = options.cid || 'test';
  const inputPath = options.inputPath || 'test/7min_sdr.mp4';
  const outputPath = taskName;

  return cy.then(() => {
    cy.safeClick('.align-right > .outlined_btn');
    cy.get('body').should('be.visible');
    
    // 작업명 입력
    cy.get(':nth-child(1) > :nth-child(2) > :nth-child(1) > :nth-child(2) > input')
      .clear()
      .wait(500)
      .type(taskName)
      .wait(500)
      .should('have.value', taskName);
    
    // CID 입력
    cy.get(':nth-child(1) > :nth-child(2) > :nth-child(2) > :nth-child(2) > input')
      .type(cid);
    cy.writelog('cid 입력');
    
    // 입력 스토리지 선택
    cy.safeClick(':nth-child(4) > :nth-child(2) > .select-box > .css-yk16xz-control > .css-1hwfws3 > .css-1wa3eu0-placeholder');
    cy.safeClick('#react-select-3-option-0');
    cy.writelog('입력 스토리지 선택');
    
    // 입력 파일 경로 입력
    cy.get(':nth-child(1) > :nth-child(2) > :nth-child(5) > :nth-child(2) > input')
      .type(inputPath);
    cy.writelog('입력 파일 경로 입력');
    
    // 출력 스토리지 선택
    cy.safeClick(':nth-child(8) > :nth-child(2) > .select-box > .css-yk16xz-control > .css-1hwfws3');
    cy.safeClick('#react-select-4-option-0');
    cy.writelog('출력 스토리지 선택');
    
    // 출력 경로 입력
    cy.get(':nth-child(9) > :nth-child(2) > .width325')
      .click()
      .type(outputPath);
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
    cy.safeClick(':nth-child(2) > :nth-child(1) > label');
    cy.safeClick(':nth-child(2) > label');
    cy.safeClick(':nth-child(3) > label');
    cy.writelog('스트리밍 포멧 : CMAF 선택');
  });
});

// 스트리밍 포맷(DASH) 설정을 위한 공통 함수
Cypress.Commands.add('selectDashFormat', function() {
  return cy.then(() => {
    cy.safeClick(':nth-child(2) > :nth-child(1) > label');
    cy.safeClick(':nth-child(2) > label');
    cy.writelog('스트리밍 포멧 : DASH 선택');
  });
});

// 스트리밍 포맷(HLS) 설정을 위한 공통 함수
Cypress.Commands.add('selectHLSFormat', function() {
  return cy.then(() => {
    cy.safeClick(':nth-child(2) > :nth-child(1) > label');
    cy.safeClick(':nth-child(3) > label');
    cy.writelog('스트리밍 포멧 : HLS 선택');
  });
});

// 출력 포맷 설정을 위한 공통 함수
Cypress.Commands.add('setOutputFormat', function(format) {
  return cy.then(() => {
    cy.safeClick('.css-1hwfws3');
    if (format === 'H265') {
      cy.safeClick('#react-select-6-option-1');
    } else {
      cy.safeClick('#react-select-6-option-0');
    }
    cy.writelog(`출력 포맷 설정: ${format}`);
  });
});

import { resolutionProfiles } from '../fixtures/resolutions';

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

// 비디오 설정 초기화를 위한 공통 함수
Cypress.Commands.add('resetVideoSettings', function() {
  return cy.then(() => {
    for(let i = 0; i < 5; i++) {
      cy.safeClick(':nth-child(1) > .align-left > .x-icon > .svg-inline--fa');
    }
    cy.writelog('출력 비디오 설정 초기화');
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

Cypress.Commands.add('selectResolution', function(resolution) {
  cy.retryOperation(function() {
    return cy.then(function() {
      cy.get('#container').click({ multiple: true });
      cy.get(':nth-child(3) > td > label > h3').click({ multiple: true });
      cy.writelog(`해상도 : ${resolution} 선택`);
    });
  }, '해상도 설정');
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
Cypress.Commands.add('completeTaskCreation', function(taskName) {
  return cy.then(() => {
    cy.safeClick(':nth-child(4) > .primary_btn');
    cy.safeClick('#alert_btn');
    cy.writelog(`작업 생성 완료: ${taskName}`);
  });
});

// FWM 작업 생성 함수
Cypress.Commands.add('createFWMTask', function(options) {
  const inputPath = options.inputCodec === 'H265' 
    ? 'test/h265_5min_sample.mp4'
    : 'test/h264_5min_sample.mp4';

  return cy.then(() => {
    cy.navigateToTNP();
    cy.navigateToCreateTask();
    cy.selectFWM();
    cy.inputTaskInfo({
      ...options,
      inputPath: inputPath
    });
    cy.navigateToVideoSettings();

    switch(options.streamingFormat) {
      case 'DASH':
        cy.selectDashFormat();
        break;
      case 'HLS':
        cy.selectHLSFormat();
        break;
      case 'CMAF':
        cy.selectCMAFFormat();
        break;
    }

    if (options.outputCodec === 'H265') {
      cy.setOutputFormat('H265');
    }

    cy.configureResolutionsFromProfile(options.resolutionProfile || 'UHD_FHD_HD');
    cy.navigateToAudioSubtitleSettings();
    cy.navigateToTaskOperation();
    cy.completeTaskCreation(options.taskName);
  });
});

// 해상도 설정을 위한 공통 함수

