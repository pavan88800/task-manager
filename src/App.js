import { RouterProvider } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import routers from "./routes";
import "./style.css";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <Header />

          <RouterProvider router={routers} />
        </div>
      </header>
    </div>
  );
}

export default App;
