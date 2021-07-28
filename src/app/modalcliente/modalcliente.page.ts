import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { ClientesService } from 'src/services/Clientes.service';

@Component({
  selector: 'app-modalcliente',
  templateUrl: './modalcliente.page.html',
  styleUrls: ['./modalcliente.page.scss'],
})
export class ModalclientePage implements OnInit {

  constructor(
    private modalCtrl: ModalController,
    private service: ClientesService
  ) { }

  ngOnInit() {
  }
  fecharModal(){
    this.modalCtrl.dismiss();
  }
  enviando(form: NgForm){
    console.log(form.value);
    const cadastro = form.value;
    this.service.create(cadastro).subscribe(response =>{
      this.modalCtrl.dismiss(response);

    })
  }

}
