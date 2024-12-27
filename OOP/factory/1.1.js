"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoggerFactory = exports.FileLogger = exports.ConsoleLogger = void 0;
// ConsoleLoggerクラス
class ConsoleLogger {
    log(message) {
        console.log(`ConsoleLogger: ${message}`);
    }
}
exports.ConsoleLogger = ConsoleLogger;
// FileLoggerクラス
class FileLogger {
    log(message) {
        console.log(`FileLogger: ${message}`);
    }
}
exports.FileLogger = FileLogger;
// LoggerFactoryクラス
class LoggerFactory {
    static createLogger(type) {
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
exports.LoggerFactory = LoggerFactory;
