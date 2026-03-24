import type { Die } from "../types";

export const DICE_COUNT = 10;
 
export function randomFace(): number {
  return Math.ceil(Math.random() * 6);
}

function createNewDie(id: number): Die {
  return {
    id: id,
    face: randomFace(),
    held: false,
  }
}
 
export function newDice(): Die[] {
  return new Array(DICE_COUNT)
    .fill(0)
    .map((_, i) => createNewDie(i));
}
 
export const PIPS: Record<number, [number, number][]> = {
  1: [[50, 50]],
  2: [[25, 25], [75, 75]],
  3: [[25, 25], [50, 50], [75, 75]],
  4: [[25, 25], [75, 25], [25, 75], [75, 75]],
  5: [[25, 25], [75, 25], [50, 50], [25, 75], [75, 75]],
  6: [[25, 22], [75, 22], [25, 50], [75, 50], [25, 78], [75, 78]],
};