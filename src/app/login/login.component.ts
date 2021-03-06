import { Component, OnInit } from '@angular/core';
import { UsersService } from "../../services/user.service"
//import { User } from "../../models/user";
import { UserApi } from "../../models/usersapi";
import { StorageService } from "../../services/storage.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  result = '';
  username = '';
  password = '';

  constructor(
    private usersService: UsersService,
    private storageService: StorageService,
    private router:Router
  ) 
  { }

  ngOnInit(): void {
  }

  addition() {
    let myresult = 'token here !!!';
    //myresult = addition(this.operator1, this.operator2);

    var mydata = new UserApi;

		if(this.username == "" || this.password == ""){

			alert('USUARIO Y CONTRASEÑA REQUERIDOS');

		}else{

		mydata.username = this.username;
		mydata.password = this.password;
		   
		return this.usersService.loginUser(mydata)
		 .subscribe((data: any) => {	
      this.storageService.setSession("token", data.accessToken);  
      console.log(this.storageService.getSession("token"));
      //alert(data.accessToken);
			// this.router.navigate(['/']);
      this.router.navigate(['/']);
		})
		 
	

		}

    this.result = myresult;
  }

}
