import { Component, OnInit } from "@angular/core";

import { Produto } from "../produto";
import { ProdutoService } from "../produto.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-produto-list",
  templateUrl: "./produto-list.component.html",
  styleUrls: ["./produto-list.component.css"]
})
export class ProdutoListComponent implements OnInit {
  produtos: Produto[];

  constructor(private produtoService: ProdutoService, private router: Router) {}

  ngOnInit() {
    // this.produtoService.buscarTodos().subscribe(resposta => {
    //   this.produtos = resposta;
    // });
  }
}
