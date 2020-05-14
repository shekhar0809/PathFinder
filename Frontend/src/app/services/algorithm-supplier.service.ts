import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AlgorithmSupplierService {
  currentAlgorithm: number = undefined;

  constructor() {}

  selectBFS() {
    this.currentAlgorithm = 1;
  }

  selectDijsktra() {
    this.currentAlgorithm = 2;
  }

  selectDDA() {
    this.currentAlgorithm = 3;
  }

  getAlgorithm(): number {
    return this.currentAlgorithm;
  }
}
