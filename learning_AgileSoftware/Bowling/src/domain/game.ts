export class Game {
  private ball: number;

  private itsThrows: number[];
  private itsCurrentThrow: number;
  private itsCurrentFrame = 1;
  private firstThrowInFrame = true;

  constructor(private itsScore: number = 0) {
    this.itsThrows = new Array<number>(21);
    this.itsCurrentThrow = 0;
    this.ball = 0;
  }

  public getScore(): number {
    return this.scoreForFrame(this.getCurrentFrame() - 1);
  }

  public add(pins: number): void {
    this.itsScore += pins;
    this.itsThrows[this.itsCurrentThrow++] = pins;
    this.adjustCurrentFrame(pins);
  }

  private adjustCurrentFrame(pins: number) {
    if (this.firstThrowInFrame) {
      if (pins == 10) {
        this.itsCurrentFrame++;
      } else {
        this.firstThrowInFrame = false;
      }
    } else {
      this.firstThrowInFrame = true;
      this.itsCurrentFrame++;
    }
    this.itsCurrentFrame = Math.min(11, this.itsCurrentFrame);
  }

  public scoreForFrame(frame: number): number {
    let score = 0;
    this.ball = 0;

    for (let i = 0; i < frame; i++) {
      if (this.strike()) {
        this.ball++;
        score += 10 + this.nextTwoBalls();
      } else {
        score += this.handleSecondThrow();
      }
    }

    return score;
  }

  private handleSecondThrow(): number {
    let score = 0;

    if (this.spare()) {
      this.ball += 2;
      score += 10 + this.nextBall();
    } else {
      score += this.twoBallInFrame();
      this.ball += 2;
    }

    return score;
  }

  public getCurrentFrame() {
    return this.itsCurrentFrame;
  }

  private strike(): boolean {
    return this.itsThrows[this.ball] == 10;
  }

  private nextTwoBalls(): number {
    return this.itsThrows[this.ball] + this.itsThrows[this.ball + 1];
  }

  private spare(): boolean {
    return this.itsThrows[this.ball] + this.itsThrows[this.ball + 1] == 10;
  }

  private nextBall(): number {
    return this.itsThrows[this.ball];
  }

  private twoBallInFrame(): number {
    return this.itsThrows[this.ball] + this.itsThrows[this.ball + 1];
  }
}
