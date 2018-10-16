import { Component, OnInit } from '@angular/core';
import {Salary} from '../objects/salary';
import {Vehicle} from '../objects/vehicle';
import {House} from '../objects/house';
import {Account} from '../objects/account';
import {User} from '../objects/user';
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
      this.data = users._embedded.users;
    });
    let a = 'a';
    this.createService.createUser(this.user).subscribe();
  }

}
