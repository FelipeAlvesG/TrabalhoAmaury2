import { Component, OnInit } from '@angular/core';
import { LoadingController, AlertController } from '@ionic/angular';
import { CarrinhoFirebaseService } from '../services/carrinho-firebase.service';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.page.html',
  styleUrls: ['./carrinho.page.scss'],
})
export class CarrinhoPage implements OnInit {

  carrinho: { id: number, nome: string, vlr: number, desc: string, img: string }[] = [];

  constructor(public loadingController: LoadingController, public alertController: AlertController, private carrinhoFirebase: CarrinhoFirebaseService) {
    carrinhoFirebase.getCarrinho().subscribe((carrinho) => {
      this.carrinho = carrinho;
    })
  }

  baixaPedido() {
    this.carrinhoFirebase.confirmaCompra(this.carrinho);
  }

  async confirmaPedido() {
    const loading = await this.loadingController.create({
      message: 'Confirmando',
      duration: 1500
    });
    await loading.present();

    this.baixaPedido();

    this.msgConfirma();
  }

  async msgConfirma() {
    const alert = await this.alertController.create({
      header: 'Pedido Confirmado',
      message: 'Se o Correio ajudar, um dia chega!',
      buttons: ['OK']
    });
    await alert.present();
  }
  
  ngOnInit() {
  }

}
