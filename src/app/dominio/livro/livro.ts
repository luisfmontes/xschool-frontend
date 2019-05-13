import { Categoria } from '../categoria/categoria';
import { Autor } from '../autor/autor';

export class Livro {
  id: number;
  titulo: string;
  edicao: string;
  npaginas: number;
  tipo: string;
  preco: number;
  categoria: Categoria;
  autor: Autor;
  favorito: boolean;
}
