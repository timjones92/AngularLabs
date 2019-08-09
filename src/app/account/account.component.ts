import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  username = "";
  email = "";
  birthdate = "";
  age = "";

  constructor(private router: Router) { }

  ngOnInit() {
    if (typeof(Storage) !== "undefined"){
      this.username = sessionStorage.getItem("username");
      this.email = sessionStorage.getItem("email");
      this.birthdate = sessionStorage.getItem("birthdate");
      this.age = sessionStorage.getItem("age");
      var valid = sessionStorage.getItem("valid");
      if (valid == "false"){
        this.router.navigateByUrl('/login');
      }
    }

  }

}
