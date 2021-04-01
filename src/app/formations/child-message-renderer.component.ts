import { Component } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
 
@Component({
selector: 'child-cell',
template: `
 <a href="#"><i class="fa fa-edit"></i>  </a> <a href="#"><i class="fa fa-trash-o" style="margin-left:5px"></i><i class="fa fa-refresh" style="margin-left:5px"></i>  </a> `
})
export class ChildMessageRenderer implements ICellRendererAngularComp {
public params: any;

agInit(params: any): void {
this.params = params;
}

public invokeParentMethod() {
this.params.context.componentParent.methodFromParent(
`Row: ${this.params.node.rowIndex}, Col: 
${this.params.colDef.headerName}`
);
}

refresh(): boolean {
return false;
}
}