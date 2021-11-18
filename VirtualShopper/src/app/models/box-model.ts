import { zip } from "rxjs";
import { ClothingType } from "./clothing-type-model";
import { Item } from "./item-model";

export class Box {
    /**
     *
     */
    constructor(items?: Item[]) {
        this.Items = items;
        this.checkForClothingItem();
        this.totalPrice = this.calcTotalPrice();
    }

    hasShirt: boolean = false; 
    hasPants: boolean = false;
    hasSocks: boolean = false;
    hasShoes: boolean = false;
    hasJacket: boolean = false;
    hasMisc: boolean = false;

    totalPrice: number = 0;

    Items: Item [];

    checkForClothingItem () {
        this.Items.forEach(z => {
            if (z.clothingType == ClothingType.Shirt) {
                this.hasShirt = true;
            }
            if (z.clothingType == ClothingType.Pants) {
                this.hasPants = true;
            }
            if (z.clothingType == ClothingType.Socks) {
                this.hasSocks = true;
            }
            if (z.clothingType == ClothingType.Shoes) {
                this.hasShoes = true;
            }
            if (z.clothingType == ClothingType.Jacket) {
                this.hasJacket = true;
            }
            if (z.clothingType == ClothingType.Misc) {
                this.hasMisc = true;
            }
        });
    };
    calcTotalPrice () {
        let price = 0;
        this.Items.forEach(z => {
            price = (price + z.price);
        });
        return price;
    }
}