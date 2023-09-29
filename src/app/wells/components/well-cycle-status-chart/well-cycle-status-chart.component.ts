import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-well-cycle-status-chart',
  templateUrl: './well-cycle-status-chart.component.html',
  styleUrls: ['./well-cycle-status-chart.component.scss']
})
export class WellCycleStatusChartComponent implements OnInit, OnChanges {
  @Input() chartData: any;

  Highcharts: typeof Highcharts = Highcharts;
  chartOptions!: Highcharts.Options;
  constructor() { }

  ngOnInit() {

  }

  ngOnChanges() {
    this.loadChartData();
  }

  loadChartData() {
    let chartSeriesArr = []
    let obj = {}
    for (let i = 0; i < Object.keys(this.chartData).length; i++) {
      // obj = {}
      obj = {
        name: Object.keys(this.chartData)[i],
        y: Object.values(this.chartData)[i]
      }
      chartSeriesArr.push(obj)
    }

    this.chartOptions = {
      chart: {
        type: 'pie',
        backgroundColor: '#fff',
      },
      title: {
        text: ''
      },
      plotOptions: {
        pie: {
          innerSize: '50%',
           dataLabels: {
            enabled: false
          },
          
          showInLegend: true,
        },
      },
      legend: {
        align: 'left', 
        layout: 'horizontal', 
        verticalAlign: 'top', 
        labelFormat: '<b>{name}</b>: {percentage:.1f}%',
        symbolRadius: 0,
        itemStyle:{'color':'#22263D'}
        
      },
      series: [
        {
          type: 'pie',
          name: 'Cycle Status',
          data: chartSeriesArr,
          point: {
            events: {
              click: function(oEvent: any) {
                 console.log("chartOptions-->", oEvent.point.name);
              }
            }
          }
        }
      ]
    };
  }
}
