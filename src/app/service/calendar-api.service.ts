import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Calendar} from "../model/calendar.model";


@Injectable({
  providedIn: 'root',
})
export class CalendarService {
  private apiUrl = 'http://localhost:8080/api'; // Mettez l'URL de votre API ici

  constructor(private http: HttpClient) {}

  getCalendar(year: number, month: number): Observable<Calendar> {
    const params = new HttpParams()
      .set('year', year.toString())
      .set('month', month.toString());

    return this.http.get<Calendar>(`${this.apiUrl}/generateCalendar`, { params });
  }
}
