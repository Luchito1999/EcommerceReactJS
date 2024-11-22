import { Link } from "react-router-dom";

function ItemList({ products }) {
    return (
        <div className="product-list"> 
            {products.map((product) => (
                <div key={product.id} className="product-card"> 
                    <img src={product.img} alt={product.name} className="product-img" /> 
                    <div className="product-info">
                        <h3>{product.name}</h3>
                        <p>{product.description}</p>
                        <div className="price">${product.price}</div>
                        <Link to={`/item/${product.id}`} className="details-button">Ver Detalles</Link>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ItemList;

