import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimeiroLoginComponent } from './primeiro-login.component';

describe('PrimeiroLoginComponent', () => {
  let component: PrimeiroLoginComponent;
  let fixture: ComponentFixture<PrimeiroLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrimeiroLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimeiroLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
