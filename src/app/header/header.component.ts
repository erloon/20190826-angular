import {Component} from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <header class="jumbotron">
        <h1>
            {{ title }}
        </h1>
    </header>
  `,
  styles: [
    `
        header {
            background-image: url("https://picsum.photos/id/180/2000/400");
        }
        h1 {
            color: white
        }
    `
  ]
})
export class HeaderComponent {
  title = 'Auction Portal';
}
