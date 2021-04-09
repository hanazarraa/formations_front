import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-inscriptions',
  templateUrl: './inscriptions.component.html',
  styleUrls: ['./inscriptions.component.scss']
})
export class InscriptionsComponent implements OnInit {
   formationId:any;
   inscriptions:any;
  constructor(private route: ActivatedRoute) { 
    this.formationId= this.route.snapshot.paramMap.get('formationId');
    console.log(this.formationId);
  }

  ngOnInit(): void {

         this.inscriptions=[
          {'id':1, 'formateur':'Personne 1','Date_debut':'20/4/2021','Date_fin':'20/5/2020','statut':'réfuse'},
          {'id':2, 'formateur':'Personne 2','Date_debut':'20/4/2020','Date_fin':'20/5/2021','statut':'En attente'},
          {'id':3, 'formateur':'Personne 3','Date_debut':'22/2/2021','Date_fin':'20/3/2021','statut':'Accepté'},
          {'id':4, 'formateur':'Personne 4','Date_debut':'24/1/2021','Date_fin':'20/9/2021','statut':'conditionnel'},
        ]
console.log(this.inscriptions);
  }

}
