import { Overlay } from '@angular/cdk/overlay';
import { Component, OnInit } from '@angular/core';
import {
  MatDialog,
  MatDialogClose,
  MatDialogConfig,
} from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Employee } from 'src/app/models/employee.model';
import { EmployeesService } from 'src/app/services/employees.service';
import { AddUpdateComponent } from '../add-update/add-update.component';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss'],
})
export class EmployeeListComponent implements OnInit {
  employees: Employee[] = [];
  displayedColumns: string[] = ['id', 'name', 'position', 'salary', 'actions'];

  dataSource: MatTableDataSource<Employee> = new MatTableDataSource();

  constructor(
    private employeeService: EmployeesService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.employeeService.getEmployess().subscribe((data) => {
      this.dataSource.data = data;
    });
  }

  onCreate() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    // dialogConfig.scrollStrategy = this.overlay.scrollStrategies.noop();
    // dialogConfig.width = '60%';
    // dialogConfig.height = '70vh';

    this.dialog.open(AddUpdateComponent, dialogConfig);
  }
}
