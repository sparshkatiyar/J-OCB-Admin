import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  hide = true;
  hide1 = true;
  paramValue : any

  constructor(private route: ActivatedRoute, private router : Router, private api : ApiService ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      // Access individual parameters using params object
      this.paramValue = params['email'];
      console.log(this.paramValue);
    });
  }

  changePassForm: FormGroup = new FormGroup({
    otp: new FormControl("", Validators.required),
    password: new FormControl("", Validators.required),
    confirm_password: new FormControl("", Validators.required),
  });

  changePassword(){
    let data = this.changePassForm.value
    data.email = this.paramValue
    
    console.log(data)
    this.api.post('recover-password', data).subscribe({
      next : (res : any) =>{
        this.router.navigateByUrl('/login')
      }, 
      error(err) {
        console.log(err)
      },
    })
  }
}
