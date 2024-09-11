import { TestBed } from '@angular/core/testing';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackBarService } from './snack-bar.service';
import { SnackBarComponent } from '../shared/components/snack-bar/snack-bar.component';
import { of } from 'rxjs';

describe('SnackBarService', () => {
  let service: SnackBarService;
  let snackBar: jasmine.SpyObj<MatSnackBar>;

  beforeEach(() => {
    const snackBarSpy = jasmine.createSpyObj('MatSnackBar', ['openFromComponent']);

    TestBed.configureTestingModule({
      providers: [
        SnackBarService,
        { provide: MatSnackBar, useValue: snackBarSpy }
      ]
    });

    service = TestBed.get(SnackBarService);
    snackBar = TestBed.get(MatSnackBar) as jasmine.SpyObj<MatSnackBar>;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call openFromComponent with correct parameters', () => {
    const message = 'Test message';
    const type = 'success';
    const duration = 5000;

    service.openSnackBar(message, type, duration);

    expect(snackBar.openFromComponent).toHaveBeenCalledWith(SnackBarComponent, {
      data: { message: message, type: type },
      duration: duration,
      panelClass: 'snack-success'
    });
  });

  it('should use default duration if not provided', () => {
    const message = 'Default duration message';
    const type = 'error';

    service.openSnackBar(message, type);

    expect(snackBar.openFromComponent).toHaveBeenCalledWith(SnackBarComponent, {
      data: { message: message, type: type },
      duration: 5000,
      panelClass: 'snack-error'
    });
  });
});
