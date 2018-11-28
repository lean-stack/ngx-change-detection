import { Component, OnInit, OnChanges, DoCheck, Input, ViewChild, ElementRef, SimpleChanges, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { MatCard } from '@angular/material/card';
import { HighlightService } from 'src/app/services/highlight.service';
import { CounterService } from 'src/app/services/counter.service';

@Component({
  selector: 'app-service-no-input',
  templateUrl: './service-no-input.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ServiceNoInputComponent implements OnChanges, OnInit, DoCheck {

  name = 'Service - No Input';
  strategy = 'OnPush';

  private previousCount: number;

  @ViewChild(MatCard, { read: ElementRef })
  card: ElementRef;

  constructor(private hightlight: HighlightService,
    public svc: CounterService, private cdRef: ChangeDetectorRef) {
      this.previousCount = svc.counter.count;
    }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Changes on', this.name, changes);
  }

  ngOnInit(): void {
    console.log('Initiating', this.name);
  }

  ngDoCheck(): void {
    this.hightlight.enlight(this.card.nativeElement);
    if (this.previousCount !== this.svc.counter.count) {
      this.previousCount = this.svc.counter.count;
      this.cdRef.markForCheck();
    }
  }

  inc() {
    this.svc.incByMutatedCounter();
  }
}
