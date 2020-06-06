import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-value',
  templateUrl: './value.component.html',
  styleUrls: ['./value.component.css'],
})
export class ValueComponent implements OnInit {
  values: any;
  constructor(private http: HttpClient) {} // Inject dependency with HttpClient  class and create http object instance.

  ngOnInit() {
    this.getValues();
  }

  getValues() {
    this.http.get('http://localhost:5000/api/values').subscribe(
      (response) => {
        this.values = response; // response object contains the values inside and then assign it to variable values.
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
