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
  error = "";

  cap = {"email": "cap@avengers.com", "password": "123456"}
  
  constructor(private router:Router) { }

  ngOnInit() {
  }

  navURL() {
    if (this.email == this.cap.email && this.cap.password != this.cap.password) {
      this.error = "There is a probelm with the credentials.";
      alert("Not a valid user!");
    } else if (this.cap.password != this.cap.password){
      this.error = "There is a probelm with the credentials.";
      alert("Not a valid user!");
    } else {
      this.router.navigateByUrl('/account');
    }
  };

}
