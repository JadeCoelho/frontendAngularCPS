import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-produtos',
  templateUrl: './listar-produtos.component.html',
  styleUrls: ['./listar-produtos.component.css']
})
export class ListarProdutosComponent implements OnInit {
  listaProdutos: any[] = [
    {nome: 'Curso de Angular', valor: '2.50', validade: '2023-01-10', id: 1},
    {nome: 'Ionic', valor: '1.50', validade: '2023-01-10', id: 2}
  ]

  constructor() {
  }

  ngOnInit(): void {
  }

}
