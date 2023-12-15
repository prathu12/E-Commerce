import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  getAllUsers: any;

  constructor(private http : HttpClient) { }
  prdforadmin(){
    return this.http.get('http://localhost:8000/showProduct')
  }
  prdDeleteOneData(prdId : number){
    let obj = {id : prdId}
    return this.http.post('http://localhost:8000/deleteonedata', obj)
  }
}
