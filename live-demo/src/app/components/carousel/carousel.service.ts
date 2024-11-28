// src/app/carousel/galeria.service.ts

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { CarouselItem } from './carousel.model';

@Injectable({
    providedIn: 'root'
})
export class CarouselService {
    private apiUrl = `${environment.STRAPI_API}/api/galerias?populate=*`;

    constructor(private http: HttpClient) { }

    getGalerias(): Observable<{ data: CarouselItem[] }> {
        return this.http.get<{ data: CarouselItem[] }>(this.apiUrl);
    }
}
