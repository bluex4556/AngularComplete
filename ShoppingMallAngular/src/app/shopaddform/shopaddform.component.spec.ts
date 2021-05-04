import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopaddformComponent } from './shopaddform.component';

describe('ShopaddformComponent', () => {
  let component: ShopaddformComponent;
  let fixture: ComponentFixture<ShopaddformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopaddformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopaddformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
