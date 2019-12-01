import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  produtos: { id: number, nome: string, vlr: number, desc: string, img: string }[] = [
    {
      id: 1,
      nome: "Teclado Gamer",
      vlr: 100,
      desc: "Teclado gamer de alta performance, mecanico de otima procedencia, com 1 ano de garantia, iluminado com leds RGB...",
      img: "https://cdn.iset.io/assets/00665/produtos/2839/625218_1.png"
    },
    {
      id: 2,
      nome: "Mouse",
      vlr: 25,
      desc: "Mouse Mouse mouse loreninaisdasd",
      img: "https://elgstore.vteximg.com.br/arquivos/ids/158986/MGDC_elg_02.jpg?v=636836661897030000"
    },
    {
      id: 3,
      nome: "Cabo de Rede",
      vlr: 190,
      desc: "Caixa de cabo de rede de internet......",
      img: "https://a-static.mlcdn.com.br/618x463/caixa-cabo-de-rede-cat-6-furukawa-sohoplus-305-metros/cirilocabos/1094991709/3dd7c99becb7644ef738dcf2571946da.jpg"
    },
    {
      id: 4,
      nome: "CABO HDMI 5m",
      vlr: 35,
      desc: "CABO HDMI 4K TOP DE LINHA",
      img: "https://assets.xtechcommerce.com/uploads/images/medium/bb063d3b08efa9fece0c43845cc5333f.jpg"
    },
    {
      id: 5,
      nome: "PCT RJ45 MULTILASER C/100un",
      vlr: 40,
      desc: "Pacote de conectores RJ45 MULTILASER com 100 unidades",
      img: "https://awstatic-5754.kxcdn.com/gBWHOlUTL-XM9g8LceW-_VYvMDE=/0x0/loja/weblivro.com.br/prodimg/98/0642567001458230869.jpeg"
    },
    {
      id: 6,
      nome: "Pen Drive Kingston 128Gg 3.0",
      vlr: 99,
      desc: "Pendrive Pendrive drive sidjasiadjs",
      img: "https://images-na.ssl-images-amazon.com/images/I/81viLdEOgeL._SY879_.jpg"
    },

  ]
  constructor() {

  }

  getProdutos() {
    return this.produtos;
  }
  getProduto(id): { id: number, nome: string, vlr: number, desc: string, img: string } {
    let p: { id: number, nome: string, vlr: number, desc: string, img: string };
    this.produtos.forEach(produto => {
      if (produto.id == id) {
        p = produto;
      }
    });
    return p;
  }
}
