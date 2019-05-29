import { Categoria } from '../categoria/categoria';

export class Livro {
  id: number;
  titulo: string;
  edicao: string;
  npaginas: number;
  tipo: string;
  preco: number;
  categoria: Categoria;
  autor: string;
  favorito: boolean;
  user: string;
}
