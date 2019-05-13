import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { UsuarioService } from '../usuario.service';
import { Usuario } from '../usuario';
import { ValidationService } from '../../shared/validation/validation.service';

@Component({
  selector: 'XSO-usuario-perfil',
  templateUrl: './usuario-perfil.component.html',
  styleUrls: ['./usuario-perfil.component.css']
})
export class UsuarioPerfilComponent implements OnInit {
  usuario: Usuario;
  titulo: string;
  usuarioForm: FormGroup

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private builder: FormBuilder,
    private usuarioService: UsuarioService
  ) { }

  ngOnInit() {

    this.usuario = new Usuario();

    /* Obter o `ID` passado por parâmetro na URL */
    this.usuario.id = 1;

    /* Altera o título da página */
    

    /* Reactive Forms */
    this.usuarioForm = this.builder.group({
      id: [],
      nome: this.builder.control('', [Validators.required, Validators.maxLength(50)]),
      email: this.builder.control('', [Validators.required,ValidationService.emailValidator]),
      senha: this.builder.control('', [Validators.required,ValidationService.passwordValidator]),
      tipo: this.builder.control('', [Validators.required]),
      cpf: this.builder.control('', [Validators.required,ValidationService.cpfValidator])
    }, {});

    // Se existir `ID` realiza busca para trazer os dados
    if (this.usuario.id != null) {
      this.usuarioService.buscarPeloId(this.usuario.id)
        .subscribe(retorno => {

          // Atualiza o formulário com os valores retornados
          this.usuarioForm.patchValue(retorno);
          this.titulo = 'Perfil de ' + retorno.nome;

        });
    }

  }

  salvar(usuario: Usuario) {
    console.log(usuario);
    if (this.usuarioForm.invalid) {
      console.log('Erro no formulário');
    } else {
      this.usuarioService.salvar(usuario)
      .subscribe(response => {
        console.log('Usuario salvo com sucesso');
        window.location.reload();
      },
      (error) => {
        console.log('Erro no back-end');
      });
    }
  }

}