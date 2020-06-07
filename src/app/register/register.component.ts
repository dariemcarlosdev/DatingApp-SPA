import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  // in order to receive properties into child Component we need use:
  @Input() valuesFromHome: any; // now we have access to this property into register.component.html
model: any = {};
  constructor() { }

  ngOnInit() {
  }

  register(){
    console.log(this.model);
  }

  cancel(){
    console.log('cancelled');
  }
}
