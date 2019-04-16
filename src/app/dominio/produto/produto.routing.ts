import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import { ProdutoListComponent } from './produto-list/produto-list.component';
import { ProdutoFormularioComponent } from './produto-formulario/produto-formulario.component';

const produtoRoutes: Routes = [
    { path: '', component: ProdutoListComponent},
    { path: 'view/:id', component: ProdutoFormularioComponent},
    { path: 'new', component: ProdutoFormularioComponent},
    { path: 'update/:id', component: ProdutoFormularioComponent},
];

@NgModule({
    imports: [RouterModule.forChild(produtoRoutes)],
    exports: [RouterModule]
  })

  export class ProdutoRouting {}
