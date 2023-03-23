import { Component, OnInit } from '@angular/core';
import { EmployeeService } from "src/app/services/employee.service";
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit{
  currentEmployee = null;
  message = '';

  constructor(
    private employeeService: EmployeeService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.message = '';
    this.getEmployee(this.route.snapshot.paramMap.get('id'));
  }

  getEmployee(id): void {
    this.employeeService.get(id)
      .subscribe(
        data => {
          this.currentEmployee = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  updateEmployee(): void {
    this.employeeService.update(this.currentEmployee._id, this.currentEmployee)
      .subscribe(
        response => {
          console.log(response);
          this.message = 'The Employee was updated successfully!';
        },
        error => {
          console.log(error);
        });
  }

  deleteEmployee(): void {
    this.employeeService.delete(this.currentEmployee._id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/employees']);
        },
        error => {
          console.log(error);
        });
  }
}
