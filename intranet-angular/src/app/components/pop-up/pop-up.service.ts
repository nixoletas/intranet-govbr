import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { PopupItem } from './pop-up.model';

@Injectable({
  providedIn: 'root',
})
export class PopUpService {
  private apiUrl = `${environment.STRAPI_API}/api/popup?populate=*`;

  constructor(private http: HttpClient) { }

  getGalerias(): Observable<{ data: PopupItem[] }> {
    return this.http.get<{ data: PopupItem[] }>(this.apiUrl);
  }
}
