import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PreauthServiceService {
  url:string

  public time_to_expire:{};

  constructor(private http: HttpClient) {

    this.url= environment.remote_url
  }

  gettime() {
    return this.time_to_expire;

  }
  settime(time_to_expire): void {
    this.time_to_expire = time_to_expire;
  }

  userLogin(email,password){
    return this.http.post(this.url+"/api/login",{email:email,password:password});
  }

    userRegistration(email,password){
      return this.http.post(this.url+"/api/register",{email:email,password:password});

    }

}
