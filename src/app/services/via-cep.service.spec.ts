import { TestBed } from '@angular/core/testing';

import { ViaCepService } from './via-cep.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { SnackBarService } from './snack-bar.service';
import { Endereco } from '../shared/models/endereco.model';

describe('ViaCepService', () => {
  let service: ViaCepService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, MatSnackBarModule],
      providers: [ViaCepService, SnackBarService]
    });

    service = TestBed.get(ViaCepService);
    httpMock = TestBed.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should retrieve the address from the API via GET', () => {
    const mockEndereco: Endereco = { cep: '12345-678', logradouro: 'Rua Teste', ... };

    service.buscaCep('12345-678').subscribe((endereco) => {
      expect(endereco).toEqual(mockEndereco);
    });

    const req = httpMock.expectOne('https://viacep.com.br/ws/12345-678/json');
    expect(req.request.method).toBe('GET');
    req.flush(mockEndereco);
  });

  it('should handle error when API fails', () => {
    service.buscaCep('12345-678').subscribe(
      () => fail('Deveria ter ocorrido um erro'),
      (error) => {
        expect(error).toBeTruthy();
      }
    );

    const req = httpMock.expectOne('https://viacep.com.br/ws/12345-678/json');
    req.flush('Erro no servidor', { status: 500, statusText: 'Server Error' });
  });
});
