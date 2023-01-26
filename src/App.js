import "./App.css";
import Header from "./components/Header";
import Login from "./pages/Login";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <Login />
      </header>
    </div>
  );
}

export default App;
