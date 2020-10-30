import { Component, OnInit } from '@angular/core';

interface Booking {
  name: string;
  phone: string;
  date: string;
  duration: string;
}
@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  listOfBookings: Booking[] = [
    { name: 'Jim Curry', phone: '0761234569', date: ' 29/10/20 10.30am', duration: '120 mins' },
    { name: 'Mary Gold', phone: '0761789456', date: ' 29/10/20 12.00am', duration: '45 mins' },
    { name: 'Andy Sawn', phone: '0762369258', date: ' 29/10/20 1.45pm', duration: '60 mins' }
  ]

}
