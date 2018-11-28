import { Component, OnInit, OnChanges, DoCheck, Input, ViewChild, ElementRef, SimpleChanges } from '@angular/core';
import { MatCard } from '@angular/material/card';
import { HighlightService } from 'src/app/services/highlight.service';
import { CounterService } from 'src/app/services/counter.service';

@Component({
  selector: 'app-object-input',
  templateUrl: './object-input.component.html',
  styles: []
})
export class ObjectInputComponent implements OnChanges, OnInit, DoCheck {

  name = 'Object Input';
  strategy = 'Default';

  @Input()
  counter: { count: number };

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
}
