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
  adminDatas: any;

  constructor( public dialog :MatDialog,  private toastr: ToastrService, private api : ApiService) { }

  adminData : any
  ngOnInit(): void {

  setTimeout(() => {
    setTimeout(() => {
      this.patchFormField()
    }, 1000);    
    this.adminData = JSON.parse(sessionStorage.getItem('OJCB') || '')
    console.log(this.adminData)  
  }, 1500);  
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
    let data = {
      name : this.profileForm.value.name
    }  
    console.log(data)
    this.api.post('update-admin', data).subscribe({
      next : (res : any) =>{
        console.log(res)
        this.adminDatas = res.data[0]
        sessionStorage.setItem('OJCB', JSON.stringify(this.adminDatas))
        this.toastr.success(res.message)
        window.location.reload()
      },error :(err) =>{
        console.log(err)
      }
    })
  }
  changePassword(){
    let dialogRef = this.dialog.open(ChangePasswordComponent, {
    });
  }
}
