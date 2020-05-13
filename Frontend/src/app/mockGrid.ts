export interface node {
  row: number;
  col: number;
  isVisited: boolean;
  isStart: boolean;
  isEnd: boolean;
  isPath: boolean;
  isWeighted: boolean;
  isBlocked: boolean;
  distance: number;
}

export const data = [];
for (let row = 0; row < 20; row++) {
  const currentRow = [];
  for (let col = 0; col < 50; col++) {
    let temp: node = {
      row: row,
      col: col,
      isVisited: false,
      isStart: false,
      isEnd: false,
      isPath: false,
      isWeighted: false,
      isBlocked: false,
      distance: Infinity,
    };
    currentRow.push(temp);
    // continue;
  }
  data.push(currentRow);
}

export interface node {}
