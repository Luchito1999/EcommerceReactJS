import { useCart } from "../../hooks/useCart";
import './CartItem.css';

export default function CartItem({ id, name, quantity, price }) {
    const { removeItem, increment, decrement } = useCart(); // Mantén las funciones de useCart

    const handleRemove = (id) => {
        removeItem(id);
    };

    return (
        <article className="CardCartItem">
            <header className="HeaderCartItem">
                <h2 className="ItemHeaderCartItem">{name}</h2>
            </header>
            <section className="ContainerItemCartItem">
                <p className="ItemCartItem">Cantidad: {quantity}</p>
                <p className="ItemCartItem">Precio x unidad: USD$ {price}</p>
            </section>
            <footer className="ItemFooterCartItem">
                <p className="InfoCartItem">Subtotal: USD$ {price * quantity}</p>
                <button className="btn btn-primary" onClick={() => handleRemove(id)}>
                    ❌
                </button>
                <button onClick={() => increment(id)}>+</button>
                <span>{quantity}</span>
                <button onClick={() => decrement(id)}>-</button>
            </footer>
        </article>
    );
}
