import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
//import { ResponseApi } from '../models/responseapi';
import { UserApi } from '../models/usersapi';
//import { UserSignup } from '../models/usersapi';
import {UsersRegisterApi} from '../models/usersregisterapi';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})


export class UsersService {

  apiURL = 'https://pacific-reaches-70792.herokuapp.com'
  //apiURL = 'http://localhost:8080';
 
 
   constructor(private http: HttpClient, private router: Router) { }
 
   /*========================================
     CRUD Methods for consuming RESTful API
   =========================================*/
 
   // Http Options
   httpOptions = {
     headers: new HttpHeaders({
       'Content-Type': 'application/json',
       'Access-Control-Allow-Origin':'*'
     })
   }  
   // HttpClient API post() method => Create employee
   loginUser(userApi): Observable<UserApi> {
     console.log(JSON.stringify(userApi));
     return this.http.post<UserApi>(this.apiURL + '/api/auth/signin', JSON.stringify(userApi), this.httpOptions)
     .pipe(
       retry(1),
       catchError(this.MessageError)
     )
   }
   registerUser(userRegisterApi): Observable<UsersRegisterApi> {
    console.log(JSON.stringify(userRegisterApi));
    return this.http.post<UsersRegisterApi>(this.apiURL + '/api/auth/signup', JSON.stringify(userRegisterApi), this.httpOptions)
    .pipe(
      retry(1),
    )
  }

   // Error handling 
   handleError(error) {
      let errorMessage = '';
      if(error.error instanceof ErrorEvent) {
        // Get client-side error
        errorMessage = error.error.message;
      } else {
        // Get server-side error
        errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
      }
      window.alert(errorMessage);
      return throwError(errorMessage);
   }
 
   MessageError(error) {
     let errorMessage = '';
     if(error.error instanceof ErrorEvent) {
       // Get client-side error
       errorMessage = error.error.message;
     } else {
       // Get server-side error
       //errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
       alert('USUARIO Y CONTRASEÑA INCORRECTOS');
       alert(error.error.message)
     }
     //window.alert(errorMessage);
     return throwError(errorMessage);
  }
 
 }