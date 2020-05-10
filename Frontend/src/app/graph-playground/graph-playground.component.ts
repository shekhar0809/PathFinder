import { Component, OnInit } from '@angular/core';

import { grid } from '../mockGrid';
@Component({
  selector: 'app-graph-playground',
  templateUrl: './graph-playground.component.html',
  styleUrls: ['./graph-playground.component.scss'],
})
export class GraphPlaygroundComponent implements OnInit {
  grid = grid;
  constructor() {}

  saveRowCol(e) {
    const coordinates = [e.row, e.col];
    console.log(coordinates);
    let id = 'Node' + e.row + e.col;
    console.log(id);
    document.getElementById(id.toString()).classList.toggle('change-color');
  }

  ngOnInit() {}
}
