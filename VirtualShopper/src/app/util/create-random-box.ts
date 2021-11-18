import { Box } from "../models/box-model";
import { ClothingType } from "../models/clothing-type-model";
import { Item } from "../models/item-model";
import { Size } from "../models/size-model";

export function createRandomBox() {
    var itemList: Item[] = [];
    var numberOfItems = getNumberOfItems(6);
    for (let i = 0; i < numberOfItems; i++){
        let myItem = new Item();
        let clothingRandomizer = getRandomInt(6);

        if (clothingRandomizer == 0){ // Random Sock
        myItem.clothingType = ClothingType.Socks;
        myItem.price = getRandomPrice(0); 
        myItem.size = Size.Medium // TODO - Hard coded size
        }

        if (clothingRandomizer == 1){ // Random Shirt
        myItem.clothingType = ClothingType.Shirt;
        myItem.price = getRandomPrice(1); 
        myItem.size = Size.Large // TODO - Hard coded size
        }

        if (clothingRandomizer == 2){ // Random Pants
        myItem.clothingType = ClothingType.Pants;
        myItem.price = getRandomPrice(1); 
        myItem.size = Size.Medium // TODO - Hard coded size
        }

        if (clothingRandomizer == 3){ // Random Shoes
        myItem.clothingType = ClothingType.Shoes;
        myItem.price = getRandomPrice(2); 
        myItem.size = Size.Medium // TODO - Hard coded size
        }

        if (clothingRandomizer == 4){ // Random Jacket
        myItem.clothingType = ClothingType.Jacket;
        myItem.price = getRandomPrice(1); 
        myItem.size = Size.Large // TODO - Hard coded size
        }

        if (clothingRandomizer == 5){ // Random Misc
        myItem.clothingType = ClothingType.Misc;
        myItem.price = getRandomPrice(1); 
        myItem.size = Size.Medium // TODO - Hard coded size
        }
        itemList.push(myItem);
    }

    var myBox = new Box(itemList);
    console.log(myBox);
}
export function getNumberOfItems(max: number) {
    return getRandomIntWithMin(1,max);
}

export function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
export function getRandomIntWithMin(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

export function getRandomPrice(lowMedHigh: number) {

    if (lowMedHigh == 0){  // Low Price
        return getRandomIntWithMin(0, 10);
    }

    if (lowMedHigh == 1){  // Med Price
        return getRandomIntWithMin(10, 35);
    }

    if (lowMedHigh == 2){  // High Price
        return getRandomIntWithMin(50, 100);
    }
}