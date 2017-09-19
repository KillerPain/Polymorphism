import { Component } from '@angular/core';

@Component({
  selector: 'pe-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {  
  a: number[] = [];
  b: string[] = ["+","-","*","/"];

  constructor() {
    for(let i = 9; i >= 0; i --) {
      this.a.push(i);
    }
  }
}
