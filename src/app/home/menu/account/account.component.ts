import { Component, OnInit } from '@angular/core';
import { User } from '../../../_models/user';
import { UserService } from '../../../_services/index';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
  currentUser: User;
  users: User[] = [];
  // model: any = {};

  constructor(private userService: UserService) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    // this.model = this.currentUser;
  }
  // need to add api endpoint
  // updateUser() {
  //   console.log(this.model);
  //   // tslint:disable-next-line: deprecation
  //   this.userService.update(this.model).subscribe(() => console.log('success'));
  // }

  ngOnInit() {
  }

}
