import { Component, OnInit } from '@angular/core';
import { PorfolioService } from 'src/app/servicios/porfolio.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
lenguajesList: any;
habilidadesList: any;
constructor( private datosPorfolio:PorfolioService){ }

ngOnInit(): void {
  this.datosPorfolio.obtenerDatos().subscribe(data =>{
    this.lenguajesList = data.lenguajes; 
  })
  this.datosPorfolio.obtenerDatos().subscribe(data =>{
    this.habilidadesList = data.habilidades; 
  })

}

}
