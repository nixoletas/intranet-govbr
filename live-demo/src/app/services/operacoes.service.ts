import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OperacoesService {
  apiUrl = environment.OPERACOES_API;

  constructor(private http: HttpClient) { }

  getOperacoes(): Observable<{data: any[]}> {
    return this.http.get<{ data: any[] }>(this.apiUrl);
}

getOperacaoById(id: string): Observable<any> {
  return this.http.get(`${this.apiUrl}/${id}`);
}
}
