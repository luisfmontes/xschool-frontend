import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';

import { LivroRouting } from './livro.routing';
import { LivroService } from './livro.service';
import { LivroListComponent } from './livro-list/livro-list.component';
import { LivroFormularioComponent } from './livro-formulario/livro-formulario.component';
import { LivroHomeComponent } from './livro-home/livro-home.component';
import { LivroCardComponent } from './livro-card/livro-card.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgxMaskModule } from "ngx-mask";
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [
        LivroListComponent,
        LivroFormularioComponent,
        LivroHomeComponent,
        LivroCardComponent
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
        LivroRouting
    ],
    providers: [
        // Serviços
        LivroService,
    ]
})

export class LivroModule { }
