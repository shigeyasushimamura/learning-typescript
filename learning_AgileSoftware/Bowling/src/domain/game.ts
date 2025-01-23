export class Game {
  private ball: number;
  private firstThrow: number;
  private secondThrow: number;

  private itsThrows: number[];
  private itsCurrentThrow: number;
  private itsCurrentFrame = 1;
  private firstThrowInFrame = true;

  constructor(private itsScore: number = 0) {
    this.itsThrows = new Array<number>(21);
    this.itsCurrentThrow = 0;
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
      this.firstThrow = this.itsThrows[this.ball++];
      if (this.firstThrow == 10) {
        score += 10 + this.itsThrows[this.ball] + this.itsThrows[this.ball + 1];
      } else {
        score += this.handleSecondThrow();
      }
    }

    return score;
  }

  private handleSecondThrow(): number {
    let score = 0;
    this.secondThrow = this.itsThrows[this.ball++];

    const frameScore = this.firstThrow + this.secondThrow;
    if (frameScore == 10) {
      score += frameScore + this.itsThrows[this.ball];
    } else {
      score += frameScore;
    }
    return score;
  }

  public getCurrentFrame() {
    return this.itsCurrentFrame;
  }
}
