import { initializeApp } from "firebase/app";
import { 
    getFirestore, 
    collection, 
    getDocs, 
    doc, 
    getDoc, 
    query, 
    where,
    addDoc, 
} from "firebase/firestore";

import products from "../data/data";

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
export default async function getItems() {
    const collectionProductsRef = collection(DB, "products");
    const documentSnapshot = await getDocs(collectionProductsRef);
    const documentsData = documentSnapshot.docs.map( doc => {
        return { 
            ...doc.data(), 
            id: doc.id
        };
    });
    return documentsData;
};

//2. Traer un documento por id
export async function getSingleItem(idParams){
    const docRef = doc(DB, "products", idParams)
    const docSnapsShot = await getDoc(docRef);
    return {
        ...docSnapsShot.data(),
        id: docSnapsShot.id
    }
}

//3. Traer documentos por categoría
export async function getItemsByCategory(categoryParams){
    const collectionRef = collection(DB, "products");
    const queryCat = query(collectionRef, where("category", "==", categoryParams));
    const documentSnapshot = await getDocs(queryCat);
    const documentsData = documentSnapshot.docs.map( doc => {
        return { 
            ...doc.data(), 
            id: doc.id
        };
    });
    return documentsData;
}

//4. Enviar Orden a FireBase
export async function createOrder(order){
    const collectionRef = collection(DB, "orders");
    const docOrder = await addDoc(collectionRef, order);
    return docOrder.id
}

export async function uploadData(){
    const collectionRef = collection(DB, 'products');
    for (const item of products){
        const docOrder = await addDoc(collectionRef, item);
        console.log(docOrder.id);
    }
}
