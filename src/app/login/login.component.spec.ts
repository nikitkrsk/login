
import { LoginComponent } from './login.component';

import { TestBed, async } from '@angular/core/testing';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthenticationService } from '../_services/authentication.service';
import { HttpClient, HttpHandler} from '@angular/common/http';
import { AlertService } from '../_services/alert.service';

describe('LoginComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatFormFieldModule, MatProgressSpinnerModule, FormsModule, RouterTestingModule ],
      declarations: [LoginComponent],
      providers: [AuthenticationService, HttpClient, HttpHandler, AlertService]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(LoginComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
  it(`should have as title 'playDarts'`, () => {
    const fixture = TestBed.createComponent(LoginComponent);
    const app = fixture.debugElement.componentInstance;
    console.log(fixture.debugElement.componentInstance);
    // expect(app.title).toEqual('playDarts');
  });
});
