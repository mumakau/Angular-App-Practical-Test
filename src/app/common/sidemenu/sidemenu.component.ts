import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostauthServiceService } from 'src/app/services/postauth-service.service';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.css']
})
export class SidemenuComponent implements OnInit {

  constructor( public postauth:PostauthServiceService, public route:Router) { }

  ngOnInit(): void {
  }

  gotoUsers(){
    this.route.navigateByUrl('/home/manage_users')
  }
  gotoAccounts(){
    this.route.navigateByUrl('/home/manage_account')
  }

}
