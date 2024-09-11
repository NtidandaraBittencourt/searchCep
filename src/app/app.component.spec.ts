import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HeaderComponent } from '../app/shared/components/header/header.component';
import { RouterTestingModule } from '@angular/router/testing';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { By } from '@angular/platform-browser';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;

  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        HeaderComponent
      ],
      imports: [
        RouterTestingModule,
        MatToolbarModule,
        MatMenuModule,
        MatButtonModule
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should render app-header and container', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('app-header')).toBeTruthy();
    expect(compiled.querySelector('.container')).toBeTruthy();
    expect(compiled.querySelector('.content')).toBeTruthy();
    expect(compiled.querySelector('router-outlet')).toBeTruthy();
  });

  it('should have a router-outlet', () => {
    const routerOutlet = fixture.debugElement.query(By.css('router-outlet'));
    expect(routerOutlet).toBeTruthy();
  });

  it('should contain app-header and router-outlet', () => {
    const header = fixture.debugElement.query(By.css('app-header'));
    const routerOutlet = fixture.debugElement.query(By.css('router-outlet'));

    expect(header).toBeTruthy();
    expect(routerOutlet).toBeTruthy();
  });
});
