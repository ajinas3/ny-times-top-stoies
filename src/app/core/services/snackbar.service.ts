import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor(private snackBar: MatSnackBar) { }

  /**
   * Service function to open snackbar
   * @param message Message to be displayed on the Snackbar
   */
  open(message: string) {
    this.snackBar.open(message, '', {
      duration: 3000
    });
  }
}
