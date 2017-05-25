
import { Component } from '@angular/core';
import { FacebookService, InitParams,LoginResponse, LoginOptions} from 'ngx-facebook';
import { LocalStorageService } from 'angular-2-local-storage';
import { AuthService, AppGlobals } from 'angular2-google-login';
import { Router } from '@angular/router';

var cb:any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  title = 'Angular Login Page';

  tweet=[];
  imageURL: string;
  email: string;
  name: string;
  token: string;
  constructor(private fb: FacebookService,private localStorageService: LocalStorageService,private auth: AuthService, public route1: Router) {

    let initParams: InitParams = {
      appId: '126914854537820',
      version: 'v2.9'
    };

    fb.init(initParams);

  }

   login() {
    const loginOptions: LoginOptions = {
      enable_profile_selector: true,
      return_scopes: true,
      scope: 'public_profile,user_friends,email,pages_show_list,publish_actions,user_posts'
    };
    this.fb.login(loginOptions)
      .then((res: LoginResponse) => {
        console.log('Logged in', res);

       // this.data=res.authResponse.userID
        this.localStorageService.set('userID',res.authResponse.userID);

        this.localStorageService.set('token1',res.authResponse.accessToken);
        console.log("token1");
        this.route1.navigate(["/Facebook"]);
      })
      .catch(this.handleError);
     // this.getLoginStatus();

  }
  private handleError(error) {
    // console.error('Error processing action', error);
  }

}
