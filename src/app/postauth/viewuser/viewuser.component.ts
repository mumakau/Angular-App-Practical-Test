import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Users } from 'src/app/Models/usermodel';
import { PostauthServiceService } from 'src/app/services/postauth-service.service';

@Component({
  selector: 'app-viewuser',
  templateUrl: './viewuser.component.html',
  styleUrls: ['./viewuser.component.css']
})
export class ViewuserComponent implements OnInit {
  @Input() public user;
  userinfo: Users;
  constructor(public activeModal: NgbActiveModal, public postauth:PostauthServiceService ) { }

  ngOnInit(): void {
    this.getUser()
  }

  getUser(){
    if(this.user!=undefined||this.user!=null){
       this.postauth.getUser(this.user).subscribe(e=>{
           console.log(e)

          this.userinfo={id:e['data']['id'],avatar:e['data']['avatar'], email:e['data']['email'],first_name:e['data']['first_name'],last_name:e['data']['last_name']}
      },(err:HttpErrorResponse)=>{
        alert(err.error['error'])
      })
    }
  }

}
