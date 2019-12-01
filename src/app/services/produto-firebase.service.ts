import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ProdutosService } from './produtos.service';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProdutoFirebaseService {

  produtos: { id: number, nome: string, vlr: number, desc: string, img: string }[] = [];

  constructor(private afs: AngularFirestore, private produtosS: ProdutosService) {
    this.produtos = this.produtosS.getProdutos();
  }

  // addProdutos() {
  //   this.produtos.forEach(produto => {
  //     this.afs.collection<{ id: number, nome: string, vlr: number, desc: string, img: string }>('produtos').add(produto);
  //   });
  // }

  getProdutos(): Observable<{ id: number, nome: string, vlr: number, desc: string, img: string }[]> {
    return this.afs.collection<{ id: number, nome: string, vlr: number, desc: string, img: string }>('produtos').snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const pid = a.payload.doc.id;
          return { pid, ...data };
        })
      })
    )
  }

  getProduto(id: string): Observable<{ id: number, nome: string, vlr: number, desc: string, img: string } | any> {
    return this.afs.collection<{ id: number, nome: string, vlr: number, desc: string, img: string }>('produtos').doc(id).snapshotChanges().pipe(
      take(1),
      map(actions => {
        const data = actions.payload.data();
        const id = actions.payload.id;
        return { id, ...data };
      })
    )
  }
}
