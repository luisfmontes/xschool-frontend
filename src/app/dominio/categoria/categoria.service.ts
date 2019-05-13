import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { catchError, last, map, tap } from 'rxjs/operators';


import { Categoria } from './categoria';

@Injectable()
export class CategoriaService {

    private URL = 'http://localhost:8888';
    constructor(private http: HttpClient) { }

    buscarTodos(): Observable<Categoria[]> {
        return this.http
            .get<Categoria[]>(`${this.URL}/categoria`);
    }

    buscarPeloId(id: number): Observable<Categoria> {
        return this.http
            .get<Categoria>(`${this.URL}/categoria/${id}`)
            .pipe(
                map(response => response)
            );
    }

    buscarTodosCategoria(id: number): Observable<Categoria[]> {

      return this.http.get<Categoria[]>(`${this.URL}/categoria/categoria/${id}`).pipe(
        map(response => response)
    );
  }


    salvar(categoria: Categoria): Observable<Categoria> {

        const httpOptions = {
            headers: new HttpHeaders({
              'Content-Type': 'application/json',
            })
        };

        if (categoria.id) {
            return this.http
                .put<Categoria>(`${this.URL}/categoria/${categoria.id}`, JSON.stringify(categoria), httpOptions);
        } else {
            return this.http
                .post<Categoria>(`${this.URL}/categoria`, JSON.stringify(categoria), httpOptions);
        }
    }

    excluir(id: number): Observable<any> {
        return this.http
            .delete(`${this.URL}/categoria/${id}`);
    }

}
