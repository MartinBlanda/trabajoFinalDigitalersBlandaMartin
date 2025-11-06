import React, { useEffect, useState } from 'react';

const STORAGE_KEY = 'recomendaciones';

const initialForm = {
    nombre: '',
    tipo: 'serie',
    imagen: '',
    puntuacion: 5,
    reseña: '',
    duracion: '',
    estado: 'finalizada',
};

const Recomendaciones = () => {
    const [form, setForm] = useState(initialForm);
    const [saved, setSaved] = useState([]);
    const [msg, setMsg] = useState('');

    useEffect(() => {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (raw) {
            try {
                setSaved(JSON.parse(raw));
            } catch {
                setSaved([]);
            }
        }
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((f) => ({ ...f, [name]: name === 'puntuacion' ? Number(value) : value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!form.nombre.trim()) {
            setMsg('El nombre es obligatorio.');
            return;
        }

        const item = { ...form, id: Date.now() };
        const next = [...saved, item];
        localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
        setSaved(next);
        setForm(initialForm);
        setMsg('Recomendación guardada correctamente.');
        setTimeout(() => setMsg(''), 3000);
    };

    const handleClearAll = () => {
        localStorage.removeItem(STORAGE_KEY);
        setSaved([]);
    };

    const pageStyle = {
        maxWidth: '900px',
        margin: '2.5rem auto',
        color: '#e9f6f9',
        padding: '1.25rem',
    };

    const headerStyle = {
        textAlign: 'center',
        marginBottom: '1rem',
        color: '#fff',
        letterSpacing: '0.4px',
    };

    const leadStyle = {
        lineHeight: 1.6,
        fontSize: '1rem',
        color: '#cfe8ef',
        marginBottom: '1rem',
        textAlign: 'center',
    };

    const formContainerStyle = {
        maxWidth: '700px',
        margin: '0.75rem auto',
        padding: '1.5rem',
        backgroundColor: '#162026',
        borderRadius: '8px',
        boxShadow: '0 6px 18px rgba(0,0,0,0.35)',
        borderLeft: '4px solid rgba(13,202,240,0.12)',
    };

    const formStyle = {
        display: 'grid',
        gap: '0.9rem',
    };

    const inputStyle = {
        backgroundColor: '#0f1517',
        color: '#fff',
        border: '1px solid #263033',
        borderRadius: '6px',
        padding: '0.55rem',
        width: '100%',
    };

    const labelStyle = {
        color: '#cfe8ef',
        marginBottom: '0.35rem',
        display: 'block',
        fontSize: '0.95rem',
    };

    const buttonRow = {
        display: 'flex',
        gap: '0.75rem',
        justifyContent: 'center',
        marginTop: '0.75rem',
        flexWrap: 'wrap',
    };

    const savedGrid = {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
        gap: '1rem',
        marginTop: '1.25rem',
    };

    return (
        <div style={pageStyle}>
            <h1 style={headerStyle}>Recomendaciones de la comunidad</h1>

            <p style={leadStyle}>
                Compartí tus recomendaciones para que otros puedan descubrir nuevas series, libros, juegos y más.
            </p>

            <div style={formContainerStyle}>
                <form onSubmit={handleSubmit} style={formStyle}>
                    <div>
                        <label style={labelStyle}>Nombre</label>
                        <input
                            name="nombre"
                            type="text"
                            value={form.nombre}
                            onChange={handleChange}
                            style={inputStyle}
                        />
                    </div>

                    <div>
                        <label style={labelStyle}>Tipo</label>
                        <select name="tipo" value={form.tipo} onChange={handleChange} style={inputStyle}>
                            <option value="serie">Serie</option>
                            <option value="pelicula">Película</option>
                            <option value="libro">Libro</option>
                            <option value="juego">Juego</option>
                            <option value="manga">Manga</option>
                        </select>
                    </div>

                    <div>
                        <label style={labelStyle}>URL de la imagen</label>
                        <input name="imagen" type="text" value={form.imagen} onChange={handleChange} style={inputStyle} />
                    </div>

                    <div>
                        <label style={labelStyle}>Puntuación</label>
                        <input
                            name="puntuacion"
                            type="number"
                            min="1"
                            max="10"
                            value={form.puntuacion}
                            onChange={handleChange}
                            style={inputStyle}
                        />
                    </div>

                    <div>
                        <label style={labelStyle}>Reseña</label>
                        <textarea
                            name="reseña"
                            value={form.reseña}
                            onChange={handleChange}
                            style={{ ...inputStyle, minHeight: '100px' }}
                        />
                    </div>

                    <div>
                        <label style={labelStyle}>Duración</label>
                        <input name="duracion" type="text" value={form.duracion} onChange={handleChange} style={inputStyle} />
                    </div>

                    <div>
                        <label style={labelStyle}>Estado</label>
                        <select name="estado" value={form.estado} onChange={handleChange} style={inputStyle}>
                            <option value="finalizada">Finalizada</option>
                            <option value="en_emision">En emisión</option>
                            <option value="en_progreso">En progreso</option>
                            <option value="completado">Completado</option>
                        </select>
                    </div>

                    <div style={buttonRow}>
                        <button type="submit" className="btn btn-primary">Enviar Recomendación</button>
                        <button type="button" onClick={handleClearAll} className="btn btn-danger">Borrar todas</button>
                    </div>

                    {msg && (
                        <div style={{ color: msg.includes('obligatorio') ? 'salmon' : 'lightgreen', textAlign: 'center', marginTop: '0.5rem' }}>
                            {msg}
                        </div>
                    )}
                </form>
            </div>

            {saved.length > 0 && (
                <>
                    <h2 style={{ color: '#f8f9fa', textAlign: 'center', marginTop: '1.5rem' }}>Recomendaciones guardadas</h2>
                    <div style={savedGrid}>
                        {saved.map((item) => (
                            <div key={item.id} style={{ backgroundColor: '#162026', padding: '0.9rem', borderRadius: 8, color: '#e9f6f9' }}>
                                {item.imagen && (
                                    <img src={item.imagen} alt={item.nombre} style={{ width: '100%', height: 'auto', borderRadius: 6, marginBottom: 8 }} />
                                )}
                                <h4 style={{ margin: '0 0 6px 0', color: '#fff' }}>{item.nombre}</h4>
                                <div style={{ color: '#cfe8ef', fontSize: '0.95rem' }}>{item.tipo} — Puntuación: {item.puntuacion}</div>
                                {item.reseña && <p style={{ marginTop: 8, color: '#d7eaef' }}>{item.reseña}</p>}
                            </div>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};

export default Recomendaciones;
