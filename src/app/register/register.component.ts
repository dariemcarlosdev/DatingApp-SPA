import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  // in order to receive properties into child Component we need use:
  @Input() valuesFromHome: any; // now we have access to this property into register.component.html
  @Output() cancelRegister = new EventEmitter(); // registering property to enable communication child to parent.
  model: any = {};
  constructor() {}

  ngOnInit() {}

  register() {
    console.log(this.model);
  }

  cancel() {
    this.cancelRegister.emit(false);
    console.log('cancelled');
  }
}
