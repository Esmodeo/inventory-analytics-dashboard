import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import {
  User,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import { Observable } from 'rxjs';
import { auth } from '../core/firebase/firebase.auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private router = inject(Router);

  readonly user$: Observable<User | null> = new Observable((subscriber) => {
    const unsubscribe = onAuthStateChanged(
      auth,
      (user) => subscriber.next(user),
      (error) => subscriber.error(error),
      () => subscriber.complete(),
    );

    return unsubscribe;
  });

  async register(email: string, password: string): Promise<User> {
    const credential = await createUserWithEmailAndPassword(auth, email, password);
    await this.router.navigateByUrl('/dashboard');
    return credential.user;
  }

  async login(email: string, password: string): Promise<User> {
    const credential = await signInWithEmailAndPassword(auth, email, password);
    await this.router.navigateByUrl('/dashboard');
    return credential.user;
  }

  async logout(): Promise<void> {
    await signOut(auth);
    await this.router.navigateByUrl('/login');
  }
}
