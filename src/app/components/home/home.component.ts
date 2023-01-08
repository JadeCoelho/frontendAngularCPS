import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // nomeProduto!: string;
  nomeProduto = 'Curso de Angular'
  anuncio: string = `${this.nomeProduto} está em promoção!`;
  idProduto: number | string = 3.5123;
  precoProduto: number | string = 2.5;
  promocao: boolean | string = true;
  foto: string = 'assets/img/angular.png'
  dataLimite = '2023-01-10'

  constructor() {
    console.log('valor do produto:', this.precoProduto, 'euros');
  }

  ngOnInit(): void {
  }

}
