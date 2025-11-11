import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SelectVar from "./pages/SelectVar/SelectVar.jsx";
import Welcome from "./pages/Welcome/Welcome.jsx";
import Login from "./pages/Login/Login.jsx";
import Register from "./pages/Register/Register.jsx";
import MainPage from "./pages/MainPage/MainPage.jsx";
import Account from "./pages/Account/Account.jsx";
import University from "./pages/University/University.jsx";
import Schedule from "./pages/University/Schedule/Schedule.jsx"
import Dormitory from "./pages/Dormitory/Dormitory.jsx";
import MainInfo from "./pages/Dormitory/MainInfo/MainInfo.jsx";
import GradeBook from "./pages/University/GradeBook/GradeBook.jsx";
import Directorate from "./pages/University/Directorate/Directorate.jsx"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/selectVar" element={<SelectVar />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/mainpage" element={<MainPage />} />
        <Route path="/account" element={<Account />} />
        <Route path="/university" element={<University />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/dormitory" element={<Dormitory />} />
        <Route path="/maininfo" element={<MainInfo />} />
        <Route path="/gradebook" element={<GradeBook />} />
        <Route path="/directorate" element={<Directorate />} />
      </Routes>
    </Router>
  );
}

export default App;
