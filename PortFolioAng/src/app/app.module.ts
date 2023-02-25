import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';



import { InicioComponent } from './componentes/inicio/inicio.component';
import { SobreMiComponent } from './componentes/sobre-mi/sobre-mi.component';
import { CurriculumComponent } from './componentes/curriculum/curriculum.component';
import { SkillsComponent } from './componentes/skills/skills.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { Pag404Component } from './componentes/pag404/pag404.component';



@NgModule({
  declarations: [
    AppComponent,
  
    InicioComponent,
    SobreMiComponent,
    CurriculumComponent,
    SkillsComponent,
    ProyectosComponent,
    Pag404Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

