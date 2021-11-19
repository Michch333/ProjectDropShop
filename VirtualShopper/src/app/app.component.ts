import { Component } from '@angular/core';
import { Box } from './models/box-model';
import { createRandomBox } from './util/create-random-box';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'VirtualShopper';
  constructor() {
    this.dummyDataBoxes = [];
    for (let i = 0; i < 1000; i++){
      this.dummyDataBoxes.push(createRandomBox(i))
    }
    console.log('Done!');
  }
  ngOnInit() {
  }
  dummyDataBoxes: Box[];
}
