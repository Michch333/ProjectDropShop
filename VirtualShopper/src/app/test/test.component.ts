import { Component, OnInit } from '@angular/core';
import { Box } from '../models/box-model';
import { ClothingType } from '../models/clothing-type-model';
import { Item } from '../models/item-model';
import { Size } from '../models/size-model';
import { createRandomBox } from '../util/create-random-box';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  test() {
    createRandomBox();
  }
}
