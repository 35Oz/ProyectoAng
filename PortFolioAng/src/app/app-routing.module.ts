import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InicioComponent } from './componentes/inicio/inicio.component'
import { SobreMiComponent } from './componentes/sobre-mi/sobre-mi.component'
import { CurriculumComponent } from './componentes/curriculum/curriculum.component'
import { SkillsComponent } from './componentes/skills/skills.component'
import { ProyectosComponent } from './componentes/proyectos/proyectos.component'
import { Pag404Component } from './componentes/pag404/pag404.component';

const routes: Routes = [
  {path:'inicio', component: InicioComponent},
  {path:'sobre-mi', component: SobreMiComponent},
  {path:'curriculum', component: CurriculumComponent},
  {path:'skills', component: SkillsComponent },
  {path:'proyectos', component: ProyectosComponent },
  {path: '', redirectTo: '/inicio', pathMatch: 'full'},
  {path:'**', component: Pag404Component}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
