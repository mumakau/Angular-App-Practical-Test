import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Users } from 'src/app/Models/usermodel';
import { PostauthServiceService } from 'src/app/services/postauth-service.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  accountform:FormGroup=new FormGroup({
    name: new FormControl(null, Validators.required),
    job: new FormControl(null, Validators.required)
  });
  userinfo:Users

  constructor(public postauth: PostauthServiceService) { }

  ngOnInit(): void {
    this.getUser()
  }

  getUser(){
       this.postauth.getUser(2).subscribe(e=>{
           console.log(e)

          this.userinfo={id:e['data']['id'],avatar:e['data']['avatar'], email:e['data']['email'],first_name:e['data']['first_name'],last_name:e['data']['last_name']}
      },(err:HttpErrorResponse)=>{
        alert(err.error['error'])
      })

    }
  updateAccount(){
    this.postauth.updateUser(2, this.accountform.get("name").value,this.accountform.get("job").value).subscribe(e=>{

      // this.postauth.updateUser(2,"morpheus","zion resident").subscribe(e=>{

        //check code
        setTimeout(() => {alert ("updated sucessfully") }, 1000)

      },(err:HttpErrorResponse)=>{
        alert(err.error['error'])
      })
  }

}
