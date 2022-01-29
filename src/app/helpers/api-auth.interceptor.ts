import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, finalize } from 'rxjs/operators';
import { AuthenticationService, LoaderService, SnackbarService } from '../services';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Injectable()
export class ApiAuthInterceptor implements HttpInterceptor {

  newsBaseUrl = environment.newsBaseUrl;
  apiKey = environment.apiKey;

  constructor(private loaderService: LoaderService,
    private snackBarService: SnackbarService,
    private router: Router,
    private authenticationService: AuthenticationService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.loaderService.show();

    if (request.url.includes(this.newsBaseUrl)) {
      const currentUser = this.authenticationService.currentUserValue;
      if (currentUser) {
        request = request.clone({
          url: `${request.url}api-key=${this.apiKey}`
        });
      } else {
        this.router.navigate(['/']);
      }
    }

    return next.handle(request).pipe(
      finalize(() => this.loaderService.hide()),
    ).pipe(catchError(err => {
      const error = err.error.message || err.statusText;
      if (err.status === 401) {
        this.snackBarService.open(error);
        // auto logout if 401 response returned from api
        this.authenticationService.logout();
      } else {
        this.snackBarService.open('Something went wrong. Please try again later.');
      }

      return throwError(() => error);
    }));
  }
}
