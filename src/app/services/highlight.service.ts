import { Injectable, NgZone } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HighlightService {

  constructor(private zone: NgZone) { }

  enlight(elt: HTMLElement) {
    this.zone.runOutsideAngular(() => {

      const currentCheckIx = window['checkIx']++;
      setTimeout( () => {
        elt.classList.replace('mat-elevation-z1', 'mat-elevation-z8');
        elt.classList.add('checking');
        setTimeout(() => {
          elt.classList.replace('mat-elevation-z8', 'mat-elevation-z1');
          elt.classList.remove('checking');
        }, 1000);
      }, currentCheckIx * 200 );
    });
  }

  enlightSubChild(elt: HTMLElement) {
    this.zone.runOutsideAngular(() => {

      const currentCheckIx = window['checkIx']++;
      setTimeout( () => {
        elt.classList.add('checking');
        setTimeout(() => {
          elt.classList.remove('checking');
        }, 1000);
      }, currentCheckIx * 200 );
    });
  }
}
