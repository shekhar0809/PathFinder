import { node } from 'src/app/mockGrid';

export function dda(data,startNode,endNode){
  if (!startNode) {
    alert('you need to have a start Node');
    return -1;
  }

  if (!endNode) {
    alert('you need to have a end Node');
    return -1;
  }

  const visitedNodesInOrder = [];
  visitedNodesInOrder.push(startNode);
  while(startNode.row != endNode.row){
    if(endNode.row-startNode.row>0){
    startNode = data[startNode.row + 1][startNode.col];
      visitedNodesInOrder.push(startNode);
    }
   if(endNode.row-startNode.row<0){
      startNode = data[startNode.row - 1][startNode.col];
      visitedNodesInOrder.push(startNode);
    }
  }

  while(startNode.col != endNode.col){
    if(endNode.col-startNode.col>0){
      startNode = data[startNode.row][startNode.col + 1];
      visitedNodesInOrder.push(startNode);
    }
    if(endNode.col-startNode.col<0){
      startNode = data[startNode.row][startNode.col-1];
      visitedNodesInOrder.push(startNode);
    }
  }
  animateDDA(visitedNodesInOrder);
}


function animateDDA(visitedNodesInOrder: node[]) {
  console.log('animate');
  for (let i = 0; i < visitedNodesInOrder.length; i++) {
    setTimeout(() => {
      const node = visitedNodesInOrder[i];
      node.isVisited = true;
      console.log(node);
    }, 1 * i);
  }
}
