import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { BaseApiService } from './base-api.service';
import { HttpClient } from '@angular/common/http';
import { Endereco } from '../shared/models/endereco.model';
import { SnackBarService } from './snack-bar.service';

@Injectable({
  providedIn: 'root'
})
export class EnderecoService extends BaseApiService {
  private enderecoAtualizado = new Subject<void>()

  constructor(
    http: HttpClient,
    snackService: SnackBarService
  ) {
    super(http, 'http://localhost:3000/enderecos', snackService);
  }

  salvarEndereco(endereco: Endereco): Observable<Endereco> {
    return this.post<Endereco>('', endereco);
  }

  buscarEnderecos(): Observable<Endereco[]> {
    return this.get<Endereco[]>('');
  }

  removeEndereco(id: string): Observable<void> {
    return this.delete<void>(id);
  }

  getEnderecoAtualizado() {
    return this.enderecoAtualizado.asObservable();
  }

  notificarEnderecoAtualizado() {
    this.enderecoAtualizado.next();
  }
}
