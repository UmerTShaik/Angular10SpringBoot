import { Router } from '@angular/router';
import { EmployeeService } from './../employee.service';
import { Employee } from './../employee';
import { Component } from '@angular/core';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrl: './create-employee.component.css'
})
export class CreateEmployeeComponent {
  employee:Employee = new Employee();
  
  constructor(private employeeService:EmployeeService, private router:Router){
  }

  saveEmployee(){
      this.employeeService.createEmployee(this.employee).subscribe(
        data=>{
          console.log(data);
          this.goToEmployeeList();
        },
        error => console.log(error)
      );
    }

  goToEmployeeList(){
      this.router.navigate(['/employees'])
    }

  onSubmit(){
      console.log(this.employee);
      this.saveEmployee();
  
      }
}
