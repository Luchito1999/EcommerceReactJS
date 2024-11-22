import { useEffect, useState } from "react";
import { getProducts } from "../asyncMock";
import { Link } from "react-router-dom";

function ItemListContainer({ greetings }) {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts().then((data) => setProducts(data));
    }, []);

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
