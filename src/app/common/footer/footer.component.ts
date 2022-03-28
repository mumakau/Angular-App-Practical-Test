import { Component, Injectable, OnInit } from '@angular/core';
import { PostauthServiceService } from 'src/app/services/postauth-service.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
@Injectable({ providedIn: 'root' })
export class FooterComponent implements OnInit {
  timeinseconds
  timeinminutes
  constructor( public postauth:PostauthServiceService) { }

  ngOnInit(): void {

    document.getElementById('timeinminutes').innerHTML="minutes"
  }



  refreshBearerToken(token,tokenexp){
    const bearerToken=token
    let timeexpire

    let tokenexptime= new Date().getTime()+tokenexp*60000

    var x = setInterval(function() {
      let now= new Date().getTime()
      let  remainingtime= tokenexptime-now
      var minutes = Math.floor((remainingtime % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((remainingtime % (1000 * 60)) / 1000);
      document.getElementById('timeinminutes').innerHTML=minutes.toString()
      document.getElementById('timeinseconds').innerHTML=seconds.toString()
    if (tokenexptime < 10000) {
      clearInterval(x);
      //call login end point
      this.postauth.userLogin({email:this.postauth.currentUser.name,password:this.postauth.currentUser.password})
    }
  }, 1000);
console.log(timeexpire)
  }
}
