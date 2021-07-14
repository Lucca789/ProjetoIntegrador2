import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { stringify } from 'querystring';
@Injectable()
export class PostService {
server: string= "http://localhost/pasta.php/";
  
constructor(private http: HttpClient) { }
  dadosApi(dados:any, nomeApi: string){
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type':'aplication/json'})
    }
    let url = this.server + nomeApi;
    return this.http.post(url,JSON.stringify(dados),httpOptions).map(res => res)
  }
}
