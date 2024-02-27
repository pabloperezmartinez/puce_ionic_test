import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  highlightedDates = [
    {
      date: '2023-02-05',
      textColor: '#800080',
      backgroundColor: '#ffc0cb',
    },
    {
      date: '2024-02-06',
      textColor: '#800080',
      backgroundColor: '#ffc0cb',
    },
    {
      date: '2024-02-07',
      textColor: '#800080',
      backgroundColor: '#ffc0cb',
    },
    {
      date: '2024-02-08',
      textColor: '#800080',
      backgroundColor: '#ffc0cb',
    },
    {
      date: '2024-02-09',
      textColor: '#800080',
      backgroundColor: '#ffc0cb',
    },
    {
      date: '2024-02-10',
      textColor: '#800080',
      backgroundColor: '#ffc0cb',
    },
    {
      date: '2024-02-15',
      textColor: '#09721b',
      backgroundColor: '#c8e5d0',
    },
    {
      date: '2024-02-20',
      textColor: 'var(--ion-color-secondary-contrast)',
      backgroundColor: 'var(--ion-color-secondary)',
    },
    {
      date: '2024-02-23',
      textColor: 'rgb(68, 10, 184)',
      backgroundColor: 'rgb(211, 200, 229)',
    },
  ];

  constructor() {}

}
