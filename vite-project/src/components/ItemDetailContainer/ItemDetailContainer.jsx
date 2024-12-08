import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../services/firebase";
// import { useNotification } from "../../hooks/useNotification";

function ItemDetailContainer() {
    const [products, setProducts] = useState(null);
    const [loader, setLoader] = useState(false)
    const { itemId } = useParams();

    // const {setNotification} = useNotification()

    useEffect(() => {
        setLoader(true);
        getDoc(doc(db, 'products', itemId))
            .then((querySnapshot) => {
                const prod = {id: querySnapshot.id, ...querySnapshot.data()}
                setProducts(prod)
            })
            .catch((err) => {
                console.log(err)
            })
            .finally (() =>{
                setLoader(false)
            })
    }, [itemId]);

    if (loader) {
        return <p>Cargando detalle del producto...</p>;
    }

    return (
        <ItemDetail {...products} />
    );
}

export default ItemDetailContainer;