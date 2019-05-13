import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';


import { Livro } from '../livro';
import { LivroService } from '../livro.service';
import { Categoria } from '../../categoria/categoria';
import { CategoriaService } from '../../categoria/categoria.service';
import { Autor } from '../../autor/autor';
import { AutorService } from '../../autor/autor.service';
import { ValidationService } from '../../shared/validation/validation.service';


@Component({
  selector: 'app-livro-lista',
  templateUrl: './livro-formulario.component.html',
  styleUrls: ['./livro-formulario.component.css']
})
export class LivroFormularioComponent implements OnInit {
  livro: Livro;
  categorias: Categoria[];
  autores: Autor[];
  livroForm: FormGroup;
  titulo: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private builder: FormBuilder,
    private livroService: LivroService,
    private categoriaService: CategoriaService,
    private autorService: AutorService 
  ) { }

  ngOnInit() {

    this.livro = new Livro();

    /* Obter o `ID` passado por parâmetro na URL */
    this.livro.id = this.route.snapshot.params['id'];

    /* Altera o título da página */
    this.titulo = (this.livro.id == null)
    ? 'Novo Livro'
    : 'Alterar Livro';

    this.categoriaService.buscarTodos().subscribe(resposta => {
      this.categorias = resposta; });

      this.autorService.buscarTodos().subscribe(resposta => {
        this.autores = resposta; });

    /* Reactive Forms */
    this.livroForm = this.builder.group({
      id: [],
      titulo: this.builder.control('', [Validators.required, Validators.maxLength(50)]),
      edicao: this.builder.control('', [Validators.required]),
      npaginas: this.builder.control('', [Validators.required,Validators.minLength(1),Validators.maxLength(6),ValidationService.onlynunberValidator]),
      tipo: this.builder.control('', [Validators.required]),
      categoria: this.builder.control('', [Validators.required]),
      autor: this.builder.control('', [Validators.required]),
      preco: this.builder.control('', [Validators.required]),
      favorito: false
    }, {});

    // Se existir `ID` realiza busca para trazer os dados
    if (this.livro.id != null) {
      this.livroService.buscarPeloId(this.livro.id)
        .subscribe(retorno => {

          // Atualiza o formulário com os valores retornados
          this.livroForm.patchValue(retorno);

        });
    }

  }

  salvar(livro: Livro) {
    console.log(livro);
    if (this.livroForm.invalid) {
      console.log('Erro no formulário');
    } else {
      this.livroService.salvar(livro)
      .subscribe(response => {
        console.log('Curso salvo com sucesso');

        // retorna para a lista
        this.router.navigate(['/livro/list']);
      },
      (error) => {
        console.log('Erro no back-end');
      });
    }
  }

}
