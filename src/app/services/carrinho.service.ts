import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {

  produtos: { id: number, nome: string, vlr: number, desc: string, img: string }[] = [];

  constructor() { }

  adicionCarrinho(produto: { id: number, nome: string, vlr: number, desc: string, img: string }) {
    this.produtos.push(produto);
  }

  getCarrinho(): { id: number, nome: string, vlr: number, desc: string, img: string }[] {
    return this.produtos;
  }
}
