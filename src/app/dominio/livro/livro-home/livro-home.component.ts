import { Component, OnInit } from '@angular/core';

import { Livro } from '../livro';
import { LivroService } from '../livro.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'XSO-livro-home',
  templateUrl: './livro-home.component.html',
  styleUrls: ['./livro-home.component.css']
})
export class LivroHomeComponent implements OnInit {
  livros: Livro[] = [];
  emitter: boolean = false;

    constructor(
      private livroService: LivroService,
      private route: ActivatedRoute,
    private router: Router
    ) {}

    ngOnInit() {
      this.livros = [];
      if (
        this.route.snapshot.routeConfig.path == "flist"
      ) {
        this.livroService.buscarTodos()
      .subscribe(resposta => {
        resposta.forEach(element => {
          console.log(element)
          if (element.favorito)
          {
            this.livros.push(element);
          } 
        });
      });
        
      } else {
        this.livroService.buscarTodos()
      .subscribe(resposta => {
        this.livros = resposta; });
      }

    }

    ReadMoreEvent(resposta){
      this.emitter = resposta;
    }
  
    Receveee(){
      this.emitter = !this.emitter;
    }
}
