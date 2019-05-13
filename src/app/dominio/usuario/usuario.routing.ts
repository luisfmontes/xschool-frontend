import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { UsuarioPerfilComponent } from './usuario-perfil/usuario-perfil.component';

const usuarioRoutes: Routes = [
    { path: "", redirectTo: "/perfil", pathMatch: "full" },
    { path: 'perfil', component: UsuarioPerfilComponent}
];

@NgModule({
    imports: [RouterModule.forChild(usuarioRoutes)],
    exports: [RouterModule]
  })

  export class UsuarioRouting {}
