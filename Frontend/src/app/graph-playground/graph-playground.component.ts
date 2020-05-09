import { Component, OnInit } from '@angular/core';

import {data} from '../mockGrid';
@Component({
  selector: 'app-graph-playground',
  templateUrl: './graph-playground.component.html',
  styleUrls: ['./graph-playground.component.scss']
})
export class GraphPlaygroundComponent implements OnInit {
  data = data;
  constructor() { }

  ngOnInit(): void {
  }
}
