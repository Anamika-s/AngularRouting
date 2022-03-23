import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { DepartmentListComponent } from './department-list/department-list.component';
import { EmployeesListComponent } from './employees-list/employees-list.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DepartmentdetailsComponent } from './departmentdetails/departmentdetails.component';
import { OverviewComponent } from './overview/overview.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  
{path:"", component:DepartmentListComponent},
{path:"departments", component:DepartmentListComponent},
{path:"department/:id", component:DepartmentdetailsComponent,
children: [
  {path:"overview", component:OverviewComponent},
  {path:"contact", component:ContactComponent}
]
},
{path:"employees", component:EmployeesListComponent},
{path:"**" , component:NotFoundComponent}

];
   
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  
   })
export class AppRoutingModule { } 
export const RouteComponents = [
  DepartmentListComponent,
  EmployeesListComponent,
  NotFoundComponent,
  DepartmentdetailsComponent,
  OverviewComponent,
  ContactComponent

  
]