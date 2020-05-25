import { Component, OnInit } from '@angular/core';
import {timestamp} from "rxjs/operators";

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer: boolean = false;
  allow_new_server: string = 'Enable';
  newServerName: string = '';
  username: string = '';
  serverCreated: boolean = false;
  serverName: string = '';
  serverCreationStatus: string = 'No server was created';
  showDetail: boolean = false;
  buttonClick = [];
  date;
  constructor() { }
  ngOnInit(): void {
  }

  onAllowNew() {
    this.allowNewServer = !this.allowNewServer;
    this.allow_new_server = (this.allow_new_server == 'Disable') ? 'Enable' : 'Disable';
  }

  onResetUserName() {
    this.username = '';
  }

  onCreateServer() {
    this.serverCreated = true;
    this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
  }
  onUpdateServerName(event: Event) {
    console.log((<HTMLInputElement>event.target).value);
    this.newServerName = (<HTMLInputElement>event.target).value;
  }

  onShowDetail() {
    this.showDetail = !this.showDetail;
    this.date = new Date();
    this.buttonClick.push(this.date + ' : ' + this.showDetail);
  }
}
