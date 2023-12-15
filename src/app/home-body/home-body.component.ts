import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-body',
  templateUrl: './home-body.component.html',
  styleUrls: ['./home-body.component.css']
})
export class HomeBodyComponent implements OnInit{
  Data:any;
  constructor(private api : ApiService, private rout : Router){}
  ngOnInit(): void {
    this.api.getData().subscribe((res)=>{
      this.Data = res;
    })
  }
sendData(id:any){
  this.rout.navigate(['/oneData',id])
}
}
