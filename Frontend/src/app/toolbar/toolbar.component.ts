import { Component, OnInit } from '@angular/core';
import { NodeServiceService } from '../services/node-service.service';
import { dijkstra } from 'src/assets/Algorithms/dijkstra';

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

    dijkstra(grid, startNode, endNode);
  }

  ngOnInit(): void {}
}
