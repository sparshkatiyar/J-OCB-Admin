import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';
import { UserMgmtComponent } from './user-mgmt/user-mgmt.component';
import { DeleteComponent } from './dialog/delete/delete.component';
import { TableTabMgmtComponent } from './table-tab-mgmt/table-tab-mgmt.component';


@NgModule({
  declarations: [
    LayoutComponent,
    DashboardComponent,
    UserMgmtComponent,
    DeleteComponent,
    TableTabMgmtComponent,
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    SharedModule,
    MaterialModule
  ]
})
export class LayoutModule { }
