export class Shopper {
    constructor(name: string, quip: string, rating: number) {
        this.name = name,
        this.quip = quip,
        this.rating = rating
    }
    name: string;
    quip: string;
    rating: number;
    imageURL: string;
}