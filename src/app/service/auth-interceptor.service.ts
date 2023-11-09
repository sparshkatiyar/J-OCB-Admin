import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, Observable, throwError } from 'rxjs';
import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService {

  constructor(private router:Router) { }

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // debugger
    let userData = sessionStorage.getItem('OJCB');
    var access_token;
    if (userData && userData != 'undefined') {

      access_token = JSON.parse(userData).token;
      if (!access_token) {
        access_token = '';
      }
    } else {
      access_token = '';
    }
    let url = '';

    url = req.url;
   
    // const copiedReq = req.clone({
    //   headers: req.headers.append('Authorization', access_token),
    //   url: url,
    // });

    const copiedReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${access_token}`,
      },
      url: url,
    });
    
    return next.handle(copiedReq).pipe(
      catchError((error: HttpErrorResponse) => {
        if (
          error.error &&
          (error.error.message == 'Invalid access_token.' ||
            error.error.message == 'Access token missing')
        ) {
          sessionStorage.removeItem('OJCB');
          window.location.reload();
        }
        return throwError(error);
      })
    );
  }
}
