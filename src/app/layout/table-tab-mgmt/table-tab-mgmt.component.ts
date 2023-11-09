import {AfterViewInit, Component, ViewChild, OnInit} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { ApiService } from 'src/app/service/api.service';
import { DeleteComponent } from '../dialog/delete/delete.component';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';

export interface PeriodicElement1 {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA1: PeriodicElement1[] = [
  // {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
];




export interface PeriodicElement2 {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA2: PeriodicElement2[] = [
  // {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
];


@Component({
  selector: 'app-table-tab-mgmt',
  templateUrl: './table-tab-mgmt.component.html',
  styleUrls: ['./table-tab-mgmt.component.css']
})
export class TableTabMgmtComponent implements OnInit {
  userData: any;
  driverData: any;

  constructor(public dialog :MatDialog,private api : ApiService ) { }

  displayedColumns1: string[] = ['position', 'img','name', 'weight','mobile', 'symbol', 'action'];
  dataSource1 = new MatTableDataSource<PeriodicElement1>(ELEMENT_DATA1);

  displayedColumns2: string[] = ['position', 'name', 'weight', 'symbol', 'action'];
  dataSource2 = new MatTableDataSource<PeriodicElement2>(ELEMENT_DATA2);

  @ViewChild("MatPaginator1") MatPaginator1!: MatPaginator;
  @ViewChild("MatPaginator2") MatPaginator2!: MatPaginator;


  ngAfterViewInit() {
    this.dataSource1.paginator = this.MatPaginator1;
    this.dataSource2.paginator = this.MatPaginator2;
  }

  ngOnInit(): void {
    this.getData();
    this.getDriverData();
  }

  getData(){
    this.api.get('user-list').subscribe({
      next : (res : any)=>{
        this.userData = res.data.rows
        this.dataSource1 = new MatTableDataSource(this.userData)
        this.dataSource1.paginator = this.MatPaginator1
      }
    })
  }
  getDriverData(){
    this.api.get('driver-list').subscribe({
      next : (res : any)=>{
        this.driverData = res.data.rows
        this.dataSource2 = new MatTableDataSource(this.driverData)
        this.dataSource2.paginator = this.MatPaginator2
      }
    })
  }
  // deletDialog(id : any){
  //   let dialogRef = this.dialog.open(DeleteComponent, {
  //     height: '190px',
  //     width: '250px',
  //   });
  // }

  deleteUser(id : any){
    let data = {
      id : id,
      is_delete : true
    }
    this.api.patch('user-block-unblock-or-delete', data).subscribe({
      next : (res : any) =>{
        this.getData();
      }
    })
  }
  
  deleteDriver(id : any){
    let data = {
      id : id,
      is_delete : true
    }
    this.api.patch('block-unblock-or-delete', data).subscribe({
      next : (res : any) =>{
        this.getDriverData();
      }
    })
  }

  activeInactive(id : any, event : MatSlideToggleChange){
    let data = {
      id: id,
      is_active: event.checked,
    };
    this.api.patch("user-block-unblock-or-delete", data).subscribe(
      (res: any) => {
        this.getData();
      },
      (error) => {
        console.log(error)
      }
    );
  }
 
  activeInactiveDriver(id : any, event : MatSlideToggleChange){
    let data = {
      id: id,
      is_active: event.checked,
    };
    this.api.patch("block-unblock-or-delete", data).subscribe(
      (res: any) => {
        this.getDriverData();
      },
      (error) => {
        console.log(error)
      }
    );
  }

}
