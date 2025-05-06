import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, from, map } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BannersService {

  constructor(private http: HttpClient) {}

  getCarouselImages(): Observable<{ images: string[] }> {
    const url = `${environment.apiUrl}/notifications/images`;
  
    const headers = new HttpHeaders({
      'x-auth-api-key': environment.db_api_key
    });
  
    return this.http.get<{ images: string[] }>(url, { headers });
  }
  
}
