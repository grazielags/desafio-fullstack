import { Component } from '@angular/core';

@Component({
  selector: 'sel-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor() { }
  alertas = [];

  ngOnInit() {
  }

  //sorting
  key: string = 'nome';
  reverse: boolean = false;
  sort(key){
    this.key = key;
    this.reverse = !this.reverse;
  }
  p: number = 1;
}