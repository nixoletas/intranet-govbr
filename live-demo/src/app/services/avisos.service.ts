import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, expand, reduce, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AvisosService {
  apiUrl = environment.AVISOS_API;

  constructor(private http: HttpClient) { }

  getAvisos(): Observable<{data: any[]}> {
    return this.http.get<{ data: any[] }>(this.apiUrl);
}

}
