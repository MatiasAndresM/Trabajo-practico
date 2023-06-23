import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  textEvent: string;
  imagenDashboard: string;

  constructor(){
    this.textEvent="User"
    this.imagenDashboard= "https://www.nicepng.com/png/detail/141-1415492_bootstrap-bootstrap-4-icon-png.png"
  }
  cambiarTexto(): void{
    this.textEvent="Matias Andres Maza"
  }
  cambiarImagen(): void{
    this.imagenDashboard= "https://1.bp.blogspot.com/-MwJI22_Ek_0/XJQEjL9WGjI/AAAAAAAAJSs/Kd9WAGTItDoTRoaIFLE8qwOrj3STIMbfQCK4BGAYYCw/s1600/logo%2Bangular%2Bicon.png"
  }
}
