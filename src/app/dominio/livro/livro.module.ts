import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';

import { LivroRouting } from './livro.routing';
import { LivroService } from './livro.service';
import { LivroListComponent } from './livro-list/livro-list.component';
import { LivroFormularioComponent } from './livro-formulario/livro-formulario.component';

@NgModule({
    declarations: [
        LivroListComponent,
        LivroFormularioComponent
    ],
    imports: [
        // Angular
        RouterModule,
        CommonModule,
        ReactiveFormsModule,
        FormsModule,

        // Componente
        LivroRouting
    ],
    providers: [
        // Serviços
        LivroService,
    ]
})

export class LivroModule { }
