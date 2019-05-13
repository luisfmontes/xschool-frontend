import { Injectable } from "@angular/core";
import { HttpHeaders, HttpClient } from "@angular/common/http";


import { catchError, last, map, tap } from "rxjs/operators";
import { Livro } from "../livro/livro";
import { ItemCarrinho } from "./itemCarrinho";


@Injectable()
export class CarrinhoService {
  carrinho: ItemCarrinho[] = [];

  inserirCarrinho(livro: Livro) {
    // recebe um livro
    this.carrinho = JSON.parse(localStorage.getItem("carrinho")); //pega a string do local storage e transforma em obj
    if (!this.carrinho) {
      this.carrinho = []; //tenho de resetar o objeto pois se o json estiver vazio ele vira null, e eu não posso dar push em algo null
      this.carrinho.push(new ItemCarrinho(livro, 1)); //inicia o obj itemCarrinho com 1 na quantidade e manda para o carrinho
      localStorage.setItem("carrinho", JSON.stringify(this.carrinho)); //sobe o objeto para o local storage transformando ele em string no formato JSON
    } else {
      //find ele volta uma referencia para algo que vc está pesquisando
      let itemEncontrado = this.carrinho.find(
        itemCarrinho => itemCarrinho.livro.id == livro.id //busca o item do carrinho pelo id do que está tentando inserir se achar retorna uma referencia(funciona como um ponteiro em C/C++)
      );
      if (itemEncontrado) {
        // verifica se existe algum itemEncontrado
        itemEncontrado.quantidade += 1; //se sim adiciona um
      } else {
        this.carrinho.push(new ItemCarrinho(livro, 1)); //se nao sobe um novo item para o carrinho
      }
      localStorage.setItem("carrinho", JSON.stringify(this.carrinho)); //independente do resultado tem de subir para o carrinho
    }
  }

  qtdTotalCarrinho() {
    let total = 0;
    let quantidade
    if (JSON.parse(localStorage.getItem("carrinho"))) {
      quantidade = JSON.parse(localStorage.getItem("carrinho"));
      quantidade.forEach(element => {
        total++;   // element.quantidade;
      });
    }

    return total;
  }
  consultarCarrinho() {
    return JSON.parse(localStorage.getItem("carrinho"));
  }
}
