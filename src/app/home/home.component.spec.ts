
import { HomeComponent } from './home.component';
import { MenuComponent } from './menu/menu.component';
import {
  MatSidenavModule,
  MatIconModule
} from '@angular/material';
import { RouterTestingModule } from '@angular/router/testing';
import { TestBed, async } from '@angular/core/testing';
import { UserService } from '../_services/user.service';
import { HttpClient, HttpHandler} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('HomeComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatSidenavModule, MatIconModule, RouterTestingModule, BrowserAnimationsModule],
      declarations: [HomeComponent, MenuComponent],
      providers: [UserService, HttpClient, HttpHandler]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(HomeComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
