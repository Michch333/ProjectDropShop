import { Component, Input, OnInit } from '@angular/core';
import { Box } from 'src/app/models/box-model';
import { Shopper } from 'src/app/models/shopper-model';
import { createRandomShopper } from 'src/app/util/create-random-box';

@Component({
  selector: 'app-individual-box',
  templateUrl: './individual-box.component.html',
  styleUrls: ['./individual-box.component.css']
})
export class IndividualBoxComponent implements OnInit {
  @Input('box') box: Box = new Box;

  shopper: Shopper;

  constructor() { }

  ngOnInit(): void {
    this.shopper = createRandomShopper();
  }

}
