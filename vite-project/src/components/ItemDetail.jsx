import { useState } from "react";
import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";

function ItemDetail({ name, img, description, category, price, stock }) {
  const [quantity, setQuantity] = useState(0);
  
  const handleAdd = (cantidad) => {
    setQuantity(cantidad);
  };
  
  return (
    <div className="product-detail">
      <h2>{name}</h2>
      <div className="product-detail-content">
        <img src={img} alt={name} className="product-img" /> 
        <div className="details-info">
          <p className="card-text">{description}</p>
          <p className="card-text">Categoria: {category}</p>
          <h2 className="price">Precio: $ {price}</h2>
          <h2 className="card-text">Disponible - {stock}</h2>
        </div>
      </div>

      <div>
        {quantity === 0 ? (
          <ItemCount stock={stock} onAdd={handleAdd} />
        ) : (
          <Link to="/cart" className="finalize-button">Finalizar Compra</Link> 
        )}
      </div>
    </div>
  );
}

export default ItemDetail;



