import { Livro } from '../livro/livro';

export class Carrinho {
  public livro: Livro[] = new Array<Livro>();
  public qtdProduto: number = 0;
}
