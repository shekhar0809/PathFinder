export function dijsktra(grid, startNode, endNode){
  if(!startNode || !endNode || startNode ===endNode){
    return false;
  }
  const visitedNodesInOrder=[];
  startNode.distance=0;
  const unvisitedNodes = getAllNodes(grid);
  while(!!unvisitedNodes.length){
    sortNodeByDistance(unvisitedNodes);
    const closestNode = unvisitedNodes.shift();
    closestNode.isVisited == true;
    visitedNodesInOrder.push(closestNode);
    if(closestNode===endNode){
      return 'success!';
    }
    updateNeighbors(closestNode, grid);
  }
}


function sortNodeByDistance(unvisitedNodes){
  unvisitedNodes.sort((nodeA,nodeB)=>nodeA.distance - nodeB.distance);
}

function getAllNodes(grid) {
  const nodes= [];
  for(let row of grid){
    for(let node of row){
      nodes.push(node);
    }
  }
  return nodes;
}

function updateNeighbors(node,grid){
  const unvisitedNeighbors = getUnvisitedNeighbors(node,grid);
  for(let neighbor of unvisitedNeighbors) {
    neighbor.distance = node.distance + 1;
    neighbor.previousNode = node;
  }
}

function getUnvisitedNeighbors(node,grid){
  const neighbors =[];
  const{row,col}=node;
  if (row > 0) neighbors.push(grid[row - 1][col]);
  if (row < grid.length - 1) neighbors.push(grid[row + 1][col]);
  if (col > 0) neighbors.push(grid[row][col - 1]);
  if (col < grid[0].length - 1) neighbors.push(grid[row][col + 1]);
  return neighbors.filter(neighbor => !neighbor.isVisited);
}
