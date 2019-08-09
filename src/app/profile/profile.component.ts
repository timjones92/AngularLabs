import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  username = "";
  email = "";
  birthdate = "";
  age = "";

  constructor() { }

  ngOnInit() {
    if (typeof(Storage) !== "undefined"){
      this.username = sessionStorage.getItem("username");
      this.email = sessionStorage.getItem("email");
      this.birthdate = sessionStorage.getItem("birthdate");
      this.age = sessionStorage.getItem("age");
    }
  }

  updateData() {
    var userDetails = {"username": this.username, "email": this.email, "birthdate": this.birthdate, "age": this.age}
    if (Object.values(userDetails)) {
      sessionStorage.setItem("username", userDetails.username);
      sessionStorage.setItem("email", userDetails.email);
      sessionStorage.setItem("birthdate", userDetails.birthdate);
      sessionStorage.setItem("age", userDetails.age);
      window.location.reload();
    } else {
      //this.error = "There is a probelm with the credentials.";
    }
  }

}
