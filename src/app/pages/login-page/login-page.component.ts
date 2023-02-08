import { Component, OnInit } from '@angular/core';
import { USERS } from 'src/app/mock-users';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  userName?: string;
  password?: string;

  ngOnInit(): void {
    if (localStorage.getItem('authentication') != null) {
      window.location.href = '/';
    }
  }

  onClick() {
    console.log(USERS)
    console.log(this.userName)
    console.log(this.password)
    USERS.forEach((value, i) => {
      if (value.userName === this.userName && value.password === this.password) {
        localStorage.setItem('authentication', 'success');
        window.location.href = '/';
      }
    })

  }

}
