import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent {

  constructor(private breakpointObserver: BreakpointObserver, private apiService: ApiService) {
    this.testData = [];
  }

  ngOnInit(){
    this.apiResponse = this.apiService.getShoppedBoxes()
      .subscribe(data => {
        for (const d of (data as any)){
          var tempBox = new ShoppedBox();
          tempBox.price = d.price;
          tempBox.boxId = d.boxId;
          tempBox.requestorId = d.requestorId;
          tempBox.shopperId = d.shopperId;
          this.testData.push(tempBox);
        }
      });
    console.log(this.testData)
  }


  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'My Profile', cols: 1, rows: 1 },
          { title: 'Card 2', cols: 1, rows: 1 },
          { title: 'Card 3', cols: 1, rows: 1 },
          { title: 'Card 4', cols: 1, rows: 1 }
        ];
      }

      return [
        { title: 'My Profile', cols: 2, rows: 1 },
        { title: 'Card 2', cols: 1, rows: 1 },
        { title: 'Card 3', cols: 1, rows: 2 },
        { title: 'Card 4', cols: 1, rows: 1 }
      ];
    })
  );
testData: ShoppedBox [];
apiResponse: any;
};

export class ShoppedBox {
  boxId: string;
  shopperId: string;
  requestorId: string;
  items: Item[];
  price: number;
};

export class Item {
  type: string;
  thumbnailUrl: string;
  price: number;
  brand: string;
}
