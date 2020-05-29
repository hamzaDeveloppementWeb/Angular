import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  evenNumbers = [1, 3, 5];
  oddNumbers = [2, 4];
  onlyOdd = false;
}
