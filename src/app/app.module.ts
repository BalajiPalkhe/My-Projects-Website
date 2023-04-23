import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StringpComponent } from './stringp/stringp.component';
import { ArraypComponent } from './arrayp/arrayp.component';
import { LengthpComponent } from './lengthp/lengthp.component';
import { TemperaturepComponent } from './temperaturep/temperaturep.component';
import { WordpComponent } from './wordp/wordp.component';
import { CalcpComponent } from './calcp/calcp.component';
import { FormsModule } from '@angular/forms';
import { EventComponent } from './event/event.component';

@NgModule({
  declarations: [
    AppComponent,
    StringpComponent,
    ArraypComponent,
    LengthpComponent,
    TemperaturepComponent,
    WordpComponent,
    CalcpComponent,
    EventComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
