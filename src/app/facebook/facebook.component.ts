import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'angular-2-local-storage';
import { FacebookService, InitParams,LoginResponse, LoginOptions} from 'ngx-facebook';
import {Router} from '@angular/router';
import { DataService } from '../data.service';
@Component({
  selector: 'app-facebook',
  templateUrl: './facebook.component.html',
  styleUrls: ['./facebook.component.css']
})
export class FacebookComponent implements OnInit {
  ap;
  img1;
  frnd;
  result;
  auth1;
  token2;
  total;
  gender;
  mailid;
  pic;
  app;
  postnum;
postdata="";
  constructor(private fb: FacebookService,private localStorageService: LocalStorageService,public route1:Router,public pass: DataService ) { }

  ngOnInit() {
  this.getLoginStatus();
}

  getLoginStatus() {
    // console.log(this.localStorageService.get('userID'));
    // console.log(this.localStorageService.get('token1'));
    var ID=this.localStorageService.get('userID');
    var oauth=this.localStorageService.get('token1');
    this.ap='/'+ID+'/friends'+'/?access_token='+oauth;
    // console.log(this.ap+"I am API")
    this.fb.api(this.ap).then((res:any)=>{
        console.log(res)
  this.total = res.summary.total_count;
  // this.pass.setfr(this.total);


    })
    this.fb.api('/me?fields=gender,first_name,last_name,email,picture')
     .then((res: any) => {
        console.log('Got the users profile', res);
     this.img1=res.first_name;
      this.mailid=res.email;
      this.gender=res.gender;
      this.pic=res.picture.data.url;
      // console.log(this.pic)
      // this.pass.set(res);


      })
      this.fb.api("/me/feed?limit=1000")
         .then((res)=>{
           console.log(res)
           this.postnum=res.data.length;

      })





  }
  logout1(){

  this.fb.logout();
  this.route1.navigate(['']);


}
post(postdata)
{
  console.log(postdata);
 this.fb.api('/me/feed','post',{message: postdata})
.then((res)=>{
   console.log(res);
   alert("Post Successfull")
 })
}
}
