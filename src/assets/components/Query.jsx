import { collection, getDocs, getFirestore, query, where } from "firebase/firestore/lite"
import { useEffect } from "react"

function Query() {

    const db = getFirestore();

    useEffect(() => {
        // Referencia a la collection

        const refItems = collection(db, 'producto');

        // crear la query
        const refItemsFiltrados = query(refItems, where('categoria', '==', 'Chico'))

        getDocs (refItemsFiltrados).then(snapshot => {
            if (snapshot.size===0){
                console.log("No hay resultados");
            } else {
                snapshot.docs.map(prod=>console.log(prod.data()))
            }
    
    }, [])


  return (
    <div>
      
    </div>
  )
}

export default Query
