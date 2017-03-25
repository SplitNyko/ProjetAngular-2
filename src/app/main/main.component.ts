import { Component } from '@angular/core';

import { HomeComponent } from './home/home.component';

@Component({
  selector: 'Main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  directives: [HomeComponent]
})
export class MainComponent  {}
