import { Injectable } from '@angular/core';
import { SnackBarComponent } from '../shared/components/snack-bar/snack-bar.component';
import { MatSnackBar } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class SnackBarService {

  constructor(private snackBar: MatSnackBar) {}

  openSnackBar(message: string, type: 'success' | 'error', duration: number = 5000) {
    this.snackBar.openFromComponent(SnackBarComponent, {
      data: { message: message, type: type },
      duration: duration,
      panelClass: type === 'success' ? 'snack-success' : 'snack-error'
    });
  }
}
