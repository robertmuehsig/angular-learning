import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-authredirect',
  templateUrl: './authredirect.component.html',
  styleUrls: ['./authredirect.component.css'],
  providers: [AuthService]
})
export class AuthredirectComponent implements OnInit {

  constructor(private _authService: AuthService) { }

  ngOnInit() {
    this._authService.processSigninResponse();
  }

}
