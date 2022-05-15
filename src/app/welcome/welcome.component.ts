//Comments shows how we would write the particular thing in JAVA


//import org.springframework.boot.SpringApplication;
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
//import { AppComponent } from '../app.component';

@Component({  //Called Decarator, in JAVA called Annotation
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})

//public class SpringBootFirstWebApplication implements SomeInterface {
export class WelcomeComponent implements OnInit { //Interface OnInit

  message = 'Some Welcome Message'
  name = ''
  //public SpringBootFirstWebApplication

  //ActivatedRoute
  constructor(private route:ActivatedRoute) { }

  //void init() 
  ngOnInit() { 
    //OnInit defines method ngOnInit
    //CompilationError this.message = 5

    console.log(this.message)
    //console.log(this.route.snapshot.params['name'])
    this.name = this.route.snapshot.params['name']
  }

}
