export class Address {
    houseNumber: string = null;
    street: string = null;
    city: string = null;
    zip: string = null;
    state: string = null;

    constructor(initialValues?: Partial<Address>) {
        if (initialValues) Object.assign(this, initialValues);
    }
}