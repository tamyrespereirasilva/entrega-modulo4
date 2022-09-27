import React from 'react'
import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

export default function ViewUsuario() {

    const {id} = useParams();

    const [nome, setNome] = useState('');
    const [idade, setIdade] = useState('');
    const [email, setEmail] = useState('');

    useEffect(() => {
        carregarUsuario();

    }, [])

    const carregarUsuario = async () => {
        const result = await axios.get(`http://localhost:8080/usuarios/${id}`)
        setNome(result.data.nome)
        setIdade(result.data.idade)
        setEmail(result.data.email)
    }

  return (
    <div className="container">
        <div className="row">
            <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                <h2 className="text-center m-4">Atualizar Usuário</h2>
                <div className="card">
                    <div className="card text-center">
                       <div className="card-header">ID: {id}</div>
                        <div className="card-body">
                            <p className="card-title"><b>Nome</b> {nome} </p>
                            <p className="card-title"><b>Idade</b> {idade} </p>
                            <p className="card-title"><b>Email</b> {email} </p>
                            <Link to="/Tabela" type="button" className="btn btn-outline-success">
                             Voltar
                            </Link>
                        </div>
                    </div>
                </div>
            </div>    
        </div>    
    </div>    
  )
}
