import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { ShoppedBox } from '../user-dashboard/user-dashboard.component';
import { Observable } from 'rxjs';

const url = 'localhost:3000';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {

  }

  getUsers(){}
  getShoppedBoxes(): Observable<HttpResponse<ShoppedBox[]>>{
    return this.http.get<ShoppedBox[]>('localhost:3000/shoppedBoxes', {observe: 'response'});
  }
}
