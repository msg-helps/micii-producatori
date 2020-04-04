import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import {HttpClient, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RestService {
  protected baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) {}

  protected get(relativeUrl: string, queryParams?: Object): Observable<any> {
    let httpParams = new HttpParams();

    if(queryParams) {
      Object.keys(queryParams).forEach(key => {
        httpParams = httpParams.set(key, queryParams[key]);
      });
    }

    return this.http.get(this.baseUrl + relativeUrl, {
      params: httpParams
    });
  }
}
