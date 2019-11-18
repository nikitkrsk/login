import { UsersComponent } from './users.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material';
import { MatPaginatorModule } from '@angular/material';
import { TestBed, async } from '@angular/core/testing';
import { UserService } from '../../../_services/user.service';
import { HttpClient, HttpHandler} from '@angular/common/http';
import 'hammerjs';


describe('UsersComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatFormFieldModule, MatTableModule, MatPaginatorModule],
      declarations: [UsersComponent],
      providers: [UserService, HttpClient, HttpHandler]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(UsersComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
