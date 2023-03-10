import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-produto',
  templateUrl: './card-produto.component.html',
  styleUrls: ['./card-produto.component.css']
})
export class CardProdutoComponent implements OnInit {
  @Input() foto!: string
  @Input() nomeProduto!: string
  @Input() idProduto!: number | string
  @Input() promocao!: boolean | string
  @Input() dataLimite!: string
  @Input() precoProduto!: number | string

  constructor() { }

  ngOnInit(): void {
  }

}
