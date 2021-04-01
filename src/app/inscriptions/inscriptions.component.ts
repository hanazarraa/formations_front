import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-inscriptions',
  templateUrl: './inscriptions.component.html',
  styleUrls: ['./inscriptions.component.scss']
})
export class InscriptionsComponent implements OnInit {
   formationId:any;
  constructor(private route: ActivatedRoute) { 
    this.formationId= this.route.snapshot.paramMap.get('formationId');
    console.log(this.formationId);
  }

  ngOnInit(): void {


  }

}
