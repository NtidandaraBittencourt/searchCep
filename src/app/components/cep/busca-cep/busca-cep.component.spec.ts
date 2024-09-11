import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { of, throwError } from 'rxjs';
import { BuscaCepComponent } from './busca-cep.component';
import { ViaCepService } from 'src/app/services/via-cep.service';
import { EnderecoService } from 'src/app/services/endereco.service';
import { SnackBarService } from 'src/app/services/snack-bar.service';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { Endereco } from 'src/app/shared/models/endereco.model';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('BuscaCepComponent', () => {
  let component: BuscaCepComponent;
  let fixture: ComponentFixture<BuscaCepComponent>;
  let httpMock: HttpTestingController;
  let viaCepService: jasmine.SpyObj<ViaCepService>;

  let enderecoMock: any;

  beforeEach(async () => {
    const viaCepServiceSpy = jasmine.createSpyObj('ViaCepService', ['buscaCep']);
    const enderecoServiceSpy = jasmine.createSpyObj('EnderecoService', ['salvarEndereco', 'notificarEnderecoAtualizado', 'buscarEnderecos', 'getEnderecoAtualizado']);
    const snackBarServiceSpy = jasmine.createSpyObj('SnackBarService', ['openSnackBar']);

    enderecoServiceSpy.buscarEnderecos.and.returnValue(of([]));
    enderecoServiceSpy.getEnderecoAtualizado.and.returnValue(of([]));

    enderecoMock = {
      id: '1',
      cep: '12345678',
      logradouro: 'Rua A',
      complemento: '',
      bairro: 'Bairro A',
      localidade: 'Cidade A',
      estado: 'Estado A',
      ddd: '11',
      uf: 'SP'
    };

    // spyOn(viaCepService, 'buscaCep').and.returnValue(of(enderecoMock));

    await TestBed.configureTestingModule({
      declarations: [BuscaCepComponent],
      imports: [
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        NoopAnimationsModule,
        HttpClientTestingModule
      ],
      providers: [
        { provide: ViaCepService, useValue: viaCepServiceSpy },
        { provide: EnderecoService, useValue: enderecoServiceSpy },
        { provide: SnackBarService, useValue: snackBarServiceSpy }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();

    fixture = TestBed.createComponent(BuscaCepComponent);
    component = fixture.componentInstance;
    httpMock = TestBed.get(HttpTestingController);
    viaCepService = TestBed.get(ViaCepService) as jasmine.SpyObj<ViaCepService>;
    fixture.detectChanges();
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should invalidate the form when cep input is incorrect', () => {
    const cepControl = component.buscaCepForm.controls['cep'];

    cepControl.setValue('123');
    expect(component.buscaCepForm.invalid).toBe(true);

    cepControl.setValue('12345678');
    expect(component.buscaCepForm.valid).toBe(true);
  });

  // it('should set carregando to true at the start and false at the end of the request when form is valid', () => {
  //   component.buscaCepForm.controls['cep'].setValue('12345678');
  //   component.buscarCep();

  //   expect(component.carregando).toBe(true);

  //   const req = httpMock.expectOne('https://viacep.com.br/ws/12345678/json');
  //   expect(req.request.method).toBe('GET');
  //   req.flush(enderecoMock);

  //   fixture.whenStable().then(() => {
  //     expect(component.carregando).toBe(false);
  //   });
  // });

  it('should handle errors correctly', () => {
    spyOn(component, 'hasError').and.callThrough();
    const cep = '12345678';
    component.buscaCepForm.controls['cep'].setValue(cep);

    (viaCepService.buscaCep as jasmine.Spy).and.returnValue(throwError(() => new Error('Erro de teste')));

    component.buscarCep();

    expect(component.hasError).toHaveBeenCalled();
  });

  it('should not set carregando to true if form is invalid', () => {
    component.buscaCepForm.controls['cep'].setValue('123');
    component.buscarCep();

    expect(component.carregando).toBe(false);
  });

  // it('should call viaCepService and salvarEndereco on successful search', () => {
  //   spyOn(component, 'salvarEndereco').and.callThrough();
  //   const enderecoMock: Endereco = {
  //     id: '1',
  //     cep: '12345678',
  //     logradouro: 'Rua A',
  //     complemento: '',
  //     bairro: 'Bairro A',
  //     localidade: 'Cidade A',
  //     estado: 'Estado A',
  //     ddd: '11',
  //     uf: 'SP'
  //   };

  //   (viaCepService.buscaCep as jasmine.Spy).and.returnValue(of(enderecoMock));

  //   component.buscaCepForm.controls['cep'].setValue('12345678');
  //   component.buscarCep();

  //   const req = httpMock.expectOne(`https://viacep.com.br/ws/12345678/json`);
  //   req.flush(enderecoMock);

  //   expect(component.salvarEndereco).toHaveBeenCalledWith(enderecoMock);
  // });

  // it('should handle error by calling hasError method', () => {
  //   spyOn(component, 'hasError').and.callThrough();
  //   const cep = '12345678';
  //   component.buscaCepForm.setValue({ cep: cep });

  //   (viaCepService.buscaCep as jasmine.Spy).and.returnValue(throwError(() => new Error('Erro ao buscar CEP')));

  //   component.buscarCep();

  //   const req = httpMock.expectOne(`https://viacep.com.br/ws/${cep}/json`);
  //   req.flush({ erro: true }, { status: 400, statusText: 'Bad Request' });

  //   expect(component.hasError).toHaveBeenCalled();
  // });

  // it('should show error message when saving address fails', () => {
  //   const enderecoMock: Endereco = {
  //     id: '1',
  //     cep: '12345678',
  //     logradouro: 'Rua A',
  //     complemento: '',
  //     bairro: 'Bairro A',
  //     localidade: 'Cidade A',
  //     estado: 'Estado A',
  //     ddd: '11',
  //     uf: 'SP'
  //   };

  //   enderecoService.salvarEndereco.and.returnValue(throwError(() => new Error('Erro ao salvar endereço')));

  //   component.salvarEndereco(enderecoMock);

  //   expect(snackBarService.openSnackBar).toHaveBeenCalledWith('Não foi possivel adicionar o CEP na sua lista', 'error');
  // });

  // it('should submit form and call buscarCep()', () => {
  //   spyOn(component, 'buscarCep');
  //   component.buscaCepForm.controls['cep'].setValue('12345-678');
  //   fixture.debugElement.nativeElement.querySelector('button[type="submit"]').click();
  //   expect(component.buscarCep).toHaveBeenCalled();
  // });
});
