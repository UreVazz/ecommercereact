import { addDoc, collection, getFirestore } from "firebase/firestore/lite"

function CreateItemBD() {
    //Item que vamos a cargar en la base de datos firebase
    const item={
        nombre: "Zorro",
        descripcion: "Zorro tallado a mano con piuntura acrílica",
        precio: 300,
        categoria: "Mediano",
        img: "/zorro.png",
        stock: 20
    }

    //conectamos a la base de datos
    const db = getFirestore();

    //Referenciamos la colección, llevame el item a esta dirección
    const itemCollection = collection (db, 'producto')

    //agregamos el nuevo item en la colección
    addDoc(itemCollection, item).then(({id})=>{
        console.log(id);
        console.log("Producto agregado correctamente");
    });


  return (
    <div>
      
    </div>
  )
}

export default CreateItemBD
