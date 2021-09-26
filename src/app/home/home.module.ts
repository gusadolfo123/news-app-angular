import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { NewsListComponent } from './components/news-list/news-list.component';
import { HomeRoutingModule } from './home-routing.module';
import { NewsItemComponent } from './components/news-item/news-item.component';

import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [HomeComponent, NewsListComponent, NewsItemComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    SharedModule,
  ],
  exports: [HomeComponent, NewsListComponent],
})
export class HomeModule {}
