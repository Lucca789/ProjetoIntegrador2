import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Folders,FolderService } from 'src/services/Folders.service';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.page.html',
  styleUrls: ['./pedidos.page.scss'],
})
export class PedidosPage implements OnInit {
  folder: Folders [];


  constructor(private router : Router,private service:FolderService) { }

 
  ngOnInit() {
    this.service.getAll().subscribe(Response =>{
      this.folder = Response;
    })
  }  
  Pedidos(){
    this.router.navigate(["/Pedidos"]);
  }
  

}
