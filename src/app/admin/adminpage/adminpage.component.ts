import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminpage',
  templateUrl: './adminpage.component.html',
  styleUrls: ['./adminpage.component.css']
})
export class AdminpageComponent implements OnInit{
  checkUserData:any;
  constructor(private adminser : AdminService, private form : FormBuilder, private rout : Router){}
  ngOnInit(): void {
    this.checkUserData = this.form.group({
      email :[''],
      password:['']
    })
  }
checkData(){
  this.adminser.getAllUsers(this.checkUserData.value)
}
}
