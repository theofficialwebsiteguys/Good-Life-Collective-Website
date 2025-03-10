import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReviewsService {

  constructor(private http: HttpClient) {}

  getReviews(placeId: string): Observable<any> {
    const headers = new HttpHeaders({
      'x-auth-api-key': environment.db_api_key
    });

    return this.http.get<any>(`${environment.apiUrl}/businesses/reviews?place_id=${placeId}`, { headers });
  }
}
