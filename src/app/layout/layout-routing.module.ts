import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserMgmtComponent } from './user-mgmt/user-mgmt.component';
import { TableTabMgmtComponent } from './table-tab-mgmt/table-tab-mgmt.component';

const routes: Routes = [
  {path:'', component:LayoutComponent, children:[
    {path:'',redirectTo:'dashboard',pathMatch:'full'},
    {path:'dashboard', component:DashboardComponent},
    // {path:'user-mgmt', component:UserMgmtComponent},
    {path:'user-mgmt', component:TableTabMgmtComponent},


  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
