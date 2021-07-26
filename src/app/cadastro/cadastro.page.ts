import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//import { threadId } from 'worker_threads';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {

  constructor(
    private cadastro: CadastroPage
  ){ }

  ngOnInit() {

  }
  fecharModal(){
    this.cadastro.dismiss();
  }
  enviando
    }
 