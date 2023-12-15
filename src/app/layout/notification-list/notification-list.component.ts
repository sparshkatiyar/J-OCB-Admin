import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from 'src/app/service/api.service';
export interface UserData {
}
@Component({
  selector: 'app-notification-list',
  templateUrl: './notification-list.component.html',
  styleUrls: ['./notification-list.component.css']
})
export class NotificationListComponent implements OnInit {
  displayedColumns: string[] = ['sr_no', 'title', 'description', 'userId', 'driverId'];
  dataSource: MatTableDataSource<UserData>;
  @ViewChild("MatPaginator") MatPaginator: MatPaginator;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  totalItems = 0;
  pageSizeOptions = [5, 10, 25, 100];
  notificationData: any;

  constructor(private api: ApiService,) { }

  ngOnInit(): void {
    this.getNotificationData()
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  getNotificationData() {
    this.api.get("list/noification").subscribe({
      next: (res: any) => {
        this.notificationData = res.data.rows.map((row: any, index: number) => {
          return { ...row, serialNo: (this.paginator.pageIndex * this.paginator.pageSize) + index + 1 };
        });;
        this.dataSource = new MatTableDataSource(this.notificationData);
        // this.dataSource.paginator = this.MatPaginator;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
