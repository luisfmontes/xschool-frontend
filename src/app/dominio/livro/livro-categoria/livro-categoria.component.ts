import { Component, OnInit } from '@angular/core';
import { Categoria } from '../../categoria/categoria';
import { Livro } from '../livro';
import { CategoriaService } from '../../categoria/categoria.service';
import { LivroService } from '../livro.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'XSO-livro-categoria',
  templateUrl: './livro-categoria.component.html',
  styleUrls: ['./livro-categoria.component.css']
})
export class LivroCategoriaComponent implements OnInit {
  categorias: Categoria[] = [];
  categoria: Categoria;
  livros: Livro[] = [];
  emitter: boolean = false;

    constructor(
      private categoriaService: CategoriaService,
      private livroService: LivroService,
      private route: ActivatedRoute,
    private router: Router
    ) {}

    ngOnInit() {
      this.categorias = [];      
      this.categoriaService.buscarTodos()
      .subscribe(resposta => {
        resposta.forEach(element => {
            this.categorias.push(element);
        });
      });

    }

    selectCategoria(event: any) {
      this.categoriaService.buscarPeloId(event.target.value).subscribe(resposta => {
        this.categoria = resposta;
      });
    }
  
    filtrar(categoriaId: number) {
    
      this.livroService.buscarTodosCategoria(this.categoria.id)
      .subscribe(resposta => {
        this.livros = resposta;
      })
    }

    ReadMoreEvent(resposta){
      this.emitter = resposta;
    }
  
    Receveee(){
      this.emitter = !this.emitter;
    }
}
