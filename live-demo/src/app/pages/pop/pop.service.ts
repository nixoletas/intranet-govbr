import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PopService {
  apiUrl = environment.POP_API;

  constructor(private http: HttpClient) { }

  getPop(): Observable<{data: any[]}> {
    return this.http.get<{ data: any[] }>(this.apiUrl);
}

getPopById(id: string): Observable<any> {
  return this.http.get(`${this.apiUrl}/${id}`);
}

}
