import { Component } from '@angular/core';
import { PorfolioService } from 'src/app/servicios/porfolio.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  miPortfolio:any;
  constructor(private datosPorfolio:PorfolioService){}

  ngOnInit(): void{
    this.datosPorfolio.obtenerDatos().subscribe(data =>{
      console.log(data);
     this.miPortfolio=data;
    });
  }

}
