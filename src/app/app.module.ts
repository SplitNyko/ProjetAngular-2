import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';

import { AppComponent }   from './app.component';
import { MainComponent }  from './main/main.component';
import { MenuComponent }  from './menu/menu.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent,
                  MainComponent,
                  MenuComponent,
  ],
  bootstrap:    [ AppComponent,
                  MainComponent,
                  MenuComponent,
  ]
})
export class AppModule { }
