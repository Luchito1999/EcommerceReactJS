// import ItemListContainer from "./components/ItemListContainer/ItemListContainer"; 
import NavBar from "./components/NavBar/NavBar";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {Link} from "react-router-dom"
import { useState } from "react"; 
import Personajes from './components/personajes';
import CharacterDetail from "./components/detalleCharacter";



function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<h1>Hola</h1>} />
        <Route path="/" element={<Personajes />} />
        <Route path="/character/:id" element={<CharacterDetail />} />
        <Route path="*" element={<h1>404 :</h1>} />
      </Routes>
      <Personajes />
      {/* <ItemListContainer /> */}
    </BrowserRouter>
  );
}

export default App;

