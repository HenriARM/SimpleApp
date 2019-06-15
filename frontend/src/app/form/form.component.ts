import {Component} from '@angular/core';
import {User} from "../User";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  // todo put in another file as an enum
  sex = ['Male', 'Female'];

  // todo add autogenerate id
  user = new User(1, 'Henry');

 str() {
   return JSON.stringify(this.user);
 }

 submitted = false;

 toggle() {
   this.submitted = !this.submitted;
 }
  /*
Name: characters only, max number - 20
Surname: chars only , 20 max
display name or nickname: can contain chars and numerics, from 6 to 16 characters
email adress:  idk stuff for email adress
password: chars, has to contain number(s), from 6 to 20 length
confirm password: has to be the same as field password
*/

}
