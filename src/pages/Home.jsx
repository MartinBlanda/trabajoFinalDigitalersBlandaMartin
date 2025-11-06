import { useEffect, useState } from 'react';
import DatosCard from '../componentes/datoscard';

const normalizeItem = (item = {}, idx) => ({
    id: item.nombre ?? `item-${idx}`,
    title: item.nombre ?? 'Sin título',
    type: item.tipo ?? 'Desconocido',
    thumbnail: item.imagen ?? '',
    rating: item.puntuacion ?? 'N/A',
    duracion: item.Duracion ?? item.duracion ?? 'N/A',
    state: item.estado ?? 'N/A',
    review: item.reseña ?? item.resena ?? item.review ?? 'Sin reseña',
});

const Home = () => {
    const [items, setItems] = useState([]);
    const [localItems, setLocalItems] = useState([]);

    useEffect(() => {
        // Cargar items del JSON
        const loadJsonItems = async () => {
            try {
                const mod = await import('../data/contenido.json');
                const arr = Array.isArray(mod.default) ? mod.default : [];
                setItems(arr.map(normalizeItem));
            } catch (err) {
                console.error('Error cargando contenido.JSON:', err);
                setItems([]);
            }
        };

        // Cargar items del localStorage
        const loadLocalItems = () => {
            try {
                const saved = localStorage.getItem('recomendaciones');
                if (saved) {
                    const parsedItems = JSON.parse(saved);
                    setLocalItems(parsedItems.map(normalizeItem));
                }
            } catch (err) {
                console.error('Error cargando localStorage:', err);
                setLocalItems([]);
            }
        };

        loadJsonItems();
        loadLocalItems();
    }, []);

    const gridStyle = {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
        gap: '2rem',
        padding: '2rem',
        maxWidth: '1200px',
        margin: '0 auto',
        alignItems: 'start'
    };

    const allItems = [...items, ...localItems];

    return (
        <div className="container">
            <h1 style={{ textAlign: 'center', marginBottom: '1.5rem', color: '#fff', letterSpacing: '0.5px' }}>Bienvenido Compartiendo Ocio</h1>
            <p style={{ textAlign: 'center', color: '#cfe8ef' }}>Explora nuestras recomendaciones y encuentra tu próximo entretenimiento.</p>   

            {allItems.length === 0 ? (
                <p>No hay recomendaciones para mostrar.</p>
            ) : (
                <>
                    <div className="cards-grid" style={gridStyle}>
                        {allItems.map((dato) => (
                            <DatosCard key={dato.id} datos={dato} />
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};

export default Home;