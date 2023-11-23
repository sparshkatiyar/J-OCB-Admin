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
import { ProfileComponent } from './profile/profile.component';
import { ChangePasswordComponent } from './dialog/change-password/change-password.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BookingMgmtComponent } from './booking-mgmt/booking-mgmt.component';
import { CommissionMgmtComponent } from './commission-mgmt/commission-mgmt.component';
import { OfferMgmtComponent } from './offer-mgmt/offer-mgmt.component';
import { NotificationMgmtComponent } from './notification-mgmt/notification-mgmt.component';
import { AddEditOfferComponent } from './dialog/add-edit-offer/add-edit-offer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    LayoutComponent,
    DashboardComponent,
    UserMgmtComponent,
    DeleteComponent,
    TableTabMgmtComponent,
    ProfileComponent,
    ChangePasswordComponent,
    BookingMgmtComponent,
    CommissionMgmtComponent,
    OfferMgmtComponent,
    NotificationMgmtComponent,
    AddEditOfferComponent,
    PageNotFoundComponent,
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    SharedModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class LayoutModule { }
