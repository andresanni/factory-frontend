import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import LoginForm from "./components/LoginForm";
import useAuthStore from "./stores/authStore";
function App() {
  const { error, token, id, username, permissions } = useAuthStore();
  
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <LoginForm />
      {error && <p>{error}</p>}
      {token && <p>Token: {token}</p>}{/* TODO: remove this */} 
      {id && <p>ID: {id}</p>}{/* TODO: remove this */}
      {username && <p>Username: {username}</p>}{/* TODO: remove this */}
      {permissions && <p>Permissions: {permissions.join(", ")}</p>}{/* TODO: remove this */}
    </>
  );
}

export default App;
