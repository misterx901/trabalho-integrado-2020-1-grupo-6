import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import styles from "./login.css";
import { FiCheckSquare } from "react-icons/fi";
import { useHistory } from "react-router-dom";
import { api } from "../../services/api.js";

export function Login() {
  const [login, setLogin] = useState("");
  const [senha, setSenha] = useState("");
  const history = useHistory();

  function submitLogin(event) {
    event.preventDefault();
    console.log(login, senha);

    api
      .get("usuarios", {
        params: { usuario: login, senha },
      })
      .then((response) => {
        if (response.data.length != 1) {
          alert("Esse usuário não existe");
          return;
        }
        console.log(response.data);
        history.push("/home");
      });
  }

  return (
    <div className="bloco_login">
      <div className="box_login">
        <div className="header_login">
          <h1 id="nome_app">TaskBoard</h1>
          <FiCheckSquare size={45} color="black" />
        </div>
        <form onSubmit={submitLogin}>
          <div className="op_login">
            <h2 className="titulo_login">Faça seu login</h2>

            <input
              id="usuarioLogin"
              className="inputs_login"
              placeholder="Digite seu usuário"
              value={login}
              onChange={(e) => setLogin(e.target.value)}
            ></input>

            <input
              type="password"
              id="usuarioSenha"
              className="inputs_login"
              placeholder="Digite sua senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            ></input>

            <button type="submit" id="btnEntrar">
              Entrar
            </button>
          </div>
        </form>

        <Link to="/cadastro" id="btnCadastrar">
          Cadastre-se aqui
        </Link>
      </div>
    </div>
  );
}
