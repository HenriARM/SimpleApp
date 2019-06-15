import {Component} from '@angular/core';
import {User} from "../User";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  // todo add autogenerate id
  user = new User(1, '', '', '', '', '', '');

  // todo put in another file as an enum
  sex = ['Male', 'Female'];

  submitted = false;

  toggle() {
    this.submitted = !this.submitted;
  }
}
