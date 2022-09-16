import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  public getHello(): Observable<any> {
    return this.http.get(environment.apiHost + '/hello');
  }

  public getDatetime(): Observable<any> {
    return this.http.get(environment.apiHost + '/datetime');
  }

  public sendText(text): Observable<any> {
    console.log('Send text dentro de services kkk', text);
    return this.http.post(environment.apiHost + '/text', { text });
  }
}
