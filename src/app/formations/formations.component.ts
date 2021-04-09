import { Component, OnInit, ViewChild } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { ChildMessageRenderer } from './child-message-renderer.component';
import { Router } from '@angular/router';
import { CalendarOptions } from '@fullcalendar/common';
import interactionPlugin, { Draggable } from '@fullcalendar/interaction';

@Component({
  selector: 'app-formations',
  templateUrl: './formations.component.html',
  styleUrls: ['./formations.component.scss']
})
export class FormationsComponent implements OnInit {
  public treeNodes: any[] = [
    {
        categoryName: 'Storage', subCategories: [
            { subCategoryName: 'Wall Shelving' },
            { subCategoryName: 'Floor Shelving' },
            { subCategoryName: 'Kids Storage' }
        ]
    },
    {
        categoryName: 'Lights', subCategories: [
            { subCategoryName: 'Ceiling' },
            { subCategoryName: 'Table' },
            { subCategoryName: 'Floor' }
        ]
    }
];
 formations:any;
constructor(  private router:Router) {
   
}
ngOnInit(){
   this.formations=[{
    "id":11,
    "titre":"Programme IC Canada",
    "sousProg":[{
    "id" :1,
    "titre":"Hancho",
    "cours":[
      {
        "id":1,
        "titre":"introduction"
      },
      {
        "id":2,
        "titre":"cours 1"
      }
    ]
  },
{
  "id":2,
  "titre":"BSC",
  "cours":[]
},{
  "id":3,
  "titre":"BPR",
  "cours":[]
}]

}
  ];
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
calendarOptions: CalendarOptions = {
  initialView: 'dayGridMonth',
  dateClick: this.handleDateClick.bind(this), // bind is important!
  events: [
    { title: 'event 1', date: '2021-04-01' },
    { title: 'event 2', date: '2021-04-02' }
  ]
};

handleDateClick(arg:any) {
  alert('date click! ' + arg.dateStr)
}

}
