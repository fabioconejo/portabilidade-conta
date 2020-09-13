import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerguntaPortabilidadeComponent } from './pergunta-portabilidade.component';

describe('PerguntaPortabilidadeComponent', () => {
  let component: PerguntaPortabilidadeComponent;
  let fixture: ComponentFixture<PerguntaPortabilidadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerguntaPortabilidadeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PerguntaPortabilidadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
