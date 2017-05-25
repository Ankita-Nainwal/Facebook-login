import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { FacebookModule } from 'ngx-facebook';
import { AppComponent } from './app.component';
import { LocalStorageModule } from 'angular-2-local-storage';
// import {GoogleSignInComponent} from 'angular-google-signin';
import { AuthService, AppGlobals } from 'angular2-google-login';
import { FacebookComponent } from './facebook/facebook.component';
import { RouterModule, Routes} from '@angular/router';
import { LoginComponent } from './login/login.component';
//import { LogoutComponent } from './logout/logout.component';
import { DataService } from './data.service';

const routes : Routes =[
  {path: '', component: LoginComponent},
  {path: 'Facebook', component:FacebookComponent},


]

@NgModule({
  declarations: [
    AppComponent,
    FacebookComponent,
    LoginComponent
    ],
  imports: [
    FacebookModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
    LocalStorageModule.withConfig({
            prefix: 'my-app',
          storageType: 'sessionStorage'
}),
  ],
  providers: [AuthService, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
