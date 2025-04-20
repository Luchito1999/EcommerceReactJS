import useCart from '../../hooks/useCart'
import useFormValidation from '../../hooks/useFormValidation'
import useAsync from '../../hooks/useAsync'
import { createOrder } from '../../services/OrdersServices'
import { sendOrderEmail } from '../../services/MailingServices'
import Spinner from '../Spinner/Spinner'
import { useContext } from 'react';
import { NotificationContext } from '../../context/NotificationContext';
import './CheckoutForm.css';




function CheckoutForm() {
    const { cart, clearCart, getTotal, showClearCartNotification } = useCart();
    const { showNotification } = useContext(NotificationContext);


    const initialFormData = {
        name: "",
        email: "",
        confirmEmail: "",
        phone: "",
        street: "",
        number: "",
        apartment: "",
    };
    const { formData, formErrors, handleInputChange, handleBlur, validateFormData } = useFormValidation(initialFormData);

    const { data: dataOrder, loading: loadingOrder, execute: executeCreateOrder } = useAsync(createOrder);
    const { loading: loadingEmail, execute: executeSendOrderEmail } = useAsync(sendOrderEmail);

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        if (!validateFormData()) {
            showNotification('Por favor, complete los campos correctamente', 'warning');
            return;
        }
    
        const order = {
            date: new Date(),
            buyer: formData,
            items: cart.map((item) => ({
                id: item.id,
                title: item.title,
                price: item.price,
                quantity: item.quantity,
            })),
            total: getTotal(),
            status: "pending",
        };
    
        // Depurar los datos antes de enviarlos
        console.log("Datos de la orden a enviar:", order);
    
        // Verificar si algún campo tiene un valor undefined
        if (Object.values(order).some((value) => value === undefined)) {
            console.error("Datos de la orden inválidos:", order);
            showNotification('Error: Hay datos inválidos en la orden', 'danger');
            return;
        }
    
        try {
            await executeCreateOrder(order);
            await executeSendOrderEmail(dataOrder);
            showNotification(`Compra realizada con éxito, se te ha enviado un correo electrónico con los detalles`, 'success');
            clearCart();
        } catch (error) {
            console.error("Error en el proceso de compra:", error);
            showNotification('Error al realizar la compra', 'danger');
        }
    };
    
    
    

    const labels = {
        name: "Nombre",
        email: "Correo electrónico",
        confirmEmail: "Confirmar correo",
        phone: "Teléfono",
        street: "Calle",
        number: "Número",
        apartment: "Departamento",
    };

    return (
        <form className="mx-auto col-12 col-lg-6 mt-5">
            {(loadingOrder || loadingEmail) && <Spinner />}

            {Object.keys(labels).map((field) => (
                <div key={field} className="d-flex flex-column align-items-start mb-3">
                    <label htmlFor={field} className="form-label d-inline-flex align-items-center">
                        {labels[field]}
                        {formErrors[field] &&
                            <small className="text-danger d-inline-flex align-items-center ms-3">
                                {formErrors[field]}
                            </small>}
                    </label>

                    <input
                        type={field.includes("email") ? "email" : field === "phone" ? "tel" : "text"}
                        className="form-control"
                        id={field}
                        name={field}
                        value={formData[field]}
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        disabled={loadingOrder || loadingEmail}
                    />
                </div>
            ))}

            <button type="submit" className="btn custom-btn mb-5 boton-end" onClick={handleSubmit} disabled={loadingOrder || loadingEmail}>
                Finalizar Compra
            </button>
        </form>
    )
}

export default CheckoutForm