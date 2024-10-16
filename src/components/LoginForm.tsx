import { useState } from "react";
import useAuthStore from "../stores/authStore";
import { login as loginService } from "../services/authService";
import { AxiosError } from "axios";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login, setError } = useAuthStore();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    try {
      const token = await loginService({ username, password });
      login(token); 
      setUsername("");
      setPassword("");
    } catch (error) {
      console.log(error);
      let errorMessage = "An unknown error occurred";

      if (error instanceof AxiosError) {
        errorMessage = error.response?.data.error;
        }
      
      setError(errorMessage);      
    }
  };
  return (
    <>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <button>Login</button>
      </form>
      <p className="read-the-docs">Factory System</p>
    </>
  );
};

export default LoginForm;
