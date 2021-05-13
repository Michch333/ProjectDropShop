import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserProfile } from 'src/models/user-profile';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
})
export class UserProfileComponent implements OnInit {
  public shirtSizes: string[] = ['XS', 'S', 'M', 'L', 'XL'];
  public shirtFits: string[] = ['Tight', 'Loose'];
  public userProfileForm: FormGroup = new FormGroup({
    firstName: new FormControl(null, [Validators.required]),
    lastName: new FormControl(null, [Validators.required]),
    email: new FormControl(null, [Validators.email, Validators.required]),
    bio: new FormControl(null, [Validators.required]),
    shirtSize: new FormControl(null, [Validators.required]),
    shirtFit: new FormControl(null, [Validators.required]),
    phoneNumber: new FormControl(null, [Validators.required]),
  });;

  constructor() {}

  public cancelled(e) {
    e.preventDefault();
    this.userProfileForm.reset();
  }

  public profileFormSubmitted() {
    console.log(this.userProfileForm);
  }

  public ngOnInit(): void {
  }
}
