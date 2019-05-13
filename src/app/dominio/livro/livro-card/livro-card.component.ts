import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Livro } from '../livro';
import { CarrinhoService } from '../../carrinho/carrinho.service';
import { LivroService } from '../livro.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'XSO-livro-card',
  templateUrl: './livro-card.component.html',
  styleUrls: ['./livro-card.component.css']
})
export class LivroCardComponent implements OnInit {
  ImagPath1: string = "assets/Imagens/livro-a-escolha--nicholas-sparks-avn4187-1.jpg";
  ImagPath2: string = "assets/Imagens/livro-thor.jpg";
  fav: boolean;
  fav_on: string = "assets/Imagens/star-on.png";
  fav_none: string = "assets/Imagens/star-none.png";
  flist
  emitter: boolean = false;

  @Input() livro: Livro;
  @Input() index: number;
  @Output() ReadMoreE: EventEmitter<any> = new EventEmitter();
  @Input() receive: boolean

  constructor(private carrinhoService: CarrinhoService,
    private livroService: LivroService,
    private route: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit() {
    this.fav = this.livro.favorito;
    this.flist = this.route.snapshot.routeConfig.path == "flist"
  }

  AddFav(){
    this.livro.favorito = !this.livro.favorito;
    this.fav = !this.livro.favorito;
    this.emitter = !this.livro.favorito;
    this.livroService.salvar(this.livro)
      .subscribe(response => {
        console.log('Curso salvo com sucesso');
      },
      (error) => {
        console.log('Erro no back-end');
      });
      window.location.reload();
  }

  adicionarLivro(livro: Livro) {
    
      this.carrinhoService.inserirCarrinho(livro);
  }

  // ReadMore() {
  //   this.fav = !this.fav;
  //   if (!this.fav) {
  //     this.emitter = true;
  //     this.ReadMoreE.emit(!this.receive);
  //   }
  // }
  
  ngOnChanges(changes) {
    this.Receive();
  }

  Receive(){
    if(!this.emitter){
      this.fav = true;
    }else{
      this.emitter = false;
    }
  }

}
