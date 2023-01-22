import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-select-styled',
  templateUrl: './profile-select-styled.component.html',
  styleUrls: ['./profile-select-styled.component.css']
})
export class ProfileSelectStyledComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  subtitle: string = 'This will guide you through the experience as if you were a potential customer looking for new clothes. On the next screen you will specify your clothing options, budget, and any notes for the shopper!';
  

}
