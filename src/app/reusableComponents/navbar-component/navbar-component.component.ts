import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-navbar-component',
  templateUrl: './navbar-component.component.html',
  styleUrls: ['./navbar-component.component.css']
})
export class NavbarComponentComponent implements OnInit {
  @Output() menuIsClickEvent :EventEmitter<boolean>=new EventEmitter <boolean>()
  menuIsClicked:boolean
  breadCrums:Array<string>
  constructor(private router:Router) {
    this.breadCrums=[];
    this.menuIsClicked=false;
  }
  
  ngOnInit(): void {
     
  this.router.events.subscribe(
    (data)=>{
      this.breadCrumsFetching();
    })
  }
  breadCrumsFetching(){
    if(location.pathname=='/')
     this.breadCrums[0]='Home';  
    else
    this.breadCrums=location.pathname.split('/').slice(1)    
  }
  menuClick(){
    this.menuIsClicked=!this.menuIsClicked;
    /* this.service.menuIsClicked$.next(this.menuIsClicked) */
     this.menuIsClickEvent.emit(this.menuIsClicked) 
  }
  
}