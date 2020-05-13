import { node } from 'src/app/mockGrid';

export function dfs(grid,startNode,endNode){
  if (!startNode) {
    alert('you need to have a start Node');
    return -1;
  }

  if (!endNode) {
    alert('you need to have a end Node');
    return -1;
  }

  const visitedNodesInOrder = [];
  visitedNodesInOrder.push(startNode)
  while(startNode.row == endNode.row || startNode.col == endNode.col){
    if(endNode.row-startNode.row>0){
    const closestNode = data[startNode.row + 1][startNode.col];
      visitedNodesInOrder.push(closestNode);
    }
   if(endNode.row-startNode.row<0){
      const closestNode = data[startNode.row - 1][startNode.col];
      visitedNodesInOrder.push(closestNode);
    }
    if(endNode.col-startNode.col>0){
      const closestNode=data[startNode][endNode.col + 1];
      visitedNodesInOrder.push(closestNode);
    }
    if(endNode.col-startNode.col<0){
      const closestNode=data[startNode][endNode.col-1];
      visitedNodesInOrder.push(closestNode);
    }
  }
  animateDFS(visitedNodesInOrder);
}


function animateDFS(visitedNodesInOrder: node[]) {
  console.log('animate');
  for (let i = 0; i < visitedNodesInOrder.length; i++) {
    setTimeout(() => {
      const node = visitedNodesInOrder[i];
      node.isVisited = true;
      console.log(node);
    }, 1 * i);
  }
}
