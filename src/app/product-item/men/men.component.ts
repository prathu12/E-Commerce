import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-men',
  templateUrl: './men.component.html',
  styleUrls: ['./men.component.css']
})
export class MenComponent implements OnInit{
  Data:any;
  constructor(private api : ApiService, private rout : Router){}
  ngOnInit(): void {
    this.api.getData().subscribe((res)=>{
      this.Data = res;
    })
  }
}