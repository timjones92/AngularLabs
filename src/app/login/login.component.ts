import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = "";
  password = "";
  
  users = [
    {"email": "cap@avengers.com", "password": "123456"},
    {"email": "ironman@avengers.com", "password": "654321"},
    {"email": "thor@avengers.com", "password": "123abc"}
  ]
  
  error = "";
  use: User[];
  currentUsers = [
    new User("Cap", "27/02/1993", 26, "cap@avengers.com", "123456", false),
    new User("Thor", "13/08/1019", 1000, "thor@avengers.com", "654321", false),
    new User("Ironman", "04/12/1977", 41, "ironman@avengers.com", "123abc", false)
  ]

  constructor(private router:Router) { }

  getData() {
    var user = {"username": this.username, "password": this.password}
    if (this.currentUsers.some(person => (person.username == user.username) && (person.password == user.password))) {
      this.currentUsers.find(u => u.username == this.username).valid = true;
      
      sessionStorage.setItem("username", this.currentUsers.find(u => u.username == this.username).username);
      sessionStorage.setItem("email", this.currentUsers.find(u => u.username == this.username).email);
      sessionStorage.setItem("birthdate", this.currentUsers.find(u => u.username == this.username).birthdate);
      sessionStorage.setItem("age", JSON.stringify(this.currentUsers.find(u => u.username == this.username).age));
      sessionStorage.setItem("valid", JSON.stringify(this.currentUsers.find(u => u.username == this.username).valid));
      this.router.navigateByUrl('/account');
    } else {
      this.error = "There is a probelm with the credentials.";
    }
  }

  ngOnInit() {
  }

}