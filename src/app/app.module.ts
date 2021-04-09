import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { AgGridModule } from 'ag-grid-angular';
import { FormationsComponent } from './formations/formations.component';
import 'ag-grid-enterprise';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { AddFormationComponent } from './add-formation/add-formation.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import { ScheduleModule } from '@syncfusion/ej2-angular-schedule';
import { AgendaCoursComponent } from './agenda-cours/agenda-cours.component';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
 import { SchedulerModule } from 'angular-calendar-scheduler';
 import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
 import { FullCalendarModule } from '@fullcalendar/angular'; // the main connector. must go first
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin
import interactionPlugin from '@fullcalendar/interaction';
import { NgxSelectModule } from 'ngx-select-ex';
import { MatTabsModule } from '@angular/material/tabs';

import { ListeFormationsComponent } from './liste-formations/liste-formations.component';
import { TestComponent } from './test/test.component'; // a plugin
import { HttpClientModule } from '@angular/common/http';
import { DemandesFormateursComponent } from './demandes-formateurs/demandes-formateurs.component';
import { InscriptionsComponent } from './inscriptions/inscriptions.component';
import { InscriptionEtudiantsComponent } from './inscription-etudiants/inscription-etudiants.component';
import { ConsulterFormationComponent } from './consulter-formation/consulter-formation.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GridViewComponent } from './grid-view/grid-view.component';
import { ToastrModule } from 'ngx-toastr';
import { TreeViewModule } from '@progress/kendo-angular-treeview';


FullCalendarModule.registerPlugins([ // register FullCalendar plugins
  dayGridPlugin,
  interactionPlugin
]);
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    FormationsComponent,
    AddFormationComponent,
    AgendaCoursComponent,
    ListeFormationsComponent,
    TestComponent,
    DemandesFormateursComponent,
    InscriptionsComponent,
    InscriptionEtudiantsComponent,
    ConsulterFormationComponent,
    GridViewComponent
  ],
  imports: [
    NgxSelectModule,
    
    NgxMatSelectSearchModule,
    HttpClientModule,
    MatTabsModule,
    BrowserModule,
    AppRoutingModule,
    BsDatepickerModule.forRoot(),

    AgGridModule.withComponents([]),
    NgbModule,
    FormsModule,   
   TimepickerModule.forRoot(),
   FullCalendarModule,
   BrowserAnimationsModule ,// register FullCalendar with you app
   ToastrModule.forRoot(), TreeViewModule,

   
      


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
