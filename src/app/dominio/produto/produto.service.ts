import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { catchError, last, map, tap } from 'rxjs/operators';


import { Produto } from './produto';

@Injectable()
export class ProdutoService {

    private URL = 'http://localhost:8888';
    constructor(private http: HttpClient) { }

    buscarTodos(): Observable<Produto[]> {
        return this.http
            .get<Produto[]>(`${this.URL}/produto`);
    }

    buscarPeloId(id: number): Observable<Produto> {
        return this.http
            .get<Produto>(`${this.URL}/produto/${id}`)
            .pipe(
                map(response => response)
            );
    }

    salvar(produto: Produto): Observable<Produto> {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
            })
        };

        if (produto.id) {
            return this.http
                .put<Produto>(`${this.URL}/produto`, JSON.stringify(produto), httpOptions);
        } else {
            return this.http
                .post<Produto>(`${this.URL}/produto`, JSON.stringify(produto), httpOptions);
        }
    }

    excluir(id: number): Observable<any> {
        return this.http
            .delete(`${this.URL}/produto/${id}`);
    }

}
