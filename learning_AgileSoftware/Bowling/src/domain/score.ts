export class Scorer {
  constructor(
    private ball: number = 0,
    private itsThrows: number[] = new Array<number>(21),
    private itsCurrentThrow: number = 0
  ) {}

  public addThrow(pins: number): void {
    this.itsThrows[this.itsCurrentThrow++] = pins;
  }

  public scoreForFrame(frame: number): number {
    let score = 0;
    this.ball = 0;

    for (let i = 0; i < frame; i++) {
      if (this.strike()) {
        score += 10 + this.nextTwoBallsForStrike();
        this.ball++;
      } else if (this.spare()) {
        score += 10 + this.nextBallForSpare();
        this.ball += 2;
      } else {
        score += this.twoBallInFrame();
        this.ball += 2;
      }
    }

    return score;
  }

  private strike(): boolean {
    return this.itsThrows[this.ball] == 10;
  }

  private nextTwoBallsForStrike(): number {
    return this.itsThrows[this.ball + 1] + this.itsThrows[this.ball + 2];
  }

  private spare(): boolean {
    return this.itsThrows[this.ball] + this.itsThrows[this.ball + 1] == 10;
  }

  private nextBallForSpare(): number {
    return this.itsThrows[this.ball + 2];
  }

  private twoBallInFrame(): number {
    return this.itsThrows[this.ball] + this.itsThrows[this.ball + 1];
  }
}
