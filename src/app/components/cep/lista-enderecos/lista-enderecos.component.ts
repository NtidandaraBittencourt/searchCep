import { Component, OnInit } from '@angular/core';
import { EnderecoService } from 'src/app/services/endereco.service';
import { SnackBarService } from 'src/app/services/snack-bar.service';
import { Endereco } from 'src/app/shared/models/endereco.model';

@Component({
  selector: 'app-lista-enderecos',
  templateUrl: './lista-enderecos.component.html',
  styleUrls: ['./lista-enderecos.component.css']
})

export class ListaEnderecosComponent implements OnInit {
  enderecos: Endereco[] = [];
  columns: string[] = [];
  carregando = false;

  constructor(
    private enderecoService: EnderecoService,
    private snackBarService: SnackBarService
  ) { }

  ngOnInit() {
    this.buscarEnderecos();

    this.enderecoService.getEnderecoAtualizado().subscribe(() => {
      this.buscarEnderecos();
    });
  }

  buscarEnderecos() {
    this.carregando = true;
    this.enderecoService.buscarEnderecos().subscribe(
      (data) => {
        this.enderecos = data.reverse();
        this.columns = this.determineColumns(data);
        this.carregando = false;
      },
      error => {
        this.carregando = false
        this.snackBarService.openSnackBar('Não foi possivel carregar os seus endereços salvos', 'error');
        console.error('Erro ao buscar endereços', error);
      }
    )
  }

  determineColumns(enderecos: Endereco[]): any[] {
    return ['cep','logradouro', 'complemento','bairro','localidade','estado','ddd','uf']
  }

  removerEndereco(endereco: Endereco) {
    this.carregando = true;
    this.enderecoService.removeEndereco(endereco.id).subscribe(
      () => {
        this.enderecos = this.enderecos.filter(e => e.id !== endereco.id);
        this.carregando = false;
        this.snackBarService.openSnackBar('Endereço excluido com sucesso!!', 'success');
      },
      error => {
        console.error('Erro ao remover endereço', error);
        this.carregando = false;
        this.snackBarService.openSnackBar('Não foi possivel excluir o endereço', 'error');
      }
    )
  }

}
