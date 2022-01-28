import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';


import { environment } from 'src/environments/environment';
import { User } from '../models';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {

  baseUrl = environment.authBaseUrl;
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User | null>;

  constructor(private http: HttpClient,
    private router: Router) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  login(email, password) {
    return this.http.post<any>(`${this.baseUrl}/login`, { email, password })
      .pipe(map(token => {
        this.saveUserDetails({...token, email});
        return token;
      }));
  }

  logout() {
    // remove user from local storage and set current user to null
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
    this.router.navigate(['']);
  }

  register(email, password) {
    return this.http.post<any>(`${this.baseUrl}/register`, { email, password })
      .pipe(map(token => {
        this.saveUserDetails({...token, email});
        return token;
      }));
  }

  saveUserDetails(user: User) {
    // store user details and jwt token in local storage to keep user logged in between page refreshes
    localStorage.setItem('currentUser', JSON.stringify(user));
    this.currentUserSubject.next(user);
  }
}
