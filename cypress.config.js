module.exports ={
  e2e: {
    experimentalStudio: true,
    watchForFileChanges: false,
    numTestsKeptInMemory: 0,
    
    setupNodeEvents(on, config) {
      on('task', {
        generateLogFileName() {
          const now = new Date();
          // YYYY-MM-dd_hh-mm-ss 형식으로 날짜 포맷팅
          const year = now.getFullYear();
          const month = String(now.getMonth() + 1).padStart(2, '0');
          const day = String(now.getDate()).padStart(2, '0');
          const hours = String(now.getHours()).padStart(2, '0');
          const minutes = String(now.getMinutes()).padStart(2, '0');
          const seconds = String(now.getSeconds()).padStart(2, '0');
          
          const formattedDate = `${year}-${month}-${day}_${hours}-${minutes}-${seconds}`;
          const logFileName = `cypress_log_${formattedDate}.txt`;
          return logFileName; // 로그 파일 이름 반환
        },
      });
   
    },
  },
};