import { Link } from 'react-router-dom'
import useCart from '../../hooks/useCart'
import CheckoutForm from '../CheckoutForm/CheckoutForm'

function Checkout() {
    const { cart } = useCart();

    return (
        <section className="custom-container d-flex flex-column text-center">
            <div className="container mb3">
                <h1 className="display-6 fw-bold mb-3">Ingrese sus datos para completar su compra</h1>

                <h3>Envíos únicamente a Capital Federal</h3>

                {cart.length === 0
                    ?
                    <>
                        <p className="display-6 fw-bold mb-3">No hay ítems en tu carrito.</p>
                        <Link to="/" className="btn custom-btn" >Ir a la tienda</Link>
                    </>
                    :
                    <CheckoutForm />
                }
            </div>
        </section>
    )
}

export default Checkout