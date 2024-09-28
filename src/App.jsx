import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/footer";
import Home from "./pages/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Eventss from "./pages/Eventss/Eventss";
import Tracks from "./pages/Tracks/Tracks";
import Leadership from "./pages/Leadership/Leadership";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Leadership" element={<Leadership />} />
          <Route path="/Tracks" element={<Tracks />} />
          <Route path="/Eventss" element={<Eventss />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
