import { Component, OnInit } from '@angular/core';
import { EmployeeService } from "src/app/services/employee.service";

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit{
  employee = {
    _id: '',
    name: '',
    department: ''
  }
  submitted = false;

  constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void {
    
  }

  saveEmployee(): void{
    const data = {
      id: this.employee._id,
      name: this.employee.name,
      department: this.employee.department
    }

    this.employeeService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        }
      )
  }

  newEmployee(): void {
    this.submitted = false;
    this.employee = {
      _id: '',
      name: '',
      department: ''
    }
  }
}
