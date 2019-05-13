import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';

import { NgxPaginationModule } from 'ngx-pagination';
import { NgxMaskModule } from "ngx-mask";
import { UsuarioPerfilComponent } from './usuario-perfil/usuario-perfil.component';
import { UsuarioRouting } from './usuario.routing';
import { UsuarioService } from './usuario.service';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [
        UsuarioPerfilComponent
    ],
    imports: [
        // Angular
        RouterModule,
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        NgxPaginationModule,
        NgxMaskModule.forRoot(),
        SharedModule,
        // Componente
        UsuarioRouting
    ],
    providers: [
        // Serviços
        UsuarioService,
    ]
})

export class UsuarioModule { }
