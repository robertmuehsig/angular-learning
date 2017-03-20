import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthService]
})
export class LoginComponent implements OnInit {

  constructor(private _authService: AuthService) { }

  doLogin() {
   
    this._authService.startSigninMainWindow();
    
   console.log("event");
  }

  ngOnInit() {
  }

}
