import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { TableComponent } from './table.component';
import { Endereco } from '../../models/endereco.model';
import { SimpleChange } from '@angular/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorModule } from '@angular/material/paginator';

describe('TableComponent', () => {
  let component: TableComponent<Endereco>;
  let fixture: ComponentFixture<TableComponent<Endereco>>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TableComponent],
      imports: [MatPaginatorModule, NoopAnimationsModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent<TableComponent<Endereco>>(TableComponent);
    component = fixture.componentInstance;
    component.columns = ['cep', 'logradouro', 'bairro', 'localidade', 'estado'];
    component.data = [{
      id: '1',
      cep: '12345-678',
      logradouro: 'Rua 123',
      complemento: 'Apto 1',
      bairro: 'Centro',
      localidade: 'Cidade',
      estado: 'Estado',
      ddd: '11',
      uf: 'SP'
    }];
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize dataSource with the provided data', () => {
    expect(component.dataSource.data).toEqual(component.data);
  });

  it('should update dataSource when data changes', () => {
    const newData: Endereco[] = [{
      id: '2',
      cep: '87654-321',
      logradouro: 'Rua 456',
      complemento: 'Apto 2',
      bairro: 'Bairro Novo',
      localidade: 'Nova Cidade',
      estado: 'Novo Estado',
      ddd: '21',
      uf: 'RJ'
    }];
    component.ngOnChanges({
      data: new SimpleChange(null, newData, false),
    });
    expect(component.dataSource.data).toEqual(newData);
  });

  it('Emite o evento de remover, e remove o endereço da lista', () => {
    spyOn(component.onRemove, 'emit');
    const endereco: Endereco = {
      id: '1',
      cep: '12345-678',
      logradouro: 'Rua 123',
      complemento: 'Apto 1',
      bairro: 'Centro',
      localidade: 'Cidade',
      estado: 'Estado',
      ddd: '11',
      uf: 'SP'
    };
    component.removerEndereco(endereco);
    expect(component.onRemove.emit).toHaveBeenCalledWith(endereco);
  });

  it('should assign paginator after view init', () => {
    const paginator = fixture.debugElement.query(
      (el) => el.name === 'mat-paginator'
    ).componentInstance as MatPaginator;
    component.paginator = paginator;
    component.ngAfterViewInit();
    expect(component.dataSource.paginator).toBe(paginator);
  });
});
