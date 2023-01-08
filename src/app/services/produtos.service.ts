import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { EMPTY, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

import { IProduto } from '../model/IProduto.model';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {
  private URL: string = environment.URL;

  constructor(private http: HttpClient, private toastr: ToastrService) { }

  buscarTodos(): Observable<IProduto[]> {
    return this.http.get<IProduto[]>(this.URL)
    .pipe(map(retorno => retorno), catchError(erro => this.mostrarErro(erro)));
  }

  mostrarErro(e: any): Observable<any> {
    this.mostrarMsg("ERRO!", "não foi possível realizar a operação", "toast-error")
    return EMPTY;
  }

  mostrarMsg(titulo: string, msg: string, tipo: string): void {
    this.toastr.show(titulo, msg, {closeButton: true, progressBar: true}, tipo)
  }


  cadastrar(produto: IProduto): Observable<IProduto> {
    return this.http.post<IProduto>(this.URL, produto)
    .pipe(map(retorno => retorno), catchError(erro => this.mostrarErro(erro)));
  }

  buscarPorId(id: number): Observable<IProduto>{
    return this.http.get<IProduto>(`${this.URL}/${id}`)
    .pipe(map(retorno => retorno), catchError(erro => this.mostrarErro(erro)));
  }

  atualizar(produto: IProduto): Observable<IProduto> {
    return this.http.put<IProduto>(`${this.URL}/${produto.id}`, produto)
    .pipe(map(retorno => retorno), catchError(erro => this.mostrarErro(erro)));
  }

  deletar(id: any): Observable<any> {
    return this.http.delete<any>(`${this.URL}/${id}`)
    .pipe(map(retorno => retorno), catchError(erro => this.mostrarErro(erro)));
  }
}
