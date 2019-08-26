import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  /*template: `
      <h1>{{ title }}</h1>
  `,
  styles: [
    `
      h1 {
          color: red
      }
    `
  ]*/
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Auction Portal';
  randomNumber = 123;
  helloMessage = 'Hello World';

  helloWorld() {
    return this.helloMessage;
  }
}
