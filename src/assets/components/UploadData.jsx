import { useEffect } from "react";
// import productos from "./productos.json";
import { getFirestore, collection, addDoc } from "firebase/firestore/lite";


function UploadData() {
  useEffect(() => {
    const db = getFirestore();
    const productosCollection = collection(db, "productos");

    productos.forEach(async (item) => {
      try {
        const docRef = await addDoc(productosCollection, item);
        console.log("Producto agregado con ID:", docRef.id);
      } catch (error) {
        console.error("Error al agregar producto:", error);
      }
    });
  }, []);

  return <h2>Subiendo productos...</h2>;
}

export default UploadData;
