import { EmployeeService } from './../employee.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';


@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent implements OnInit {
  employees:Employee[];

  constructor(private employeeService:EmployeeService, private router:Router){}

  ngOnInit(){
    this.getEmployees() ;
  }

  private getEmployees(){
    this.employeeService.getEmployeesList().subscribe(
      data => {
        this.employees = data;
      }, error =>console.log(error)
    );
  }
  updateEmployee(id:number){
    this.router.navigate(['update-employee', id]);
  }

  deleteEmployee(id:number){
    this.employeeService.deleteEmployee(id).subscribe(
      data =>{
        this.getEmployees();
      }
    )
  }
  employeeDetails(id:number){
    this.router.navigate(['employee-details', id]);
  }




}
