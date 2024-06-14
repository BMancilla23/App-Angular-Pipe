export enum Color {
  red,
  black,
  blue,
  green,
}

export interface Hero {
  id: number;
  name: string;
  canFly: boolean;
  color: Color;
}
