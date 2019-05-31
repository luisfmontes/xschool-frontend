import { Component, OnInit } from '@angular/core';

import { Livro } from '../livro';
import { LivroService } from '../livro.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-livro-list',
  templateUrl: './livro-list.component.html',
  styleUrls: ['./livro-list.component.css']
})
export class LivroListComponent implements OnInit {

    livros: Livro[] = [];


    constructor(
      private livroService: LivroService,
      private router: Router
    ) {}

    ngOnInit() {

      this.livroService.buscarTodos()
      .subscribe(resposta => {
        console.log('resposta: ', resposta)
        resposta.forEach(element => {
          this.livros.push(element);
        }); });
    }

    excluir(livroId: number) {
      this.livroService.excluir(livroId)
      .subscribe(resposta => {
        console.log('Livro excluído com sucesso');
        // retorna para a lista
        this.router.navigate(['/livro']);
        window.location.reload();
      } );
    }

}
