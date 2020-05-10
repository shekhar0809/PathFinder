import { Component, OnInit } from '@angular/core';

import {dijsktra} from '../algorithms/dijsktra';
import {grid} from '../mockGrid'
@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  const START_NODE_ROW = 10;
  const START_NODE_COL = 15;
  const FINISH_NODE_ROW = 10;
  const FINISH_NODE_COL = 35;
  const grid = grid;
  visualizeDijsktra(){
    const startNode = grid[START_NODE_ROW][START_NODE_COL];
    const endNode = grid[FINISH_NODE_ROW][FINISH_NODE_COL];
    const visitedNodesInOrder = dijsktra(grid, startNode, endNode);
    console.log(visitedNodesInOrder);
  }


  constructor() { }

  ngOnInit(): void {
  }

}
