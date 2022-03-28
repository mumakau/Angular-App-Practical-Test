import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PostauthServiceService } from 'src/app/services/postauth-service.service';
import { PreauthServiceService } from 'src/app/services/preauth-service.service';
import {FooterComponent} from '../../common/footer/footer.component'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginform:FormGroup=new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}'))
  });
  fieldTextType: boolean=false;

  constructor(public postAuth:PostauthServiceService,public preauth:PreauthServiceService, public route:Router, public foo:FooterComponent) {

  }


  get loginF() {
    return this.loginform.controls;
  }



  toggleFieldTextType() {
    this.fieldTextType = !this.fieldTextType;
  }
  ngOnInit(): void {
  }

  appLogin(){
if(this.loginform.valid){

// this.preauth.userLogin(this.loginform.get("email").value, this.loginform.get("password").value).subscribe(e=>{

//  hardcording of the api defined user to test  login
 this.preauth.userLogin("eve.holt@reqres.in","cityslicka").subscribe(e=>{

if(e['token']!==null||e['token']!==""){
  this.postAuth.currentUser= {autheticated:true,bearertoken:e['token'],name:"eve.holt@reqres.in",password:"cityslicka"}
//  set tokenexpiry in minutes 10 for 10 minutes
  let tokenexp=10

  // this.postAuth.refreshBearerToken(e['token'],this.loginform.get("email").value,this.loginform.get("password").value,tokenexp)

  // using expected API login data
  this.foo.refreshBearerToken(e['token'],tokenexp)

  this.route.navigateByUrl('/home/manage_users')
  setTimeout(() => {alert ("logged in sucessfully") }, 1000)
}else{
  alert("login failed try again")
}

},(err:HttpErrorResponse)=>{
  alert(err.error['error'])
})


}else{
}

  }



gotoRegister(){
  this.route.navigateByUrl('/auth/register')
}

}
