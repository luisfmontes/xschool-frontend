import { ItemCarrinho } from "./../itemCarrinho";
import { CarrinhoService } from "src/app/dominio/carrinho/carrinho.service";
import { Component, OnInit } from "@angular/core";


@Component({
  selector: "app-carrinho-list",
  templateUrl: "./carrinho-lista.component.html",
  styleUrls: ["./carrinho-lista.component.css"]
})
export class CarrinhoListaComponent implements OnInit {
  itensCarrinho: ItemCarrinho[];

  constructor(private carrinhoService: CarrinhoService) {}

  ngOnInit() {
    this.itensCarrinho = this.carrinhoService.consultarCarrinho();
    console.log(this.itensCarrinho)
  }

  // valorCarrinho(index: number) {
  //   var preco = 0;
  //   preco = Math.round(this.itensCarrinho[index].quantidade * this.itensCarrinho[index].livro.preco * 100) /100;
  //   localStorage.setItem("carrinho", JSON.stringify(this.itensCarrinho));
  //   return preco ;
  // }

  aumentarQuantidadeItemCarrinho(index: number) {
    this.itensCarrinho[index].quantidade++;
    localStorage.setItem("carrinho", JSON.stringify(this.itensCarrinho));
  }

  diminuirQuantidadeItemCarrinho(index: number) {
    if (this.itensCarrinho[index].quantidade === 1) {
      this.itensCarrinho.splice(index, 1);
    } else {
      this.itensCarrinho[index].quantidade--;
    }
    localStorage.setItem("carrinho", JSON.stringify(this.itensCarrinho));
  }

  excluirItemCarrinho(index: number) {
    this.itensCarrinho.splice(index, 1);
    localStorage.setItem("carrinho", JSON.stringify(this.itensCarrinho));
  }

  valorTotalCarrinho() {
    let total = 0;
    this.itensCarrinho.forEach(itemCarrinho => {
      total += (itemCarrinho.quantidade * itemCarrinho.livro.preco);
    });
    return total;
  }

}
