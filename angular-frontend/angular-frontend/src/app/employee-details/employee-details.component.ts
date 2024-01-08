import { EmployeeService } from './../employee.service';
import { ActivatedRoute } from '@angular/router';
import { Employee } from './../employee';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrl: './employee-details.component.css'
})
export class EmployeeDetailsComponent implements OnInit {
  
  id:number;
  employee:Employee
  constructor(private route:ActivatedRoute, private employeeService:EmployeeService){
  }

  ngOnInit(){
    this.id = this.route.snapshot.params['id'];
    this.employee = new Employee();
    this.employeeService.getEmployeeById(this.id).subscribe(
      data =>{
        this.employee= data;
      }
    );
  }


}
