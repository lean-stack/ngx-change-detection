import { Injectable } from '@angular/core';
import { Observable, Subject, ReplaySubject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  counter$: Observable<{ count: number }>;
  counter: { count: number };

  private counterSource: ReplaySubject<{ count: number }>;

  public subCounter$ = new BehaviorSubject<number>(0);

  constructor() {
    this.counter = { count: 0};

    this.counterSource = new ReplaySubject(1);
    this.counter$ = this.counterSource.asObservable();

    this.counterSource.next(this.counter);
  }

  incByMutatedCounter() {
    this.counter.count++;

    this.counterSource.next(this.counter);
  }
  incByRefChange() {
    this.counter = { count: this.counter.count + 1 };
    this.counterSource.next(this.counter);
  }

  incSubCounter() {
    this.subCounter$.next(this.subCounter$.value + 1);
  }
}
