module.exports ={
  e2e: {
    experimentalStudio: true,
    setupNodeEvents(on, config) {
      on('task', {
        generateLogFileName() {
          const logFileName = `log_${Date.now()}.txt`;
          return logFileName; // 로그 파일 이름 반환
        },
      });
   
    },
  },
};