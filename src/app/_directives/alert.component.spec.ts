import { async, TestBed } from '@angular/core/testing';
import { AlertComponent } from './alert.component';
import { AlertService } from '../_services/index';
import { RouterTestingModule } from '@angular/router/testing';

describe('AlertComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AlertComponent],
      providers: [AlertService]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AlertComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
