import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'; // using HttpClientModule Class from @angular/common/http modules

import { AppComponent } from './app.component';
import { ValueComponent } from './value/value.component';
import { from } from 'rxjs';

@NgModule({
   declarations: [
      AppComponent,
      ValueComponent
   ],
   imports: [
      BrowserModule,
      HttpClientModule // module imported to create http request
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
