import './css/App.css';
import Footer from './componentes/Footer.js';
import About from './pages/about.jsx';
import Navegacion from './componentes/navegacion.js';
import Recomendaciones from './pages/recomendaciones.jsx';
import Home from './pages/Home.jsx';
import { Routes, Route } from 'react-router-dom';
import DetalleItem from './pages/DetalleItem.jsx';
import Admin from './pages/admin';
import Login from './pages/login';

function App() {
  return (
    <div className="app-wrapper">
      <Navegacion />
      <main className="app-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/recomendacion" element={<Recomendaciones />} />
          <Route path="/detalle/:id" element={<DetalleItem />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
