import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChildMessageRenderer } from '../formations/child-message-renderer.component';

@Component({
  selector: 'app-liste-formations',
  templateUrl: './liste-formations.component.html',
  styleUrls: ['./liste-formations.component.scss']
})
export class ListeFormationsComponent implements OnInit {

  ngOnInit(){
  
  }
    constructor(  private router:Router) {
  }
  defaultColDef = {
    sortable: true,
    filter: true
  };
  customActions = function () {
    return '<span><i class="users-edit-icon feather icon-edit-1 mr-50"></i><i class="users-delete-icon feather icon-trash-2"></i></span>';
  };
  columnDefs = [
    { field: 'ID' },
    { field: 'Titre' },
    { field: 'Theme' },
    { field: 'Date_debut' },
    { field: 'Date_fin' },
    { field: 'Statut' },
    {   headerName: 'Actions',
    field: 'Actions',
    cellRenderer: 'childMessageRenderer',
   }
   
  ]; 
   context = { componentParent: this };
  
   frameworkComponents = {
    childMessageRenderer: ChildMessageRenderer,
   };
  autoGroupColumnDef = {
    headerName: 'Model',
    field: 'model',
    cellRenderer: 'agGroupCellRenderer',
    cellRendererParams: {
        checkbox: true
    }
  };
   
  Ajouter(){
    this.router.navigate(['formations/ajouterFormation']);
  }
   rowData = [
      { ID:1,Titre:"formation sur la prise de décision",Theme:"Prise de décision",Date_debut:"19/02/2021",Date_fin:"21/02/2021", Statut:"Planifiée","Actions":this.customActions},
     
  ]; 
  gridOptions = {
    angularCompileRows:true,
    columnDefs: this.columnDefs,
    rowData: this.rowData,
  };

}
