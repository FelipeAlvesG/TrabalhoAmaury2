import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { CarrinhoFirebaseService } from '../services/carrinho-firebase.service';
import { ProdutoFirebaseService } from '../services/produto-firebase.service';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.page.html',
  styleUrls: ['./produto.page.scss'],
})
export class ProdutoPage implements OnInit {

  id: string;
  produto: { id: number, nome: string, vlr: number, desc: string, img: string } = {
    id: undefined, desc: '', img: '', nome: '', vlr: undefined
  };
  carrinho: { id: number, nome: string, vlr: number, desc: string, img: string }[] = [];

  constructor(private produtosFirebase: ProdutoFirebaseService, private router: Router, private navController: NavController, private carrinhoFirebase: CarrinhoFirebaseService) {

    try {
      this.id = this.router.getCurrentNavigation().extras.state.produto['pid'];
    } catch (error) {
      console.log(error);
    }

    this.carrinhoFirebase.getCarrinho().subscribe((carrinho) => {
      this.carrinho = carrinho;
    });
    this.produtosFirebase.getProduto(this.id).subscribe((produto) => {
      this.produto = produto;
    });
  }

  ngOnInit() {
  }

  adcionaCarrinho() {
    this.carrinhoFirebase.adicionCarrinho(this.produto);
    this.navController.pop();
  }

}
