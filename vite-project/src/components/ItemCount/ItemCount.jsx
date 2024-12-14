import { useState } from "react";
import './ItemCount.css';

function ItemCount({ initialValue = 1, stock, onAdd }) {
    const [count, setCount] = useState(initialValue);

    const decrement = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    };

    const increment = () => {
        if (count < stock) {
            setCount(count + 1);
        }
    };

    return (
        <div className="item-count">
            <button onClick={decrement} className="finalize-button" disabled={count === 1}>Decrementar</button>
            <h2 className="card-text">{count}</h2>
            <button onClick={increment} className="finalize-button" disabled={count === stock}>Incrementar</button>
            <button onClick={() => onAdd(count)} className="finalize-button">Agregar al carrito</button>
        </div>
    );
}

export default ItemCount;
