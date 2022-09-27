import React from "react";
import "../Destinos/style.css";

import Imagem1 from "../../assets/img/taipu-de-fora-ba.jpg";
import Imagem2 from "../../assets/img/fernando-de-noronha.jpg";
import Imagem3 from "../../assets/img/maragogi-al.jpg";
import Imagem4 from "../../assets/img/salvador-bahia.jpg";
import Imagem5 from "../../assets/img/fortaleza-ceara.jpg";
import Imagem6 from "../../assets/img/lencois-maranhenses.jpg";

export default function Destinos(){
    return(
        <nav className="Destinos">
        <div className="container">
            <div className="row g-5">
                <div className="col-12 col-md-6 col-lg-4">
                    <div className="card">
                        <img src={Imagem1} alt="Taipu de fora" className="card-img-top"/>
                        <div className="card-body">
                            <h5 className="card-text">Taipu de Fora - BA</h5>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                    <div className="card">
                        <img src={Imagem2} alt="Fernando de Noronha" className="card-img-top"/>
                        <div className="card-body">
                            <h5 className="card-text">Fernando de Noronha - PE</h5>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                    <div className="card">
                        <img src={Imagem3} alt="Maragogi" className="card-img-top"/>
                        <div className="card-body">
                            <h5 className="card-text">Maragogi - AL</h5>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                    <div className="card">
                        <img src={Imagem4} alt="Salvador" className="card-img-top"/>
                        <div className="card-body">
                            <h5 className="card-text">Salvador - BA</h5>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                    <div className="card">
                        <img src={Imagem5} alt="Fortaleza" className="card-img-top"/>
                        <div className="card-body">
                            <h5 className="card-text">Fortaleza - CE</h5>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                    <div className="card">
                        <img src={Imagem6} alt="Lençois Maranhenses" className="card-img-top"/>
                        <div className="card-body">
                            <h5 className="card-text">Lençóis Maranhenses - MA</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>
    )
}