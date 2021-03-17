import { Component, OnInit } from '@angular/core';

@Component({
  // selector: '[app-servers]',
  // selector: '.app-servers',
  selector: 'app-servers',
  //template: `
   // <app-server></app-server>
   // <app-server></app-server>`,
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = 'DefaultName';
  serverCreated = false;

  constructor() {
    setTimeout(()=>{
      this.allowNewServer = true;
    },1800);
  }

  ngOnInit() {
  }

  onCreateServer(){
    this.serverCreated = true;
    this.serverCreationStatus = 'Server is now created! and the server name is '+this.serverName;

  }

  onUpdateServerName(event: Event){
  this.serverName = (<HTMLInputElement>event.target).value;
  }
}
