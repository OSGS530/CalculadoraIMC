import { Component, OnInit } from '@angular/core';
import {imchombre} from'../imchombre/imchombre';
import {imcmujer} from '../imcmujer/imcmujer';
import {getMaleStatus} from '../imcvalor/imc';
import {getFemaleStatus} from '../imcvalor/imc';
import { ImcApi } from "../../models/imcapi";
import { ImcService } from "../../services/imc.service"
import { DatePipe } from '@angular/common';
import { StorageService } from "../../services/storage.service";

@Component({
  selector: 'app-gui',
  templateUrl: './gui.component.html',
  styleUrls: ['./gui.component.css']
})
export class GuiComponent implements OnInit {
  ages = Array.from(Array(10).keys());

  status=["Bajo peso","Normal","Sobrepeso","Obesidad"];
  constructor(private imcService : ImcService, private storageService : StorageService,public datepipe: DatePipe) {}
  
  rango:String= "";
  imc = 0;
  peso = 0;
  estatura = 0.0;
  edad= 0;
  genero:String;


  ngOnInit(): void {
     // test, debe ir en boton logout
    this.storageService.localDeleteByKey("token");
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
    let fecha=Date();
    var date = fecha.toString();
    //cambiar usuario activo
    imc.iduser = 1;
    imc.imc = this.imc;
    imc.age = this.edad;
    imc.date=this.datepipe.transform(fecha,"yyyy-MM-dd");
    imc.glucosa=0.0;
    imc.id=0;
    imc.diabetes=0.0;
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
