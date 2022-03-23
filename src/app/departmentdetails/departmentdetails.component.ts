import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-departmentdetails',
  template: `<h3> You have selected {{departmentid}} </h3>
  <p>
  <button (click)="gonext()"> Next </button>
  <button (click)="goprev()"> Previous </button>
  </p>
  <button (click)="overview()"> Overview </button>
  <button (click)="contact()"> Contact </button>
  <p>
  <router-outlet> </router-outlet>
  
  </p>
  <p> <button (click)="goback()"> Go to Departments List  </button> </p>
  `,
  styleUrls: ['./departmentdetails.component.css']
})
export class DepartmentdetailsComponent implements OnInit {

  departmentid:number;
  constructor(private activatedRoute : ActivatedRoute,
    private router : Router) { }

  ngOnInit(): void {
    // this.departmentid = parseInt(this.activatedRoute.snapshot.paramMap.get("id"));
    this.activatedRoute.paramMap.subscribe(params=>
    {
      this.departmentid = parseInt(params.get("id"));
    });
  }
  contact()
  {
   this.router.navigate(["contact"], {relativeTo:this.activatedRoute});
  }
  overview()
  {
    this.router.navigate(["overview"], {relativeTo:this.activatedRoute});
  }

  gonext()
  {
   let nextid = this.departmentid + 1;
   this.router.navigate(["department", nextid]);
  }
  goprev()
  {
    let previd = this.departmentid - 1;
    this.router.navigate(["department", previd]);

  }
  goback()
  {
    let selectedId = this.departmentid ?  this.departmentid : null;
    this.router.navigate(["departments" ,{id:selectedId}]);
  }

}
