import { Component, OnInit, Input, DoCheck, ViewChild, ElementRef, OnChanges, SimpleChanges, ChangeDetectionStrategy } from '@angular/core';
import { HighlightService } from 'src/app/services/highlight.service';
import { MatCard } from '@angular/material/card';
import { CounterService } from 'src/app/services/counter.service';

@Component({
  selector: 'app-value-input',
  templateUrl: './value-input.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ValueInputComponent
  implements OnChanges, OnInit, DoCheck {

  name = 'Value Input';
  strategy = 'Default';

  @Input()
  count: number;

  @ViewChild(MatCard, { read: ElementRef })
  card: ElementRef;

  constructor(private hightlight: HighlightService,
    private svc: CounterService) {}

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Changes on', this.name, changes);
  }

  ngOnInit(): void {
    console.log('Initiating', this.name);
  }

  ngDoCheck(): void {
    this.hightlight.enlight(this.card.nativeElement);
  }

  inc() {
    this.svc.incByMutatedCounter();
  }

  incImmutable() {
    this.svc.incByRefChange();
  }
}
