
import { db } from '../config/firebase';

import {
  collection,
  getDocs,
  doc,
  setDoc,
  deleteDoc
} from 'firebase/firestore';

const carrerasRef = collection(db, 'carreras');

export const obtenerCarreras = async () => {
  const snapshot = await getDocs(carrerasRef);
  return snapshot.docs.map(doc => doc.data());
};

export const agregarCarrera = async (carrera) => {
  const ref = doc(carrerasRef, carrera.id);
  await setDoc(ref, carrera);
};

export const editarCarrera = async (id, carreraActualizada) => {
  const ref = doc(carrerasRef, id);
  await setDoc(ref, carreraActualizada);
};

export const eliminarCarrera = async (id) => {
  const ref = doc(carrerasRef, id);
  await deleteDoc(ref);
};

