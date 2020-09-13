import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AberturaContaComponent } from './abertura-conta.component';

describe('AberturaContaComponent', () => {
  let component: AberturaContaComponent;
  let fixture: ComponentFixture<AberturaContaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AberturaContaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AberturaContaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
