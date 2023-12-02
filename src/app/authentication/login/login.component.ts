import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';
import { ToastrService } from 'ngx-toastr';

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
  LoginForm: FormGroup;
  constructor(private api : ApiService, private router : Router, private toastr: ToastrService, private fb: FormBuilder) {
    this.LoginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      rememberMe: [false],
    });

    const storedCredentials = localStorage.getItem('rememberedCredentials');
    if (storedCredentials) {
      const credentials = JSON.parse(storedCredentials);
      this.LoginForm.patchValue(credentials);
    }
  }

  ngOnInit(): void {
  }
  

  login(){
    this.submitted = true
    if(this.LoginForm.invalid){
      return
    }
    const { email, password, rememberMe } = this.LoginForm.value;
    const apiData = { email, password };
    // let data = this.LoginForm.value

    this.api.post('login', apiData).subscribe({
      next : (res : any) =>{

        this.loginData =  res.data
        sessionStorage.setItem('OJCB', JSON.stringify(this.loginData));
        if (rememberMe) {
          localStorage.setItem('rememberedCredentials', JSON.stringify({ email,password }));
        } else {
          localStorage.removeItem('rememberedCredentials');
        }
        this.router.navigateByUrl("/home/dashboard")
        this.toastr.success("Admin login successfully.")
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
