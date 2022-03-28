import { ElementRef, EventEmitter, Injectable, Output } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { useronAuth, Users } from '../Models/usermodel';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { PreauthServiceService } from './preauth-service.service';

@Injectable({
  providedIn: 'root'
})
export class PostauthServiceService {
  public remoteUrl:string;
  public currentUser:useronAuth;
  public timeinminutes:string;
  public timeinseconds:string;
   public time_to_expire:{};

  constructor(private http: HttpClient, public route: Router,public preauth:PreauthServiceService) {
    this.remoteUrl = environment.remote_url;
    this.currentUser=undefined

  }

  getListofUsers(pageno){
    let params = new HttpParams()
    .set('page', pageno)

  return this.http.get(this.remoteUrl+ "/api/users",{params});

}

getUser(userid){
return this.http.get(this.remoteUrl+"/api/users/"+userid);
}

updateUser(userid,name,job){
  return this.http.post(this.remoteUrl+"/api/users"+userid, {name:name,job:job});
}
deleteUser(userid){
  return this.http.delete(this.remoteUrl+"/api/users"+userid);
  }


  logout(){
    this.currentUser=undefined
    this.route.navigateByUrl('/auth/login')
  }

  gettime() {
    return this.time_to_expire;

  }
  settime(time_to_expire): void {
    this.time_to_expire = time_to_expire;
  }

  refreshBearerToken(token,useremail,userpassword,tokenexp){
    const bearerToken=token
    let timeexpire

    let tokenexptime= new Date().getTime()+tokenexp*60000

    var x = setInterval(function() {
      let now= new Date().getTime()
      let  remainingtime= tokenexptime-now
      var minutes = Math.floor((remainingtime % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((remainingtime % (1000 * 60)) / 1000);

      this.timeinminutes=minutes
      timeexpire=seconds

      console.log(timeexpire)
    if (tokenexptime < 10000) {
      clearInterval(x);
      //call login end point
      this.userLogin({email:useremail,password:userpassword})
    }
  }, 1000);
console.log(timeexpire)
  }

  getChangedEmitter() {
    return this.time_to_expire;
  }


}
