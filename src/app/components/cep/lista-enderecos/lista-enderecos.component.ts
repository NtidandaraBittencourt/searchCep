import { Component, OnInit } from '@angular/core';
import { Endereco } from 'src/app/shared/models/endereco.model';

@Component({
  selector: 'app-lista-enderecos',
  templateUrl: './lista-enderecos.component.html',
  styleUrls: ['./lista-enderecos.component.css']
})
export class ListaEnderecosComponent implements OnInit {
  enderecos: Endereco[] = [];
  constructor() { }

  ngOnInit() {
    this.enderecos = JSON.parse(localStorage.getItem('enderecos') || '[]');
  }

  // removerEndereco(index: number) {
  //   this.enderecos.splice(index, 1);
  //   localStorage.setItem('enderecos', JSON.stringify(this.enderecos));
  // }

}
