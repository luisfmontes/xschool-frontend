import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { catchError, last, map, tap } from 'rxjs/operators';


import { Autor } from './autor';

@Injectable()
export class AutorService {

    private URL = 'http://localhost:8888';
    constructor(private http: HttpClient) { }

    buscarTodos(): Observable<Autor[]> {
        return this.http
            .get<Autor[]>(`${this.URL}/autor`);
    }

    buscarPeloId(id: number): Observable<Autor> {
        return this.http
            .get<Autor>(`${this.URL}/autor/${id}`)
            .pipe(
                map(response => response)
            );
    }

    buscarTodosAutor(id: number): Observable<Autor[]> {

        return this.http.get<Autor[]>(`${this.URL}/autor/autor/${id}`).pipe(
            map(response => response)
        );
    }


    salvar(autor: Autor): Observable<Autor> {

        const httpOptions = {
            headers: new HttpHeaders({
                    'Content-Type': 'application/json',
            })
        };

        if (autor.id) {
            return this.http
                .put<Autor>(`${this.URL}/autor/${autor.id}`, JSON.stringify(autor), httpOptions);
        } else {
            return this.http
                .post<Autor>(`${this.URL}/autor`, JSON.stringify(autor), httpOptions);
        }
    }

    excluir(id: number): Observable<any> {
        return this.http
            .delete(`${this.URL}/autor/${id}`);
    }

}
