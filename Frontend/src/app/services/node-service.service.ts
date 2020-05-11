import { Injectable } from '@angular/core';
import { node } from '../mockGrid';

@Injectable({
  providedIn: 'root',
})
export class NodeServiceService {
  constructor() {}

  startNode: node[] = [];
  endNode: node[] = [];

  GetNode(e: node) {
    console.log(e);
    const coordinates = [e.row, e.col];
    console.log(coordinates);
    let id = 'Node' + e.row + e.col;
    console.log(id);
    document.getElementById(id.toString()).classList.toggle('change-color');
  }

  start(e: node) {
    for (let i = 0; i < this.startNode.length; i++) {
      let item = this.startNode[i];
      item.isStart = false;
    }
    e.isStart ? (e.isStart = false) : (e.isStart = true);

    if (e.isStart === true) {
      this.startNode.push(e);
    }
  }

  end(e: node) {
    for (let i = 0; i < this.endNode.length; i++) {
      let item = this.endNode[i];
      item.isEnd = false;
    }
    e.isEnd ? (e.isEnd = false) : (e.isEnd = true);

    if (e.isEnd === true) {
      this.endNode.push(e);
    }
  }
}
