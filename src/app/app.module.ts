import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StringpComponent } from './stringp/stringp.component';

import { LengthpComponent } from './lengthp/lengthp.component';

import { FormsModule } from '@angular/forms';
import { EventComponent } from './event/event.component';

@NgModule({
  declarations: [
    AppComponent,
    StringpComponent,

    LengthpComponent,

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
