import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortabilidadeImportacaoComponent } from './portabilidade-importacao.component';

describe('PortabilidadeImportacaoComponent', () => {
  let component: PortabilidadeImportacaoComponent;
  let fixture: ComponentFixture<PortabilidadeImportacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortabilidadeImportacaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PortabilidadeImportacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
