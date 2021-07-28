import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


export interface Cadastro{

  id:string 
  Nome:string
  Email:string 
  Senha:string
  Cpf:string
}


@Injectable({
  providedIn: 'root'
})
export class ClientesService {
private url = 'http://127.0.0.1/php/apicliente.php';


constructor(private http: HttpClient) { }
  getAll(){
    return this.http.get<[Cadastro]>(this.url);
 }
  create(cadastro: Cadastro){
    //console.log(cadastro)
    return this.http.post(this.url, cadastro);
  }
}
