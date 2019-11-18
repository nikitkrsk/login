import { TestBed } from '@angular/core/testing';
import { HttpClient, HttpHandler} from '@angular/common/http';
import { AuthenticationService } from './authentication.service';

describe('AuthenticationService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      AuthenticationService,
      HttpClient,
      HttpHandler
    ]
  }));

  it('should be created', () => {
    const service: AuthenticationService = TestBed.get(AuthenticationService);
    expect(service).toBeTruthy();
  });
});
