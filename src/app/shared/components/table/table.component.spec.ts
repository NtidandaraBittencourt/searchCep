import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { TableComponent } from './table.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('TableComponent', () => {
  let component: TableComponent<any>;
  let fixture: ComponentFixture<TableComponent<any>>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        MatTableModule,
        MatPaginatorModule,
        MatIconModule
      ],
      declarations: [TableComponent],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should display data in the table', fakeAsync(() => {
  //   const data = [
  //     { cep: '12345678', logradouro: 'Rua A', complemento: '', bairro: 'Bairro A', localidade: 'Cidade A', estado: 'Estado A', ddd: '11', uf: 'SP' }
  //   ];

  //   component.data = data;
  //   component.columns = ['cep', 'logradouro', 'complemento', 'bairro', 'localidade', 'estado', 'ddd', 'uf'];
  //   fixture.detectChanges();

  //   tick();

  //   const compiled = fixture.nativeElement as HTMLElement;
  //   const rows = compiled.querySelectorAll('tr.mat-header-row');

  //   expect(rows.length).toBe(1);

  //   const cells = rows[0].querySelectorAll('td.mat-cell');
  //   expect(cells.length).toBe(component.columns.length);

  //   expect(cells[0].textContent).toContain('12345678');
  //   expect(cells[1].textContent).toContain('Rua A');
  //   expect(cells[2].textContent).toContain('');
  //   expect(cells[3].textContent).toContain('Bairro A');
  //   expect(cells[4].textContent).toContain('Cidade A');
  //   expect(cells[5].textContent).toContain('Estado A');
  //   expect(cells[6].textContent).toContain('11');
  //   expect(cells[7].textContent).toContain('SP');
  // }));

  // it('should trigger onRemove when remove button is clicked', () => {
  //   const data = [
  //     { cep: '12345678', logradouro: 'Rua A', complemento: '', bairro: 'Bairro A', localidade: 'Cidade A', estado: 'Estado A', ddd: '11', uf: 'SP', id: '1' }
  //   ];
    
  //   component.data = data;
  //   component.columns = ['cep', 'logradouro', 'complemento', 'bairro', 'localidade', 'estado', 'ddd', 'uf'];
  // fixture.detectChanges();

  //   spyOn(component.onRemove, 'emit');

  //   const compiled = fixture.nativeElement as HTMLElement;
  //   const removeButton = compiled.querySelector('button');

  //   if (removeButton) {
  //     removeButton.click();
  //   }

  //   expect(component.onRemove.emit).toHaveBeenCalledWith(data[0]);
  // });

  it('should handle paginator', () => {
    const data = Array.from({ length: 20 }, (_, i) => ({ cep: `${i}`, logradouro: `Rua ${i}`, complemento: '', bairro: `Bairro ${i}`, localidade: `Cidade ${i}`, estado: `Estado ${i}`, ddd: '11', uf: 'SP' }));

    component.data = data;
    component.columns = ['cep', 'logradouro', 'bairro', 'localidade', 'estado'];
    fixture.detectChanges();

    const paginator = fixture.debugElement.query(By.css('mat-paginator')).componentInstance;
    paginator.pageIndex = 1;
    fixture.detectChanges();

    const dataSource = component.dataSource;
    expect(dataSource.paginator.pageIndex).toBe(1);
  });
});
