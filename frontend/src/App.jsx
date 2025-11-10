import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SelectVar from "./pages/SelectVar/SelectVar.jsx";
import Welcome from "./pages/Welcome/Welcome.jsx";
import Login from "./pages/Login/Login.jsx";
import Register from "./pages/Register/Register.jsx";
import MainPage from "./pages/MainPage/MainPage.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/selectVar" element={<SelectVar />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/mainpage" element={<MainPage />} />
      </Routes>
    </Router>
  );
}

export default App;
