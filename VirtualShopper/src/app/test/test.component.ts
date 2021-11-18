import { Component, OnInit } from '@angular/core';
import { Box } from '../models/box-model';
import { ClothingType } from '../models/clothing-type-model';
import { Item } from '../models/item-model';
import { Size } from '../models/size-model';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }



  createBox() {
    alert('Creating Box');

    var itemOne = new Item();
    var testItemList: Item[] = [];

    itemOne.clothingType = ClothingType.Pants;
    itemOne.price = 100;
    itemOne.size = Size.Large;

    testItemList.push(itemOne);

    var testBox = new Box(testItemList);

    console.log(testBox);
  }

  createRandomBox() {
    var itemList: Item[] = [];
    var numberOfItems = this.getNumberOfItems(6);
    for (let i = 0; i < numberOfItems; i++){
      let myItem = new Item();
      let clothingRandomizer = this.getRandomInt(6);

      if (clothingRandomizer == 0){ // Random Sock
        myItem.clothingType = ClothingType.Socks;
        myItem.price = this.getRandomPrice(0); 
        myItem.size = Size.Medium // TODO - Hard coded size
      }

      if (clothingRandomizer == 1){ // Random Shirt
        myItem.clothingType = ClothingType.Shirt;
        myItem.price = this.getRandomPrice(1); 
        myItem.size = Size.Large // TODO - Hard coded size
      }

      if (clothingRandomizer == 2){ // Random Pants
        myItem.clothingType = ClothingType.Pants;
        myItem.price = this.getRandomPrice(1); 
        myItem.size = Size.Medium // TODO - Hard coded size
      }

      if (clothingRandomizer == 3){ // Random Shoes
        myItem.clothingType = ClothingType.Shoes;
        myItem.price = this.getRandomPrice(2); 
        myItem.size = Size.Medium // TODO - Hard coded size
      }

      if (clothingRandomizer == 4){ // Random Jacket
        myItem.clothingType = ClothingType.Jacket;
        myItem.price = this.getRandomPrice(1); 
        myItem.size = Size.Large // TODO - Hard coded size
      }

      if (clothingRandomizer == 5){ // Random Misc
        myItem.clothingType = ClothingType.Misc;
        myItem.price = this.getRandomPrice(1); 
        myItem.size = Size.Medium // TODO - Hard coded size
      }
      itemList.push(myItem);
    }
    var myBox = new Box(itemList);
    console.log(myBox);

  }
  getNumberOfItems(max: number) {
    return this.getRandomIntWithMin(1,max);
  }
  
  getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  getRandomIntWithMin(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  getRandomPrice(lowMedHigh: number) {
    if (lowMedHigh == 0){  // Low Price
      return this.getRandomIntWithMin(0, 10);
    }
    
    if (lowMedHigh == 1){  // Med Price
      return this.getRandomIntWithMin(10, 35);
    }

    if (lowMedHigh == 2){  // High Price
      return this.getRandomIntWithMin(50, 100);
    }
  }
}
