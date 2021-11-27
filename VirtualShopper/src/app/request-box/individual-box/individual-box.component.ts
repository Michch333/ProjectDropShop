import { Component, Input, OnInit } from '@angular/core';
import { Box } from 'src/app/models/box-model';

@Component({
  selector: 'app-individual-box',
  templateUrl: './individual-box.component.html',
  styleUrls: ['./individual-box.component.css']
})
export class IndividualBoxComponent implements OnInit {
  @Input('box') box: Box = new Box;

  constructor() { }

  ngOnInit(): void {
  }

}
