import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ImcApi,ImcHistoric } from '../models/imcapi';
import {UserApi} from '../models/usersapi';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { StorageService } from "../services/storage.service";

@Injectable({
  providedIn: 'root'
})

export class ImcService {

 apiURL = 'https://pacific-reaches-70792.herokuapp.com';


  constructor(private http: HttpClient,
              private storageService: StorageService) { }

  /*========================================
    CRUD Methods for consuming RESTful API
  =========================================*/

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin':'*',
      //'Authorization': 'Bearer ' + this.storageService.getLocal("token")
      'Authorization':'Bearer '+this.storageService.getSession("token")
    })
  }  
  // HttpClient API post() method => Create employee
  createImc(imcApi): Observable<ImcApi> {  
    console.log(JSON.stringify(imcApi));
    console.log(this.httpOptions);
    console.log(this.storageService.getSession("token"));
    return this.http.post<ImcApi>(this.apiURL + '/api/imcs/', JSON.stringify(imcApi), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.MessageError)
    )
  }

  getImcs(){
    return this.http.get<ImcHistoric>(this.apiURL+"/api/imc/",this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.MessageError)
    )
  }
  getImc(user_id=1){
    return this.http.get<ImcApi>(this.apiURL+"/api/imc/"+user_id,this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.MessageError)
    )
  }
  getImcById(id){
    return this.http.get<ImcApi>(this.apiURL+"/api/imcs/"+id,this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.MessageError)
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
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
      alert(errorMessage);
    }
    //window.alert(errorMessage);
    return throwError(errorMessage);
 }

}
