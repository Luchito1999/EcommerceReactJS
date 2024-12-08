import {useState} from "react"

function ItemCount({initialValue=1, stock, onAdd}) {
    const [count, setCount] = useState(initialValue)
  const decrement = () => {
    if(count>1){
        setCount(count - 1)
    }
  }
    const increment = () => {
        if(count < stock){
            setCount(count + 1);
        }
    };
  
    return (
    <>
      <h2 className="card-text">{count}</h2>
      <button onClick={increment} className="finalize-button">Incrementar</button>
      <button onClick={() => onAdd(count)} className="finalize-button">Agregar al carrito</button>
      <button onClick={decrement} className="finalize-button">Decrementar</button>
    </>
  );
}

export default ItemCount