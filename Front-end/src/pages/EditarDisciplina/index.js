import React, { useState } from "react";
import ReactDOM from "react-dom";
import { FiCheckSquare } from "react-icons/fi";
import styles from "./EditarDisciplina.css";
import { Link, useHistory } from "react-router-dom";

export function EditarDisciplina() {
  const [nome, setNome] = useState("");
  const [periodo, setPeriodo] = useState("");
  const [horario, setHorario] = useState("");
  const [local, setLocal] = useState("");
  const [nomeProfessor, setNomeProfessor] = useState("");
  const [material, setMaterial] = useState("");
  const [status, setStatus] = useState("Em andamento");

  const history = useHistory();

  function submitEditarDisciplina(event) {
    event.preventDefault();

    console.log(nome, periodo, horario, local, nomeProfessor, material, status);
    history.push("/disciplinas/view/:disciplinaID");
  }

  return (
    <div className="bloco_editardisciplina">
      <form onSubmit={submitEditarDisciplina}>
        <div className="box_editardisciplina">
          <div className="header_editardisciplina">
            <h2 className="titulo_editardisciplina">Editar Disciplina</h2>
            <FiCheckSquare size={40} color="black" />
          </div>

          <input
            type="text"
            id="editarNomeDisciplina"
            className="inputs_editardisciplina"
            placeholder="Digite nome da disciplina"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          ></input>
          <input
            type="text"
            id="editarPeriodoDisciplina"
            className="inputs_editardisciplina"
            placeholder="Digite período da disciplina"
            value={periodo}
            onChange={(e) => setPeriodo(e.target.value)}
          ></input>
          <input
            type="text"
            id="editarHorarioDisciplina"
            className="inputs_editardisciplina"
            placeholder="Digite horário das aulas"
            value={horario}
            onChange={(e) => setHorario(e.target.value)}
          ></input>
          <input
            type="text"
            id="editarLocalDisciplina"
            className="inputs_editardisciplina"
            placeholder="Digite local das aulas"
            value={local}
            onChange={(e) => setLocal(e.target.value)}
          ></input>
          <input
            type="text"
            id="editarNomeProfessorDisciplina"
            className="inputs_editardisciplina"
            placeholder="Digite nome do professor responsável"
            value={nomeProfessor}
            onChange={(e) => setNomeProfessor(e.target.value)}
          ></input>
          <input
            type="text"
            id="editarMaterialDisciplina"
            className="inputs_editardisciplina"
            placeholder="Digite link para material da disciplina"
            value={material}
            onChange={(e) => setMaterial(e.target.value)}
          ></input>

          <select
            name="status"
            id="editarStatus"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="Em andamento" id="editarStatusDisciplinaEmAndamento">
              Em andamento
            </option>
            <option value="Concluida" id="editarStatusDisciplinaConcluida">
              Concluída
            </option>
          </select>

          <button type="submit" id="btnSalvaredicaoDisciplina">
            Salvar
          </button>
        </div>
      </form>
    </div>
  );
}
