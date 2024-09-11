import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { RouterTestingModule } from '@angular/router/testing';
import { MatButtonModule } from '@angular/material/button';
import { By } from '@angular/platform-browser';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderComponent ],
      imports: [
        MatToolbarModule,
        MatMenuModule,
        RouterTestingModule,
        MatButtonModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render mat-toolbar and logo', () => {
    const toolbar = fixture.debugElement.query(By.css('mat-toolbar'));
    const logo = fixture.debugElement.query(By.css('img.logo'));
    expect(toolbar).toBeTruthy();
    expect(logo).toBeTruthy();
  });

  it('should render Home and Endereço buttons', () => {
    const homeButton = fixture.debugElement.query(By.css('button[ariaLabel="Página inicial"]'));
    const addressButton = fixture.debugElement.query(By.css('button[ariaLabel="Buscar endereço"]'));
    expect(homeButton).toBeTruthy();
    expect(addressButton).toBeTruthy();
  });

  // it('should render mat-menu with menu item after button click', async () => {

  //   const button = fixture.debugElement.query(By.css('button[ariaLabel="Buscar endereço"]'));

  //   button.nativeElement.click();
  //   if (button) {
  //   } else {
  //     fail('Button to open menu not found');
  //   }

  //   await fixture.whenStable();

  //   const menu = fixture.debugElement.query(By.css('mat-menu-content'));
  //   const menuItem = fixture.debugElement.query(By.css('mat-menu-item'));

  //   expect(menu).toBeTruthy();
  //   expect(menuItem).toBeTruthy();

  //   if (menuItem) {
  //     expect(menuItem.nativeElement.textContent).toContain('Buscar Endereço');
  //   } else {
  //     fail('Menu item not found');
  //   }
  // });
});
