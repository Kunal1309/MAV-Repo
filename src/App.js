import "./App.css";
import skyaero from "./Assets/skyaero.mp4";
import Footer from "./components/Footer";
import Header from "./components/Header";
import LicenseForm from "./components/LicenseForm";
import LogIn from "./components/LogIn";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <video src={skyaero} id="myVideo" autoPlay loop muted />
      <Header />
      <BrowserRouter>
        <Routes>
          <Route index element={<LogIn/>}/>
          <Route path="addLicense" element={<LicenseForm />}/>
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
