import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Box } from 'src/app/models/box-model';

@Component({
  selector: 'app-user-dash',
  templateUrl: './user-dash.component.html',
  styleUrls: ['./user-dash.component.css']
})
export class UserDashComponent implements OnInit {
  @Input('boxes') filteredBoxes: Box[];
  @Output() viewResults = new EventEmitter<boolean>();
  @Output() createRequest = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit(): void {
  }

  ViewProfile(){
    alert("Works!")
  }

  CreateRequest(){
    this.createRequest.emit(true);
  }

  ViewActiveRequests(){
    alert("Works!")
  }

  ViewResults(){
    this.viewResults.emit(true);
  }

}
