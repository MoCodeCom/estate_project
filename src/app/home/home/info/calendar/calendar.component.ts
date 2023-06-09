import { Component, OnInit } from '@angular/core';
import { calenderService } from '../../services/home_calender.service';


@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit{

  constructor(private calendar:calenderService){}
  ngOnInit(): void {
    this.calendar.calender();

  }



}
