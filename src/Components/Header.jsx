import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {Link} from 'react-router-dom';
import { Button } from 'react-bootstrap';

const Header = () => {
  return (
    <div>
      <Navbar expand="md" variant="dark" bg="dark">
        <Container>
          <Navbar.Brand href="#">Anti-Age Expert</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link>
              <Link to={'/'}>
                Главная
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to={'/favourites'}>
               Избранное
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to={'/cart'}>
                Корзина
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to={'/description'}>
                Описание
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to={'/map'}>
                Найти нас
              </Link>
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link>
              <Button variant="primary">Войти</Button>
            </Nav.Link>
            <Nav.Link>
              <Link exact to={'/form'}>
              <Button variant="primary">Обратная связь</Button>
              </Link>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}
export default Header;