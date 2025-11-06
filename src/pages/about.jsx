import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

const About = () => {
    const pageStyle = {
        maxWidth: '900px',
        margin: '2.5rem auto',
        color: '#e9f6f9',
        padding: '1.75rem',
    };

    const headerStyle = {
        textAlign: 'center',
        marginBottom: '1.5rem',
        color: '#fff',
        letterSpacing: '0.5px'
    };

    const textoprincipalStyle = {
        lineHeight: 1.8,
        fontSize: '1.05rem',
        color: '#cfe8ef',
        marginBottom: '1.25rem'
    };

    const parrafosStyle = {
        lineHeight: 1.7,
        color: '#d7eaef',
        marginBottom: '1rem',
        fontSize: '1rem'
    };

    const cartelitoStyle = {
        background: '#162026',
        borderLeft: '4px solid #0dcaf0',
        padding: '1rem',
        borderRadius: '6px',
        color: '#e8fbff',
        marginBottom: '1.25rem'
    };

    const highlightStyle = {
        background: 'rgba(13,202,240,0.12)',
        padding: '0 6px',
        borderRadius: 4,
        color: '#bff3ff'
    };

    return (
        <div className="container" style={pageStyle}>
            <h1 style={headerStyle}>Acerca de nosotros</h1>

            <p style={textoprincipalStyle}>
                En la vida está muy bien visto ser responsable y productivo, pero también es importante valorar el tiempo libre y
                el descanso. Aquí encontrarás recomendaciones para aprovechar esos momentos: desde <span style={highlightStyle}>series</span> y <span style={highlightStyle}>libros</span> hasta
                <span style={highlightStyle}> juegos</span> y <span style={highlightStyle}>anime</span>.
            </p>

            <div style={cartelitoStyle}>
                <strong>¿Qué buscamos?</strong>
                <p style={{ margin: '0.5rem 0 0 0' }}>
                    Crear una comunidad donde compartir opciones de ocio con reseñas breves y sinceras para que decidas rápido si algo te interesa.
                </p>
            </div>

            <p style={parrafosStyle}>
                Si no sabes qué hacer en tu tiempo libre, explora nuestras recomendaciones. Cada entrada incluye una breve reseña,
                duración y puntuación que te ayudan a filtrar rápidamente lo que te puede interesar.
            </p>

            <p style={parrafosStyle}>
                ¿Tenés una recomendación? Podés compartirla con la comunidad usando el Formulario.
            </p>

            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1.5rem' }}>
                <Link to="/recomendacion">
                    <Button variant="outline-info">Ir al formulario de recomendación</Button>
                </Link>
            </div>
        </div>
    );
};

export default About;