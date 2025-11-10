import HeaderNav from "../../../components/HeaderNav/HeaderNav";
import Header from "../../../components/Header/Header";
import MainContent from "../../../components/MainContent/MainContent";
import Footer from "../../../components/Footer/Footer";

function Schedule() {
  return (
    <>
      <div className="app-container">
        <Header />
        <div className="main-content-wrapper">
          <MainContent>
            <HeaderNav
              text="Расписание"
              backTo="/mainpage"
              textColor="#000000ff"
              iconColor="#000000ff"
            />
          </MainContent>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Schedule;
