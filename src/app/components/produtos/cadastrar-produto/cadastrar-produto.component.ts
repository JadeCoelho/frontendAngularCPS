import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IProduto } from 'src/app/model/IProduto.model';
import { ProdutosService } from 'src/app/services/produtos.service';

@Component({
  selector: 'app-cadastrar-produto',
  templateUrl: './cadastrar-produto.component.html',
  styleUrls: ['./cadastrar-produto.component.css']
})
export class CadastrarProdutoComponent implements OnInit {
  produto: IProduto = {nome: null, validade: null, valor: null }

  constructor(private produtosService: ProdutosService, private router: Router) { }

  ngOnInit(): void {
  }

  salvarProduto(): void {
    this.produtosService.cadastrar(this.produto).subscribe(retorno => {
      this.produto = retorno
      this.produtosService.mostrarMsg('sistema', `${this.produto.nome} cadastrado com sucesso! ID: ${this.produto.id}`,'toast-success')
      this.router.navigate(['/produtos'])
    })
  }


}
