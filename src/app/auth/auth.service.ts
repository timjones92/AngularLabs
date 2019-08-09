import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { User } from '../user';
import { Observable } from 'rxjs';

interface Person {
  username: string;
}
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url = "../login";
  constructor(private http: HttpClient) { }

  currentUsers = [
    new User("Cap", "27/02/1993", 26, "cap@avengers.com", "123456", false),
    new User("Thor", "13/08/1019", 1000, "thor@avengers.com", "654321", false),
    new User("Ironman", "04/12/1977", 41, "ironman@avengers.com", "123abc", false)
  ]

  public isAuthenticated() {

    // this.http.get<Person>(this.url).subscribe(res => {
    //   return res;
    // });
    const valid = sessionStorage.getItem("valid");
    if (valid == "true") {
      return !valid;
    } else {
      return !valid;
    }
  }
  
  
}
