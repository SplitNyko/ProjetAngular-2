import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MainComponent } from './main.component';

import { PresentationComponent } from './presentation/presentation.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports:      [ BrowserModule],
  declarations: [ MainComponent,
                  PresentationComponent,
                  HomeComponent
  ],
  bootstrap:    [ MainComponent,
                  PresentationComponent,
                  HomeComponent
  ],
})
  
export class MainModule { }