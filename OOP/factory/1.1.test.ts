import { LoggerFactory } from "./1.1";
import { ConsoleLogger, FileLogger } from "./1.1";

describe("LoggerFactory", () => {
  it("should create a ConsoleLogger", () => {
    const logger = LoggerFactory.createLogger("console");
    expect(logger).toBeInstanceOf(ConsoleLogger);
  });

  it("should create a FileLogger", () => {
    const logger = LoggerFactory.createLogger("file");
    expect(logger).toBeInstanceOf(FileLogger);
  });
});
