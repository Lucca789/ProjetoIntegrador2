import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { PostService } from 'src/services/post.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  usuario: string = "";
  senha: string = "";
  constructor(private router: Router, private blockMenu: MenuController, private nameless: Router, private service: PostService) { }

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
    this.service.dadosApi(dados, 'api.php').subscribe(data => {
      if (data['success']) {
        console.log(data['result']);
        this.router.navigate(['folder/inbox']);
      }
    });

  }
}
