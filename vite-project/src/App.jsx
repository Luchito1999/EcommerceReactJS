import ItemListContainer from "./components/ItemListContainer/ItemListContainer"; 
import NavBar from "./components/NavBar/NavBar";
import { useState } from "react"; 

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavBar />
      <ItemListContainer />
    </>
  );
}

export default App;
