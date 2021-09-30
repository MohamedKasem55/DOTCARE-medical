import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'AHBS-Task';
  menuIsClicked:boolean
  menuSubscribtion:Subscription
  constructor() { 
    this.menuIsClicked=false;
  }
  onMenuClick(message){
    this.menuIsClicked=message
  }
  ngOnInit(): void {
      
    }
    
  }




