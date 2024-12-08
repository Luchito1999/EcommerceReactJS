import { useState } from "react";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
// import { useNotification } from "../../hooks/useNotification";
import { useCart } from "../../hooks/useCart";


function ItemDetail({ id, name, img, description, price, stock }) {
    const [quantity, setQuantity] = useState(0);
    const {addItem, isInCart} = useCart()

    // const {setNotification} = useNotification()

//     const handleAdd = (cantidad) => {
//         setQuantity(cantidad)
//         if (isInCart) {
//             // incrementa la cantidad
//         } else {
//         addItem();
//         // setNotification('success', 'Producto cargado')
//         }
    
// }
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
                    <h2 className="price">Precio: $ {price}</h2>
                    <h2 className="card-text">Disponible - {stock}</h2>
                </div>

            </div>


            {
                isInCart (id) ? (
                    <Link to="/cart">Ir al carrito</Link>
                ):
                (
                    <ItemCount stock={stock} onAdd={ handleAdd }/>
                )
            }
            {/* <div>
                {quantity === 0 ? (
                    <ItemCount stock={stock} onAdd={handleAdd} />
                ) : (
                    <Link to="/cart" className="finalize-button">Finalizar      Compra</Link>
                )}
            </div> */}
        </div>
    );
}

export default ItemDetail;
