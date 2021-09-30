import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicProductComponent } from './basic-product.component';

describe('BasicProductComponent', () => {
  let component: BasicProductComponent;
  let fixture: ComponentFixture<BasicProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
