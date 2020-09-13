import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfuguracaoComponent } from './confuguracao.component';

describe('ConfuguracaoComponent', () => {
  let component: ConfuguracaoComponent;
  let fixture: ComponentFixture<ConfuguracaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfuguracaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfuguracaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
