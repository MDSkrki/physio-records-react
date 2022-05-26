import "./App.scss";
import { Header } from "./containers/Header/Header";
import { Route, Routes } from "react-router-dom";
import { Home } from "./components/Home/Home";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route index element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
