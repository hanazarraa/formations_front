import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inscription-etudiants',
  templateUrl: './inscription-etudiants.component.html',
  styleUrls: ['./inscription-etudiants.component.scss']
})
export class InscriptionEtudiantsComponent implements OnInit {
  @ViewChild('closebutton') closebutton:any;
  @ViewChild('closebtn') closebtn:any;
 inscriptions:any;
 statutParent="Conditionnel";
  constructor(private router:Router) { }

  ngOnInit(): void {
    this.inscriptions=[
      {'Employe':'Employé1','Date_demande':'20/02/2021','Statut':'En Attente'},
      {'Employe':'Employé1','Date_demande':'20/02/2021','Statut':'Accepté'},
      {'Employe':'Employé1','Date_demande':'20/02/2021','Statut':'Réfusé'},
    ]

  }
  /*private closeModal(): void {
    this.closebutton.nativeElement.click();
  }*/
  previous(){
    this.router.navigate(['formations/:formationId/inscriptions']);
  }
  Accepter(inscription:any){
    console.log(inscription.Statut);
    this.closebutton.nativeElement.click();
    inscription.Statut="Accepté";
    this.statutParent="Accepté";
  }
  Refuser(inscription:any){
    this.closebtn.nativeElement.click();

    inscription.Statut="Réfusé";
  }
  enattente(statut:any){
    if(statut=="En Attente"){
      return true;
    }else{
      return false;
    }

  }

}
