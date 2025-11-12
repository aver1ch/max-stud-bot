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
import StudyRoom from "./pages/Dormitory/StudyRoom/StudyRoom.jsx"
import MasterCall from "./pages/Dormitory/MasterCall/MasterCall.jsx"
import ExtraActivities from "./pages/ExtraActivities/ExtraActivities.jsx"
import Events from "./pages/ExtraActivities/Events/Events.jsx"
import Sections from "./pages/ExtraActivities/Sections/Sections.jsx"
import Laundry from "./pages/Dormitory/Laundry/Laundry.jsx"
import Washing from "./pages/Dormitory/Laundry/Washing/Washing.jsx"
import Dryer from "./pages/Dormitory/Laundry/Dryer/Dryer.jsx"
import ChangeOfLinen from "./pages/Dormitory/Laundry/ChangeOfLinen/ChangeOfLinen.jsx";

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
        <Route path="/studyroom" element={<StudyRoom />} />
        <Route path="/mastercall" element={<MasterCall />} />
        <Route path="/extraactivities" element={<ExtraActivities />} />
        <Route path="/events" element={<Events />} />
        <Route path="/sections" element={<Sections />} />
        <Route path="/laundry" element={<Laundry />} />
        <Route path="/washing" element={<Washing />} />
        <Route path="/dryer" element={<Dryer />} />
        <Route path="/cof" element={<ChangeOfLinen />} />
      </Routes>
    </Router>
  );
}

export default App;
