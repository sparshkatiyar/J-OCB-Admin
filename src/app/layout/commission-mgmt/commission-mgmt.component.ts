import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-commission-mgmt',
  templateUrl: './commission-mgmt.component.html',
  styleUrls: ['./commission-mgmt.component.css']
})
export class CommissionMgmtComponent implements OnInit {
  commissionData: any;
  commissionId: any;

  constructor(private api : ApiService, private toastr : ToastrService) { }

  ngOnInit(): void {
    this.getCommission()
  }

  getCommission(){
    this.api.get('get-commission').subscribe({
      next : (res : any)=>{
        this.commissionId = res.data.id
        this.commissionData = res.data.percentage
      }
    })
  }

  updatedCommission(){
    let data = {
      id : this.commissionId,
      percentage : this.commissionData
    }
    this.api.post('edit-commission', data).subscribe({
      next : (res : any)=>{
        this.toastr.success('Commission updated successfully');
        this.getCommission()
      }
    })
  }
}
