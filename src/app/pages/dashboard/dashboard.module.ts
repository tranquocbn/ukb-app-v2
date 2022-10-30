import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DashboardPageRoutingModule } from './dashboard-routing.module';

import { DashboardPage } from './dashboard.page';
import { ShareService } from 'src/app/providers/share.service';
import { ItemFeatureComponent } from 'src/app/components/item-feature/item-feature.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DashboardPageRoutingModule
  ],
  declarations: [
    DashboardPage,
    ItemFeatureComponent
  ],
  providers: [
    ShareService
  ]
})
export class DashboardPageModule {}
