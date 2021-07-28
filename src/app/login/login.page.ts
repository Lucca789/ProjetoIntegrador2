import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController, ModalController } from '@ionic/angular';
import { Cadastro } from 'src/services/Clientes.service';
import { ModalclientePage } from '../modalcliente/modalcliente.page';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  usuario: string = "";
  senha: string = "";
  cadrasto:Cadastro[];
  constructor(private router: Router, private blockMenu: MenuController, private nameless: Router, private modalCtrl: ModalController) { }

  ngOnInit() {
    this.blockMenu.enable(false)
  }
  novoCliente() {
    this.modalCtrl.create({
      component: ModalclientePage
      }).then(modal => {
        modal.present();
        return modal.onDidDismiss();
      }).then(({data}) =>{
        console.log(data);
      })
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
