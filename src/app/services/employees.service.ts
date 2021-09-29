import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { appConfig } from 'src/environments/environment';
import { Employee } from '../models/employee.model';

@Injectable({
  providedIn: 'root',
})
export class EmployeesService {
  URL_BASE = appConfig.URL_API;

  constructor(private http: HttpClient) {}

  getEmployess(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.URL_BASE + '/api/Employee');
  }

  updateEmployee(employee: Partial<Employee>): Observable<Employee> {
    return this.http.put<Employee>(this.URL_BASE + '/api/Employee', employee);
  }

  createEmployee(employee: Employee): Observable<Employee> {
    return this.http.post<Employee>(this.URL_BASE + '/api/Employee', employee);
  }
}
