import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ap-promotion',
  template: `
    <p>
      {{ todayDate | date:'dd-MMMM-yyyy' | uppercase  }}
    </p>
  `,
  styles: []
})
export class PromotionsComponent implements OnInit {

  todayDate = new Date();

  constructor() { }

  ngOnInit() {
  }

}
