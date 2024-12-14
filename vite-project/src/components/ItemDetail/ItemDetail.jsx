import { useState } from "react";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import { useCart } from "../../hooks/useCart";
import './ItemDetail.css'


function ItemDetail({ id, name, img, description, price, stock }) {
    const [quantity, setQuantity] = useState(0);
    const {addItem, isInCart} = useCart()

    const handleAdd = (count) => {
        const productToAdd = {
            id, name, price, quantity: count
        }
        addItem(productToAdd)
    }
    return (
        <div className="product-detail">
            <h2>{name}</h2>
            <div className="product-detail-content">
                <img src={img} alt={name} className="product-img" />
                <div className="details-info">
                    <p className="card-text">{description}</p>
                    <h2 className="price">Precio: USD$ {price}</h2>
                    <h2 className="card-text">Disponibles: {stock}</h2>
                </div>
            </div>

            {
    isInCart(id) ? (
        <div className="button-group">
            <Link to="/cart" className="finalize-button">Ir al carrito</Link>
            <Link to="/" className="finalize-button">Seguir comprando</Link>
        </div>
    ) : (
        <ItemCount stock={stock} onAdd={handleAdd} />
    )
}
        </div>
    );
}

export default ItemDetail;
