import { useEffect, useState } from "react";
import { getProductByID } from "../asyncMock";
import { useParams } from "react-router-dom";

function ItemDetailContainer() {
    const [product, setProduct] = useState(null);
    const { itemId } = useParams();

    useEffect(() => {
        getProductByID(itemId).then((data) => setProduct(data));
    }, [itemId]);

    if (!product) {
        return <p>Cargando detalle del producto...</p>;
    }

    return (
        <div className="item-detail">
            <h2>{product.name}</h2>
            <img src={product.img} alt={product.name} width="300" />
            <p>{product.description}</p>
            <p>Categoria: {product.category}</p>
            <p>Precio: ${product.price}</p>
            <p>Stock: {product.stock}</p>
        </div>
    );
}

export default ItemDetailContainer;



