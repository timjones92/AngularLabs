import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'week4tut';
  
  constructor(private router: Router) {}

  logout() {
    alert("Are you sure you want to log out?");
    sessionStorage.removeItem("username");
    sessionStorage.removeItem("email");
    sessionStorage.removeItem("birthdate");
    sessionStorage.removeItem("age");
    sessionStorage.removeItem("valid");
    this.router.navigateByUrl('/login');
  }
}
