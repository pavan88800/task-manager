import { RouterProvider } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import routers from "./routes";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import "./style.css";
import Login from "./pages/Login";
import Home from "./pages/Home";
import PrivateRoute from "./routes/PrivateRoute";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Login />} />
            <Route element={<PrivateRoute />}>
              <Route path="/home" element={<Home />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
