import { Component, Input, OnInit } from '@angular/core';
import { Box } from 'src/app/models/box-model';

@Component({
  selector: 'app-filtered-results',
  templateUrl: './filtered-results.component.html',
  styleUrls: ['./filtered-results.component.css']
})
export class FilteredResultsComponent implements OnInit {
  @Input('boxes') filteredBoxes: Box[];
  constructor() { }

  ngOnInit(): void {
    
  }


}
