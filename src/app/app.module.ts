import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// @angular/material
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContainerComponent } from './components/container/container.component';
import { ValueInputComponent } from './components/value-input/value-input.component';
import { SubChildComponent } from './components/sub-child/sub-child.component';
import { ObjectInputComponent } from './components/object-input/object-input.component';
import { ServiceNoInputComponent } from './components/service-no-input/service-no-input.component';

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    ValueInputComponent,
    SubChildComponent,
    ObjectInputComponent,
    ServiceNoInputComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    // @angular/material
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatDividerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
