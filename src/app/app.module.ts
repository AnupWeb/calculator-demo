import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CalculatorScreenComponent } from './calculator-screen/calculator-screen.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorScreenComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
