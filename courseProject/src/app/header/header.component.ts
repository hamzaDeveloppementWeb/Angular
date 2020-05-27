import {Component, Output, OnInit, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() path = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

}
