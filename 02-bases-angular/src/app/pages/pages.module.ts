import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { PruebasComponent } from './pruebas/pruebas.component';


@NgModule({
  declarations: [
    AboutComponent,
    ContactComponent,
    HomeComponent,
    PruebasComponent
  ],
  exports:[
    AboutComponent,
    ContactComponent,
    HomeComponent,
    PruebasComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
