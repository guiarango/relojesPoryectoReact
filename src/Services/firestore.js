import { initializeApp } from "firebase/app";
import {
  addDoc,
  getDocs,
  getFirestore,
  collection,
  getDoc,
  doc,
  query,
  where,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCy7WYt8vhngraaniL74PJdrN3boSwocWs",
  authDomain: "relojescolombia-8683e.firebaseapp.com",
  projectId: "relojescolombia-8683e",
  storageBucket: "relojescolombia-8683e.appspot.com",
  messagingSenderId: "711850431891",
  appId: "1:711850431891:web:2c559092b0a2c9d0870466",
};

const app = initializeApp(firebaseConfig);
const DB = getFirestore(app);

//Traer todos los documentos
export async function returnAllItem() {
  const collectionProductsRef = collection(DB, "Products");
  const documentSnapshot = await getDocs(collectionProductsRef);
  const productsArray = documentSnapshot.docs.map((document) => {
    return { id: document.id, ...document.data() };
  });

  return productsArray;
}

//Traer todos los documentos por ID
export async function returnSingleItem(id) {
  const collectionProductsRef = doc(DB, "Products", id);
  const documentSnapshot = await getDoc(collectionProductsRef);
  const product = {
    id: documentSnapshot.id,
    ...documentSnapshot.data(),
  };
  return product;
}

//Traer todos los documentos por categoria
export async function returnItemsByCategory(idCategory) {
  const collectionProductsRef = collection(DB, "Products");
  const q = query(
    collectionProductsRef,
    where("idCategoria", "==", parseInt(idCategory))
  );
  const querySnapshot = await getDocs(q);
  const productsArray = querySnapshot.docs.map((document) => {
    return { id: document.id, ...document.data() };
  });

  return productsArray;
}

export async function createOrder(order) {
  const collectionRef = collection(DB, "orders");
  const docOrder = await addDoc(collectionRef, order);
  return docOrder.id;
}
