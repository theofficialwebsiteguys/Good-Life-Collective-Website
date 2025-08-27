import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment.prod';

export interface Event {
  id: number;
  title: string;
  description: string;
  image: string;
  dateTime: string;
  location: string;
  status: string;
}

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  private apiUrl = '/api/businesses/'; // Update with actual API

  constructor(private http: HttpClient) {}

  getEvents(): Observable<Event[]> {
    const headers = new HttpHeaders({
      'x-auth-api-key': environment.db_api_key
    });
    return this.http.get<any>(`${environment.apiUrl}/businesses/events`, { headers });
  }


}
