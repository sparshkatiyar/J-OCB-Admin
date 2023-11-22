import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-notification-mgmt',
  templateUrl: './notification-mgmt.component.html',
  styleUrls: ['./notification-mgmt.component.css']
})
export class NotificationMgmtComponent implements OnInit {

  constructor(private api: ApiService, private router: Router, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  notiifcationForm = new FormGroup({
    title: new FormControl('',Validators.required),
    description: new FormControl('',Validators.required),
    userId: new FormControl(''),
    driverId: new FormControl('',),
  
  })
  
}
