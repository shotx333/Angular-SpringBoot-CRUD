import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  employee: Employee = new Employee();

  constructor(private employeeService: EmployeeService, private router: Router) { }

  ngOnInit(): void {
  }

  saveEmployee() {
    this.employeeService.createEmployee(this.employee).subscribe({
      next: (data) => {
        console.log(data);
        this.goToEmployeeList();
      },
      error: (error) => {
        console.log(error);
      }
    });
  }

  goToEmployeeList() {
    this.router.navigate(['/employees']);

  }

  onSubmit() {
    console.log(this.employee);
    if (this.employee.firstName != null && this.employee.lastName != null && this.employee.email != null) {
      this.saveEmployee();
    
    } else{
      alert("No field should be empty");
      
    }
    
  }
}
