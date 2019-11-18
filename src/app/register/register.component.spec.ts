import { RegisterComponent } from './register.component';

import { TestBed, async } from '@angular/core/testing';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthenticationService } from '../_services/authentication.service';
import { HttpClient, HttpHandler} from '@angular/common/http';
import { AlertService } from '../_services/alert.service';
import { UserService } from '../_services/user.service';

describe('RegisterComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatFormFieldModule, MatProgressSpinnerModule, FormsModule, RouterTestingModule ],
      declarations: [RegisterComponent],
      providers: [AuthenticationService, HttpClient, HttpHandler, AlertService, UserService]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(RegisterComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
