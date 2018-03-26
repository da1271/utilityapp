import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

import { User } from '../_models/user';

@Injectable()
export class AuthenticationService {

    public currentUser: User;
    constructor(private http: HttpClient) { }

    isLoggedIn(): boolean {
  try {
    const theUser: any = JSON.parse(localStorage.getItem('currentUser'));
    if (theUser) {
      this.currentUser = theUser.user;
      return true;
    }
  } catch (e) {
    return false;
  }

  return !!this.currentUser;
}

    login(username: string, password: string) {
        return this.http.post<any>('http://localhost:5000/api/login', { username: username, password: password })
            .map(user => {
                // login successful if there's a jwt token in the response
                if (user && user.token) {
                  // console.log(user)
                  // this.currentUser = <IUser>response.json().message;
                  // const userObj: any = {};
                  // userObj.user = response.json().message;
                  // userObj.token = response.json().token;
                  //
                  //   localStorage.setItem("Username",oUser.username)
                  //   localStorage.setItem("userpwd",oUser.password)
                  //   localStorage.setItem("group_name",oUser.group_name)
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                }

                return user;
            });
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }
}
