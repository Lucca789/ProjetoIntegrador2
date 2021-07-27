import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface Folders{
  id:string
  Nome:string
  Telefone:string
  Email:string
  CNPJ:string
}

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
export class FolderService {
private url = 'http://127.0.0.1/php/empresas';


constructor(private http: HttpClient) { }
  getAll(){
    return this.http.get<[Folders]>(this.url);
 }
  create(cadastro: Cadastro){
    console.log(cadastro)
    return this.http.post(this.url, cadastro)
  }
}
