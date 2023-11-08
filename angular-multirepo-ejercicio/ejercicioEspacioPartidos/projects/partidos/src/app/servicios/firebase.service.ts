import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection, collectionData, where, query, docData, doc, deleteDoc, setDoc, updateDoc } from '@angular/fire/firestore';
import { Partido } from '../modelos/partido';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private fb: Firestore) { }

  // Método que obtiene todos los partidos
  getPartidos(): Observable<Partido[]>{
    const partidosRef = collection(this.fb, 'partidos');
    return collectionData(partidosRef, {idField: 'id'}) as Observable<Partido[]>;
  }

  // Método para hacer consultas a la base de datos con angular/fire 7
  getPartidoByOther(campo: string, valor: any): Observable<Partido[]> {
    const collectionRef = collection(this.fb, 'partidos');
    const queryRef = query(collectionRef, where(campo, '==', valor));
    return collectionData(queryRef) as Observable<Partido[]>;
  }

  // Método para obtener un partido por el id
  getPartidoById(id: string): Observable<Partido> {
    const partidosRef = doc(this.fb, `partidos/${id}`);
    return docData(partidosRef, {idField: 'id'}) as Observable<Partido>;
  }

  // Método para hacer el insert de un partido
  setPartido(partido: Partido) {
    const partidoRef = collection(this.fb, 'partidos');
    return addDoc(partidoRef, partido)
    .then(() => console.log("Partido guardado"))
    .catch((error: any) => console.error(error));
  }

  // Método que eliminar un partido pasado por parámetros
  deletePartido(partido: Partido) {
    const partidoRef = doc(this.fb, "partidos/" + partido.id); // doc(this.fb, `partidos/${partido.id}`)
    return deleteDoc(partidoRef);
  }

  // Método para hacer el update de un partido
  updatePartido(partido: Partido) {
    const partidoRef = doc(this.fb, `partidos/${partido.id}`);
    return setDoc(partidoRef, partido);
  }

  // Método para modificar el resultado de un partido
  modifyResultadoPartido(partido: Partido){
    const partidoRef = doc(this.fb, `partidos/${partido.id}`);
    return updateDoc(partidoRef, {golesLocal: partido.golesLocal, golesVisitante: partido.golesVisitante});
  }
}
