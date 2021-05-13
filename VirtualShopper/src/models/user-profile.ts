import { Address } from "./address";

export class UserProfile {
    public profilePictureURL?: string = null;
    public userName: string = null;
    public firstName: string = null;
    public lastName: string = null;
    public address?: Address = new Address();
    public phoneNumber?: number = null;
    public email?: string = null;
    public bio?: string = null;
    public shirtSize?: string = null;
    public shirtFit?: string = null;
    public pantLength?: number = null;
    public pantWidth?: number = null;
    public pantSize?: string = null;
    public shoeSize?: number = null;

    constructor(initialValues?: Partial<UserProfile>) {
        if (initialValues) Object.assign(this, initialValues);
    }
}