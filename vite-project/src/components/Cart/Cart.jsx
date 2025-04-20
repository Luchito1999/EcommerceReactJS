import { Link } from "react-router-dom"
import { useCart } from "../../hooks/useCart"
import CartItem from "../CartItem/CartItem";
import './Cart.css';

export default function Cart() {
  const { cart, clearCart, getTotal, totalQuantity, showClearCartNotification } = useCart();
  const total = getTotal();

  if (totalQuantity === 0) {
    return <h1>No hay items en el carrito</h1>
  }
  return (
    <div>
      {cart.map((item) => (
        <CartItem key={item.id} {...item} />
      ))}
      <div className="cart-totales">
        <h2>Total: USD$ {total} </h2>
        <button
          onClick={() => {
            clearCart();
            showClearCartNotification();
          }}
          className="btn btn-primary"
        >
          Limpiar Carrito
        </button>

        <Link to="/checkout" className="btn btn-primary">Ir a pagar</Link>
      </div>
    </div>
  )
}


