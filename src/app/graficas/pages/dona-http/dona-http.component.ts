import { Component, OnInit } from '@angular/core';
import { ChartData, ChartEvent, ChartType } from 'chart.js';
import { GraficasSkipTestsService } from '../../services/graficas--skip-tests.service';

@Component({
  selector: 'app-dona-http',
  templateUrl: './dona-http.component.html',
  styles: [
  ]
})
export class DonaHttpComponent implements OnInit {

  constructor( public chartService: GraficasSkipTestsService) {

  }
  
  ngOnInit(): void {
    //Esto funciona bien, pero lo haremos de otra manera
    // this.chartService.getUsuariosRedesSociales()
    //   .subscribe( data => {
    //     console.log(data);
    //     const labels = Object.keys(data);
    //     console.log(labels);
    //     this.doughnutChartLabels = labels;
    //     this.doughnutChartData.labels = labels;
    //     const values = Object.values(data);
    //     console.log(values);
    //     this.doughnutChartData.datasets.push({data: values});
    //   });

    // De esta menara
    
    this.chartService.getUsuariosRRSSDonaData()
    .subscribe( ({ labels, values}) => {
        console.log(labels);
        this.doughnutChartData.labels = labels;
        this.doughnutChartData.datasets.push({data: values});
      });

  }

  public doughnutChartData: ChartData<'doughnut'> = {
    labels: [ 
      // 'Download Sales', 'In-Store Sales', 'Mail-Order Sales'
      ],
    datasets: [
      // { data: [ 350, 450, 100 ] },
      // { data: [ 50, 150, 120 ] },
      //{ data: [ 250, 130, 70 ], backgroundColor: ['#F08632', '#ABF032', '#3BF0DE']}
    ]
  };
  public doughnutChartType: ChartType = 'doughnut';

  // events
  public chartClicked({ event, active }: { event: ChartEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: ChartEvent, active: {}[] }): void {
    console.log(event, active);
  }

}
