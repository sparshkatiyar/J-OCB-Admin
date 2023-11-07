import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from './sidenav/sidenav.component';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [
    SidenavComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule
  ],
  exports:[
    SidenavComponent
  ]
})
export class SharedModule { }
