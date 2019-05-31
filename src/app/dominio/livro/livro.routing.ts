import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import { LivroListComponent } from './livro-list/livro-list.component';
import { LivroFormularioComponent } from './livro-formulario/livro-formulario.component';
import { LivroHomeComponent } from './livro-home/livro-home.component';
import { LivroCategoriaComponent } from './livro-categoria/livro-categoria.component';

const livroRoutes: Routes = [
    { path: "", redirectTo: "/home", pathMatch: "full" },
    { path: 'home', component: LivroHomeComponent},
    { path: 'list', component: LivroListComponent},
    { path: 'new', component: LivroFormularioComponent},
    { path: 'view/:id', component: LivroFormularioComponent},
    { path: 'update/:id', component: LivroFormularioComponent},
    { path: 'flist', component: LivroHomeComponent},
    { path: 'categoria',component: LivroCategoriaComponent},

];

@NgModule({
    imports: [RouterModule.forChild(livroRoutes)],
    exports: [RouterModule]
  })

  export class LivroRouting {}
