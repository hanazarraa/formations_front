import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddFormationComponent } from './add-formation/add-formation.component';
import { AgendaCoursComponent } from './agenda-cours/agenda-cours.component';
import { ConsulterFormationComponent } from './consulter-formation/consulter-formation.component';
import { FormationsComponent } from './formations/formations.component';
import { InscriptionEtudiantsComponent } from './inscription-etudiants/inscription-etudiants.component';
import { InscriptionsComponent } from './inscriptions/inscriptions.component';
import { ListeFormationsComponent } from './liste-formations/liste-formations.component';

const routes: Routes = [
  {path:'formations/agenda',component:AgendaCoursComponent},
  {
    path:'formations/:formationId',
    component: ConsulterFormationComponent,
    
  
},
{path: 'formations/:formationId/inscriptions/:inscriptionId',component:InscriptionEtudiantsComponent},

{path: 'formations/:formationId/inscriptions',component:InscriptionsComponent},
//{path:'formations/:formationId/inscriptions/:inscriptionId/details',component:I}
  {path:'formations',component:FormationsComponent},
  {path:'formations/ajouterFormation',component:AddFormationComponent},
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
