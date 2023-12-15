import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-adminprofile',
  templateUrl: './adminprofile.component.html',
  styleUrls: ['./adminprofile.component.css']
})
export class AdminprofileComponent implements OnInit{
  Data:any;
  constructor(private callprd : AdminService){}
  ngOnInit(): void {
    this.callprd.prdforadmin().subscribe((result)=>{
      this.Data = result;
    })
  }
_delete(productId:number){
  this.callprd.prdDeleteOneData(productId).subscribe((result)=>{
    console.log(result);
    
  })
}
}
