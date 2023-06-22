import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  titulo: string;
  imagen: string;
  constructor(){
    this.titulo = "TRABAJO PRACTICO REALIZADO";
    this.imagen = "https://cdn.icon-icons.com/icons2/2248/PNG/512/web_icon_137026.png"
  }

}
