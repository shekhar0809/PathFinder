import { Component, OnInit } from '@angular/core';
import { NodeServiceService } from '../services/node-service.service';
import { dijkstra } from 'src/assets/Algorithms/dijkstra';

import { dda } from 'src/assets/Algorithms/dda';
import { bfs } from 'src/assets/Algorithms/bfs';
import { AlgorithmSupplierService } from '../services/algorithm-supplier.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent implements OnInit {
  constructor(
    private nodeService: NodeServiceService,
    private algorithmService: AlgorithmSupplierService
  ) {}

  Algorithm: string = 'Algorithm';

  runAlgorithm() {
    const grid = this.nodeService.getGrid();
    const startNode = this.nodeService.getStartNode();
    const endNode = this.nodeService.getEndNode();
    console.log(startNode);
    console.log(endNode);
    const algorithmID = this.algorithmService.getAlgorithm();

    if (algorithmID === 1) {
      bfs(grid, startNode, endNode);
    } else if (algorithmID === 2) {
      dijkstra(grid, startNode, endNode);
    } else if (algorithmID === 3) {
      dda(grid, startNode, endNode);
    } else {
      alert('You need to select an Algorithm first!');
    }
  }

  selectBFS() {
    this.Algorithm = 'BFS';
    this.algorithmService.selectBFS();
  }

  selectDijkstra() {
    this.Algorithm = "Dijkstra's Algorithm";
    this.algorithmService.selectDijkstra();
  }

  selectDDA() {
    this.Algorithm = 'DDA Line Tracing Algorithm';
    this.algorithmService.selectDDA();
  }

  clearBoard() {
    this.nodeService.resetGrid();
  }

  ngOnInit(): void {}
}
