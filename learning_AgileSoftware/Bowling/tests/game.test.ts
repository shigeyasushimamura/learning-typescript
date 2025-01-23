import { expect, describe, beforeEach, it } from "vitest";
import { Game } from "../src/domain/game";

describe("test frame", () => {
  let game: Game;

  beforeEach(() => {
    game = new Game();
  });

  it("testScoreNoThrows", () => {
    const score = game.getScore();
    expect(score).toEqual(0);
  });

  it("testFourThrowNoMark", () => {
    game.add(5);
    game.add(4);
    game.add(7);
    game.add(2);
    expect(game.getScore()).toEqual(18);
    expect(game.scoreForFrame(1)).toEqual(9);
    expect(game.scoreForFrame(2)).toEqual(18);
    expect(game.getCurrentFrame()).toEqual(3);
  });

  it("testSimpleSpare", () => {
    game.add(3);
    game.add(7);
    game.add(3);
    game.add(2);
    expect(game.scoreForFrame(1)).toEqual(13);
    expect(game.scoreForFrame(2)).toEqual(18);
    expect(game.getCurrentFrame()).toEqual(3);
    expect(game.getScore()).toEqual(18);
  });

  it("testSimpleStrike", () => {
    game.add(10);
    game.add(3);
    game.add(6);
    expect(game.scoreForFrame(1)).toEqual(19);
    expect(game.getScore()).toEqual(28);
    expect(game.getCurrentFrame()).toEqual(3);
  });

  it("testPerfectGame", () => {
    for (let i = 0; i < 12; i++) {
      game.add(10);
    }
    expect(game.getScore()).toEqual(300);
    expect(game.getCurrentFrame()).toEqual(11);
  });

  it("testEndOfArray", () => {
    for (let i = 0; i < 9; i++) {
      game.add(0);
      game.add(0);
    }
    game.add(2);
    game.add(8);
    game.add(10);
    expect(game.getScore()).toEqual(20);
    expect(game.getCurrentFrame()).toEqual(11);
  });

  it("testSampleGame", () => {
    game.add(1);
    game.add(4);
    game.add(4);
    game.add(5);
    game.add(6);
    game.add(4);
    game.add(5);
    game.add(5);
    game.add(10);
    game.add(0);
    game.add(1);
    game.add(7);
    game.add(3);
    game.add(6);
    game.add(4);
    game.add(10);
    game.add(2);
    game.add(8);
    game.add(6);
    expect(game.getScore()).toEqual(133);
  });

  it("testHeartBreak", () => {
    for (let i = 0; i < 11; i++) {
      game.add(10);
    }
    game.add(9);
    expect(game.getScore()).toEqual(299);
  });

  it("testTenthFrameSpare", () => {
    for (let i = 0; i < 9; i++) {
      game.add(10);
    }
    game.add(9);
    game.add(1);
    game.add(1);
    expect(game.getScore()).toEqual(270);
  });
});
