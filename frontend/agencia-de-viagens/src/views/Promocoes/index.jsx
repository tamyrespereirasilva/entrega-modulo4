import React from "react";
import "./style.css";

import Imagem1 from "../../assets/img/taipu-de-fora-ba.jpg";
import Imagem2 from "../../assets/img/fernando-de-noronha.jpg";
import Imagem3 from "../../assets/img/maragogi-al.jpg";
import Imagem4 from "../../assets/img/fortaleza-ceara.jpg";
import Imagem5 from "../../assets/img/lencois-maranhenses.jpg";
import Imagem6 from "../../assets/img/salvador-bahia.jpg";

export default function Promocoes(){
    return(
        <nav className="promocoes">
        <div className="container">
            <div className="col-12">
                <div className="row g-3">
                    <div className="col-md-4">
                        <div className="card bg-warning text-white">
                            <img className="card-img" src={Imagem1} alt="Taipu de Fora - Bahia"/>
                            <div className="card-img-overlay">
                                <a href="#" className="btn btn-info btn-sm">+ ✈︎</a>
                                <h5 className="card-text">Taipu de Fora </h5>
                                <p className="card-text">2023</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card bg-warning text-white">
                            <img className="card-img" src={Imagem2} alt="Fernando de Noronha - Pernambuco"/>
                            <div className="card-img-overlay">
                                <a href="#" className="btn btn-info btn-sm">+ ✈︎</a>
                                <h5 className="card-title">Fernando de Noronha</h5>
                                <p className="card-text">2023</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card bg-warning text-white">
                            <img className="card-img" src={Imagem3} alt="Maragogi - Alagoas"/>
                            <div className="card-img-overlay">
                                <a href="#" className="btn btn-info btn-sm">+ ✈︎</a>  
                                <h5 className="card-title">Maragogi</h5>
                                <p className="card-text">2023</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card bg-warning text-white">
                            <img className="card-img" src={Imagem4 }alt="Fortaleza - Ceara"/>
                            <div className="card-img-overlay">
                            <a href="#" className="btn btn-info btn-sm">+ ✈︎</a>
                            <h5 className="card-title">Fortaleza</h5>
                            <p className="card-text">2023</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card bg-warning text-white">
                            <img className="card-img" src={Imagem5} alt="Lencois Maranhenses - Maranhao"/>
                            <div className="card-img-overlay">
                            <a href="#" className="btn btn-info btn-sm">+ ✈︎</a>
                            <h5 className="card-title">Lençóis Maranhenses</h5>
                            <p className="card-text">2023</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card bg-warning text-white">
                            <img className="card-img" src={Imagem6} alt="Salvador - Bahia"/>
                            <div className="card-img-overlay">
                            <a href="#" className="btn btn-info btn-sm">+ ✈︎</a>
                            <h5 className="card-title">Salvador</h5>
                            <p className="card-text">2023</p>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>    
        </div>
    </nav>
    )
}