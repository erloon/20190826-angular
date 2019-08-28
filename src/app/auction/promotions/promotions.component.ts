import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ap-promotion',
  template: `
    <p>
      {{ todayDate | date:'dd-MMMM-yyyy' | uppercase  }}
    </p>
    <ap-auction-card [showCartButton]="false" [auction]="{title: 'Hello', price: 3000}"></ap-auction-card>
  `,
  styles: []
})
export class PromotionsComponent implements OnInit {

  todayDate = new Date();

  constructor() { }

  ngOnInit() {
  }

}
