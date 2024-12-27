var WorkRecord = /** @class */ (function () {
    function WorkRecord(date, isHoliday, clockIn, clockOut) {
    }
    return WorkRecord;
}());
var OvertimePayCalculator = /** @class */ (function () {
    function OvertimePayCalculator() {
    }
    OvertimePayCalculator.prototype.calcOvertimePay = function (overtimeHours, grade) {
        return overtimeHours * grade.hourlyRate();
    };
    return OvertimePayCalculator;
}());
var Grade = /** @class */ (function () {
    function Grade() {
    }
    Grade.prototype.hourlyRate = function () {
        return 1;
    };
    return Grade;
}());
