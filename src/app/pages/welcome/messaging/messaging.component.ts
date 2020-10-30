import { Component, OnInit } from '@angular/core';


export interface texts {
  contact: string;
  position: number;
  text: string;
}

const Messages : texts [] = [
  {position: 1, contact: 'Fasty', text: 'Some message text here'},
  {position: 2, contact: 'Fasty', text: 'Some message text here'},
  {position: 3, contact: 'Fasty', text: 'Some message text here'},
  {position: 4, contact: 'Fasty', text: 'Some message text here'},
]

const messages : texts [] = [
  {position: 5, contact: 'Fasty', text: 'Some message text here'},
  {position: 6, contact: 'Fasty', text: 'Some message text here'},
  {position: 7, contact: 'Fasty', text: 'Some message text here'},
  {position: 8, contact: 'Fasty', text: 'Some message text here'},
]

@Component({
  selector: 'app-messaging',
  templateUrl: './messaging.component.html',
  styleUrls: ['./messaging.component.css']
})
export class MessagingComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }

  data = [
    'Ant Design Title 1',
    'Ant Design Title 2',
    'Ant Design Title 3',
    'Ant Design Title 4'
  ];

}
