import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string;
  password: string;

  constructor(public auth: AngularFireAuth) {}

  login() {
    this.auth.signInWithEmailAndPassword(this.email, this.password)
      .then(() => console.log('User logged in successfully'))
      .catch(error => console.log(error));
  }
}
