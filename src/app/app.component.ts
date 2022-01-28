import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { User } from './models';
import { AuthenticationService, LoaderService } from './services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  isLoading: Subject<boolean> = this.loaderService.isLoading;
  title = 'ny-time-top-stories';
  currentUser: User;

  constructor(private loaderService: LoaderService,
    private authenticationService: AuthenticationService) {
      this.authenticationService.currentUser.subscribe(user => {
        this.currentUser = user;
      })
  }

  logout() {
    this.authenticationService.logout();
  }

}
