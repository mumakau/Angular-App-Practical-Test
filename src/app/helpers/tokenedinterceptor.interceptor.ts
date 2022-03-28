import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { PostauthServiceService } from '../services/postauth-service.service';
import { environment } from 'src/environments/environment';

@Injectable()
export class TokenedinterceptorInterceptor implements HttpInterceptor {

  constructor(public postauth:PostauthServiceService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
   // add auth header with jwt if user is logged in and request is to the api url
   const user = this.postauth.currentUser;
   const isLoggedIn = user && user.bearertoken;
   const isApiUrl = request.url.startsWith(environment.remote_url);
   if (isLoggedIn && isApiUrl) {
       request = request.clone({
           setHeaders: { Authorization: `Bearer ${user.bearertoken}` }
       });
   }

   return next.handle(request);
}

}
