import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserApi } from "../../models/usersapi";
import {UsersRegisterApi} from "../../models/usersregisterapi";
import { StorageService } from "../../services/storage.service";
import { UsersService } from "../../services/user.service";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  name = ''
  password = ''
  username = ''
  correo = ''
  role = ['user']
  constructor(
    private usersService: UsersService
  ) { }

  ngOnInit(): void {
  }


  onSignUp(){
    let myresult = 'token here !!!';
    //myresult = addition(this.operator1, this.operator2);

    var mydata = new UsersRegisterApi;

		if(this.username == "" || this.password == ""){

			alert('USUARIO Y CONTRASEÑA REQUERIDOS');

		}else{

		mydata.username = this.username;
		mydata.password = this.password;
    mydata.email = this.correo;   
    mydata.role = this.role;
    mydata.name=this.name;
		return this.usersService.registerUser(mydata)
		 .subscribe((data: any) => {
			
      //this.storageService.setSession("token", data.accessToken);  
      //this.result = data.accessToken;
      alert('ok')
      //alert(data.accessToken);
			// this.router.navigate(['/']);
    
      
		})
  }}
}
