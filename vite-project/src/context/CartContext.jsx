import { createContext, useState } from "react";
import Swal from "sweetalert2";



export const CartContext = createContext()


export const CartProvider = ({children}) =>{
    const [cart, setCart] = useState([])
    
    const isInCart = (id) =>{
        return cart.some(prod => prod.id === id)
    }
    
    const addItem = (productToAdd) => {
      if (!isInCart(productToAdd.id)) {
        setCart((prev) => [...prev, productToAdd]);
      }else {
        console.log("El producto ya esta en el carrito")
      }
    };
    const increment = (id) => {
      setCart((prevCart) =>
          prevCart.map((item) =>
              item.id === id ? { ...item, quantity: item.quantity + 1 } : item
          )
      );
  };

  const decrement = (id) => {
      setCart((prevCart) =>
          prevCart.map((item) =>
              item.id === id && item.quantity > 1
                  ? { ...item, quantity: item.quantity - 1 }
                  : item
          )
      );
  };
    const removeItem = (id) =>{
        const cartUpdated = cart.filter( prod => prod.id !== id)
        setCart(cartUpdated)
    }
    const clearCart = () => {
      setCart([]);
  };
  
  // Mostrar la notificación solo cuando sea necesario
  const showClearCartNotification = () => {
      Swal.fire({
          position: "top-end",
          icon: "success",
          title: "El carrito se vació correctamente",
          showConfirmButton: true,
          timer: 1200,
      });
  };
  
    
    const getTotal = () => {
      let accu = 0;
      cart.forEach((item) => {
        accu += item.quantity * item.price;
      });
      return accu;
    };

    const getTotalQuantity = () => {
        let accu = 0;
        cart.forEach( produc => {
            accu += produc.quantity
        })
        return accu
    };
    
    const totalQuantity = getTotalQuantity()

    
    const obj = {
      cart,
      isInCart,
      addItem,
      removeItem,
      clearCart,
      showClearCartNotification,
      totalQuantity,
      getTotal,
      increment,
      decrement
    }; 
    return (
        <CartContext.Provider value={obj}>
            {children}
        </CartContext.Provider>
    )
}