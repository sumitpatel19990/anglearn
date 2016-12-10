import { Component, OnInit , Input } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  @Input()employee: User;

  constructor() { }

  ngOnInit() {
    console.log(this.employee);
  }

}
