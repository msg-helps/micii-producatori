import { Injectable } from '@angular/core'
import { environment } from '../../../environments/environment'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class RestService {
  protected baseUrl = environment.baseUrl

  constructor(private http: HttpClient) {}

  protected get(relativeUrl: string): Observable<any> {
    return this.http.get(this.baseUrl + relativeUrl)
  }
}
