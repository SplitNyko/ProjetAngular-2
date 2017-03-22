import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MenuComponent }  from './menu.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ MenuComponent ],
  bootstrap:    [ MenuComponent ]
})
export class MenuModule { }
