import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EscolhaAberturaComponent } from './escolha-abertura.component';

describe('EscolhaAberturaComponent', () => {
  let component: EscolhaAberturaComponent;
  let fixture: ComponentFixture<EscolhaAberturaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EscolhaAberturaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EscolhaAberturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
