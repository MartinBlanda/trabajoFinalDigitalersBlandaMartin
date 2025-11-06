import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function DatosCard({ datos = {} }) {
    const navigate = useNavigate();
    const placeholder = 'https://placehold.co/400x600/png';

    const handleImgError = (e) => {
        e.target.src = placeholder;
    };

    const cardStyle = {
        height: '100%',
        backgroundColor: '#162026', 
        color: '#e9f6f9',          
        display: 'flex',
        flexDirection: 'column',
        borderRadius: '8px',
        boxShadow: '0 6px 18px rgba(0,0,0,0.35)',
        borderLeft: '4px solid rgba(13,202,240,0.12)',
        overflow: 'hidden'
    };

    const imgContainerStyle = {
        width: '100%',
        paddingTop: '140%',
        position: 'relative',
        overflow: 'hidden',
        backgroundColor: '#0f1517' 
    };

    const imgStyle = {
        position: 'absolute',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        backgroundColor: '#0f1517'
    };

    const titleStyle = {
        color: '#fff',
        fontSize: '1.1rem',
        marginBottom: '0.75rem'
    };

    const textoStyle = {
        color: '#cfe8ef', 
        fontSize: '0.95rem',
        lineHeight: '1.5'
    };

    const {
        id,
        title = 'Sin título',
        type = 'Desconocido',
        thumbnail = '',
        rating = 'N/A',
    } = datos;

    const handleClick = () => {
        navigate(`/detalle/${id}`);
    };

    return (
        <Card style={cardStyle}>
            <div style={imgContainerStyle}>
                <Card.Img
                    variant="top"
                    src={thumbnail || placeholder}
                    onError={handleImgError}
                    alt={title}
                    style={imgStyle}
                />
            </div>
            <Card.Body className="d-flex flex-column">
                <Card.Title style={titleStyle}>{title}</Card.Title>
                <Card.Text style={textoStyle}>
                    <strong>Tipo:</strong> {type}
                    <br />
                    <strong>Puntuación:</strong> {rating}
                </Card.Text>
                <Button 
                    variant="outline-info" 
                    onClick={handleClick}
                    className="mt-auto"
                    size="sm"
                >
                    Ver más detalles
                </Button>
            </Card.Body>
        </Card>
    );
}

export default DatosCard;