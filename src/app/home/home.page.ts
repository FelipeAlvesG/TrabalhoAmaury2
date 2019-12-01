import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ProdutoFirebaseService } from '../services/produto-firebase.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {

  produtos: { id: number, nome: string, vlr: number, desc: string, img: string }[];

  constructor(private navController: NavController, private produtoFirebase: ProdutoFirebaseService) {
    this.produtoFirebase.getProdutos().subscribe((produtos) => {
      this.produtos = produtos;
    });
  }

  tela(produto: { id: number, nome: string, vlr: number, desc: string, img: string }) {
    console.log(produto['pid']);
    this.navController.navigateForward(['/produto'], { state: { produto: produto, id: produto['pid'] } });
  }

  carrinho() {
    this.navController.navigateForward(['/carrinho']);
  }
}
