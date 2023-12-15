import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserdetailsService {

  constructor(private http : HttpClient, private rout: Router) { }
  addUserDetail(userData:any){
    return this.http.post('http://localhost:8000/addUserData',userData)
  }
  getAllUsers(check:any){
    return this.http.post('http://localhost:8000/login', check)
}
}