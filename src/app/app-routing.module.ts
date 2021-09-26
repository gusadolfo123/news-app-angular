import { NgModule } from '@angular/core';
import { RouterModule, Route, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { EmployeeComponent } from './employee/employee.component';
import { MainComponent } from './layouts/main/main.component';

const appRoutes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        redirectTo: 'news',
        pathMatch: 'full',
      },
      {
        path: 'news',
        loadChildren: () =>
          import('./home/home.module').then((m) => m.HomeModule),
      },
      {
        path: 'weather',
        loadChildren: () =>
          import('./weather/weather.module').then((m) => m.WeatherModule),
      },
      {
        path: 'contact',
        component: ContactComponent,
      },
      {
        path: 'employees',
        component: EmployeeComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
