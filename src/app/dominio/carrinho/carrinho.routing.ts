import { CarrinhoListaComponent } from "src/app/dominio/carrinho/carrinho-lista/carrinho-lista.component";

import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const carrinhoRoutes: Routes = [{ path: "", component: CarrinhoListaComponent }];

@NgModule({
  imports: [RouterModule.forChild(carrinhoRoutes)],
  exports: [RouterModule]
})
export class CarrinhoRouting {}
