import { CarrinhoRouting } from "./carrinho.routing";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { CarrinhoListaComponent } from "./carrinho-lista/carrinho-lista.component";
import { NgModule } from "@angular/core";
import { CarrinhoService } from "./carrinho.service";


@NgModule({
  declarations: [CarrinhoListaComponent],
  imports: [
    // Angular
    RouterModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,

    // Component
    CarrinhoRouting
  ],
  providers: [
    // Serviços
    CarrinhoService
  ]
})
export class CarrinhoModule {}
