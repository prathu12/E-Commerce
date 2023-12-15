import { Component, OnInit } from '@angular/core';

import { FormBuilder } from '@angular/forms';
import { UserdetailsService } from '../userdetails.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit{
  sendData:any;
  constructor(private userApi : UserdetailsService, private fb : FormBuilder){}
  ngOnInit(): void {
    this.sendData = this.fb.group({
      name : [''],
      contact :[''],
      email: [''],
      password : ['']
    })
  }
  subForm(){
    this.userApi.addUserDetail(this.sendData.value).subscribe((res)=>{
      console.log(res);
      
    })
  }
  
  
}
