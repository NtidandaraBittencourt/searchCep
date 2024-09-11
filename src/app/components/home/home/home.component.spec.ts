import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { By } from '@angular/platform-browser';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display welcome message', () => {
    const headerElement = fixture.debugElement.query(By.css('h1')).nativeElement as HTMLElement;
    expect(headerElement.textContent).toContain('Bem-vindo/a ao teste de front-end');
  });

  it('should display author information', () => {
    const paragraphElement = fixture.debugElement.query(By.css('p')).nativeElement as HTMLElement;
    expect(paragraphElement.textContent).toContain('Teste Realizado por Ntidandara em 08 de setembro');
  });
});
