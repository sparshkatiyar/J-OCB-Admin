import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserMgmtComponent } from './user-mgmt/user-mgmt.component';
import { TableTabMgmtComponent } from './table-tab-mgmt/table-tab-mgmt.component';
import { ProfileComponent } from './profile/profile.component';
import { BookingMgmtComponent } from './booking-mgmt/booking-mgmt.component';
import { CommissionMgmtComponent } from './commission-mgmt/commission-mgmt.component';
import { OfferMgmtComponent } from './offer-mgmt/offer-mgmt.component';
import { NotificationMgmtComponent } from './notification-mgmt/notification-mgmt.component';
import { NotificationListComponent } from './notification-list/notification-list.component';

const routes: Routes = [
  {path:'', component:LayoutComponent, children:[
    {path:'',redirectTo:'dashboard',pathMatch:'full'},
    {path:'dashboard', component:DashboardComponent},
    // {path:'user-mgmt', component:UserMgmtComponent},
    {path:'user-mgmt', component:TableTabMgmtComponent},
    {path:'profile', component:ProfileComponent},
    {path:'booking-mgmt', component:BookingMgmtComponent},
    {path:'commission-mgmt', component:CommissionMgmtComponent},
    {path:'offer-mgmt', component:OfferMgmtComponent},
    {path:'notification-list', component:NotificationListComponent},
    {path:'notification-mgmt', component:NotificationMgmtComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
