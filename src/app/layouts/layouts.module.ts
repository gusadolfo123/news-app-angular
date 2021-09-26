import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { MainComponent } from './main/main.component';

import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [MainComponent],
  imports: [CommonModule, SharedModule, MatCardModule, RouterModule],
})
export class LayoutsModule {}
