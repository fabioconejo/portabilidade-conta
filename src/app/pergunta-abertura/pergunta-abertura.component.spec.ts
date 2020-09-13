import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerguntaAberturaComponent } from './pergunta-abertura.component';

describe('PerguntaAberturaComponent', () => {
  let component: PerguntaAberturaComponent;
  let fixture: ComponentFixture<PerguntaAberturaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerguntaAberturaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PerguntaAberturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
