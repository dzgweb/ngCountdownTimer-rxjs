import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CountdownComponent, TimeInputComponent } from './components';
import { InputToCountdownDirective } from './directives/input-to-countdown.directive';
import { TimeFormatPipe } from './pipes/time-format.pipe';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    CountdownComponent,
    TimeInputComponent,
    InputToCountdownDirective,
    TimeFormatPipe
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
