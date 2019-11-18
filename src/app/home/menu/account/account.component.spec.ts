import { AccountComponent } from './account.component';
import { TestBed, async } from '@angular/core/testing';
import { UserService } from '../../../_services/user.service';
import { HttpClient, HttpHandler} from '@angular/common/http';

describe('AccountComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [],
      declarations: [AccountComponent],
      providers: [UserService, HttpClient, HttpHandler]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AccountComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
