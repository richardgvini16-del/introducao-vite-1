import { useState } from "react";
import styles from "./index.module.css";

export default function Ex04() {
  const [acao, setAcao] = useState("Excluir");

  return (
    <div className={styles.container}>
      <h1>Atividade 3</h1>

      <h2>Ação selecionada: {acao}</h2>

      <div>
        <button
          className={styles.cadastrar}
          onClick={() => setAcao("Cadastrar")}
        >
          Cadastrar
        </button>

        <button
          className={styles.editar}
          onClick={() => setAcao("Editar")}
        >
          Editar
        </button>

        <button
          className={styles.listar}
          onClick={() => setAcao("Listar")}
        >
          Listar
        </button>

        <button
          className={styles.excluir}
          onClick={() => setAcao("Excluir")}
        >
          Excluir
        </button>

        <button
          className={styles.cancelar}
          onClick={() => setAcao("Cancelar")}
        >
          Cancelar
        </button>
      </div>
    </div>
  );
}