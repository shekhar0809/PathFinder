import { Component, OnInit } from '@angular/core';
import { NodeServiceService } from '../services/node-service.service';
import { dijkstra } from 'src/assets/Algorithms/dijkstra';
import {dda} from 'src/assets/Algorithms/dda';
import {bfs} from 'src/assets/Algorithms/bfs';
@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent implements OnInit {

  constructor(private nodeService: NodeServiceService) {}

  runAlgorithm() {
    const grid = this.nodeService.getGrid();
    const startNode = this.nodeService.getStartNode();
    const endNode = this.nodeService.getEndNode();
    console.log(startNode);
      console.log(endNode);
    dda(grid, startNode, endNode);
  }
  clearBoard() {
    this.nodeService.resetGrid();
  }

  ngOnInit(): void {}
}
