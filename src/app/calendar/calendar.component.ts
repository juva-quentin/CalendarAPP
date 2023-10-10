import { Component, OnInit } from '@angular/core';
import {CalendarService} from "../service/calendar-api.service";


@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
})
export class CalendarComponent implements OnInit {
  calendarData: number[][] = [];
  currentYear: number;
  currentMonth: number;

  monthNames: string[] = [
    'Janvier',
    'Février',
    'Mars',
    'Avril',
    'Mai',
    'Juin',
    'Juillet',
    'Août',
    'Septembre',
    'Octobre',
    'Novembre',
    'Décembre',
  ];
  constructor(private calendarService: CalendarService) {
    const currentDate = new Date();
    this.currentYear = currentDate.getFullYear();
    this.currentMonth = currentDate.getMonth() + 1;
  }

  ngOnInit(): void {
    this.loadCalendar(this.currentYear, this.currentMonth);
  }

  loadCalendar(year: number, month: number): void {
    this.calendarService.getCalendar(year, month).subscribe((data) => {
      this.calendarData = data.calendar;
      this.currentYear = data.year;
      this.currentMonth = data.month;
    });
  }

  previousMonth(): void {
    if (this.currentMonth === 1) {
      this.loadCalendar(this.currentYear - 1, 12);
    } else {
      this.loadCalendar(this.currentYear, this.currentMonth - 1);
    }
  }

  nextMonth(): void {
    if (this.currentMonth === 12) {
      this.loadCalendar(this.currentYear + 1, 1);
    } else {
      this.loadCalendar(this.currentYear, this.currentMonth + 1);
    }
  }
}
