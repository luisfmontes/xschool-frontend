import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { catchError, last, map, tap } from 'rxjs/operators';


import { Livro } from './livro';

@Injectable()
export class LivroService {

    private URL = 'http://localhost:8888';
    constructor(private http: HttpClient) { }

    buscarTodos(): Observable<Livro[]> {
        return this.http
            .get<Livro[]>(`${this.URL}/livro`);
    }

    buscarPeloId(id: number): Observable<Livro> {
        return this.http
            .get<Livro>(`${this.URL}/livro/${id}`)
            .pipe(
                map(response => response)
            );
    }

    buscarTodosCategoria(id: number): Observable<Livro[]> {

      return this.http.get<Livro[]>(`${this.URL}/livro/categoria/${id}`).pipe(
        map(response => response)
    );
  }


    salvar(livro: Livro): Observable<Livro> {

        const httpOptions = {
            headers: new HttpHeaders({
              'Content-Type': 'application/json',
            })
        };

        if (livro.id) {
            return this.http
                .put<Livro>(`${this.URL}/livro`, JSON.stringify(livro), httpOptions);
        } else {
            return this.http
                .post<Livro>(`${this.URL}/livro`, JSON.stringify(livro), httpOptions);
        }
    }

    excluir(id: number): Observable<any> {
        return this.http
            .delete(`${this.URL}/livro/${id}`);
    }

}
