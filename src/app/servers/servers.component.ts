import { Component, OnInit } from '@angular/core';
import { server } from './server.model';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  servers : server[] = [];

  constructor() { }

  ngOnInit(): void {
    let srv:server;
    for (let i:number=0; i<5; i++){
      srv = new server(i, "Server"+i);
      this.servers.push(srv);
    }
  }

}
