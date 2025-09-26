import { collection, getDocs, getFirestore } from "firebase/firestore/lite"
import { use, useEffect } from "react"

function TraerCollection() {
    useEffect(() => {
        const db = getFirestore()
        // Referencia a collection
        const ItemCollection = collection(db, 'producto')

        // traer la colección
        getDocs(ItemCollection).then(snapshot=>snapshop.docs.map(item=>{
            console.log(item.data())
            console.log(item.id)
        }))
    }, [])


  return (
    <div>
      
    </div>
  )
}

export default TraerCollection
