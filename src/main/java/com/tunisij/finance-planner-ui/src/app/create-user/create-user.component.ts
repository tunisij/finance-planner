import { Component, OnInit } from '@angular/core';
import {Salary} from './salary';
import {Vehicle} from './vehicle';
import {House} from './house';
import {Account} from './account';
import {User} from './user';
import {CreateService} from '../create.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  user: User = new User();
  account: Account = new Account();
  house: House = new House();
  vehicle: Vehicle = new Vehicle();
  salary: Salary = new Salary();

  users: User[];
  data: any;

  constructor(private createService: CreateService) { }

  ngOnInit() {
    this.users = [];
    this.data = [];
  }

  onSubmit() {
    this.createService.getUsers().subscribe(users => {
      this.data = users;
    });
    let a = 'a';
    // this.createService.createUser(this.user).subscribe();
  }

}
