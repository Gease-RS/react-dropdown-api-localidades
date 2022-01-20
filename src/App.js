import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="container">
      <form>
        <label>Estado:</label>
        <select>
          <option value="">Selecione um Estado</option>
        </select>
        <label>Cidade:</label>
        <select>
          <option value="">Selecione uma cidade</option>
        </select>
      </form>
    </div>
  );
}

export default App;
