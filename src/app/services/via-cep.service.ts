import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Endereco } from '../shared/models/endereco.model';
import { BaseApiService } from './base-api.service';
import { SnackBarService } from './snack-bar.service';

@Injectable({
  providedIn: 'root'
})

export class ViaCepService extends BaseApiService {
  private readonly apiUrl = 'https://viacep.com.br/ws';

  constructor(http: HttpClient, snackService: SnackBarService) {
    super(http, '', snackService);
  }

  buscaCep(cep: string): Observable<Endereco> {
    return this.http.get<Endereco>(`${this.apiUrl}/${cep}/json`);
  }
}
