import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-add-edit-offer',
  templateUrl: './add-edit-offer.component.html',
  styleUrls: ['./add-edit-offer.component.css']
})
export class AddEditOfferComponent implements OnInit {
  offerForm !: FormGroup;

  constructor( 
      public dialogRef: MatDialogRef<AddEditOfferComponent>,
      private formBuilder: FormBuilder,
      private api : ApiService,
      @Inject(MAT_DIALOG_DATA) public data: any
    ){}

  ngOnInit(): void {
    this.initializeForm()
    if(this.data.value){
      this.patchValueToForm()
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  initializeForm(): void {
    this.offerForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      upto: ['', Validators.required],
      amount: ['', Validators.required],
      percentage: ['', Validators.required],
      start_date: ['', Validators.required],
      end_date: ['', Validators.required],
      minimum_price: ['', Validators.required],
    });
  }

  patchValueToForm(){
    const startDate = new Date(this.data.value.start_date).toISOString().split('T')[0];
    const endDate = new Date(this.data.value.end_date).toISOString().split('T')[0];
    this.offerForm.patchValue({
      name :  this.data.value.name, 
      description : this.data.value.description, 
      upto :  String(this.data.value.upto), 
      amount :  this.data.value.amount, 
      percentage :  String(this.data.value.percentage), 
      start_date :  startDate, 
      end_date :  endDate, 
      minimum_price : String(this.data.value.minimum_price), 
    })
  }

  addEdit(){
    let data = this.offerForm.value
    console.log(data)
    if(this.data.value === ''){
      this.api.post('add-offer', data).subscribe({
        next : (res : any)=>{
          console.log(res)  
          this.dialogRef.close();
        },
        error(err) {
          console.log(err)
        },
      })
    }else {
      data.id = this.data.value.id
      this.api.post('edit-offer', data).subscribe({
        next : (res : any)=>{
          console.log(res)
          this.dialogRef.close();
        },
        error(err) {
          console.log(err)
        },
      })
    }
  }
}
