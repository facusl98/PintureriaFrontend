import { useState } from "react";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const manejarLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const respuesta = await fetch(
        `${import.meta.env.VITE_API_URL}/auth/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: username,
            password: password,
          }),
        }
      );

      if (!respuesta.ok) {
        throw new Error("Usuario o contraseña incorrectos");
      }

      const data = await respuesta.json();

      console.log(data);

      // Guardamos el token
      localStorage.setItem("token", data.token);

    } catch (error) {
      console.error(error);
      alert("Error al iniciar sesión");
    }
  };

  return (
    <div>
      <h1>Iniciar sesión</h1>

      <form onSubmit={manejarLogin}>

        <input
          type="text"
          placeholder="Usuario"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">
          Iniciar sesión
        </button>

      </form>
    </div>
  );
}

export default Login;