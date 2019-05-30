import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from './dominio/home/home.component';
import { FavoritosComponent } from './dominio/favoritos/favoritos/favoritos.component';

const routes: Routes = [
  { path: "", redirectTo: "/livro", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "produto", loadChildren: "./dominio/produto/produto.module#ProdutoModule" },
  { path: "livro", loadChildren: "./dominio/livro/livro.module#LivroModule" },
  { path: "usuario", loadChildren: "./dominio/usuario/usuario.module#UsuarioModule" },
  { path: "favoritos",loadChildren: "./dominio/livro/livro.module#LivroModule" },
  { path: "carrinho", loadChildren: "./dominio/carrinho/carrinho.module#CarrinhoModule" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
