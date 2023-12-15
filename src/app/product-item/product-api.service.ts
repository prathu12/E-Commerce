import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductApiService {

  constructor(private http: HttpClient) { }
  prdFunction() {
    return this.http.get('http://localhost:8000/showProduct')
  }
  oneUpdateData(data: any) {
    let obj = { id: data }
    return this.http.post('http://localhost:8000/selectOneData/', obj)
  }
}
