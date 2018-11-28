import { Component, OnInit, OnChanges, DoCheck,
  ViewChild, ElementRef, ChangeDetectorRef, SimpleChanges, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { MatCard } from '@angular/material/card';
import { HighlightService } from 'src/app/services/highlight.service';
import { CounterService } from 'src/app/services/counter.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-reactive-no-input',
  templateUrl: './reactive-no-input.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReactiveNoInputComponent implements
  OnChanges, OnInit, DoCheck, OnDestroy {

  name = 'Reactive - No Input';
  strategy = 'OnPush';

  count: number;
  subCounter: number;

  @ViewChild(MatCard, { read: ElementRef })
  card: ElementRef;

  private counter$Subscription: Subscription;

  constructor(private hightlight: HighlightService,
    public svc: CounterService, private cdRef: ChangeDetectorRef) {

    }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Changes on', this.name, changes);
  }

  ngOnInit(): void {
    console.log('Initiating', this.name);
    this.counter$Subscription = this.svc.counter$.subscribe( c => {
      this.count = c.count;
      this.cdRef.markForCheck();
    });
    // // TODO: unsubscribe
    // this.svc.subCounter$.subscribe( c => {
    //   this.subCounter = c;
    //   this.cdRef.markForCheck();
    // });
  }

  ngDoCheck(): void {
    this.hightlight.enlight(this.card.nativeElement);
  }

  inc() {
    this.svc.incByMutatedCounter();
  }

  ngOnDestroy() {
    this.counter$Subscription.unsubscribe();
  }
}

