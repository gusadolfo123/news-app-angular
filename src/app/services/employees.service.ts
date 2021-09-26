import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { appConfig } from 'src/environments/environment';
import { Employee } from '../models/employee.model';

@Injectable({
  providedIn: 'root',
})
export class EmployeesService {
  URL_BASE = appConfig.URL_API;

  constructor(private http: HttpClient) {}

  getEmployess() {
    return this.http.get<Employee[]>(this.URL_BASE + '/api/Employee');
  }
}
