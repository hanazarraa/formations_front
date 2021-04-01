import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private httpclient:HttpClient) { }

  getEmployees():Observable<any>{
    return this.httpclient.get('http://dummy.restapiexample.com/api/v1/employees');
  
  }
  
}
