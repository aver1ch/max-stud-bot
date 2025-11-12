import { useNavigate } from "react-router-dom";
import HeaderNav from "../../../components/HeaderNav/HeaderNav";
import Header from "../../../components/Header/Header";
import MainContent from "../../../components/MainContent/MainContent";
import Footer from "../../../components/Footer/Footer";
import Button from "../../../components/Button/Button";
import "./Laundry.css";

function Laundry() {
  const navigate = useNavigate();
  return (
    <div className="app-container">
      <Header />
      <div className="main-content-wrapper">
        <MainContent>
          <HeaderNav
            text="Прачечная"
            backTo="/dormitory"
            textColor="#000000ff"
            iconColor="#000000ff"
          />
          <Button text="Стирка" onClick={() => navigate("/washing")}/>
          <Button text="Сушка" onClick={() => navigate("/dryer")}/>
          <Button text="Обмен белья"/>
        </MainContent>
      </div>
      <Footer />
    </div>
  );
}

export default Laundry;
