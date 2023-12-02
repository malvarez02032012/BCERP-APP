import { MediaMatcher } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit{

  menuNav = [
    { name: 'Home', route: 'home', icon: 'home' },
    { name: 'Carreras', route: 'carreras', icon: 'category' },
    { name: 'Examenes', route: 'examenadmision', icon: 'calendar_today' }
  ]

  mobileQuery: MediaQueryList;

  constructor(media: MediaMatcher, public dialogoLogin:MatDialog) {
    this.mobileQuery = media.matchMedia('(max-width:600px)')
  }

  ngOnInit(): void {
  }

  openFormLogin(){
    console.log('abriendo form login');
    // const dialogLoginRef = this.dialogoLogin.open(LoginComponent, {width:'450px'})
  }
}
