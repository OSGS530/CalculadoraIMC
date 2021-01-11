import { Component, OnInit } from '@angular/core';
import * as Chart from 'chart.js';

@Component({
  selector: 'app-graphics',
  templateUrl: './graphics.component.html',
  styleUrls: ['./graphics.component.css']
})
export class GraphicsComponent implements OnInit {

  constructor() { }

  data=[10, 20, 30, 40, 50, 40];
  labels= ['January', 'February', 'March', 'April', 'May', 'June'];

  canvas: any;
  ctx: any;
  ngOnInit(): void {
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
