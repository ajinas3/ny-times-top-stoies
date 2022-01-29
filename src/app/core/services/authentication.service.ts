import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { User } from '@core/models';

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

  /**
   * Calls the API server to fetch the user token
   * @param email Email of the user
   * @param password Password of the user
   * @returns {string} Token that will be used for further process
   */
  login(email: string, password: string) {
    return this.http.post<any>(`${this.baseUrl}/login`, { email, password })
      .pipe(map(token => {
        this.saveUserDetails({...token, email});
        return token;
      }));
  }

  /**
   * Logouts the user and removes token from localstorage
   */
  logout() {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
    this.router.navigate(['']);
  }

  /**
   * Register a new user to the server
   * @param email Email of the user
   * @param password Password of the user 
   * @returns {string} Token that will be used for further process
   */
  register(email: string, password: string) {
    return this.http.post<any>(`${this.baseUrl}/register`, { email, password })
      .pipe(map(token => {
        this.saveUserDetails({...token, email});
        return token;
      }));
  }

  /**
   * Utility function to save token to the localstorage
   * @param user User model
   */
  saveUserDetails(user: User) {
    // store user details and jwt token in local storage to keep user logged in between page refreshes
    localStorage.setItem('currentUser', JSON.stringify(user));
    this.currentUserSubject.next(user);
  }
}
