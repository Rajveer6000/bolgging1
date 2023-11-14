import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection, collectionData, deleteDoc, doc } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private fs: Firestore) { }
  getNotes() {
    let notescollection = collection(this.fs, 'notes');
    return (collectionData(notescollection, { idField: 'id' }));
  }
  addNotes(desc: string) {
    let data = { describtion: desc };
    let notescollection = collection(this.fs, 'notes');
    return addDoc(notescollection, data);
  }

  deletNotes(id: string) {
    let docref = doc(this.fs, 'notes/'+id);
    return deleteDoc(docref);
  }
}
