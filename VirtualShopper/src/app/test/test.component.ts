import { Component, Input, OnInit } from '@angular/core';
import { Box } from '../models/box-model';
import { ClothingType } from '../models/clothing-type-model';
import { Item } from '../models/item-model';
import { Size } from '../models/size-model';
import { createRandomBox } from '../util/create-random-box';
import { FormBuilder, FormGroup, FormControl, Validators, FormArray} from '@angular/forms';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  @Input() boxes;
  constructor() {

  }


  ngOnInit(): void {
    
  }
  test(result) {
    let requiredItems: ClothingType[] = this.translateCheckBoxes(result);
    console.log(result);
    this.filterBoxes(result.priceRange, requiredItems);
  }

  
  filterBoxes(price?: number, requiredClothing?: ClothingType[]) {

    console.log(requiredClothing, price);

    let checkForShirt = false;
    let checkForPants = false;
    let checkForShoes = false;
    let checkForSocks = false;
    let checkForJacket = false;
    let checkForMisc = false;
    console.log('Temp should be empty:');
    console.log(this.filteredBoxes);

    requiredClothing.forEach(n => {
      if (n == ClothingType.Shirt) {
        checkForShirt = true;
      };
      if (n == ClothingType.Pants) {
        checkForPants = true;
      };
      if (n == ClothingType.Socks) {
        checkForSocks = true;
      };
      if (n == ClothingType.Shoes) {
        checkForShoes = true;
      };
      if (n == ClothingType.Jacket) {
        checkForJacket = true;
      };
      if (n == ClothingType.Misc) {
        checkForMisc = true;
      }
    });
    this.filteredBoxes = this.boxes;
    console.log('Temp should be all boxes');
    console.log(this.filteredBoxes);

    this.boxes.forEach(z => {
      if (checkForShirt) {
        this.filteredBoxes = this.filteredBoxes.filter(obj => obj.hasShirt == true);
      };
      if (checkForPants) {
        this.filteredBoxes = this.filteredBoxes.filter(obj => obj.hasPants == true)
      };
      if (checkForShoes) {
        this.filteredBoxes = this.filteredBoxes.filter(obj => obj.hasShoes == true)
      };
      if (checkForSocks) {
        this.filteredBoxes = this.filteredBoxes.filter(obj => obj.hasSocks == true);
      };
      if (checkForJacket) {
        this.filteredBoxes = this.filteredBoxes.filter(obj => obj.hasJacket == true)
      };
      if (checkForMisc) {
        this.filteredBoxes = this.filteredBoxes.filter(obj => obj.hasMisc == true)
      };
    });
    console.log('Temp should be filtered down to only those that include the required items');
    console.log(this.filteredBoxes);

    this.filteredBoxes = this.filteredBoxes.filter(obj => obj.totalPrice <= price);
    console.log('Price should now be below target price');
    console.log(this.filteredBoxes);
    
    this.filteredBoxes = this.sortList(this.filteredBoxes);
    return this.filteredBoxes;
    }
    filteredBoxes: Box[] = [];
    translateCheckBoxes(result) {
      let tempArr: ClothingType[] = [];

      if(result.shirt) {
        tempArr.push(ClothingType.Shirt)
      }
      if(result.pants) {
        tempArr.push(ClothingType.Pants)
      }
      if(result.shoes) {
        tempArr.push(ClothingType.Shoes)
      }
      if(result.socks) {
        tempArr.push(ClothingType.Socks)
      }
      if(result.jacket) {
        tempArr.push(ClothingType.Jacket)
      }
      if(result.misc) {
        tempArr.push(ClothingType.Misc)
      }
      return tempArr;
    }

    sortList (listOfBoxes: Box[]){
      for (let i = 0; i < listOfBoxes.length; i ++) {
        if (listOfBoxes[i+1] != undefined) {
          if (listOfBoxes[i].totalPrice < listOfBoxes[i + 1].totalPrice){
            listOfBoxes.push(listOfBoxes[i]);
            listOfBoxes.splice(i, 1);
          }
        }
      }
      return listOfBoxes;
    }
  }
