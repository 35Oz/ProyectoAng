import { Component } from '@angular/core';
import { PorfolioService } from 'src/app/servicios/porfolio.service';

@Component({
  selector: 'app-curriculum',
  templateUrl: './curriculum.component.html',
  styleUrls: ['./curriculum.component.css']
})
export class CurriculumComponent {
  estudioList: any;
  trabajoList: any;


  constructor( private datosPorfolio:PorfolioService){ }
  ngOnInit(): void {
    this.datosPorfolio.obtenerDatos().subscribe(data =>{
      this.estudioList = data.estudio; 
    })
    this.datosPorfolio.obtenerDatos().subscribe(data =>{
      this.trabajoList = data.trabajo; 
    })
  }

}
