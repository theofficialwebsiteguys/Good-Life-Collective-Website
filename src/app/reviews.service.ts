import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReviewsService {
  private apiUrl = 'http://localhost:3333/api/businesses/reviews'; // Backend endpoint
  private apiKey = 'c69203dbdeaf88d28f3bfa28afeaff32965744f3d3ae6321b9eff6d198b1edfb'; // Your API Key

  constructor(private http: HttpClient) {}

  getReviews(placeId: string): Observable<any> {
    const headers = new HttpHeaders({
      'x-auth-api-key': this.apiKey
    });

    return this.http.get<any>(`${this.apiUrl}?place_id=${placeId}`, { headers });
  }
}
