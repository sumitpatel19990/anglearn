import { Component } from '@angular/core';
import { User } from './user';
import { EmployeeListComponent } from './employee-list/employee-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  selectedUser : User;

  users : User[] = [
                      {'id':1,'name':'Vivek','phone_no':987466321},
                      {'id':2,'name':'Mak','phone_no':9874661234},
                      {'id':3,'name':'Kishu','phone_no':987462345},
                      {'id':4,'name':'Khush','phone_no':9874663456},
                      {'id':5,'name':'Kartik','phone_no':9874612312},
                      {'id':6,'name':'Parsh','phone_no':98746612},
                  ];

  alertName(selUser : User)
  {
    this.selectedUser = selUser;
  }
} 