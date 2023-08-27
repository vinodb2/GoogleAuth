import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CalendarService {

  private apiKey = 'AIzaSyACgOI8aZVqgRqpQ4G28_MYOC5b4U82EJ0';
  constructor(private http: HttpClient) { }
  getTodaysEvents(): Observable<any[]> {
    const calendarId = 'primary';
    const timeMin = new Date().toISOString();
    const timeMax = new Date().toISOString();
    const url = `https://www.googleapis.com/calendar/v3/calendars/${calendarId}/events?timeMin=${timeMin}&timeMax=${timeMax}&key=${this.apiKey}`;

    return this.http.get<any[]>(url);
  }
}
