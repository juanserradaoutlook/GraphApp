import { Component, OnInit } from '@angular/core';
import { ChartData, ChartDataset } from "chart.js";


@Component({
  selector: 'app-barras-doble',
  templateUrl: './barras-doble.component.html',
  styles: [
  ]
})
export class BarrasDobleComponent implements OnInit {

  proveedoresData = [
    { data: [ 100,200,300,400,500 ], label: 'Vendedor A' },
    { data: [ 50,250,30, 450,200 ], label: 'Vendedor B' },
  ];
  
  proveedoresLabels: string[] = ['2021', '2022','2023','2024','2025'];
  
  // Aca paso los parametros para el 1er grafico
  productoChart: ChartData<'bar'> = {
    labels: ['2021', '2022','2023','2024','2025'],
    datasets: [
        { data: [ 200, 300,400,300, 100 ], label: 'Carros', backgroundColor: 'red' },
    ]
  };

  // Aca paso los parametros para el 2do grafico
  proveedoresChart: ChartData<'bar'> = {
    datasets: this.proveedoresData,
    labels: this.proveedoresLabels
  };



  constructor() { }

  ngOnInit(): void {
  }

}
