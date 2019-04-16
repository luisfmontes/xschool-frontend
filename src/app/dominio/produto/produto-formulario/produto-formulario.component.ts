import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';


import { Produto } from '../produto';
import { ProdutoService } from '../produto.service';


@Component({
  selector: 'app-produto-lista',
  templateUrl: './produto-formulario.component.html',
  styleUrls: ['./produto-formulario.component.css']
})
export class ProdutoFormularioComponent implements OnInit {

  produto: Produto;
  produtoForm: FormGroup;
  titulo: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private builder: FormBuilder,
    private produtoService: ProdutoService
  ) { }

  ngOnInit() {

    this.produto = new Produto();

    /* Obter o `ID` passado por parâmetro na URL */
    this.produto.id = this.route.snapshot.params['id'];

    /* Altera o título da página */
    this.titulo = (this.produto.id == null)
    ? 'Novo Tipo Produto'
    : 'Alterar Tipo Produto';

    /* Reactive Forms */
    this.produtoForm = this.builder.group({
      id: [],
      tipo: this.builder.control('', [Validators.required, Validators.maxLength(50)]),
    }, {});

    // Se existir `ID` realiza busca para trazer os dados
    if (this.produto.id != null) {
      this.produtoService.buscarPeloId(this.produto.id)
        .subscribe(retorno => {

          // Atualiza o formulário com os valores retornados
          this.produtoForm.patchValue(retorno);

        });
    }

  }

  salvar(produto: Produto) {
    console.log(produto);
    if (this.produtoForm.invalid) {
      console.log('Erro no formulário');
    } else {
      this.produtoService.salvar(produto)
      .subscribe(response => {
        console.log('Curso salvo com sucesso');

        // retorna para a lista
        this.router.navigate(['/produto']);
      },
      (error) => {
        console.log('Erro no back-end');
      });
    }
  }

}
