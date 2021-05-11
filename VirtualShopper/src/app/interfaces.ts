export interface UserProfile {
    profilePictureURL? : string;
    userName: string;
    firstName: string;
    lastName: string;
    address?: Address;
    phoneNumber?: number;
    email?: string;
    bio?: string;
    shirtSize?: string;
    shirtFit?: string;
    pantLength?: number;
    pantWidth?: number;
    pantSize?: string;
    shoeSize?: number;
}

export interface Address {
    houseNumber: string;
    street: string;
    city: string;
    zip: string;
    state: string;
}