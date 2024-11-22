import { Link } from "react-router-dom";

function ItemList({ products }) {
    return (
        <div>
            {products.map((product) => (
                <div key={product.id}>
                    <h3>{product.title}</h3>
                    <Link to={`/item/${product.id}`}>Ver Detalles</Link>
                </div>
            ))}
        </div>
    );
}

export default ItemList;
