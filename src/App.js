import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Products from './Components/Products/Products';
import Navbar from './Components/Nabvar/Nabvar';
import Home from './Components/Home/Home';
import IconWhatsApp from './Components/IconWhatsApp/IconWhatsApp'
import Alquiler from './Components/Alquiler/Alquiler';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
            <Navbar />
            <IconWhatsApp />
            <Routes>
              <Route exact path="/" element={ <Home /> } />
              <Route exact path="/productos" element={ <Products /> } />
              <Route exact path="/alquiler" element={ <Alquiler /> } />          
            </Routes>
          </BrowserRouter>
    </div>
  );
}

export default App;
