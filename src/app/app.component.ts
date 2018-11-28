import { Component, DoCheck } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements DoCheck {

  ngDoCheck(): void {
    // Hack
    window['checkIx'] = 0;
  }
}

