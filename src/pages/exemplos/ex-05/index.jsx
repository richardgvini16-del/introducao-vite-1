import { useState } from "react";

export default function Exemplo05() {
  const [formData, setFormData] = useState({
    login: "",
    senha: "",
  });

  const [dadosEnviados, setDadosEnviados] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setDadosEnviados(formData);
    console.log("Enviando para API:", formData);
  };

  return (
    <div style={{ maxWidth: "400px" }}>
      <form onSubmit={handleSubmit}>
        <label>Login:</label>
        <input
          type="text"
          value={formData.login}
          onChange={(e) =>
            setFormData({ ...formData, login: e.target.value })
          }
        />

        <label>Senha:</label>
        <input
          type="password"
          value={formData.senha}
          onChange={(e) =>
            setFormData({ ...formData, senha: e.target.value })
          }
        />

        <button type="submit">Enviar</button>
      </form>

      <h2>Dados enviados:</h2>

      {dadosEnviados && (
        <div>
          <p>Login: {dadosEnviados.login}</p>
          <p>Senha: {dadosEnviados.senha}</p>
        </div>
      )}
    </div>
  );
}