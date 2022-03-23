import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-department-list',
  template: `
  <h3> Departments List </h3>
  <ul class="list-group">
  <li (click)="select(department)"    *ngFor='let department of departments'>
  <span class='badge bg-secondary'> {{department.id}} </span>  {{department.name}}
  </li>
  </ul>
  ` 
})
export class DepartmentListComponent implements OnInit {
 
   
 departments= 
 [
   {"id":1, "name" :"Angular"},
   {"id":2, "name" :"Java"},
   {"id":3, "name" :"C#"},
   {"id":4, "name" :"Python"},
   {"id":5, "name" :"Perl"},
   {"id":6, "name" :"PHP"}
    
   
 ];
 departmentid : number;
 select(department)
 {
   console.log(department.id);
   this.route.navigate(["/department", department.id]);
 }
  constructor(private route : Router , private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params=>
      {
        this.departmentid = parseInt(params.get("id"));
        console.log("Gettimg Id");
      })
  }

}
