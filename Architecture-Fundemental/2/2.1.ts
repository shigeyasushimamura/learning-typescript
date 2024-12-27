class WorkRecord {
  private _date: Date;
  private _isHoliday: boolean;
  private _clockIn: Date;
  private _clockOut: Date;
  constructor(date: Date, isHoliday: boolean, clockIn: Date, clockOut: Date) {
    this._date = date;
    this._isHoliday = isHoliday;
    this._clockIn = clockIn;
    this._clockOut = clockOut;
  }
  get isHoliday(): boolean {
    return this._isHoliday;
  }

  public calcOvertimeHours(): number {
    return 100;
  }
}

class OvertimePayCalculator {
  private factory: OvertimePayPolicyFactory = new OvertimePayPolicyFactory();
  private workRecord: WorkRecord = new WorkRecord(
    new Date(),
    true,
    new Date(),
    new Date()
  );
  public calcOvertimePay(overtimeHours: number, grade: Grade) {
    // return overtimeHours * grade.hourlyRate();
    const policy = this.factory.of(this.workRecord.isHoliday, grade);
    return (
      this.workRecord.calcOvertimeHours() *
      grade.hourlyRate() *
      policy.paymentRate()
    );
  }
}

// Grade

interface Grade {
  hourlyRate(): number;
}

class Regular implements Grade {
  public hourlyRate(): number {
    return 1;
  }
}

class Manager implements Grade {
  public hourlyRate(): number {
    return 2;
  }
}

// Policy

interface OvertimePayPolicy {
  paymentRate(): number;
}

class RegularGradeOvertimePayPolicy implements OvertimePayPolicy {
  private isHoliday: boolean;

  constructor(isHoliday: boolean) {
    this.isHoliday = isHoliday;
  }

  public paymentRate(): number {
    return this.isHoliday ? 1.2 : 1;
  }
}

class ManagerGradeOvertimePayPolicy implements OvertimePayPolicy {
  private isHoliday: boolean;

  constructor(isHoliday: boolean) {
    this.isHoliday = isHoliday;
  }

  public paymentRate(): number {
    return this.isHoliday ? 1 : 0;
  }
}

// Factory
class OvertimePayPolicyFactory {
  public of(isHoliday: boolean, grade: Grade): OvertimePayPolicy | never {
    if (grade instanceof Regular) {
      return new RegularGradeOvertimePayPolicy(isHoliday);
    }
    if (grade instanceof Manager) {
      return new ManagerGradeOvertimePayPolicy(isHoliday);
    }

    throw new Error(`Unsupported grade: ${grade}`);
  }
}
