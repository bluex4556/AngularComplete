import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopcardComponent } from './shopcard.component';

describe('ShopcardComponent', () => {
  let component: ShopcardComponent;
  let fixture: ComponentFixture<ShopcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopcardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
