import { Component, Inject, OnInit } from '@angular/core';
import { inject } from '@angular/core/testing';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private api : ApiService, private toastr : ToastrService) {console.log(data) }

  ngOnInit(): void {
  }
  delete() {
    this.api.delete('delete-offer',  this.data.value).subscribe({
      next : (res : any)=>{
        this.toastr.success('Offer Deleted.')
      },
      error(err) {
        console.log(err)
      }, 
    })
  }
}
