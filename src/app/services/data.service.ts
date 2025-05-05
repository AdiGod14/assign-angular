import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  // free mock api created to demonstrate using mocky.io
  private apiUrl = 'https://run.mocky.io/v3/43822ec9-88e2-4aa7-8f64-5c04936d73e8'; 

  constructor(private http: HttpClient) {}
  // getPrices function will be used to fetch prices in other components
  getPrices(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
