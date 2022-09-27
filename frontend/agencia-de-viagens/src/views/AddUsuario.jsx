import React, {useState} from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

export default function AddUsuario() {
  
    const navigate = useNavigate();

    const [nome, setNome] = useState('');
    const [idade, setIdade] = useState('');
    const [email, setEmail] = useState('');
  
  
    const salvar = async (e) => {
        e.preventDefault();
        console.log(nome,idade,email);
        await axios.post("http://localhost:8080/usuarios", {
            nome: nome,
            idade: idade,
            email: email
        }).then((result) => {
            alert("Usuário adicionado.")
            navigate("/Tabela")
        }).catch((erro) => {
            console.log(erro);
        })
    }

    return (

    <div className="container">
        <div className="row">
            <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                <h2 className="text-center m-4">Registro de Usuário</h2>
                <form>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Nome</label>
                        <input type="text" className="form-control" id="exampleInputNome1" 
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}/>
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Idade</label>
                        <input type="text" className="form-control" id="exampleInputIdade"
                         value={idade}
                         onChange={(e) => setIdade(e.target.value)}/>
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Email</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                         value={email}
                         onChange={(e) => setEmail(e.target.value)}/>

                    </div>
                    <button type="submit" className="btn btn-outline-success" onClick={salvar}>Salvar</button>
                    <Link to="/Tabela" type="submit" className="btn btn-outline-danger mx-2">Cancelar</Link>
                </form>
            </div>
        </div>
    </div>
  )
}
