import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GraficasSkipTestsService {

  constructor( private hhtp: HttpClient) { }
  
  getUsuariosRedesSociales(){
    return this.hhtp.get('http://localhost:3000/grafica')
  }


  getUsuariosRRSSDonaData(){
    return this.getUsuariosRedesSociales()
              .pipe(
                delay(1500),
                map( (data) => {
                  const labels = Object.keys(data);
                  const values = Object.values(data);
                  return {labels, values};
                })
              )
  }



}
