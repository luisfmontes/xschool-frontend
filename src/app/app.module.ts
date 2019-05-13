import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { HomeComponent } from './dominio/home/home.component';
import { CategoriaService } from './dominio/categoria/categoria.service';
import { AutorService } from './dominio/autor/autor.service';
import { CarrinhoWidget } from './dominio/carrinho/carrinho-widget/carrinho-widget.component';
import { CarrinhoService } from './dominio/carrinho/carrinho.service';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CarrinhoWidget
  ],
  imports: [
    BrowserModule,
    RouterModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    AutorService,
    CarrinhoService,
    CategoriaService,
    AutorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
