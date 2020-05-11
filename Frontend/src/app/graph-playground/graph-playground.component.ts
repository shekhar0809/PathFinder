import { Component, OnInit } from '@angular/core';

import { data, node } from '../mockGrid';
import { NodeServiceService } from '../services/node-service.service';
@Component({
  selector: 'app-graph-playground',
  templateUrl: './graph-playground.component.html',
  styleUrls: ['./graph-playground.component.scss'],
})
export class GraphPlaygroundComponent implements OnInit {
  data = data;

  constructor(private getNode: NodeServiceService) {}

  saveRowCol(e: KeyboardEvent, node: node) {
    const id = this.getNode.GetNode(node);

    if (e.key === 's') {
      document.getElementById(id.toString());
      this.mynode.isStart === true;
    }
  }

  ngOnInit() {}
}
