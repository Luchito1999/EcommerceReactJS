import { HashRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import NavBar from "./components/NavBar/NavBar";
import './styles/styles.css';
import Cart from "./components/Cart/Cart";
import Checkout from "./components/Checkout/Checkout";
import { CartProvider } from "./context/CartContext";
import Footer from "./components/Footer/Footer";
import { NotificationProvider } from './context/NotificationContext';
import Btn from "./components/BotonWsp/Btn";


function App() {
    return (
        <HashRouter>
            <NotificationProvider>  
                <CartProvider>
                    <NavBar />
                    <Btn/>
                    <Routes>
                        <Route path="/" element={<ItemListContainer greetings="TRANSFORMÁ TU ESTILO" />} />
                        <Route path="/category/:categoryId" element={<ItemListContainer />} />
                        <Route path="/item/:itemId" element={<ItemDetailContainer />} />
                        <Route path="/cart" element={<Cart />} />
                        <Route path="/checkout" element={<Checkout />} />
                        <Route path="*" element={<h1>Página no encontrada</h1>} />
                    </Routes>
                    <Footer />
                </CartProvider>
            </NotificationProvider>
        </HashRouter>
    );
}


export default App;
