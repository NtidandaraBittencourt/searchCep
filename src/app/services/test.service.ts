import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestService {
  private apiUrl = 'https://viacep.com.br/ws';

  constructor(private http: HttpClient) {}

  testGet(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
