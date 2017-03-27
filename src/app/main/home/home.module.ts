import { NgModule }      from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HomeComponent }  from './home.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ HomeComponent ],
  bootstrap:    [ HomeComponent ],
  exports:      [HomeComponent]
  
})
export class HomeModule { }
