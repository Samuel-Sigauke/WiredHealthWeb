import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  listDataMap = {
    eight: [
      { type: 'warning', content: 'This appointment is high priority' },
      { type: 'success', content: 'This appointment is low priority' }
    ],
    ten: [
      { type: 'warning', content: 'This appointment is high priority' },
      { type: 'success', content: 'This appointment is low priority' },
      { type: 'error', content: 'This is Critical' }
    ],
    eleven: [
      { type: 'warning', content: 'This appointment is high priority' },
      { type: 'success', content: 'This appointment is low priority' },
      { type: 'error', content: 'This is Critical' }
    ]
  };

  getMonthData(date: Date): number | null {
    if (date.getMonth() === 8) {
      return 1394;
    }
    return null;
  }

}
