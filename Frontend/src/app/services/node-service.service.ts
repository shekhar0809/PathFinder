import { Injectable } from '@angular/core';
import { node, data } from '../mockGrid';

@Injectable({
  providedIn: 'root',
})
export class NodeServiceService {
  constructor() {}

  startNode: node = undefined;
  endNode: node = undefined;
  grid: node[] = data;

  GetNode(e: node) {
    console.log(e);
    const coordinates = [e.row, e.col];
    console.log(coordinates);
    let id = `Node-r${e.row}-c${e.col}`;
    console.log(id);
    document.getElementById(id.toString()).classList.toggle('change-color');
  }

  start(e: node) {
    if (this.startNode) this.startNode.isStart = false;

    e.isStart = true;
    this.startNode = e;
    this.newGrid();
  }

  end(e: node) {
    if (this.endNode) this.endNode.isEnd = false;

    e.isEnd = true;
    this.endNode = e;
    this.newGrid();
  }

  getGrid() {
    return this.grid;
  }

  getStartNode() {
    return this.startNode;
  }

  getEndNode() {
    return this.endNode;
  }

  getNodeID(e: node) {
    return `Node-r${e.row}-c${e.col}`;
  }

  newGrid() {
    const grid = this.grid;
    for (let row of grid) {
      for (let node of row) {
        node.isPath = false;
        node.isVisited = false;
        node.distance = Infinity;
      }
    }
  }

  resetGrid() {
    this.startNode = undefined;
    this.endNode = undefined;
    const grid = this.grid;
    for (let row of grid) {
      for (let node of row) {
        node.isVisited = false;
        node.isStart = false;
        node.isEnd = false;
        node.isPath = false;
        node.isWeighted = false;
        node.isBlocked = false;
        node.distance = Infinity;
      }
    }
  }
}
