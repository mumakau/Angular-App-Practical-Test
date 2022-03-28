import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Users } from 'src/app/Models/usermodel';
import { PostauthServiceService } from 'src/app/services/postauth-service.service';

@Component({
  selector: 'app-createusermodal',
  templateUrl: './createusermodal.component.html',
  styleUrls: ['./createusermodal.component.css']
})
export class CreateusermodalComponent implements OnInit {
  @Input() public user;

  userinfoform:FormGroup=new FormGroup({
    name: new FormControl(null, Validators.required),
    job: new FormControl(null, Validators.required)
  });
  constructor(public activeModal: NgbActiveModal, public postauth: PostauthServiceService) { }

  ngOnInit(): void {


  }


  editUser(){
    if(this.userinfoform.valid){
    this.postauth.updateUser(this.user, this.userinfoform.get("name").value,this.userinfoform.get("job").value).subscribe(e=>{

    // this.postauth.updateUser(2,"morpheus","zion resident").subscribe(e=>{

      //check code
      setTimeout(() => {alert ("updated sucessfully") }, 1000)

    },(err:HttpErrorResponse)=>{
      alert(err.error['error'])
    })

    this.activeModal.close()
  }else{
    alert("Kindly fill blank fields")

  }
}

}
