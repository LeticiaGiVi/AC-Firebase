import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Cuidadores } from '../models/cuidadores';

@Injectable({
  providedIn: 'root'
})
export class CuidadoresService {

  constructor(private afs: AngularFirestore) { }  


  salvar(cuidador: Cuidadores) {

    return this.afs.collection('cuidadores').add({ ...cuidador });
  }

  buscarCuidadores() {
    return this.afs.collection('cuidadores').snapshotChanges();
  }

  
  buscarPorId(id: string) {
    return this.afs.collection('cuidadores').doc(id).valueChanges();
  }


  alterar(cuidador: Cuidadores) {
    return this.afs.collection('cuidadores').doc(cuidador.id).update({ ...Cuidadores });
  }


  deletar(id: string) {
    return this.afs.doc('cuidadores/' + id).delete();
  }
}
