import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { db } from "../../services/firebase/index.js";
import {collection, getDocs, query, where} from "firebase/firestore"
import './ItemListContainer.css';
// import { useNotification } from "../../hooks/useNotification.js";

function ItemListContainer({ greetings }) {
    const [products, setProducts] = useState([]);
    const [loader, setLoader] = useState(false)
    const {categoryId} = useParams();
    // const {setNotification} = useNotification()

    useEffect(() => {
        setLoader(true)
        const collectionRef = categoryId ? query(collection(db, "products"), where("category", "==", categoryId)) 
        : collection(db, "products")

        getDocs(collectionRef)
        .then((querySnapshot) => {
            const productos = querySnapshot.docs.map((doc) =>{
                return{id: doc.id, ...doc.data()}
            })
            setProducts(productos)
        })
        .catch((error) => {
            // setNotification('danger', 'No es posible cargar el producto')
            console.log(error)
        })
        .finally(() => {
            setLoader(false)
        })
    }, [categoryId]);

    if(loader) {
       return <div className="loader">
       <div data-glitch="Loading..." className="glitch">Loading...</div>
     </div>
     
    }


    return (
        <div>
            <h2>{greetings}</h2>
            <div className="product-list">
                {products.map((product) => (
                    <div key={product.id} className="product-card">
                        <h3>{product.name}</h3>
                        <img src={product.img} alt={product.name} width="200" />
                        <p>Precio: ${product.price}</p>
                        <Link to={`/item/${product.id}`}>Ver detalle</Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ItemListContainer;
