import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  usuario: string = "";
  senha: string = "";
  constructor(private router: Router, private blockMenu: MenuController, private nameless: Router) { }

  ngOnInit() {
    this.blockMenu.enable(false)
  }
  cadastrar() {
    this.router.navigate(["/cadastro"]);
  }
  entrar() {
    this.nameless.navigate(["/folder"])

  }


  login() {
    let dados = {
      requisicao: 'login',
      cliente: this.usuario,
      senha: this.senha

    }
  }
}
