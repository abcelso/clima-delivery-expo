import 'firebase/firestore';
import 'firebase/auth';
import {Fuego} from 'swr-firestore-v9';

// Configuración para poder conectarme a firebase
const firebaseConfig = {
  apiKey: 'AIzaSyCGVVgRQCqTgLBegMoJMYXnYHexw8s1xP4',
  authDomain: 'clima-delivery-app.firebaseapp.com',
  projectId: 'clima-delivery-app',
  storageBucket: 'clima-delivery-app.appspot.com',
  messagingSenderId: '321761409738',
  appId: '1:321761409738:web:5d8cfeea3414472b251233',
};

export const fuego = new Fuego(firebaseConfig);
