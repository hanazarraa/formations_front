import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddFormationComponent } from './add-formation/add-formation.component';
import { AgendaCoursComponent } from './agenda-cours/agenda-cours.component';
import { FormationsComponent } from './formations/formations.component';
import { InscriptionsComponent } from './inscriptions/inscriptions.component';
import { ListeFormationsComponent } from './liste-formations/liste-formations.component';

const routes: Routes = [
  {path:'formations/agenda',component:AgendaCoursComponent},
  {
    path:'formations/:formationId',
    component: AddFormationComponent,
    
  
},
{path: 'formations/:formationId/inscriptions',component:InscriptionsComponent},
  {path:'formations',component:FormationsComponent},
  {path:'formations/ajouterFormation',component:AddFormationComponent},
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
