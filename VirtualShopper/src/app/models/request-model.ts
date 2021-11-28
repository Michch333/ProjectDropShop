import { ClothingType } from "./clothing-type-model";

export class bRequest {
    constructor (requestedItems: ClothingType[] = [], requestDetails: string = '', targetPrice: number = 0, shirtNotes?: string, pantsNotes?: string) {
        this.requestId = 1;
        this.requestorId = 0;
        this.requestedItems = requestedItems;
        this.requestDetails = requestDetails;
        this.targetPrice = targetPrice;
        this.shirtNotes = shirtNotes;
    }
    requestorId: number;
    requestId: number;
    requestDetails: string;
    requestedItems: ClothingType[];
    shirtNotes?: string;
    pantsNotes?: string;
    shoesNotes?: string;
    socksNotes?: string;
    jacketNotes?: string;
    miscNotes?: string;
    targetPrice: number;
}