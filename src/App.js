import "./App.scss";
import { Header } from "./containers/Header/Header";
import { Route, Routes } from "react-router-dom";
import { Home } from "./components/Home/Home";
import { Register } from "./containers/Register/Register";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
