import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';

import { AppComponent }   from './app.component';
import { MainComponent }  from './main/main.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './main/home/home.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent,
                  MainComponent,
                  MenuComponent,
                  HomeComponent
  ],
  bootstrap:    [ AppComponent,
                  MainComponent,
                  MenuComponent
  ]
})
export class AppModule { }
