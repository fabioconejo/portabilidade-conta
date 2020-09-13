import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortabilidadeExportacaoComponent } from './portabilidade-exportacao.component';

describe('PortabilidadeExportacaoComponent', () => {
  let component: PortabilidadeExportacaoComponent;
  let fixture: ComponentFixture<PortabilidadeExportacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortabilidadeExportacaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PortabilidadeExportacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
