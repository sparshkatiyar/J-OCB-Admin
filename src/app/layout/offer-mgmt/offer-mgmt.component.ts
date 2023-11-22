import {AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { DeleteComponent } from '../dialog/delete/delete.component';
import { ApiService } from 'src/app/service/api.service';
import { AddEditOfferComponent } from '../dialog/add-edit-offer/add-edit-offer.component';

export interface UserData {
  id: string;
  name: string;
  progress: string;
  fruit: string;
}
@Component({
  selector: 'app-offer-mgmt',
  templateUrl: './offer-mgmt.component.html',
  styleUrls: ['./offer-mgmt.component.css']
})
export class OfferMgmtComponent implements AfterViewInit {

  displayedColumns: string[] = ['id', 'name', 'progress','action' ];
  dataSource!: MatTableDataSource<UserData>;
  @ViewChild("MatPaginator") MatPaginator!: MatPaginator;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  offerData: any;
  totalItems = 0;
  pageSizeOptions = [5, 10, 25, 100];
  constructor(public dialog :MatDialog, private api : ApiService) {}

  ngOnInit(): void {
    this.getOfferList()
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  getOfferList() {
    this.api.get("get-offer").subscribe({
      next: (res: any) => {
        this.offerData = res.data.rows.map((row: any, index: number) => {
          return { ...row, serialNo: (this.paginator.pageIndex * this.paginator.pageSize) + index + 1 };
        });;
        this.dataSource = new MatTableDataSource(this.offerData);
        this.dataSource.paginator = this.MatPaginator;
      },
      error: (err : any) => {
        console.log(err);
      },
    });
  }

  openAddEditDialog(title : any): void {
    const dialogRef = this.dialog.open(AddEditOfferComponent, {
      data: { title: title }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log('Dialog closed with result:', result);
        // Perform actions with the result data
      }
    });
  }
}
