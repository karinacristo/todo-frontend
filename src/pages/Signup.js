import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../services/api"; // Certifique-se que o axios está configurado corretamente

const Signup = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Evita o comportamento padrão de recarregar a página
    setError("");

    try {
      const response = await axios.post("/signup", formData); // Envia os dados ao endpoint de signup
      console.log("Usuário criado:", response.data);
      navigate("/login"); // Redireciona para a página de login após o sucesso
    } catch (error) {
      console.error("Erro no signup:", error);
      if (error.response && error.response.data.message) {
        setError(error.response.data.message);
      } else {
        setError("Ocorreu um erro ao tentar criar a conta.");
      }
    }
  };

  return (
    <div className="signup-container">
      <h1>Crie sua conta</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Senha:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
        </div>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
};

export default Signup;
