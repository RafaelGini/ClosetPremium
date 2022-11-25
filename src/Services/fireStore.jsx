import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyBcjNKzkm3xNUo6lTl5Qz9lUXwoxjGiToM",
    authDomain: "closet-4b39c.firebaseapp.com",
    projectId: "closet-4b39c",
    storageBucket: "closet-4b39c.appspot.com",
    messagingSenderId: "174291761908",
    appId: "1:174291761908:web:41245ef6b9a5bd9971bca1"
};

const app = initializeApp(firebaseConfig);
const DB = getFirestore(app);

//1. Traer todos los documentos
export async function getItems() {
    //Apuntar la coleccion
    const collectionProductsRef = collection(DB, "products");
    //Solicitar todos los documentos
    const documentSnapshot = await getDocs(collectionProductsRef);
    const documentsData = documentSnapshot.docs.map( doc => {
        return { ...doc.data(), id: doc.id};
    });
    return documentsData;
};

//2. Traer un documento por id

//3. Traer documentos por categoría