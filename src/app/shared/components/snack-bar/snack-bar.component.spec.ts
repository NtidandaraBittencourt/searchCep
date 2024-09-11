import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnackBarComponent } from './snack-bar.component';
import { MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';

describe('SnackBarComponent', () => {
  let component: SnackBarComponent;
  let fixture: ComponentFixture<SnackBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SnackBarComponent ],
      providers: [
        { provide: MAT_SNACK_BAR_DATA, useValue: { message: 'Test message', type: 'success' } }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SnackBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display message and apply correct class based on type', () => {
    const snackBarData = TestBed.get(MAT_SNACK_BAR_DATA);
    
    expect(fixture.nativeElement.textContent).toContain(snackBarData.message);
    
    const span = fixture.nativeElement.querySelector('span');
    expect(span.classList.contains('snack-success')).toBe(true);
    expect(span.classList.contains('snack-error')).toBe(false);
  });
});
