import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-profile-select',
  templateUrl: './profile-select.component.html',
  styleUrls: ['./profile-select.component.css']
})
export class ProfileSelectComponent implements OnInit {
  @Output() profileSelect = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  selectMensMisc() {
    this.profileSelect .emit('mensMisc');
  }

  selectWomens() {
    this.profileSelect .emit('womens');
  }
}
