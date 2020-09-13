import { TestBed } from '@angular/core/testing';

import { PortabilidadeExportacaoService } from './portabilidade-exportacao.service';

describe('PortabilidadeExportacaoService', () => {
  let service: PortabilidadeExportacaoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PortabilidadeExportacaoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
