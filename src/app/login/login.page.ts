import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
usuario:string="";
senha:string="";
  constructor(private router : Router) { }

  ngOnInit() {
  }
  cadastrar(){
    this.router.navigate(["/cadastro"]);
  }
login(){

}
}
