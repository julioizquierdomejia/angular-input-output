import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ComponentesModule } from '../componentes/componentes.module';
import { HijoComponent } from '../componentes/hijo/hijo.component';



@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    ComponentesModule
  ]
})
export class PaginasModule { }
