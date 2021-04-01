import { Component, OnInit } from '@angular/core';

import { CalendarOptions } from '@fullcalendar/angular'; // useful for typechecking

@Component({
  selector: 'app-agenda-cours',
 
  templateUrl:  './/agenda-cours.component.html',
  styleUrls: ['./agenda-cours.component.scss']
})
export class AgendaCoursComponent implements OnInit {
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth'
  };
  constructor() { }

  ngOnInit(): void {
  }

}
