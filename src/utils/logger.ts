const logger = {
    info: (message: string) => {
      console.log(`[INFO] ${new Date().toISOString()} - ${message}`);
    },
    error: (message: string, error?: Error) => {
      console.error(`[ERROR] ${new Date().toISOString()} - ${message}`, error || '');
    },
    debug: (message: string) => {
      if (process.env.DEBUG) {
        console.debug(`[DEBUG] ${new Date().toISOString()} - ${message}`);
      }
    }
  };  

  export default logger;