import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const DetalleItem = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [item, setItem] = useState(null);

    const pageStyle = {
        maxWidth: '900px',
        margin: '2.5rem auto',
        color: '#e9f6f9',
        padding: '1.75rem',
    };

    const headerStyle = {
        textAlign: 'center',
        marginBottom: '2rem',
        color: '#fff',
        letterSpacing: '0.5px'
    };

    const cardStyle = {
        backgroundColor: '#162026',
        color: '#e9f6f9',
        borderRadius: '8px',
        boxShadow: '0 6px 18px rgba(0,0,0,0.35)',
        borderLeft: '4px solid rgba(13,202,240,0.12)',
        overflow: 'hidden'
    };

    const imgStyle = {
        width: '100%',
        height: 'auto',
        maxHeight: '500px',
        objectFit: 'contain',
        backgroundColor: '#0f1517',
        padding: '1rem'
    };

    const textoStyle = {
        color: '#cfe8ef',
        lineHeight: '1.7'
    };

    useEffect(() => {
        const cargarDatos = async () => {
            try {
                // Buscar primero en el JSON
                const mod = await import('../data/contenido.json');
                const datos = Array.isArray(mod.default) ? mod.default : [];
                let encontrado = datos.find(item => item.nombre === id);

                // Si no está en el JSON, buscar en localStorage
                if (!encontrado) {
                    const savedItems = localStorage.getItem('recomendaciones');
                    if (savedItems) {
                        const localItems = JSON.parse(savedItems);
                        encontrado = localItems.find(item => item.nombre === id);
                    }
                }
                
                if (encontrado) {
                    setItem(encontrado);
                }
            } catch (err) {
                console.error('Error cargando detalle:', err);
            }
        };

        cargarDatos();
    }, [id]);

    if (!item) {
        return (
            <div style={pageStyle}>
                <h1 style={headerStyle}>Detalle no encontrado</h1>
                <div style={{ textAlign: 'center' }}>
                    <Button variant="outline-info" onClick={() => navigate('/')}>
                        Volver al inicio
                    </Button>
                </div>
            </div>
        );
    }

    return (
        <div style={pageStyle}>
            <h1 style={headerStyle}>{item.nombre}</h1>
            <Card style={cardStyle}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <Card.Img
                            src={item.imagen}
                            alt={item.nombre}
                            style={imgStyle}
                        />
                    </div>
                    <div className="col-md-8">
                        <Card.Body>
                            <Card.Text style={textoStyle}>
                                <p><strong>Tipo:</strong> {item.tipo}</p>
                                <p><strong>Puntuación:</strong> {item.puntuacion}</p>
                                <p><strong>Duración:</strong> {item.Duracion || item.duracion}</p>
                                <p><strong>Estado:</strong> {item.estado}</p>
                                <p><strong>Reseña:</strong></p>
                                <p>{item.reseña}</p>
                            </Card.Text>
                            <div className="mt-4 text-center">
                                <Button 
                                    variant="outline-info" 
                                    onClick={() => navigate('/')}
                                >
                                    Volver al inicio
                                </Button>
                            </div>
                        </Card.Body>
                    </div>
                </div>
            </Card>
        </div>
    );
};

export default DetalleItem;