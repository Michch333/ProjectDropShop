import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Box } from 'src/app/models/box-model';

@Component({
  selector: 'app-filtered-results',
  templateUrl: './filtered-results.component.html',
  styleUrls: ['./filtered-results.component.css']
})
export class FilteredResultsComponent implements OnInit {
  @Input('boxes') filteredBoxes: Box[];
  @Output() sentIndvBox = new EventEmitter<Box>();
  constructor() { }

  ngOnInit(): void {
    
  }

  viewIndividualBox(event){
    var box: Box;
    this.filteredBoxes.forEach(z => {
      if (z.boxId == event){
        box = z;
      }
    });
    this.sentIndvBox.emit(box);
  }


}
