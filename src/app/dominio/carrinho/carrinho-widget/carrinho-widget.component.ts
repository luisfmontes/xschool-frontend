import { Component, OnInit, AfterViewChecked } from "@angular/core";
import { Router } from "@angular/router";
import { Subscription, Observable, of } from "rxjs";
import { CarrinhoService } from "../carrinho.service";
import { Carrinho } from "../carrinho";

declare var $: any;

@Component({
  selector: "carrinho-widget",
  templateUrl: "./carrinho-widget.component.html",
  styleUrls: ["./carrinho-widget.component.css"]
})
export class CarrinhoWidget implements OnInit {
  public qtd = 0;
  public carrinho$: Observable<Carrinho>;

  constructor(
    private router: Router,
    private carrinhoService: CarrinhoService
  ) {

  }

  ngOnInit() {}

}
