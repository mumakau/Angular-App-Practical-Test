import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PreauthServiceService } from 'src/app/services/preauth-service.service';
import { ConfirmSecondPassword } from './passwordvalidator';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  registerform:FormGroup=new FormGroup({});
  fieldTextType: boolean=false;


  constructor(public formBuilder: FormBuilder, public preauth:PreauthServiceService, public route:Router) {
    this.registerform= formBuilder.group(
      {
        email: ["", [Validators.required, Validators.email]],
        password: ["", [Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}'), Validators.minLength(8)]],
        confirmpassword: ["", Validators.required]
      },
      {
        validator: ConfirmSecondPassword('password', 'confirmpassword')
      }
    );


   }

   get registerF() {
    return this.registerform.controls;
  }

  ngOnInit(): void {

  }
  gotoLogin(){
    this.route.navigateByUrl("/auth/login")
  }

  appRegistration(){
  this.preauth.userRegistration("eve.holt@reqres.in","pistol").subscribe(e=>{

    // this.preauth.userRegistration(this.registerform.get("email").value,this.registerform.get("password").value).subscribe(e=>{
   console.log(e)
      if(e['id']!==""||e['id']!==null){
        setTimeout(() =>  {alert("User registered successfully user_id: "+e['id']+"and userToken: "+ e['token']) }, 1000)
      this.route.navigateByUrl("/auth/login")
    }
    },(err:HttpErrorResponse)=>{
      alert(err.error['error'])
    })
  }


  toggleFieldTextType() {
    this.fieldTextType = !this.fieldTextType;
  }

}



