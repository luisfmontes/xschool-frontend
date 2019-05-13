import { Component, OnInit } from '@angular/core';
import { Livro } from '../../livro/livro';
import { LivroService } from '../../livro/livro.service';

@Component({
  selector: 'XSO-favoritos',
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.css']
})
export class FavoritosComponent implements OnInit {

  livros: Livro[];


  constructor(
    private livroService: LivroService
  ) { }

  ngOnInit() {

    this.livroService.buscarTodos()
      .subscribe(resposta => {
        resposta.forEach(element => {
          if (element.favorito)
          {
            this.livros.push(element);
          } 
        });
      });
  }
}

