import { Component, OnInit } from '@angular/core';
import { Users,ResponseData } from 'src/app/Models/usermodel';
import { PostauthServiceService } from 'src/app/services/postauth-service.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {CreateusermodalComponent} from '../createusermodal/createusermodal.component'
import { ViewuserComponent } from '../viewuser/viewuser.component';
import { HttpErrorResponse } from '@angular/common/http';



@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: Array<Users>= new Array()
  response: ResponseData;
  pages:Array<number>=new Array()

  constructor( private postauth:PostauthServiceService, private modal:NgbModal) {

    }

  ngOnInit(): void {

    this.listUsers(1)
  }


  listUsers(pageno){
    this.pages=[]
    this.response={};
    this.users=[]
    this.postauth.getListofUsers(pageno).subscribe(e=>{
      console.log(e)
      let count=0
      e['data'].forEach(el => {
        let user:Users={id: el['id'],email:el['email'],avatar:el['avatar'],first_name:el['first_name'],
        last_name:el['last_name']
        }
        this.users.push(user)
      })
      while(count<e['total_pages']){
        count++
        this.pages.push(count)
      }

      console.log(this.pages)
      this.response={data:this.users,
        page:e['page'],
        per_page:e['per_page'],
        total:e['total'],
        total_pages:e['total_pages']
      }
    },(err:HttpErrorResponse)=>{
      alert(err.error['error'])
    })

  }

  createUser(){
    const modalOpen = this.modal.open(CreateusermodalComponent);
   }


  editUser(id){
    const modalOpen = this.modal.open(CreateusermodalComponent);
    modalOpen.componentInstance.user = id;
    modalOpen.result.then((result) => {
      if (result) {
        console.log(result);
      }
    });

  }

  viewUser(id){
    const modalOpen = this.modal.open(ViewuserComponent);
    modalOpen.componentInstance.user = id;
    modalOpen.result.then((result) => {
      if (result) {
        console.log(result);
      }
    });

  }

  deleteUser(id){
    this.postauth.deleteUser(id).subscribe(e=>{
      // this.postauth.deleteUser(2).subscribe(e=>{
      alert("deleted successfully")
    },(err:HttpErrorResponse)=>{
      alert(err.error['error'])
    })

  }

}
