import React from "react";
import "../Contato/style.css";

export default function Contato(){
    return(
        <nav className="contato">
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 my-4">
                        <h2>Como podemos te ajudar?</h2>
                        <br/>
                        <p id="info">Primamos pelo compromisso e disponibilidade de nossa equipe para um atendimento eficaz.<br/> 
                        Entre em contato conosco – teremos todo o prazer em ajudá-lo.</p>
                    
                        <form>
                            <div>
                                <label for="Input"></label>
                                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Digite o seu e-mail aqui."/>
                            </div>
                            
                            <div>
                                <label for="Textarea"></label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" placeholder="Em que podemos te ajudar?" rows="3"></textarea>
                            </div>
                            <button type="submit" className="btn btn-light">Enviar</button>
                        </form>
                    </div>

                    <div className="col-sm-6 my-4">
                        <h5>Central de Atendimento</h5>
                        <p id="info">+55 (81) 9999-9999</p>
                        <br/><br/> 
                        <h5>Televendas</h5>
                        <p id="info">0800 888 8888</p>
                    </div>    
                </div>    
            </div>
        </nav> 
    )
}