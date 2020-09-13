import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumoPortabilidadeComponent } from './resumo-portabilidade.component';

describe('ResumoPortabilidadeComponent', () => {
  let component: ResumoPortabilidadeComponent;
  let fixture: ComponentFixture<ResumoPortabilidadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResumoPortabilidadeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumoPortabilidadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
