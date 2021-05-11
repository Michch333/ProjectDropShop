import { Component, OnInit } from '@angular/core';
import { UserProfile } from '../interfaces'

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  constructor() {
   }

  userProfile: UserProfile = {
    profilePictureURL: '',
    userName: '',
    firstName: '',
    lastName: '',
    address: null,
    phoneNumber: 0,
    bio: '',
    shirtSize: '',
    shirtFit: '',
    pantLength: 0,
    pantWidth: 0,
    pantSize: '',
    shoeSize: 0
  };


createProfile(firstName: string, lastName: string, bio: string, shirtSize: string, shirtFit: string, phoneNumber: number){
  this.userProfile.firstName = firstName;
  this.userProfile.lastName = lastName;
  this.userProfile.bio = bio;
  this.userProfile.shirtSize = shirtSize;
  this.userProfile.shirtFit = shirtFit;
  this.userProfile.phoneNumber = phoneNumber;

  this.printProfile();
}

printProfile(){
  console.log(this.userProfile);
}

  ngOnInit(): void {
  }


}
;