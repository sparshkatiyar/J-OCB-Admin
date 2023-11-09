import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {

  constructor(private router : Router, private api : ApiService) { }

  ngOnInit(): void {
  }

  forgetForm: FormGroup = new FormGroup({
    email: new FormControl("", Validators.required),
  });

  forgetPassword(){
    let data = this.forgetForm.value
    console.log(data)
    this.api.post('forgot-password', data).subscribe({
      next : (res : any) => {
        this.router.navigateByUrl(`/change-password/${this.forgetForm.value.email}`)
      }, 
      error : (err : any)=>{
        console.log(err)
      },
    })
  }
}
