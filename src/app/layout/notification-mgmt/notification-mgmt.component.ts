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
  userData: any;
  driverData: any;

  constructor(private api: ApiService, private router: Router, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getData();
    this.getDriverData();
  }

  notifcationForm = new FormGroup({
    title: new FormControl('',Validators.required),
    description: new FormControl('',Validators.required),
    userId: new FormControl([]),
    driverId: new FormControl([]),
  })
  getData() {
    this.api.get("user-list").subscribe({
      next: (res: any) => {
        this.userData = res.data.rows;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  getDriverData() {
    this.api.get("driver-list").subscribe({
      next: (res: any) => {
        this.driverData = res.data.rows;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  sendNotification(){
    let data = this.notifcationForm.value
    this.api.post('send-notification', data).subscribe({
      next : (res : any)=>{
        this.toastr.success('Notification sent successfully.')
        this.router.navigateByUrl('/home/notification-list')
      },error:(err)=> {
        this.toastr.error('something went wrong.')
      },
    })
  }
}
