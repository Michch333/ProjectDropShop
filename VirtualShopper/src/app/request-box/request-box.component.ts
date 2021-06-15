import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-request-box',
  templateUrl: './request-box.component.html',
  styleUrls: ['./request-box.component.css']
})
export class RequestBoxComponent implements OnInit {

  public requestBoxForm: FormGroup = new FormGroup({
    reason: new FormControl(null, [Validators.required]),
    budget: new FormControl(null, [Validators.required]),
    items: new FormGroup({
      name: new FormControl(null, []),
      notes: new FormControl(null, []),
      sizes: new FormControl(null, [])
    }),
    notes: new FormControl(null, null),
    size: new FormControl(null, [Validators.required])
  });

  public items: Item[] = [
    {name: 'Shirt', icon: 'looks_one', isSelected: false, sizes: ['XS', 'S', 'M', 'L', 'XL'], priority: 1},
    {name: 'Pants', icon: 'looks_two', isSelected: false, sizes: [28, 30, 32, 34, 36], priority: 2},
    {name: 'Shorts', icon: 'looks_3', isSelected: false, sizes: ['XS', 'S', 'M', 'L', 'XL'], priority: 3},
    {name: 'Shoes', icon: 'looks_4', isSelected: false, sizes: [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10.5, 11], priority: 4},
    {name: 'Socks', icon: 'looks_5', isSelected: false, sizes: ['XS', 'S', 'M', 'L', 'XL'], priority: 5},
    {name: 'Accessories', icon: 'looks_6', isSelected: false, sizes: [], priority: 6},
  ];
  
  sortBy() {
    return (this.items as Item[]).sort((a, b) => a.priority > b.priority ? 1 : a.priority === b.priority ? 0 : -1);
  }


  constructor() { }

  ngOnInit(): void {
  }
  requestFormSubmitted(): void {
    console.log(this.requestBoxForm)

  }
  public cancelled(e) {
    e.preventDefault();
    this.requestBoxForm.reset();
  }
}

export interface Item {
  name: string,
  icon?: string,
  isSelected: boolean,
  sizes: any[],
  priority: number
}
