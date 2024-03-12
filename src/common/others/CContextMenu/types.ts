export interface IContextPosition {
  x: number;
  y: number;
}

export interface ICContextMenuRef {
  updatePos: (x: number, y: number) => void;
  clearPos: () => void;
}
