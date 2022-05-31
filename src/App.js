import "./App.scss";
import { Header } from "./containers/Header/Header";
import { Route, Routes } from "react-router-dom";
import { Home } from "./components/Home/Home";
import { Register } from "./containers/Register/Register";
import { Banner } from "./components/Banner/Banner";
import { useSelector } from "react-redux";

function App() {
  const banner = useSelector((state) => state.banner);
  return (
    <div className="App">
      <Header />
      {banner.show && (
        <Banner variant={banner.variant} message={banner.message} />
      )}
      <Routes>
        <Route index element={<Home />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
