import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { Observable } from 'rxjs';
import firebase from 'firebase/compat/app';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  userData: Observable<firebase.User|null>;
  constructor(private angularFireAuth: AngularFireAuth) {
    this.userData = angularFireAuth.authState;
  }
  /* Sign up */
  SignUp(email: string, password: string) {
    this.angularFireAuth
      .createUserWithEmailAndPassword(email, password)
      .then((res: any) => {
        console.log('Successfully signed up!', res);
      })
      .catch((error: any) => {
        console.log('Something is wrong:', error.message);
      });    
  }
  /* Sign in */
  SignIn(email: string, password: string) {
    this.angularFireAuth
      .signInWithEmailAndPassword(email, password)
      .then((res: any) => {
        console.log('Successfully signed in!');
      })
      .catch((err: any) => {
        console.log('Something is wrong:',err.message);
      });
  }
  /* Sign out */
  SignOut() {
    this.angularFireAuth
      .signOut();
  }  
}