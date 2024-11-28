import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, switchMap, expand, reduce } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AniversariantesService {
  apiUrl = environment.NIVER_API;  // URL do seu Strapi

  constructor(private http: HttpClient) { }

  // Método para obter todos os dados de todas as páginas
  getAllData(): Observable<any[]> {
    const pageSize = 100; // Tamanho da página, ajuste conforme necessário
    let page = 1; // Página inicial

    return this.http.get<any>(`${this.apiUrl}?pagination[page]=${page}&pagination[pageSize]=${pageSize}`)
      .pipe(
        expand(response => {
          page++;
          if (page <= response.meta.pagination.pageCount) {
            return this.http.get<any>(`${this.apiUrl}?pagination[page]=${page}&pagination[pageSize]=${pageSize}`);
          } else {
            return [];
          }
        }),
        reduce((acc, response) => acc.concat(response.data), []),
        map(response => response)
      );
  }
}
