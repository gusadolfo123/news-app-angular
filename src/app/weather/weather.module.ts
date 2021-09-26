import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherComponent } from './components/weather/weather.component';
import { WeatherRoutingModule } from './weather-routing.module';

@NgModule({
  declarations: [WeatherComponent],
  imports: [CommonModule, WeatherRoutingModule],
  exports: [WeatherComponent],
})
export class WeatherModule {}
