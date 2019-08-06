import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email = "";
  password = "";
  
  users = [
    {"email": "cap@avengers.com", "password": "123456"},
    {"email": "ironman@avengers.com", "password": "654321"},
    {"email": "thor@avengers.com", "password": "123abc"}
  ]
  
  error = "";

  cap = {"email": "cap@avengers.com", "password": "123456"}
  
  constructor(private router:Router) { }

  ngOnInit() {
  }

  navURL() {
    var user = {"email": this.email, "password": this.password}
    if (this.users.some(person => (person.email == user.email) && (person.password == user.password))) {
      this.router.navigateByUrl('/account');
    } else {
      this.error = "There is a probelm with the credentials.";
      alert("Not a valid user!");
    }
  };

}
