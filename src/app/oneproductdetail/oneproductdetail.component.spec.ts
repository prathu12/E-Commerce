import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneproductdetailComponent } from './oneproductdetail.component';

describe('OneproductdetailComponent', () => {
  let component: OneproductdetailComponent;
  let fixture: ComponentFixture<OneproductdetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OneproductdetailComponent]
    });
    fixture = TestBed.createComponent(OneproductdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
