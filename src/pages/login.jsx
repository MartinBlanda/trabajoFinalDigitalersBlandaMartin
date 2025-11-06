import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useAuth } from '../context/AuthContext';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [err, setErr] = useState('');
    const navigate = useNavigate();
    const { login } = useAuth();

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

    const contenedorFormularioStyle = {
        maxWidth: '500px',
        margin: '0 auto',
        padding: '1.5rem',
        backgroundColor: '#162026',
        borderRadius: '8px',
        boxShadow: '0 6px 18px rgba(0,0,0,0.35)',
        borderLeft: '4px solid rgba(13,202,240,0.12)',
    };

    const inputStyle = {
        backgroundColor: '#0f1517',
        color: '#fff',
        border: '1px solid #263033',
        borderRadius: '6px',
        '::placeholder': { color: '#ffffffff' }
    };

    const labelStyle = {
        color: '#cfe8ef',
        marginBottom: '0.5rem',
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email || !password) {
            setErr('Ingrese correo y contraseña');
            return;
        }
        const user = login(email, password);
        if (user.isAdmin) {
            navigate('/admin');
        } else {
            navigate('/');
        }
    };

    return (
        <div style={pageStyle}>
            <h1 style={headerStyle}>Iniciar sesión</h1>
            
            <div style={contenedorFormularioStyle}>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label style={labelStyle}>Correo electrónico</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Ingrese su correo electrónico"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            style={inputStyle}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label style={labelStyle}>Contraseña</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Ingrese su contraseña"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            style={inputStyle}
                        />
                    </Form.Group>

                    {err && (
                        <div style={{ 
                            color: 'salmon', 
                            marginBottom: '1rem',
                            textAlign: 'center',
                            padding: '0.5rem',
                            backgroundColor: 'rgba(250,128,114,0.1)',
                            borderRadius: '4px'
                        }}>
                            {err}
                        </div>
                    )}

                    <div style={{ textAlign: 'center' }}>
                        <Button 
                            variant="outline-info" 
                            type="submit"
                            size="lg"
                        >
                            Iniciar sesión
                        </Button>
                    </div>
                </Form>
            </div>
        </div>
    );
}

export default Login;