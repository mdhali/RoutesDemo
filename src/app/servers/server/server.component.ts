import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  srvId : number;
  srvName : string;

  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.srvId = this.route.snapshot.params["id"];
    this.srvName = this.route.snapshot.params["name"];
  }

}
