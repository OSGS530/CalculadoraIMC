import { Component, OnInit } from '@angular/core';
import { ImcApi } from "../../models/imcapi";
import { ImcService } from "../../services/imc.service";
import * as Chart from 'chart.js';

@Component({
  selector: 'app-graphics',
  templateUrl: './graphics.component.html',
  styleUrls: ['./graphics.component.css']
})
export class GraphicsComponent implements OnInit {

  constructor(private imcService:ImcService) { }

  data=new Array();
  labels= ['January', 'February', 'March', 'April', 'May', 'June'];

  canvas: any;
  ctx: any;
  ngOnInit(): void {
    var imcs:any;
    for (imcs in this.imcService.getImcs()){
      this.data.push(imcs.imc);
    }
    for (imcs in this.imcService.getImcs()){
      this.data.push(imcs.date);
    }
    this.canvas = document.getElementById('myChart');
    this.ctx = this.canvas.getContext('2d');
    const myChart = new Chart(this.ctx, {
      type: 'line',
      data: {
        datasets: [{
          label: 'IMC.',
          fill:false,
          borderColor:'rgba(57,208,238,1)',
          data: this.data
        }],
        labels:this.labels
      },
      options: {
        legend: {
          display: true
        },
        responsive: true,
        display: true
      }
    });
  }

}
