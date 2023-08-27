import { Component, OnInit } from '@angular/core';
import { CalendarService } from '../calendar.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

  calendarEntries: any[] = [];
  constructor(private authService: AuthService,private calendarService: CalendarService) { }

  ngOnInit(): void {
    if (this.authService.user) {
      this.fetchCalendarEntries();
    }
  }
  fetchCalendarEntries(): void {
    this.calendarService.getTodaysEvents().subscribe((entries) => {
      this.calendarEntries = entries;
    });
  }

}
