import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import { LivroListComponent } from './livro-list/livro-list.component';
import { LivroFormularioComponent } from './livro-formulario/livro-formulario.component';

const livroRoutes: Routes = [
    { path: "", redirectTo: "/list", pathMatch: "full" },
    { path: 'list', component: LivroListComponent},
    { path: 'new', component: LivroFormularioComponent},
    { path: 'view/:id', component: LivroFormularioComponent},
    { path: 'update/:id', component: LivroFormularioComponent},
];

@NgModule({
    imports: [RouterModule.forChild(livroRoutes)],
    exports: [RouterModule]
  })

  export class LivroRouting {}
