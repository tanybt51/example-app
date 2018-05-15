import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';  // <-- #1 import module
import { MaterialModule } from "./material.model";
import 'hammerjs';


import { DatePickerComponent } from './date-picker/date-picker.component';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
    DatePickerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
