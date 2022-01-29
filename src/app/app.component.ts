import { Component } from '@angular/core';
import { LoaderService, AuthenticationService } from '@core/services';
import { Subject } from 'rxjs';
import { User } from './core/models';

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

  /**
   * Initiate logout service
   */
  logout() {
    this.authenticationService.logout();
  }

}
