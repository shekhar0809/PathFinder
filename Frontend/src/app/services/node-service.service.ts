import { Injectable } from '@angular/core';
import { node } from '../mockGrid';

@Injectable({
  providedIn: 'root',
})
export class NodeServiceService {
  constructor() {}

  GetNode(e: node) {
    console.log(e);
    const coordinates = [e.row, e.col];
    console.log(coordinates);
    let id = 'Node' + e.row + e.col;
    console.log(id);
    document.getElementById(id.toString()).classList.toggle('change-color');
  }

  start(e: node) {
    e.isStart ? (e.isStart = false) : (e.isStart = true);
  }

  end(e: node) {
    e.isEnd ? (e.isEnd = false) : (e.isEnd = true);
  }
}
