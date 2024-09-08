import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { SnackBarService } from './snack-bar.service';

export abstract class BaseApiService {
  protected httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    protected http: HttpClient, 
    protected baseUrl: string,
    private snackService: SnackBarService
  ) {}

  protected get<T>(url: string): Observable<T> {
    return this.http.get<T>(`${this.baseUrl}/${url}`).pipe(
      catchError(this.handleError<T>(`get ${url}`))
    );
  }

  protected post<T>(url: string, body: any): Observable<T> {
    return this.http.post<T>(`${this.baseUrl}/${url}`, body, this.httpOptions).pipe(
      catchError(this.handleError<T>(`post ${url}`))
    );
  }

  protected put<T>(url: string, body: any): Observable<T> {
    return this.http.put<T>(`${this.baseUrl}/${url}`, body, this.httpOptions).pipe(
      catchError(this.handleError<T>(`put ${url}`))
    );
  }

  protected delete<T>(url: string): Observable<T> {
    return this.http.delete<T>(`${this.baseUrl}/${url}`, this.httpOptions).pipe(
      catchError(this.handleError<T>(`delete ${url}`))
    );
  }

  private handleError<T>(operation = 'operation') {
    return (error: any): Observable<T> => {
      this.snackService.openSnackBar('Ocorreu um erro. Por favor, tente novamente.', 'error');
      console.error(`${operation} failed: ${error.message}`);
      return new Observable<T>();
    };
  }
}
