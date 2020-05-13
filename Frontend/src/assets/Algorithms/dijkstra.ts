import { node } from 'src/app/mockGrid';

export function dijkstra(data, startNode, endNode) {
  if (!startNode) {
    alert('you need to have a start Node');
    return -1;
  }

  if (!endNode) {
    alert('you need to have a end Node');
    return -1;
  }

  const visitedNodesInOrder = [];
  startNode.distance = 0;
  const unvisitedNodes = getAllNodes(data);
  while (unvisitedNodes.length) {
    sortNodesByDistance(unvisitedNodes);
    const closestNode = unvisitedNodes.shift();
    // console.log(closestNode);
    visitedNodesInOrder.push(closestNode);
    if (closestNode === endNode) {
      // console.log(visitedNodesInOrder);
      animateDijkstra(visitedNodesInOrder);
      break;
    }
    updateUnvisitedNeighbors(closestNode, data);
  }
}

function animateDijkstra(visitedNodesInOrder: node[]) {
  console.log('animate');
  for (let i = 0; i < visitedNodesInOrder.length; i++) {
    setTimeout(() => {
      const node = visitedNodesInOrder[i];
      node.isVisited = true;
      console.log(node);
    }, 10 * i);
  }
}
function sortNodesByDistance(unvisitedNodes) {
  unvisitedNodes.sort((nodeA, nodeB) => nodeA.distance - nodeB.distance);
}

function updateUnvisitedNeighbors(node, data) {
  const unvisitedNeighbors = getUnvisitedNeighbors(node, data);
  for (const neighbor of unvisitedNeighbors) {
    neighbor.distance = node.distance + 1;
    neighbor.previousNode = node;
  }
}

function getAllNodes(data) {
  const nodes = [];
  for (const row of data) {
    for (const node of row) {
      nodes.push(node);
    }
  }
  return nodes;
}

function getUnvisitedNeighbors(node, data) {
  const neighbors = [];
  const { col, row } = node;
  if (row > 0) neighbors.push(data[row - 1][col]);
  if (row < data.length - 1) neighbors.push(data[row + 1][col]);
  if (col > 0) neighbors.push(data[row][col - 1]);
  if (col < data[0].length - 1) neighbors.push(data[row][col + 1]);
  return neighbors.filter((neighbor) => !neighbor.isVisited);
}
