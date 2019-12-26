import { Component, OnInit, ViewEncapsulation, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ChartType, ChartDataSets } from 'chart.js';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class BarChartComponent implements OnInit, OnChanges {

@Input() result: any;

  barChartData: ChartDataSets[] = [];
  barChartLabels = [];
  barChartOptions = {};
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];
  barChartColors = [];

  correctColorBar = {
    backgroundColor: 'green',
    borderColor: 'rgb(103, 58, 183)',
    pointBackgroundColor: 'rgb(103, 58, 183)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgba(103, 58, 183, .8)'
  };

  incorrectColorBar = {
    backgroundColor: '#FF5A5A',
    borderColor: 'rgb(103, 58, 183)',
    pointBackgroundColor: 'rgb(103, 58, 183)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgba(103, 58, 183, .8)'


  };

  constructor() { }

  ngOnInit() {
    this.getBarChartColors();
    this.getBarChartOptions();


    this.barChartLabels = ['Result'];

    this.barChartData = [
      { data: [this.result["correct"]], label: 'Correct' },
      { data: [this.result["incorrect"]], label: 'InCorrect' }
    ];
  }

  getBarChartColors() {
    this.barChartColors = [
      this.correctColorBar,
      this.incorrectColorBar
    ];
  }

ngOnChanges(changes: SimpleChanges): void {
  // Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
  // Add '${implements OnChanges}' to the class.
  
}
  getBarChartOptions() {
    this.barChartOptions = {

      responsive: true,

      scales: {
        yAxes: [{
          gridLines: {
            display: false
          },
          ticks: {
            display: true,
            beginAtZero: true,
            steps: 2,
            stepValue: 2,
            max: 12,
            min: 0
          },
          legend: {
            display: true,
            position: 'bottom'
          }
        }]
      }

    };
  }
}
