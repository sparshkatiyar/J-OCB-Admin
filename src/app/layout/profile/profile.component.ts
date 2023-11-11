import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ChangePasswordComponent } from '../dialog/change-password/change-password.component';
import { ToastrService } from 'ngx-toastr';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor( public dialog :MatDialog,  private toastr: ToastrService, private api : ApiService) { }

  adminData : any
  ngOnInit(): void {
    this.adminData = JSON.parse(sessionStorage.getItem('OJCB') || '')
    console.log(this.adminData)
    this.patchFormField()
  }

  profileForm = new FormGroup({
    name : new FormControl('', Validators.required),
    email : new FormControl('', Validators.required)
  })

  patchFormField(){
    this.profileForm.patchValue({
      name : this.adminData.name,
      email : this.adminData.email
    })
  }

  updateAdminProfile(){
    let data =  this.profileForm.value.name
    console.log(data)
    this.api.post('update-admin', data).subscribe({
      next : (res : any) =>{
        console.log(res)
      }
    })
  }
  changePassword(){
    let dialogRef = this.dialog.open(ChangePasswordComponent, {

    });
  }
}
