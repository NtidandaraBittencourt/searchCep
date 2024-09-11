import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ListaEnderecosComponent } from './lista-enderecos.component';
import { EnderecoService } from 'src/app/services/endereco.service';
import { SnackBarService } from 'src/app/services/snack-bar.service';
import { of, throwError } from 'rxjs';
import { Endereco } from 'src/app/shared/models/endereco.model';
import { By } from '@angular/platform-browser';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';


describe('ListaEnderecosComponent', () => {
  let component: ListaEnderecosComponent;
  let fixture: ComponentFixture<ListaEnderecosComponent>;
  let enderecoService: jasmine.SpyObj<EnderecoService>;
  let snackBarService: jasmine.SpyObj<SnackBarService>;

  beforeEach(async () => {
    const enderecoServiceSpy = jasmine.createSpyObj('EnderecoService', ['buscarEnderecos', 'getEnderecoAtualizado', 'removeEndereco']);
    const snackBarServiceSpy = jasmine.createSpyObj('SnackBarService', ['openSnackBar']);

    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ListaEnderecosComponent],
      providers: [
        { provide: EnderecoService, useValue: enderecoServiceSpy },
        { provide: SnackBarService, useValue: snackBarServiceSpy }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();

    fixture = TestBed.createComponent(ListaEnderecosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    enderecoService = TestBed.get(EnderecoService) as jasmine.SpyObj<EnderecoService>;
    snackBarService = TestBed.get(SnackBarService) as jasmine.SpyObj<SnackBarService>;

//   service.salvarEndereco(enderecoMock).subscribe(data => {
//     expect(data).toEqual(enderecoMock);
//   });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

//   it('should call buscarEnderecos on ngOnInit', () => {
//     spyOn(component, 'buscarEnderecos').and.callThrough();
//     component.ngOnInit();
//     expect(component.buscarEnderecos).toHaveBeenCalled();
//   });

//   // it('should fetch and update addresses on buscarEnderecos success', () => {
//   //   const mockEnderecos: Endereco[] = [
//   //     { id: '1', cep: '12345678', logradouro: 'Rua A', complemento: '', bairro: 'Bairro A', localidade: 'Cidade A', estado: 'Estado A', ddd: '11', uf: 'SP' }
//   //   ];
    
//   //   enderecoService.buscarEnderecos.and.returnValue(of(mockEnderecos));
//   //   enderecoService.getEnderecoAtualizado.and.returnValue(of(null));

//   //   component.buscarEnderecos();

//   //   expect(component.enderecos).toEqual(mockEnderecos.reverse());
//   //   expect(component.columns).toEqual(['cep', 'logradouro', 'complemento', 'bairro', 'localidade', 'estado', 'ddd', 'uf']);
//   //   expect(component.carregando).toBeFalsy();
//   // });

//   // it('should handle error in buscarEnderecos', () => {
//   //   enderecoService.buscarEnderecos.and.returnValue(throwError(() => new Error('Error')));
//   //   enderecoService.getEnderecoAtualizado.and.returnValue(of(null));

//   //   component.buscarEnderecos();

//   //   expect(component.carregando).toBeFalsy();
//   //   expect(snackBarService.openSnackBar).toHaveBeenCalledWith('Não foi possivel carregar os seus endereços salvos', 'error');
//   // });

//   // it('should call removeEndereco and update the list on success', () => {
//   //   const enderecoToRemove: Endereco = { id: '1', cep: '12345678', logradouro: 'Rua A', complemento: '', bairro: 'Bairro A', localidade: 'Cidade A', estado: 'Estado A', ddd: '11', uf: 'SP' };
    
//   //   enderecoService.removeEndereco.and.returnValue(of(null));
//   //   component.enderecos = [enderecoToRemove];

//   //   component.removerEndereco(enderecoToRemove);

//   //   expect(component.enderecos.length).toBe(0);
//   //   expect(snackBarService.openSnackBar).toHaveBeenCalledWith('Endereço excluido com sucesso!!', 'success');
//   // });

//   // it('should handle error in removeEndereco', () => {
//   //   const enderecoToRemove: Endereco = { id: '1', cep: '12345678', logradouro: 'Rua A', complemento: '', bairro: 'Bairro A', localidade: 'Cidade A', estado: 'Estado A', ddd: '11', uf: 'SP' };
    
//   //   enderecoService.removeEndereco.and.returnValue(throwError(() => new Error('Error')));
//   //   component.enderecos = [enderecoToRemove];

//   //   component.removerEndereco(enderecoToRemove);

//   //   expect(component.enderecos.length).toBe(1);
//   //   expect(snackBarService.openSnackBar).toHaveBeenCalledWith('Não foi possivel excluir o endereço', 'error');
  });
});
