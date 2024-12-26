// Loggerインターフェース
export interface Logger {
  log(message: string): void;
}

// ConsoleLoggerクラス
export class ConsoleLogger implements Logger {
  log(message: string): void {
    console.log(`ConsoleLogger: ${message}`);
  }
}

// FileLoggerクラス
export class FileLogger implements Logger {
  log(message: string): void {
    console.log(`FileLogger: ${message}`);
  }
}

// LoggerFactoryクラス
export class LoggerFactory {
  static createLogger(type: "console" | "file"): Logger {
    switch (type) {
      case "console":
        return new ConsoleLogger();
      case "file":
        return new FileLogger();
      default:
        throw new Error("Type not found");
    }
  }
}
