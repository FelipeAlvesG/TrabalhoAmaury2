import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoFirebaseService {


  constructor(private afs: AngularFirestore) { }

  adicionCarrinho(produto: { id: number, nome: string, vlr: number, desc: string, img: string }): Promise<any> {
    return this.afs.collection('carrinho').add(produto);
  }

  getCarrinho(): Observable<{ id: number, nome: string, vlr: number, desc: string, img: string }[] | any> {
    return this.afs.collection<{ id: number, nome: string, vlr: number, desc: string, img: string }>('carrinho').snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const pid = a.payload.doc.id;
          return { pid, ...data };
        });
      })
    )
  }

  confirmaCompra(produtos: { id: number, nome: string, vlr: number, desc: string, img: string }[]): void {
    return produtos.forEach(produto => {
      this.afs.collection<{ id: number, nome: string, vlr: number, desc: string, img: string }>('carrinho').doc(produto['pid']).delete().then((value) => {
        console.log(produto.nome + " removidodo carrinho");
      })
    });
  }
}
