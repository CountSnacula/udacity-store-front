import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartUserDetailComponent } from './cart-user-detail.component';

describe('CartUserDetailComponent', () => {
  let component: CartUserDetailComponent;
  let fixture: ComponentFixture<CartUserDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartUserDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartUserDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
