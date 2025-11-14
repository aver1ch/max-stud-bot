import HeaderNav from "../../../components/HeaderNav/HeaderNav";
import Header from "../../../components/Header/Header";
import MainContent from "../../../components/MainContent/MainContent";
import Footer from "../../../components/Footer/Footer";
import "./GradeBook.css";

function GradeBook() {
  return (
    <div className="app-container">
      <Header />
      <div className="main-content-wrapper">
        <MainContent>
          <HeaderNav
            text="Зачетная книжка"
            backTo="/university"
            textColor="#000000ff"
            iconColor="#000000ff"
          />
          <div className="grade-inner">
            <div className="grade-header-row">
              <div className="grade-header-item">
                <p className="grade-label">№ группы:</p>
                <p className="grade-value">12312312/12312</p>
              </div>
              <div className="grade-header-item">
                <p className="grade-label">№ зачетки:</p>
                <p className="grade-value">56789567</p>
              </div>
            </div>
            <div className="field">
              <label className="subject-label">Семестр:</label>
              <select className="field-select">
                {[...Array(8)].map((_, i) => (
                  <option key={i} value={i + 1}>
                    {i + 1}
                  </option>
                ))}
              </select>
            </div>
            <div className="field">
              <label className="subject-label">Преподаватель:</label>
              <select className="field-select">
                <option>Семен Семенович Семенов</option>
              </select>
            </div>
            <div className="field">
              <label className="subject-label">Тип контроля:</label>
              <select className="field-select">
                <option>Все</option>
              </select>
            </div>
            <div className="field">
              <label className="subject-label">Оценка:</label>
              <select className="field-select">
                <option>Все</option>
              </select>
            </div>
          </div>
          <div className="subject-block">
            <p className="subject-name">Физика</p>
            <p className="subject-grade">3</p>
          </div>
          <div className="subject-block">
            <p className="subject-name">Высшая математика</p>
            <p className="subject-grade">5</p>
          </div>
          <div className="subject-block">
            <p className="subject-name">Элетротехника</p>
            <p className="subject-grade">4</p>
          </div>
          <div className="subject-block">
            <p className="subject-name">Элетротехника</p>
            <p className="subject-grade">4</p>
          </div>
        </MainContent>
      </div>
      <Footer />
    </div>
  );
}

export default GradeBook;
