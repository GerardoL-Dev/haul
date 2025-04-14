// Importaciones necesarias
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; // Importa Firestore

// Configuración de Firebase usando variables de entorno
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);

// Exporta la instancia de Firestore
export const db = getFirestore(app);

// Exporta la instancia de Auth
export const auth = getAuth(app);

// Crea una instancia del proveedor de autenticación de Google
export const googleProvider = new GoogleAuthProvider();