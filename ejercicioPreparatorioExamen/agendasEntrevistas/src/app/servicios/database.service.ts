import { Injectable } from '@angular/core';
import { Firestore, collectionData, docData } from '@angular/fire/firestore';
import { addDoc, collection, deleteDoc, doc, query, setDoc, updateDoc, where } from '@firebase/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(private fs: Firestore) { }

  // Devuelve una coleccion entera
  getCollection(coleccion: string) {
    const collectionRef = collection(this.fs, coleccion);
    return collectionData(collectionRef, { idField: "id" }) as Observable<any[]>;
  }

  // Devuelve un documento por su Id
  getDocumentById(id: string, coleccion: string) {
    const documentRef = doc(this.fs, coleccion + "/" + id);
    return docData(documentRef, { idField: "id" }) as Observable<any>;
  }

  // Devuelve el resultado de una consulta simple
  queryCollection(coleccion: string, campo: string, valor: string) {
    const collectionRef = collection(this.fs, coleccion);
    const queryRef = query(collectionRef, where(campo, "==", valor));
    return collectionData(queryRef, { idField: "id" }) as Observable<any[]>;
  }

  // Crea un nuevo documento
  newDocument(objeto: any, coleccion: string) {
    const collectionRef = collection(this.fs, coleccion);
    return addDoc(collectionRef, objeto) as Promise<any>;
  }

  // Actualiza un documento
  updateDocument(objeto: any, coleccion: string) {
    console.log("Servicio: "+objeto.id);
    const docRef = doc(this.fs, coleccion+"/"+objeto.id);
    return updateDoc(docRef, objeto); // Devuelve una promesa
  }

  // Borra un documento
  deleteDocument(id: string, coleccion: string) {
    const docRef = doc(this.fs, coleccion + "/" + id);
    return deleteDoc(docRef);
  }
}
