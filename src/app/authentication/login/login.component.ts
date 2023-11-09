import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide = true;
  error:any
  loginData: any;
  submitted: Boolean = false;
  constructor(private api : ApiService, private router : Router) {}

  ngOnInit(): void {
  }
  LoginForm: FormGroup = new FormGroup({
    email: new FormControl("", Validators.required),
    password: new FormControl("", Validators.required),
  });

  login(){
    this.submitted = true
    if(this.LoginForm.invalid){
      return
    }
    let data = this.LoginForm.value
    this.api.post('login', data).subscribe({
      next : (res : any) =>{
        this.loginData =  res.data
        sessionStorage.setItem('OJCB', JSON.stringify(this.loginData));
        this.router.navigateByUrl("/home/dashboard")
      }, 
      error : (err : any) =>{
        console.log(err.error.message)
      }
    })
  }
  get f (){
    return this.LoginForm.controls
  }
}
