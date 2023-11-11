import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  adminData: any;
  constructor(private toastr : ToastrService, private api : ApiService) { }

  changePasswordForm =  new FormGroup({
    oldPassword : new FormControl('',Validators.required),
    newPassword : new FormControl('',Validators.required),
  })
  ngOnInit(): void {
    this.adminData = JSON.parse(sessionStorage.getItem('OJCB') || '')
  }


  updatePassword(){
    if(this.changePasswordForm.invalid){
      this.toastr.error("PLease fill all field.")
      return
    }
    let data = this.changePasswordForm.value
    data.id = this.adminData.id
    this.api.post('change-password', data).subscribe({
      next : (res : any) =>{
        this.toastr.success(res.message)
      },
      error:(err) =>{
        this.toastr.error(err.error.message)
      },
    })
  }
}
