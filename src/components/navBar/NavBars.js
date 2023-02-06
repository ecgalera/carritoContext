import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import  "../navBar/NavBars.css"
import CartWidget from '../CartWidget';




function Navbars() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand style={{fontSize:"45px"}}href="#home">MyShop</Navbar.Brand>
          <Nav className="me-auto">
            <li><Link style={{ fontWeight:"bolder", textDecorationLine:"none", color:"white"}} to="/">Home</Link></li>
            <li><Link style={{ fontWeight:"bolder", textDecorationLine:"none",color:"white"}} to="/product">Productos</Link></li>
            <li><Link style={{ fontWeight:"bolder", textDecorationLine:"none",color:"white"}} to="/nosotros">Nosotros</Link></li>
           <CartWidget/>
          </Nav>
        </Container>
      </Navbar>
      
     
    </div>
  );
}

export default Navbars;