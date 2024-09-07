import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Endereco } from '../shared/models/endereco.model';

@Injectable({
  providedIn: 'root'
})
export class ViaCepService {

  private baseUrl = 'https://viacep.com.br/ws';

  constructor(private http: HttpClient) {}

  buscaCep(cep: string): Observable<Endereco> {
    return this.http.get<Endereco>(`${this.baseUrl}/${cep}/json`);
  }
}
