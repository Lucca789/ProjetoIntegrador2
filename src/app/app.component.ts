import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Logout', url: '/login', icon: 'People' },
    { title: 'Página Principal', url: '/folder/inbox', icon:'home'},
    { title: 'Pedidos', url: '/pedidos', icon: 'bag-check' },
    { title: 'Parceiros', url: '/parceiros', icon: 'body' },
    { title: 'Devs', url: '/devs', icon: 'happy' },
 
  
    
  ];
 
}
