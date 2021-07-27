import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController, ModalController } from '@ionic/angular';
import { ModalclientePage } from '../modalcliente/modalcliente.page';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  usuario: string = "";
  senha: string = "";
  constructor(private router: Router, private blockMenu: MenuController, private nameless: Router, private modalCtrl: ModalController) { }

  ngOnInit() {
    this.blockMenu.enable(false)
  }
  novoCliente() {
    this.modalCtrl.create({
      component: ModalclientePage
    }).then(modal => modal.present());
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
