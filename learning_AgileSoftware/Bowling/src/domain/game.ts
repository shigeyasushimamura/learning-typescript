import { Scorer } from "./score";

export class Game {
  private itsCurrentFrame = 1;
  private firstThrowInFrame = true;
  private scorer = new Scorer();

  constructor() {}

  public getScore(): number {
    return this.scoreForFrame(this.itsCurrentFrame - 1);
  }

  public add(pins: number): void {
    this.scorer.addThrow(pins);
    this.adjustCurrentFrame(pins);
  }

  public scoreForFrame(theFrame: number): number {
    return this.scorer.scoreForFrame(theFrame);
  }

  private adjustCurrentFrame(pins: number) {
    if (this.lastBallInFrame(pins)) {
      this.advanceFrame();
      this.firstThrowInFrame = true;
    } else {
      this.firstThrowInFrame = false;
    }
  }

  private lastBallInFrame(pins: number): boolean {
    return this.strike(pins) || !this.firstThrowInFrame;
  }

  private strike(pins: number): boolean {
    return this.firstThrowInFrame && pins == 10;
  }

  private advanceFrame(): void {
    this.itsCurrentFrame = Math.min(11, this.itsCurrentFrame + 1);
  }

  public getCurrentFrame() {
    return this.itsCurrentFrame;
  }
}
