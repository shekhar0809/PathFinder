import { Injectable } from '@angular/core';
import { NodeServiceService } from './node-service.service';

@Injectable({
  providedIn: 'root',
})
export class AlgorithmSupplierService {
  currentAlgorithm: number = undefined;

  constructor(private nodeService: NodeServiceService) {}

  selectBFS() {
    this.currentAlgorithm = 1;
    this.nodeService.clearGrid();
  }

  selectDijkstra() {
    this.currentAlgorithm = 2;
    this.nodeService.clearGrid();
  }

  selectDDA() {
    this.currentAlgorithm = 3;
    this.nodeService.clearGrid();
  }

  selectAstar() {
    this.currentAlgorithm = 4;
    this.nodeService.clearGrid();
  }

  getAlgorithm(): number {
    this.nodeService.clearGrid();
    return this.currentAlgorithm;
  }
}
