import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  counter: { count: number };

  constructor() {
    this.counter = { count: 0};
  }

  incByMutatedCounter() {
    this.counter.count++;
  }
  incByRefChange() {
    this.counter = { count: this.counter.count + 1 };
  }
}
