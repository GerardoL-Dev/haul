import { db } from '../config/firebase';
import {
  collection,
  getDocs,
  doc,
  setDoc,
  deleteDoc,
  addDoc,
} from 'firebase/firestore';

// Referencias a colecciones
const carrerasRef = collection(db, 'carreras');
const mensajesRef = collection(db, 'mensajes');

// Función para obtener todas las carreras
export const obtenerCarreras = async () => {
  const snapshot = await getDocs(carrerasRef);
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};

// Función para agregar una carrera
export const agregarCarrera = async (carrera) => {
  const ref = doc(carrerasRef, carrera.id);
  await setDoc(ref, carrera);
};

// Función para editar una carrera
export const editarCarrera = async (id, carreraActualizada) => {
  const ref = doc(carrerasRef, id);
  await setDoc(ref, carreraActualizada);
};

// Función para eliminar una carrera
export const eliminarCarrera = async (id) => {
  const ref = doc(carrerasRef, id);
  await deleteDoc(ref);
};

// Función para agregar un mensaje a la colección 'mensajes'
export const agregarMensaje = async (mail, nombre, mensaje) => {
  await addDoc(mensajesRef, {
    mail,
    nombre,
    mensaje,
    timestamp: new Date(),
  });
};

// Función para obtener todos los mensajes
export const obtenerMensajes = async () => {
  const snapshot = await getDocs(mensajesRef);
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};

// Función para eliminar un mensaje por ID
export const eliminarMensaje = async (id) => {
  const ref = doc(mensajesRef, id);
  await deleteDoc(ref);
};
