import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostService } from 'src/services/post.service';
//import { threadId } from 'worker_threads';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {
  id: string = "";
  nome: string = "";
  email: string = "";
  senha: string = "";
 cpf: string = "";


  constructor(private service :PostService, private router: Router) { }

  ngOnInit() {
    
  }
  cadastro() {
  return new Promise(resolve => {
    let dados = {
      requisicao :'add',
      nome: this.nome,
      email: this.email,
      senha: this.senha,
      cpf: this.cpf
    };
    this.service.dadosApi(dados,'api.php').subscribe(data =>{
      if (data['success']){
      this.router.navigate(['usuarios']);
      console.log(data)
      }
    });
  });
  }

 
  }
