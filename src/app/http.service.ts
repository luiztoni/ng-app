import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError } from 'rxjs';
import { Estado } from './models';

@Injectable({providedIn: 'root'})
export class HttpService {
  url = 'https://brasilapi.com.br/api/ibge/uf/v1/ba';
  constructor(private http: HttpClient) {}

  get() {
    return this.http.get<Estado>(this.url);
  }

  post(object: any): Observable<any> {
    let options = {headers: {
        'X-API-Key': 'your-api-key',
        'X-API-Host': 'api-domain3.p.api.com',
    }};
    return this.http.post<any>(this.url, object, options)
      .pipe(catchError((err, caught) => caught));
  }
}