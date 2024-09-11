import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { EnderecoService } from './endereco.service';
import { SnackBarService } from './snack-bar.service';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { Endereco } from '../shared/models/endereco.model';

describe('EnderecoService', () => {
  let service: EnderecoService;
  let httpMock: HttpTestingController;
  let mockSnackBarService: jasmine.SpyObj<SnackBarService>;

  mockSnackBarService = jasmine.createSpyObj('SnackBarService', ['openSnackBar']);
  
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule ],
      providers: [EnderecoService, { provide: SnackBarService, useValue: mockSnackBarService }]
    });

    service = TestBed.get(EnderecoService);
    httpMock = TestBed.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    const service: EnderecoService = TestBed.get(EnderecoService);
    expect(service).toBeTruthy();
  });

  describe('salvarEndereco', () => {
    it('should save endereco and return it', () => {
      const enderecoMock: Endereco = { id: '1', cep: '12345678', logradouro: 'Rua A', complemento: '', bairro: 'Bairro A', localidade: 'Cidade A', estado: 'Estado A', ddd: '11', uf: 'SP' };

      service.salvarEndereco(enderecoMock).subscribe(data => {
        expect(data).toEqual(enderecoMock);
      });

      const req = httpMock.expectOne('http://localhost:3000/enderecos/');
      expect(req.request.method).toBe('POST');
      expect(req.request.body).toEqual(enderecoMock);
      req.flush(enderecoMock);
    });
  });

  describe('buscarEndereco', () => {
    it('should fetch enderecos and return them', () => {
      const enderecosMock: Endereco[] = [
        { id: '1', cep: '12345678', logradouro: 'Rua A', complemento: '', bairro: 'Bairro A', localidade: 'Cidade A', estado: 'Estado A', ddd: '11', uf: 'SP' },
        { id: '2', cep: '87654321', logradouro: 'Rua B', complemento: '', bairro: 'Bairro B', localidade: 'Cidade B', estado: 'Estado B', ddd: '21', uf: 'SP' }
      ];

      service.buscarEnderecos().subscribe(data => {
        expect(data).toEqual(enderecosMock);
      });

      const req = httpMock.expectOne('http://localhost:3000/enderecos/');
      expect(req.request.method).toBe('GET');
      req.flush(enderecosMock);
    });
  });

  describe('removeEndereco', () => {
    it('should remove endereco and return void', () => {
      const id = '1';

      service.removeEndereco(id).subscribe(response => {
        expect(response).toBeNull();
      });

      const req = httpMock.expectOne(`http://localhost:3000/enderecos/${id}`);
      expect(req.request.method).toBe('DELETE');
      req.flush(null);
    });
  });


});
