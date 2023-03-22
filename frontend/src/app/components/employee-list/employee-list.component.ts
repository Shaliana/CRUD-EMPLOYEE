import { Component, OnInit } from '@angular/core';
import { EmployeeService } from "src/app/services/employee.service";

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit{
  employees: any;
  currentEmployee = null;
  currentIndex = -1;

  constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.retrieveEmployees();
  }

  retrieveEmployees(): void {
    this.employeeService.getAll()
      .subscribe(
        data => {
          this.employees = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  refreshList(): void {
    this.retrieveEmployees();
    this.currentEmployee = null;
    this.currentIndex = -1;
  }

  setActiveEmployee(employee, index): void {
    this.currentEmployee = employee;
    this.currentIndex = index;
  }
}
