import { Box } from "../models/box-model";
import { ClothingType } from "../models/clothing-type-model";
import { Item } from "../models/item-model";
import { Shopper } from "../models/shopper-model";
import { Size } from "../models/size-model";

export function createRandomBox(index?: number, profile?: string) {
    var itemList: Item[] = [];
    var numberOfItems = getNumberOfItems(5);

    if (profile != undefined) {
        for (let i = 0; i < numberOfItems; i++){
            let myItem = new Item();
            let clothingRandomizer = getRandomInt(6);
    
            if (clothingRandomizer == 0){ // Random Sock
            myItem.clothingType = ClothingType.Socks;
            myItem.imageUrl = getRandomSocksImage(profile);
            myItem.price = getRandomPrice(0); 
            myItem.size = Size.Medium // TODO - Hard coded size
            }
    
            if (clothingRandomizer == 1){ // Random Shirt
            myItem.clothingType = ClothingType.Shirt;
            myItem.imageUrl = getRandomShirtImage(profile);
            myItem.price = getRandomPrice(1); 
            myItem.size = Size.Large // TODO - Hard coded size
            }
    
            if (clothingRandomizer == 2){ // Random Pants
            myItem.clothingType = ClothingType.Pants;
            myItem.imageUrl = getRandomPantsImage(profile);
            myItem.price = getRandomPrice(1); 
            myItem.size = Size.Medium // TODO - Hard coded size
            }
    
            if (clothingRandomizer == 3){ // Random Shoes
            myItem.clothingType = ClothingType.Shoes;
            myItem.imageUrl = getRandomShoesImage(profile);
            myItem.price = getRandomPrice(3); 
            myItem.size = Size.Medium // TODO - Hard coded size
            }
    
            if (clothingRandomizer == 4){ // Random Jacket
            myItem.clothingType = ClothingType.Jacket;
            myItem.imageUrl = getRandomJacketImage(profile);
            myItem.price = getRandomPrice(2); 
            myItem.size = Size.Large // TODO - Hard coded size
            }
    
            if (clothingRandomizer == 5){ // Random Misc
            myItem.clothingType = ClothingType.Misc;
            myItem.imageUrl = getRandomMiscImage(profile);
            myItem.price = getRandomPrice(2); 
            myItem.size = Size.Medium // TODO - Hard coded size
            }
            itemList.push(myItem);
        } 
    }

    else {
        for (let i = 0; i < numberOfItems; i++){
            let myItem = new Item();
            let clothingRandomizer = getRandomInt(6);
    
            if (clothingRandomizer == 0){ // Random Sock
            myItem.clothingType = ClothingType.Socks;
            myItem.imageUrl = getRandomSocksImage();
            myItem.price = getRandomPrice(0); 
            myItem.size = Size.Medium // TODO - Hard coded size
            }
    
            if (clothingRandomizer == 1){ // Random Shirt
            myItem.clothingType = ClothingType.Shirt;
            myItem.imageUrl = getRandomShirtImage();
            myItem.price = getRandomPrice(1); 
            myItem.size = Size.Large // TODO - Hard coded size
            }
    
            if (clothingRandomizer == 2){ // Random Pants
            myItem.clothingType = ClothingType.Pants;
            myItem.imageUrl = getRandomPantsImage();
            myItem.price = getRandomPrice(1); 
            myItem.size = Size.Medium // TODO - Hard coded size
            }
    
            if (clothingRandomizer == 3){ // Random Shoes
            myItem.clothingType = ClothingType.Shoes;
            myItem.imageUrl = getRandomShoesImage();
            myItem.price = getRandomPrice(2); 
            myItem.size = Size.Medium // TODO - Hard coded size
            }
    
            if (clothingRandomizer == 4){ // Random Jacket
            myItem.clothingType = ClothingType.Jacket;
            myItem.imageUrl = getRandomJacketImage();
            myItem.price = getRandomPrice(1); 
            myItem.size = Size.Large // TODO - Hard coded size
            }
    
            if (clothingRandomizer == 5){ // Random Misc
            myItem.clothingType = ClothingType.Misc;
            myItem.imageUrl = getRandomMiscImage();
            myItem.price = getRandomPrice(1); 
            myItem.size = Size.Medium // TODO - Hard coded size
            }
            itemList.push(myItem);
        }
    }

    var myBox = new Box(itemList, index);
    console.log(myBox);
    return myBox;
}

export function createRandomShopper(){
    let tempShopper = new Shopper('','', 0);
    let randomName = getRandomIntWithMin(0,5);
    switch (randomName) {
        case 0: {
            tempShopper.name = 'Mike';
            break;
        };
        case 1: {
            tempShopper.name = 'Hillary';
            break;
        };
        case 2: {
            tempShopper.name = 'Jason';
            break;
        };
        case 3: {
            tempShopper.name = 'Kelsey';
            break;
        };
        case 4: {
            tempShopper.name = 'Jackson';
            break;
        };
        case 5: {
            tempShopper.name = 'Kimberly';
            break;
        };
        default: {
            tempShopper.name = 'Mike';
            break;
        }
    };
    let randomQuip = getRandomIntWithMin(0, 4);
    switch (randomQuip) {
        case 0: {
            tempShopper.quip = 'I hope you love this box! The second I saw your profile and request I knew EXACTLY what you would look great it! I kept it classy, while also keeping it affordable!';
            break;
        };
        case 1: {
            tempShopper.quip = 'Hey there! This outfit is handpicked by me and my 5 friends who think this style is totally you! From the top to the bottom, you cannot beat this style with this value!';
            break;
        };
        case 2: {
            tempShopper.quip = 'Flawless. Hands down flawless. You will WOW everyone with this combination, guarenteed! A little flashy never hurts right? Just be sure to not stare directly into it!';
            break;
        };
        case 3: {
            tempShopper.quip = 'Three Words - KILLING IT, QUEEN. Tell me this box aint the GREATEST thing you\'ve ever laid eyes on??';
            break;
        };
        case 4: {
            tempShopper.quip = 'Hello - My lover has the same style as you. I think this box is perfect for what you\'re looking to get out of it. I was able to find some great deals too!';
            break;
        };
        default: {
            tempShopper.quip = 'Default?';
            break;
        }
    };
    if (randomName % 2 == 0) {
        tempShopper.imageURL = getRandomMensImage();
    }
    else {
        tempShopper.imageURL = getRandomWomensImage();
    }
    tempShopper.rating = getRandomIntWithMin(5,10);
    return tempShopper;
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
        return getRandomIntWithMin(1, 10);
    }

    if (lowMedHigh == 1){  // Med Price
        return getRandomIntWithMin(10, 35);
    }

    if (lowMedHigh == 2){  // High Price
        return getRandomIntWithMin(50, 100);
    }

    if (lowMedHigh == 3){  // Xtra High Price
        return getRandomIntWithMin(100, 350);
    }
}

export function getRandomMensImage() {
    let random = getRandomIntWithMin(0, 2);
    switch (random) {
        case 0: {
            return '../../assets/images/mshopper1.jpg';
        };
        case 1: {
            return '../../assets/images/mshopper2.jpg';
        };
        case 3: {
            return '../../assets/images/mshopper3.jpg';
        };
        default: {
            return '../../assets/images/mshopper1.jpg';
        }
    };
}

export function getRandomWomensImage() {
    let random = getRandomIntWithMin(0, 2);
    switch (random) {
        case 0: {
            return '../../assets/images/wshopper1.jpg';
        };
        case 1: {
            return '../../assets/images/wshopper2.jpg';
        };
        case 3: {
            return '../../assets/images/wshopper3.jpg';
        };
        default: {
            return '../../assets/images/wshopper1.jpg';
        }
    };
}

export function getRandomShirtImage(profile?: string){

    if (profile == 'womens') {
        let randomPick = getRandomIntWithMin(0,12);
        if(randomPick == 0) {
            return "../../assets/images/wshirt1.jpg";
        };
        if(randomPick == 1) {
            return "../../assets/images/wshirt2.jpg";
        };
        if(randomPick == 2) {
            return "../../assets/images/wshirt3.jpg";
        }
        if(randomPick == 3) {
            return "../../assets/images/wshirt4.jpg";
        }
        if(randomPick == 4) {
            return "../../assets/images/wshirt5.jpg";
        }
        if(randomPick == 5) {
            return "../../assets/images/wshirt6.jpg";
        }
        if(randomPick == 6) {
            return "../../assets/images/wshirt7.webp";
        }
        if(randomPick == 7) {
            return "../../assets/images/wshirt8.jpg";
        }
        if(randomPick == 8) {
            return "../../assets/images/wshirt10.webp";
        }
        if(randomPick == 9) {
            return "../../assets/images/wshirt11.webp";
        }
        if(randomPick == 10) {
            return "../../assets/images/wshirt12.png";
        }
        if(randomPick == 11) {
            return "../../assets/images/wshirt13.webp";
        }
        if(randomPick == 12) {
            return "../../assets/images/wshirt14.webp";
        }
        else {
            return "../../assets/images/wshirt15.jpg"
        }
    }

    let randomPick = getRandomIntWithMin(0,9);
    if(randomPick == 0) {
        return "../../assets/images/shirt1.jpg";
    };
    if(randomPick == 1) {
        return "../../assets/images/shirt2.jpg";
    };
    if(randomPick == 2) {
        return "../../assets/images/shirt3.jpg";
    }
    if(randomPick == 3) {
        return "../../assets/images/shirt4.jpg";
    }
    if(randomPick == 4) {
        return "../../assets/images/shirt5.jpg";
    }
    if(randomPick == 5) {
        return "../../assets/images/shirt6.jpg";
    }
    if(randomPick == 6) {
        return "../../assets/images/shirt7.jpg";
    }
    if(randomPick == 7) {
        return "../../assets/images/shirt8.jpg";
    }
    if(randomPick == 8) {
        return "../../assets/images/shirt9.jpg";
    }
    if(randomPick == 9) {
        return "../../assets/images/shirt10.jpg";
    }
    else {
        return "../../assets/images/shirt2.jpg"
    }

}

export function getRandomPantsImage(profile?: string){

    if (profile == 'womens') {
        let pantsPick = getRandomIntWithMin(0,9);
        if(pantsPick == 0) {
            return "../../assets/images/wpants1.jpg";
        };
        if(pantsPick == 1) {
            return "../../assets/images/wpants2.jpg";
        };
        if(pantsPick == 2) {
            return "../../assets/images/wpants3.jfif";
        }
        if(pantsPick == 3) {
            return "../../assets/images/wpants4.jpg";
        }
        if(pantsPick == 4) {
            return "../../assets/images/wpants5.jpg";
        }
        if(pantsPick == 5) {
            return "../../assets/images/wpants6.jpg";
        }
        if(pantsPick == 6) {
            return "../../assets/images/wpants7.webp";
        }
        if(pantsPick == 7) {
            return "../../assets/images/wpants8.webp";
        }
        if(pantsPick == 8) {
            return "../../assets/images/wpants9.webp";
        }
        else {
            return "../../assets/images/wpants10.webp";
        }

    }

    else {
        let pantsPick = getRandomIntWithMin(0,9);
        if(pantsPick == 0) {
            return "../../assets/images/pants1.jpg";
        };
        if(pantsPick == 1) {
            return "../../assets/images/pants2.jpg";
        };
        if(pantsPick == 2) {
            return "../../assets/images/pants3.jpg";
        }
        if(pantsPick == 3) {
            return "../../assets/images/pants4.jpg";
        }
        if(pantsPick == 4) {
            return "../../assets/images/pants5.webp";
        }
        if(pantsPick == 5) {
            return "../../assets/images/pants6.webp";
        }
        if(pantsPick == 6) {
            return "../../assets/images/pants7.jpg";
        }
        if(pantsPick == 7) {
            return "../../assets/images/pants8.jpg";
        }
        if(pantsPick == 8) {
            return "../../assets/images/pants9.webp";
        }
        else {
            return "../../assets/images/pants4.jpg";
        }
    }
}

export function getRandomShoesImage(profile?: string){

    if (profile == 'womens') {
        let randomPick = getRandomIntWithMin(0,11);
        if(randomPick == 0) {
            return "../../assets/images/wshoes1.png";
        };
        if(randomPick == 1) {
            return "../../assets/images/wshoes2.png";
        };
        if(randomPick == 2) {
            return "../../assets/images/wshoes3.png";
        }
        if(randomPick == 3) {
            return "../../assets/images/wshoes4.png";
        }
        if(randomPick == 4) {
            return "../../assets/images/wshoes5.jpg";
        }
        if(randomPick == 5) {
            return "../../assets/images/wshoes6.jpg";
        }
        if(randomPick == 6) {
            return "../../assets/images/wshoes7.webp";
        }
        if(randomPick == 7) {
            return "../../assets/images/wshoes8.webp";
        }
        if(randomPick == 8) {
            return "../../assets/images/wshoes9.webp";
        }
        else {
            return "../../assets/images/wshoes10.webp"
        }
    }

    else {
        let randomPick = getRandomIntWithMin(0,6);
        if(randomPick == 0) {
            return "../../assets/images/shoes1.webp";
        };
        if(randomPick == 1) {
            return "../../assets/images/shoes2.jfif";
        };
        if(randomPick == 2) {
            return "../../assets/images/shoes4.jpg";
        }
        if(randomPick == 3) {
            return "../../assets/images/shoes5.jpg";
        }
        if(randomPick == 4) {
            return "../../assets/images/shoes6.jpg";
        }
        if(randomPick == 5) {
            return "../../assets/images/shoes8.webp";
        }
        if(randomPick == 6) {
            return "../../assets/images/shoes9.webp";
        }
        else {
            return "../../assets/images/shoes2.jpg"
        }
    }
}
export function getRandomSocksImage(profile?: string){

    if (profile == 'womens') {
        let randomPick = getRandomIntWithMin(0,5);
        if(randomPick == 0) {
            return "../../assets/images/wsocks1.webp";
        };
        if(randomPick == 1) {
            return "../../assets/images/wsocks2.jfif";
        };
        if(randomPick == 2) {
            return "../../assets/images/wsocks3.jpeg";
        }
        if(randomPick == 3) {
            return "../../assets/images/wsocks4.webp";
        }
        if(randomPick == 4) {
            return "../../assets/images/wsocks5.jfif";
        }
        else {
            return "../../assets/images/wsocks2.jfif"
        }
    }

    else {
        let randomPick = getRandomIntWithMin(0,5);
        if(randomPick == 0) {
            return "../../assets/images/socks1.jpg";
        };
        if(randomPick == 1) {
            return "../../assets/images/socks2.webp";
        };
        if(randomPick == 2) {
            return "../../assets/images/socks3.jpg";
        }
        if(randomPick == 3) {
            return "../../assets/images/socks4.jpg";
        }
        if(randomPick == 4) {
            return "../../assets/images/socks5.jpg";
        }
        if(randomPick == 5) {
            return "../../assets/images/socks6.webp";
        }
        else {
            return "../../assets/images/socks2.jpg"
        }
    }

}
export function getRandomJacketImage(profile?: string){

    if (profile == 'womens') {

        let randomPick = getRandomIntWithMin(1,10);
        if(randomPick == 0) {
            return "../../assets/images/wdress1.webp";
        };
        if(randomPick == 1) {
            return "../../assets/images/wdress2.webp";
        };
        if(randomPick == 2) {
            return "../../assets/images/wdress3.webp";
        }
        if(randomPick == 3) {
            return "../../assets/images/wdress4.webp";
        }
        if(randomPick == 4) {
            return "../../assets/images/wdress5.webp";
        }
        if(randomPick == 5) {
            return "../../assets/images/wdress6.jfif";
        }
        else {
            return "../../assets/images/wdress2.webp"
        }

    }

    else {
        let randomPick = getRandomIntWithMin(1,10);
        if(randomPick == 0) {
            return "../../assets/images/jacket1.webp";
        };
        if(randomPick == 1) {
            return "../../assets/images/jacket2.jpg";
        };
        if(randomPick == 2) {
            return "../../assets/images/jacket3.jpg";
        }
        if(randomPick == 3) {
            return "../../assets/images/jacket4.jpg";
        }
        if(randomPick == 4) {
            return "../../assets/images/jacket5.webp";
        }
        if(randomPick == 5) {
            return "../../assets/images/jacket6.jpg";
        }
        else {
            return "../../assets/images/jacket2.jpg"
        }    
    }
}
export function getRandomMiscImage(profile?: string){

    if (profile == 'womens') {
        let randomPick = getRandomIntWithMin(0,10);
        if(randomPick == 0) {
            return "../../assets/images/wmisc1.JPG";
        };
        if(randomPick == 1) {
            return "../../assets/images/wmisc2.webp";
        };
        if(randomPick == 2) {
            return "../../assets/images/wmisc3.webp";
        }
        if(randomPick == 3) {
            return "../../assets/images/wmisc4.webp";
        }
        if(randomPick == 4) {
            return "../../assets/images/wmisc5.jpeg";
        }
        if(randomPick == 5) {
            return "../../assets/images/wmisc6.png";
        }
        if(randomPick == 6) {
            return "../../assets/images/wmisc7.webp";
        }
        if(randomPick == 7) {
            return "../../assets/images/wmisc8.webp";
        }
        if(randomPick == 8) {
            return "../../assets/images/wmisc9.jpg";
        }
        if(randomPick == 9) {
            return "../../assets/images/wmisc10.webp";
        }
        else {
            return "../../assets/images/wmisc2.webp"
        }
    }
    
    else {
        let randomPick = getRandomIntWithMin(0,9);
        if(randomPick == 0) {
            return "../../assets/images/misc1.webp";
        };
        if(randomPick == 1) {
            return "../../assets/images/misc2.jpg";
        };
        if(randomPick == 2) {
            return "../../assets/images/misc3.jpg";
        }
        if(randomPick == 3) {
            return "../../assets/images/misc4.jpg";
        }
        if(randomPick == 4) {
            return "../../assets/images/misc5.png";
        }
        if(randomPick == 5) {
            return "../../assets/images/misc6.jpg";
        }
        if(randomPick == 6) {
            return "../../assets/images/misc7.jpg";
        }
        if(randomPick == 7) {
            return "../../assets/images/misc8.jpg";
        }
        if(randomPick == 8) {
            return "../../assets/images/misc9.jpg";
        }
        if(randomPick == 9) {
            return "../../assets/images/misc10.jpg";
        }
        else {
            return "../../assets/images/misc2.jpg"
        }
    }

}