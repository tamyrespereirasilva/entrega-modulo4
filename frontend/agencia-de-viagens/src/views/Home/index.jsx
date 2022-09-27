import React from "react";
import "./style.css";

import Imagem1 from "../../assets/img/praiapessoas.jpg";
import Imagem2 from "../../assets/img/rio-de-janeiro.jpg";
import Imagem3 from "../../assets/img/praiarj.jpg";
import Imagem4 from "../../assets/img/cataratas.jpg";


export default function Home(){
  return(
    <main className="inicio">
      <div class="container">
        <h2>Ofertas que não podem esperar</h2>
        <div className="row">
          <div className="col-3">
            <img src={Imagem1} className="img-fluid rounded-start" alt="Paisagem"></img>  
            <div className="card-body">
            <h5 className="card-title">Ipojuca</h5>
            <p className="card-text">Ipojuca é um município do litoral pernambucano que reúne algumas das praias mais lindas do Brasil. A região é perfeita para passar as férias com a família, certamente suas férias serão maravilhosas!</p>
            </div> 
          </div>
          <div className="col-3">
            <img src={Imagem2} className="img-fluid rounded-start" alt="Rio de janeiro"/>
            <div className="card-body">
            <h5 className="card-title">Rio de Janeiro</h5>
            <p className="card-text">Os pontos turísticos do Rio de Janeiro estão entre os lugares que todo mundo deveria visitar ao menos uma vez na vida. </p>
            </div>  
          </div>
          <div className="col-3">
          <img src={Imagem3} className="img-fluid rounded-start" alt="Praia"/> 
          <div className="card-body">
          <h5 className="card-title">Arraial do Cabo</h5>
          <p className="card-text">Decidir o que fazer em Arraial do Cabo será tarefa fácil! Como bom destino litorâneo, Arraial do Cabo atrai pelas lindas praias e cenários dignos de muitos cliques!</p>
          </div>  
          </div>
          <div className="col-3">
            <img src={Imagem4} className="img-fluid rounded-start" alt="Cataratas"/>
            <div className="card-body">
            <h5 className="card-title">Foz do Iguaçu</h5>
            <p className="card-text">Visitar as Cataratas do Iguaçu é uma experiência de imersão na natureza, através de uma caminhada em trilhas no meio da mata e a proximidade iminente da imensidão das quedas d’água do Rio Iguaçu.</p>
            </div>   
          </div>
        </div> 
      </div>  
    </main>
  )
}