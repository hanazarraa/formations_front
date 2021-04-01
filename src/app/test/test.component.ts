import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import {Employee} from '../models/employee';
import {TestService}from '../test.service';
import {HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  table : Employee[]=new Array<Employee>();

  constructor(private testservice:TestService) { }

  ngOnInit(): void {
    this.getData();
  }
getData(){
  this.testservice.getEmployees().subscribe(
    res=> {
      this.table=res.data;
      console.log(res);
    }
  )
}
}
