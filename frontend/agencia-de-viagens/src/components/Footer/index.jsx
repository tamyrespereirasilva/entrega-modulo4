import React from "react";
import "../Footer/style.css";

export default function Footer(){
    return(
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="footer-col">
                        <h4>Empresa</h4>
                        <ul className="ul">
                            <li><a href="#">Sobre Nós</a></li>
                            <li><a href="#">FAQ</a></li>
                            <li><a href="#">Tropical Social</a></li>
                            <li><a href="#">Banco de Talentos</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>Termos</h4>
                        <ul className="ul">
                            <li><a href="#">Central de ajuda</a></li>
                            <li><a href="#">Política de privacidade</a></li>
                            <li><a href="#">Política de cookies</a></li>
                            <li><a href="#">Termos de uso</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>Central de atendimento</h4>
                        <ul className="ul">
                            <li><a href="#">SAC</a></li>
                            <li><a href="#">Suporte técnico</a></li>
                            <li><a href="#">Remarcações de Viagens</a></li>
                            <li><a href="#">Informações COVID-19</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>Redes Sociais</h4>
                        <div className="social-links">
                            <a href="#"><i className="fab fa-facebook-f"></i></a>
                            <a href="#"><i className="fab fa-twitter"></i></a>
                            <a href="#"><i className="fab fa-instagram"></i></a>
                            <a href="#"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                </div>
            </div>
      </footer>
    )
}