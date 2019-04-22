import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routesExperienciaProf: Routes = [
  {
    id: 1,
    nameCompany: "Gesif",
    nameConsultora: "",
    logo: "",
    from: 1554813587,
    to: 1554813587,
    position: "Programador"    
  }  
];

@NgModule({
  imports: [RouterModule.forChild(routesExperienciaProf)],
  exports: [RouterModule]
})
export class ExperienciaProfesionalRoutingModule { }
