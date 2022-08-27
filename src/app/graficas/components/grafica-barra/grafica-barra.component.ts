import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartDataset, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';


@Component({
  selector: 'app-grafica-barra',
  templateUrl: './grafica-barra.component.html',
  styles: [
  ]
})


export class GraficaBarraComponent implements OnInit {
  
  @Input() horizontal: boolean = false;

  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: {
      x: {},
      y: {
        min: 10
      }
    }
  };

  public barChartType: ChartType = 'bar';

  @Input() barChartData: ChartData<'bar'> = {
    labels: [],
    datasets: []
  };

  @Input() datax: ChartDataset[] = [];

  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  constructor() { }

  ngOnInit(): void {

    //Si el grafico es horizontal
    if(this.horizontal) {
 
      //Para invertir las barras y colocarlas horizontalmente necesitamos cambiar el "indexAxis"
      this.barChartOptions!.indexAxis = 'y';
 
      //Para que se nos muestren todos los datos horizontalmente también debemos retirar el               
      //"min" que tenemos en el barChartOptions.
      this.barChartOptions!.scales!["y"]!.min = 0;
    }
  }

  chartHovered(){
    
  }

  public randomize(): void {
    // Cambiara lo valores de todas las barras
    this.barChartData.datasets[0].data = [
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100), ];

    this.barChartData.datasets[1].data = [
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100), ];

    this.barChartData.datasets[2].data = [
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100), ];
    this.chart?.update();
  }

  chartClicked(){

  }

}
