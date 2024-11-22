import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import NavBar from "./components/NavBar";

function App() {
    return (
        <BrowserRouter>
        <NavBar />
            <Routes>
                <Route path="/" element={<ItemListContainer greetings="Bienvenido a la tienda de fútbol" />} />
                <Route path="/item/:productId" element={<ItemDetailContainer />} />
                <Route path="*" element={<h1>Página no encontrada</h1>} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
