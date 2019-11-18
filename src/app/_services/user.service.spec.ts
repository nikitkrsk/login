import { TestBed } from '@angular/core/testing';
import { HttpClient, HttpHandler} from '@angular/common/http';
import { UserService } from './user.service';

describe('UserService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      UserService,
      HttpClient,
      HttpHandler
    ]
  }));

  it('should be created', () => {
    const service: UserService = TestBed.get(UserService);
    expect(service).toBeTruthy();
  });
});
