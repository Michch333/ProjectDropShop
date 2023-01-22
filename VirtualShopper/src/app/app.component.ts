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
  profileSelected: boolean = false;
  profile: string;
  numberOfBoxes: number;
  fliteredBoxes: Box[];
  constructor() {
  }
  ngOnInit() {
  }
  dummyDataBoxes: Box[];

  profileSelect(profile: string){
    this.profile = profile;
    this.setProfileBackgroundImage(profile);
    if (profile == 'mensMisc') {
      this.profileSelected = true;
      this.dummyDataBoxes = [];
      for (let i = 0; i < 1000; i++){
        this.dummyDataBoxes.push(createRandomBox(i))
      }
      console.log('Done!');
    };

    if (profile == 'womens') {
      this.profileSelected = true;
      this.dummyDataBoxes = [];
      for (let i = 0; i < 1000; i++){
        this.dummyDataBoxes.push(createRandomBox(i, 'womens'))
      }
      console.log('Done!');
    };

  }

  setProfileBackgroundImage(profile: string) {
    let testElement = document.getElementById("container");
    if (profile == 'mensMisc') {
      testElement.setAttribute('id', 'mensContainer');
    }
    else if (profile == 'womens') {
      testElement.setAttribute('id', 'womensContainer');
    }
  }

  updateNoOfBoxesBadge(numberOfBoxes: number) {
    this.numberOfBoxes = numberOfBoxes;
  }
  updateFilteredBoxes(filteredBoxes: Box[]) {
    this.updateNoOfBoxesBadge(filteredBoxes.length);
    this.fliteredBoxes = filteredBoxes;
  }

  viewFilteredBoxes() {
    
  }
}
