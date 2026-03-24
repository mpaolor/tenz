export type { Die };
export type { DiceFace };
 
interface Die {
  id: number;
  face: number;
  held: boolean;
}
 
type DiceFace = 1 | 2 | 3 | 4 | 5 | 6;