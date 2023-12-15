import { Component, OnInit } from '@angular/core';
import { UserdetailsService } from '../userdetails.service';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  checkUserData:any;
  constructor(private userApi : UserdetailsService, private form : FormBuilder, private rout : Router){}
  ngOnInit(): void {
    this.checkUserData = this.form.group({
      email :[''],
      password:['']
    })
  }
checkData(){
  this.userApi.getAllUsers(this.checkUserData.value).subscribe((res:any)=>{
    if(res == true){
      this.rout.navigate(['/home'])
    }else{
      alert("Invalid email or password")
    }
  })
}
}
