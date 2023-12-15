import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductApiService } from '../product-item/product-api.service';

@Component({
  selector: 'app-oneproductdetail',
  templateUrl: './oneproductdetail.component.html',
  styleUrls: ['./oneproductdetail.component.css'],
})
export class OneproductdetailComponent implements OnInit {
  oneID: any;
  getDetail: any;
  constructor(private api: ProductApiService, private active: ActivatedRoute) {}
  ngOnInit(): void {
    this.oneID = this.active.snapshot.params['data'];
    console.log(this.oneID);

    this.api.oneUpdateData(this.oneID).subscribe((res) => {
      this.getDetail = res;
    });
  }
}
