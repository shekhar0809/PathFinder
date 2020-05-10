export interface node {
  row: number;
  col: number;
  isVisited: boolean;
  isStart: boolean;
  isEnd: boolean;
  isPath: boolean;
  isWeighted: boolean;
  isBlocked: boolean;
}

export const grid = [];
for (let row = 0; row < 20; row++) {
  const currentRow = [];
  for (let col = 0; col < 50; col++) {
    currentRow.push(createNode(col,row));
  }
  grid.push(currentRow);
}
const createNode=(col,row)=>{
  return{
    col,
    row,
    isStart: row === START_NODE_ROW && col === START_NODE_COL,
    isFinish: row === FINISH_NODE_ROW && col === FINISH_NODE_COL,
    distance: Infinity,
    isVisited: false,
    previousNode: null,
  }
}

export interface node {}
