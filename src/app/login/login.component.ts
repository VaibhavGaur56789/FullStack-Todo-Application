import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BasicAuthenticationService } from '../service/basic-authentication.service';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'Vaibhav'
  password = ''
  errorMessage = 'Invalid Credentials'
  invalidLogin = false

  //Router
  //Dependency Injection

  constructor(private router: Router,
    private hardcodedAuthenticationService: HardcodedAuthenticationService, 
    private basicAuthenticationService: BasicAuthenticationService) { }

  ngOnInit() {
  }

  handleLogin() { //Event Binding
    console.log(this.username)
    //if(this.username === "Vaibhav" && this.password === 'dummy') {
      if(this.hardcodedAuthenticationService.authenticate(this.username, this.password)) {
      //Redirect to welcome page
      this.router.navigate(['welcome', this.username]) //navigate help to route to specific page

      this.invalidLogin = false
    }
    else {
      this.invalidLogin = true
    }
  }

  handleBasicAuthLogin() { //Event Binding
    //console.log(this.username)
    //if(this.username === "Vaibhav" && this.password === 'dummy') {
    this.basicAuthenticationService.executeAuthenticationService(this.username, this.password)
        .subscribe(
          data => {
            console.log(data)
            this.router.navigate(['welcome', this.username])
            this.invalidLogin = false
          },
          error => {
            console.log(error)
            this.invalidLogin = true 
          }
        )  
  }

}
