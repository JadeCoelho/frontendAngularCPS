import { Component, OnInit } from '@angular/core';
import { IProduto } from 'src/app/model/IProduto.model';
import { ProdutosService } from 'src/app/services/produtos.service';

@Component({
  selector: 'app-listar-produtos',
  templateUrl: './listar-produtos.component.html',
  styleUrls: ['./listar-produtos.component.css']
})
export class ListarProdutosComponent implements OnInit {
  listaProdutos: IProduto[] = []

  constructor(private produtosService: ProdutosService) {
  }

  ngOnInit(): void {
    this.carregarProdutos()
  }

  carregarProdutos(): void {
    this.produtosService.buscarTodos().subscribe(retorno => this.listaProdutos = retorno)
  }

  deletar(produto: IProduto): void {
    this.produtosService.deletar(produto.id).subscribe(()=> this.produtosService.mostrarMsg('sistema', `${produto.nome} excluído com sucesso!`,'toast-success'))
    this.carregarProdutos()
  }
}
