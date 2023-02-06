import { initializeApp } from 'firebase/app';
import { getFirestore, collection} from 'firebase/firestore/lite';

const firebaseConfig = {
    apiKey: "AIzaSyAxEeEJgBQ1IOsJ9JsZSKM6gJu1mqiMAM8",
    authDomain: "carritocheg.firebaseapp.com",
    projectId: "carritocheg",
    storageBucket: "carritocheg.appspot.com",
    messagingSenderId: "123349851287",
    appId: "1:123349851287:web:728d6cbeb2d1f6485a9dd2"
};

const app = initializeApp(firebaseConfig);

 const db = getFirestore(app);

export const items = collection(db, 'listaProductos') //cambiamos listaProductos por el nombre de nuestra coleccion

