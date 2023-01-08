import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduto } from 'src/app/model/IProduto.model';
import { ProdutosService } from 'src/app/services/produtos.service';

@Component({
  selector: 'app-atualizar-produto',
  templateUrl: './atualizar-produto.component.html',
  styleUrls: ['./atualizar-produto.component.css']
})
export class AtualizarProdutoComponent implements OnInit {
  produto: IProduto = {nome: null, validade: null, valor: null }

  constructor(private produtosService: ProdutosService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const id = Number(this.activatedRoute.snapshot.paramMap.get('id'))
    this.produtosService.buscarPorId(id).subscribe(retorno => this.produto = retorno)
  }

  salvarProduto(): void {
    this.produtosService.atualizar(this.produto).subscribe(retorno => {
      this.produto = retorno
      this.produtosService.mostrarMsg('sistema', `${this.produto.nome} editado com sucesso!`,'toast-success')
    })
    this.router.navigate(['/produtos'])
  }

}
