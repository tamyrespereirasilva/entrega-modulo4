import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "../Header/style.css";
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import Home from "../../views/Home";
import Destinos from "../../views/Destinos";
import Promocoes from "../../views/Promocoes";
import Contato from "../../views/Contato";
import Tabela from "../../views/Tabela";
import AddUsuario from "../../views/AddUsuario";
import EditUsuario from "../../views/EditUsuario";
import ViewUsuario from "../../views/ViewUsuario";


function CollapsibleExample() {
  return (
    <BrowserRouter>
        <div className="NavBar container-fluid">  
            <Navbar collapseOnSelect expand="lg" bg="transparent">
            <Container>
                <Navbar.Brand  as={Link} to="/Home">TROPICAL TRAVEL</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                <Nav.Link as={Link} to="/Home">HOME</Nav.Link>
                    <Nav.Link  as={Link} to="/Destinos">DESTINOS</Nav.Link>
                    <Nav.Link  as={Link} to="/Promocoes">PROMOÇÕES</Nav.Link>
                    <Nav.Link  as={Link} to="/Contato">CONTATO</Nav.Link>
                </Nav>
                <Nav.Link as={Link} to="/Tabela">
                    <button className="btn btn-light mx-2">
                        Cadastrar
                    </button>
                </Nav.Link>
                </Navbar.Collapse>
            </Container>
            </Navbar>
            <div>
                <Routes>
                    <Route path="/Home" element={<Home/>}/>
                    <Route path="/Destinos" element={<Destinos/>}/>
                    <Route path="/Promocoes" element={<Promocoes/>}/>
                    <Route path="/Contato" element={<Contato/>}/>
                    <Route path="/Tabela" element={<Tabela/>}/>
                    <Route path="/AddUsuario/:id" element={<AddUsuario/>}/>
                    <Route path="/EditUsuario/:id" element={<EditUsuario/>}/>
                    <Route path="/ViewUsuario/:id" element={<ViewUsuario/>}/>
                    <Route path="*" element={<h1>Página Não Encontrada</h1>}/>
                </Routes>
            </div>
        </div>  
    </BrowserRouter>   
  );
}

export default CollapsibleExample;