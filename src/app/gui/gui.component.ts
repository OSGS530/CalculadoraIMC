import { Component, OnInit } from '@angular/core';
import {imchombre} from'../imchombre/imchombre';
import {imcmujer} from '../imcmujer/imcmujer';
import {getMaleStatus} from '../imcvalor/imc';
import {getFemaleStatus} from '../imcvalor/imc';
import { ImcApi } from "../../models/imcapi";
import { ImcService } from "../../services/imc.service"
import { StorageService } from "../../services/storage.service";

@Component({
  selector: 'app-gui',
  templateUrl: './gui.component.html',
  styleUrls: ['./gui.component.css']
})
export class GuiComponent implements OnInit {
  ages = Array.from(Array(10).keys());

  status=["Bajo peso","Normal","Sobrepeso","Obesidad"];
  constructor(private imcService : ImcService, private storageService : StorageService) {}
  
  rango:String= "";
  imc = 0;
  peso = 0;
  estatura = 0.0;
  edad= 0;
  genero:String;


  ngOnInit(): void {
     // test, debe ir en boton logout
    this.storageService.localDeleteByKey("token");
    alert("deleted token" + this.storageService.getLocal("token"));
  }

  calcMale(){
    this.imc  = imchombre(this.estatura,this.peso);
    let myResult = getMaleStatus(this.edad,this.imc); 
    if (myResult > 0){
      this.rango = this.status[Math.floor(myResult)-1];
    }
  }
  calcFemale(){
    this.imc  = imcmujer(this.estatura,this.peso);
    let myResult = getFemaleStatus(this.edad,this.imc); 
    if (myResult > 0){
      this.rango = this.status[Math.floor(myResult)-1];
    }
  }

  onGetPressed(){

    this.edad=+this.edad;
    this.peso=+this.peso;
    this.estatura=+this.estatura;

    if(this.genero=="Mujer"){
      this.calcFemale();
    }else if(this.genero=="Hombre"){
      this.calcMale();
    }
    else{console.log(this.genero);}
  }

  saveimc() {
    var imc = new ImcApi;
    //cambiar usuario activo
    imc.iduser = 1;
    imc.imc = this.imc;

  	return this.imcService.createImc(imc)
		 .subscribe((data: any) => {
			alert(JSON.stringify(data));
			
    })
  }

  getImc(){
  	return this.imcService.getImc()
		 .subscribe((data: any) => {
			alert(JSON.stringify(data));
    })
  }

  onViewHistorical(){
    //Whatever
    console.log(this.getImc())
  }

}
