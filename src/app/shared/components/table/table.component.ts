import { AfterViewInit, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Endereco } from '../../models/endereco.model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent<T> implements AfterViewInit, OnChanges {

  @Input() columns: string[] = [];
  @Input() data: T[] = [];
  @Input() loading: boolean = false

  @Output() onRemove = new EventEmitter<Endereco>()

  dataSource = new MatTableDataSource<T>(this.data);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['data']) {
      this.dataSource.data = this.data;
    }
  }

  removerEndereco(endereco: Endereco) {
    this.onRemove.emit(endereco)
  }

}
