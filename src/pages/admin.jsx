

const Admin = () => {
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

    const resaltarStyle = {
        background: '#162026',
        borderLeft: '4px solid #0dcaf0',
        padding: '1.5rem',
        borderRadius: '8px',
        color: '#e8fbff',
        lineHeight: '1.7',
        boxShadow: '0 6px 18px rgba(0,0,0,0.35)'
    };

    return (
        <div className="container" style={pageStyle}>
            <h1 style={headerStyle}>Panel de administración</h1>
            <div style={resaltarStyle}>
                <p>
                    Página reservada para admin, actualmente se encuentra en construcción, pronto se podrá administrar
                    el contenido de la página desde aquí, borrar recomendaciones inapropiadas, corregir errores
                    de contenido, etc.
                </p>
            </div>
        </div>
    );
};

export default Admin;