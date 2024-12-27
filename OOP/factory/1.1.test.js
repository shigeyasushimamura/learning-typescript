"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _1_1_1 = require("./1.1");
const _1_1_2 = require("./1.1");
describe("LoggerFactory", () => {
    it("should create a ConsoleLogger", () => {
        const logger = _1_1_1.LoggerFactory.createLogger("console");
        expect(logger).toBeInstanceOf(_1_1_2.ConsoleLogger);
    });
    it("should create a FileLogger", () => {
        const logger = _1_1_1.LoggerFactory.createLogger("file");
        expect(logger).toBeInstanceOf(_1_1_2.FileLogger);
    });
});
