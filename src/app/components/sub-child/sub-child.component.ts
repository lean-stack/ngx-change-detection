import { Component, OnInit, DoCheck, ElementRef } from '@angular/core';
import { HighlightService } from 'src/app/services/highlight.service';

@Component({
  selector: 'app-sub-child',
  templateUrl: './sub-child.component.html',
  styles: []
})
export class SubChildComponent implements DoCheck {

  constructor(private highlight: HighlightService,
    private elt: ElementRef) { }

  ngDoCheck(): void {
    this.highlight.enlightSubChild(this.elt.nativeElement);
  }


}
