import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';

import { ProdutoRouting } from './produto.routing';
import { ProdutoService } from './produto.service';
import { ProdutoListComponent } from './produto-list/produto-list.component';
import { ProdutoFormularioComponent } from './produto-formulario/produto-formulario.component';

@NgModule({
    declarations: [
        ProdutoListComponent,
        ProdutoFormularioComponent
    ],
    imports: [
        // Angular
        RouterModule,
        CommonModule,
        ReactiveFormsModule,
        FormsModule,

        // Componente
        ProdutoRouting
    ],
    providers: [
        // Serviços
        ProdutoService,
    ]
})

export class ProdutoModule { }
