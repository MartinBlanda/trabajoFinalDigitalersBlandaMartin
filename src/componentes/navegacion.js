import { NavLink, useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { useAuth } from '../context/AuthContext';

function Navegacion() {
    const { user, isAdmin, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand as={NavLink} to="/">Home</Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={NavLink} to="/about">About</Nav.Link>
                        <Nav.Link as={NavLink} to="/recomendacion">Recomendaciones</Nav.Link>
                    </Nav>


                    <Nav className="align-items-center">
                        {isAdmin && <Nav.Link as={NavLink} to="/admin">Admin</Nav.Link>}

                        {!user ? (
                            <Nav.Link as={NavLink} to="/login">Login</Nav.Link>
                        ) : (
                            <>
                                <span style={{ color: '#f8f9fa', marginRight: 12 }}>{user.email}</span>
                                <Button variant="outline-light" size="sm" onClick={handleLogout}>Cerrar sesión</Button>
                            </>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navegacion;