import { Component, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Consigne } from '../consigne.model';
import { Doc } from '../doc.model';
import { Enregistrement } from '../enregistrement.model';
import { DynamicGrid } from '../grid.model';
import { Remise } from '../remise.model';
import { Reunion } from '../reunion.model';
import { Travail } from '../travail.model';
 
@Component({
  selector: 'app-consulter-formation',
  templateUrl: './consulter-formation.component.html',
  styleUrls: ['./consulter-formation.component.scss']
})
export class ConsulterFormationComponent implements OnInit {
  @ViewChild('closebtn') closebtn:any;

  inscriptions:any;
  addForm: FormGroup;

  rows: FormArray;
  itemForm: FormGroup;
  dynamicArray: Array<DynamicGrid> = [];  
  newDynamic: any = {}; 
  traveaux:Array<Travail>=[];
  newTravail:any={};
  consignes:Array<Consigne>=[];
  newConsigne:any={};
  remises:Array<Remise>=[];
  newRemise:any={};
  documents:Array<Doc>=[];
  newDocument:any={};
  enregistrements:Array<Enregistrement>=[];
  newEnregistrement:any={};
  reunions:Array<Reunion>=[];
  newReunion:any={};
  items=['compétence 1','compétence 2','compétence 3','compétence 4'];
  itemId:any;
  levels=['Niveau 1','Niveau 2','Niveau 3','Niveau 4'];
  levelId:any;
  public selectControl = new FormControl();
  public selectItems = [
    { optionId: 1, optionTitle: 'option 1' },
    { optionId: 2, optionTitle: 'option 2' },
    { optionId: 3, optionTitle: 'option 3' },
    { optionId: 4, optionTitle: 'option 4' },
    { optionId: 5, optionTitle: 'option 5' },
    { optionId: 6, optionTitle: 'option 6' },
    { optionId: 7, optionTitle: 'option 7' },
    { optionId: 8, optionTitle: 'option 8' },
    { optionId: 9, optionTitle: 'option 9' },
    { optionId: 10, optionTitle: 'option 10' },
    { optionId: 11, optionTitle: 'option 11' },
    { optionId: 12, optionTitle: 'option 12' },
    { optionId: 13, optionTitle: 'option 13' },
    { optionId: 14, optionTitle: 'option 14' },
    { optionId: 15, optionTitle: 'option 15' },
    { optionId: 16, optionTitle: 'option 16' },
    { optionId: 17, optionTitle: 'option 17' },
    { optionId: 18, optionTitle: 'option 18' },
    { optionId: 19, optionTitle: 'option 19' },
    { optionId: 20, optionTitle: 'option 20' },
  ];

  model:any;
  constructor(private toastr: ToastrService) { }  
  /*constructor(private fb: FormBuilder) {

    this.addForm = this.fb.group({
      items: [null, Validators.required],
      items_value: ['no', Validators.required]
    });

    this.rows = this.fb.array([]);

  }*/

  /*onAddRow() {
    this.rows.push(this.createItemFormGroup());
  }*/

  onRemoveRow(rowIndex:number){
    this.rows.removeAt(rowIndex);
  }

  /*createItemFormGroup(): FormGroup {
    return this.fb.group({
      name: null,
      description: null,
      qty: null
    });
  }*/

  ngOnInit(): void {
    var rowIdx = 0;
    this.newDynamic = {competence: "", niveau: "",resultat:""};  
    this.dynamicArray.push(this.newDynamic);  
    this.newTravail = {titre: "", date_debut: "",date_echeance:"",test:"",ponderation:"",resultat:""};  
    this.traveaux.push(this.newTravail);  
    this.newConsigne={titre:"",piece_jointe:""};
    this.consignes.push(this.newConsigne);
    this.newRemise={titre:"",piece_jointe:""};
    this.remises.push(this.newRemise);
    this.newDocument={titre:"",piece_jointe:""};
    this.documents.push(this.newDocument);
    this.newEnregistrement={lien_zoom:"",date:""};
    this.newReunion={titre:"",date:"",lien:""};
 
// jQuery button click event to add a row.
/*$('#addBtn').on('click', function () {
  
    // Adding a row inside the tbody.
    $('#tbody').append(`<tr id="R${++rowIdx}">
    <td>
    <ngx-select [items]="levels" [(ngModel)]="levelId" id="level"></ngx-select>

  </td>
           </tr>`);
});*/
    /*$(".add-row").click(function(){
      var competence = $("#competence").val();
      var level = $("#level").val();
      var resultat=$("#resultat").val();
   //   var markup = "<tr><td><input type='checkbox' name='record'></td><td>" + name + "</td><td>" + email + "</td></tr>";
      var markup ="<tr> <td> <ngx-select [items]=items [(ngModel)]=itemId id='competence'></ngx-select></td><td><ngx-select [items]='levels' [(ngModel)]='levelId' id='level'></ngx-select></td><td><input type='text' id='resultat' name='resultat'  class='form-control'> </td><td><button type='button' class='add-row'><i class='fa fa-plus'></i></button></td></tr>";
      $("table tbody").append(markup);
  });*/
    this.inscriptions=[
      {'id':1, 'formateur':'Personne 1','Date_debut':'20/4/2021','Date_fin':'20/5/2020','statut':'réfuse'},
      {'id':2, 'formateur':'Personne 2','Date_debut':'20/4/2020','Date_fin':'20/5/2021','statut':'En attente'},
      {'id':3, 'formateur':'Personne 3','Date_debut':'22/2/2021','Date_fin':'20/3/2021','statut':'Accepté'},
      {'id':4, 'formateur':'Personne 4','Date_debut':'24/1/2021','Date_fin':'20/9/2021','statut':'conditionnel'},
    ]
    console.log(this.inscriptions);
    this.selectControl.valueChanges
    .subscribe((subscriptionTypeId: number) => {
      const obj = this.selectItems.find(item => item.optionId === subscriptionTypeId);
      console.log(
        'subscriptionTypeId', subscriptionTypeId, obj
      );
    });
  }
 
  time: Date = new Date();
 hours=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24];
 counter(i: number) {
  return new Array(i);
}
addRow() {    
  this.newDynamic = {competence: "", niveau: "",resultat:""};  
    this.dynamicArray.push(this.newDynamic);  
    this.toastr.success('New row added successfully', 'New Row');  
    console.log(this.dynamicArray);  
    return true;  
}  
addTravail() {    
  this.newTravail = {titre: "", date_debut: "",date_echeance:"",test:"",ponderation:"",resultat:""};  
    this.traveaux.push(this.newTravail);  
    this.toastr.success('New row added successfully', 'New Row');  
    //console.log(this.dynamicArray);  
    return true;  
}  
addConsigne() {    
  this.newConsigne = {titre: "", piece_jointe:""};  
    this.consignes.push(this.newConsigne);  
    this.toastr.success('New row added successfully', 'New Row');  
    //console.log(this.dynamicArray);  
    return true;  
}  
addRemise() {    
  this.newRemise = {titre: "", piece_jointe:""};  
    this.remises.push(this.newRemise);  
    this.toastr.success('New row added successfully', 'New Row');  
    //console.log(this.dynamicArray);  
    return true;  
}  
addDocument() {    
  this.newDocument = {titre: "", piece_jointe:""};  
    this.documents.push(this.newDocument);  
    this.toastr.success('New row added successfully', 'New Row');  
    //console.log(this.dynamicArray);  
    return true;  
}  
addEnregistrement() {    
  this.newEnregistrement = {lien_zoom: "", date:""};  
    this.enregistrements.push(this.newEnregistrement);  
    this.toastr.success('New row added successfully', 'New Row');  
    //console.log(this.dynamicArray);  
    return true;  
}
addReunion() {    
  this.newReunion = {titre: "", date:"",lien:""};  
    this.reunions.push(this.newReunion);  
    this.toastr.success('New row added successfully', 'New Row');  
    //console.log(this.dynamicArray);  
    return true;  
}   


deleteRow(index:any) {  
    if(this.dynamicArray.length ==1) {  
      this.toastr.error("Can't delete the row when there is only one row", 'Warning');  
        return false;  
    } else {  
        this.dynamicArray.splice(index, 1);  
        this.toastr.warning('Row deleted successfully', 'Delete row');  
        return true;  
    }  
}
deleteConsigne(index:any) {  
  if(this.consignes.length ==1) {  
    this.toastr.error("Can't delete the row when there is only one row", 'Warning');  
      return false;  
  } else {  
      this.consignes.splice(index, 1);  
      this.toastr.warning('Row deleted successfully', 'Delete row');  
      return true;  
  }  
}
deleteRemise(index:any) {  
  if(this.remises.length ==1) {  
    this.toastr.error("Can't delete the row when there is only one row", 'Warning');  
      return false;  
  } else {  
      this.remises.splice(index, 1);  
      this.toastr.warning('Row deleted successfully', 'Delete row');  
      return true;  
  }  
}
deleteDocument(index:any) {  
  if(this.documents.length ==1) {  
    this.toastr.error("Can't delete the row when there is only one row", 'Warning');  
      return false;  
  } else {  
      this.documents.splice(index, 1);  
      this.toastr.warning('Row deleted successfully', 'Delete row');  
      return true;  
  }  
}
deleteEnregistrement(index:any) {  
  if(this.enregistrements.length ==1) {  
    this.toastr.error("Can't delete the row when there is only one row", 'Warning');  
      return false;  
  } else {  
      this.enregistrements.splice(index, 1);  
      this.toastr.warning('Row deleted successfully', 'Delete row');  
      return true;  
  }  
}
deleteReunion(index:any) {  
  if(this.reunions.length ==1) {  
    this.toastr.error("Can't delete the row when there is only one row", 'Warning');  
      return false;  
  } else {  
      this.reunions.splice(index, 1);  
      this.toastr.warning('Row deleted successfully', 'Delete row');  
      return true;  
  }  
}

deleteTravail(index:any) {  
  if(this.traveaux.length ==1) {  
    this.toastr.error("Can't delete the row when there is only one row", 'Warning');  
      return false;  
  } else {  
      this.traveaux.splice(index, 1);  
      this.toastr.warning('Row deleted successfully', 'Delete row');  
      return true;  
  }  
}
valider(){
  this.closebtn.nativeElement.click();

}
}
