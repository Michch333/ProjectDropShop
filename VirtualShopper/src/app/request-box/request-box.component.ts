import { Component, Input, OnInit } from '@angular/core';
import { Box } from '../models/box-model';
import { ClothingType } from '../models/clothing-type-model';
import { translateCheckBoxes, filterBoxes } from '../util/filter-by-criteria';
import {bRequest} from '../models/request-model';

@Component({
  selector: 'app-request-box',
  templateUrl: './request-box.component.html',
  styleUrls: ['./request-box.component.css']
})
export class RequestBoxComponent implements OnInit {
  @Input() boxes;
  @Input() profile;
  request: bRequest; 
  filteredSubmitted: boolean;
  filteredBoxes: Box[] = [];
  singleBox: Box;
  showRequest: boolean;
  showThankYou: boolean;
  showResults: boolean;
  showDash: boolean;

  checkForShirt: boolean = false;
  checkForPants: boolean = false;
  checkForShoes: boolean = false;
  checkForSocks: boolean = false;
  checkForJacket: boolean = false;
  checkForMisc: boolean = false;
  requestDetails: string;

  constructor() {
    this.showRequest = true;
    this.request = new bRequest([], '', 0, '', '');
  }

  ngOnInit(): void {
  }
  getFilteredBoxesByCriteria(result) {
    //Request Mapping
    this.request.requestDetails = result.requestDetails;
    this.request.shirtNotes = result.shirtNotes;
    this.request.targetPrice = result.priceRange;

    // Results Mapping
    this.filteredSubmitted = true;
    this.showThankYou = true;
    this.showRequest = false;
    let requiredItems: ClothingType[] = this.translateCheckBoxes(result);
    console.log(result);
    this.requestDetails = result.requestDetails;
    this.filterBoxes(result.priceRange, requiredItems);
  }

  
  filterBoxes(price?: number, requiredClothing?: ClothingType[]) {

    console.log(requiredClothing, price);

    this.checkForShirt = false;
    this.checkForPants = false;
    this.checkForShoes = false;
    this.checkForSocks = false;
    this.checkForJacket = false;
    this.checkForMisc = false;
    console.log('Temp should be empty:');
    console.log(this.filteredBoxes);

    requiredClothing.forEach(n => {
      if (n == ClothingType.Shirt) {
        this.checkForShirt = true;
      };
      if (n == ClothingType.Pants) {
        this.checkForPants = true;
      };
      if (n == ClothingType.Socks) {
        this.checkForSocks = true;
      };
      if (n == ClothingType.Shoes) {
        this.checkForShoes = true;
      };
      if (n == ClothingType.Jacket) {
        this.checkForJacket = true;
      };
      if (n == ClothingType.Misc) {
        this.checkForMisc = true;
      }
    });
    this.filteredBoxes = this.boxes;
    console.log('Temp should be all boxes');
    console.log(this.filteredBoxes);

    this.boxes.forEach(z => {
      if (this.checkForShirt) {
        this.filteredBoxes = this.filteredBoxes.filter(obj => obj.hasShirt == true);
      };
      if (this.checkForPants) {
        this.filteredBoxes = this.filteredBoxes.filter(obj => obj.hasPants == true)
      };
      if (this.checkForShoes) {
        this.filteredBoxes = this.filteredBoxes.filter(obj => obj.hasShoes == true)
      };
      if (this.checkForSocks) {
        this.filteredBoxes = this.filteredBoxes.filter(obj => obj.hasSocks == true);
      };
      if (this.checkForJacket) {
        this.filteredBoxes = this.filteredBoxes.filter(obj => obj.hasJacket == true)
      };
      if (this.checkForMisc) {
        this.filteredBoxes = this.filteredBoxes.filter(obj => obj.hasMisc == true)
      };
    });
    console.log('Temp should be filtered down to only those that include the required items');
    console.log(this.filteredBoxes);

    this.filteredBoxes = this.filteredBoxes.filter(obj => obj.totalPrice <= price);
    console.log('Price should now be below target price');
    console.log(this.filteredBoxes);
    
    this.filteredBoxes = this.filteredBoxes.sort((a, b) => b.totalPrice - a.totalPrice);
    return this.filteredBoxes;
    }
  
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

  returnHome(){
    this.showThankYou = false;
    this.showDash = true;
  }

  viewResults(event: boolean){
    this.showDash = false;
   this.showResults = event;
  }

  createRequest(event: boolean){
    this.showResults = false;
    this.showThankYou = false;
    this.filteredSubmitted = false;
    this.showDash = false;
  }

  viewIndividualBox(invdBox: Box) {
    this.singleBox = invdBox;
    this.showResults = false;
    this.showDash = false;
  }

}
