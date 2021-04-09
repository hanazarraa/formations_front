import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { DynamicGrid } from '../grid.model';

@Component({
  selector: 'app-grid-view',
  templateUrl: './grid-view.component.html',
  styleUrls: ['./grid-view.component.scss']
})
export class GridViewComponent implements OnInit {
  constructor(private toastr: ToastrService) { }  
  
  /*dynamicArray: Array<DynamicGrid> = [
    {competence:'Angular',niveau :'1',resultat:'10'},
    {competence:'Angular 11 ',niveau :'2',resultat:'20'}
     ];*/
  newDynamic: any = {};  
  ngOnInit(): void {  
   //   this.newDynamic = {title1: "dd", title2: "dd",title3:"dd"};  
    //  this.dynamicArray.push(this.newDynamic);  
      console.log(this.newDynamic);
  }  
  
  addRow(index:any) {    

     /* this.newDynamic = {title1: "", title2: "",title3:""};  
      this.dynamicArray.push(this.newDynamic);  
      this.toastr.success('New row added successfully', 'New Row');  
      console.log(this.dynamicArray);  */
      return true;  
  }  
    
  deleteRow(index:any) {  
     /* if(this.dynamicArray.length ==1) {  
        this.toastr.error("Can't delete the row when there is only one row", 'Warning');  
          return false;  
      } else {  
          this.dynamicArray.splice(index, 1);  
          this.toastr.warning('Row deleted successfully', 'Delete row');  
          return true;  
      }  */
  }  

}
