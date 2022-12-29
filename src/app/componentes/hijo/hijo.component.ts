import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent {
  @Input() subTitulo:string = "Sub Titulo";
  @Output() nuevoTitulo = new EventEmitter<string>();

  aleatorio = 0;

  cambiarNombre(){
    this.subTitulo = "Nuevo Subtitulo";
    this.nuevoTitulo.emit(this.subTitulo);
  }

  alazar(){
    this.aleatorio = Math.round(Math.random()*10);
  }

}
