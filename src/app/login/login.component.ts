import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import {environment} from '../../environments/environment'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  uname:string
  pwd:string
  loginStatus:boolean
  userMessage:string="Error message appears here..."
  constructor( private httpClient:HttpClient, private route:Router) 
  {
    
  }

  ngOnInit() {
  }

  onLoginClick()
  {
    this.loginStatus=false
    this.userMessage="Invalid Username or Password"
    
    const httpHeaderOptions:object={headers:new HttpHeaders({'Content-Type':'application/x-www-form-urlencoded'})}        
    this.httpClient.post(`http://${environment.serverIPAddress}/auth`,`uname=${this.uname}&pwd=${this.pwd}`,httpHeaderOptions).subscribe(data=>
    {
      console.log(data); 
      if(data["result"]=="success")
      {
        this.loginStatus=true;
        this.userMessage="Login Successful..."
        this.route.navigate(['/dashboard']);
      }        
      else
      {
        this.loginStatus=false;        
      }
        

    })
  }

}
