import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient) { }
  getData() {
    return this.http.get('http://localhost:8000/showProduct')
}
  getOnData(id:any) {
    return this.http.get('http://localhost:8000/showProduct', id)
}
}
