import { useState, useEffect } from "react";
import HeaderNav from "../../../components/HeaderNav/HeaderNav";
import Header from "../../../components/Header/Header";
import MainContent from "../../../components/MainContent/MainContent";
import Footer from "../../../components/Footer/Footer";
import "./GradeBook.css";

function GradeBook({ studentId }) {
  const [grades, setGrades] = useState([]);
  const [semesterFilter, setSemesterFilter] = useState("Все");
  const [teacherFilter, setTeacherFilter] = useState("Все");
  const [controlFilter, setControlFilter] = useState("Все");
  const [gradeFilter, setGradeFilter] = useState("Все");

  // Загрузка данных с сервера
  useEffect(() => {
    async function fetchGrades() {
      try {
        const res = await fetch(`/api/grades?studentId=${studentId}`);
        const data = await res.json();
        setGrades(data);
      } catch (err) {
        console.error("Ошибка при загрузке оценок:", err);
      }
    }
    fetchGrades();
  }, [studentId]);

  // Фильтрация
  const filteredGrades = grades.filter((g) => {
    return (
      (semesterFilter === "Все" || g.semester === Number(semesterFilter)) &&
      (teacherFilter === "Все" || g.teacher === teacherFilter) &&
      (controlFilter === "Все" || g.control_type === controlFilter) &&
      (gradeFilter === "Все" || g.grade === Number(gradeFilter))
    );
  });

  // Получаем уникальные значения для селектов
  const semesters = [...new Set(grades.map((g) => g.semester))].sort((a, b) => a - b);
  const teachers = ["Все", ...new Set(grades.map((g) => g.teacher))];
  const controlTypes = ["Все", ...new Set(grades.map((g) => g.control_type))];
  const gradeValues = ["Все", ...new Set(grades.map((g) => g.grade))];

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
                <p className="grade-value">{grades[0]?.group_number || "—"}</p>
              </div>
              <div className="grade-header-item">
                <p className="grade-label">№ зачетки:</p>
                <p className="grade-value">{grades[0]?.student_id || "—"}</p>
              </div>
            </div>

            {/* Фильтры */}
            <div className="field">
              <label className="subject-label">Семестр:</label>
              <select
                className="field-select"
                value={semesterFilter}
                onChange={(e) => setSemesterFilter(e.target.value)}
              >
                <option>Все</option>
                {semesters.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>

            <div className="field">
              <label className="subject-label">Преподаватель:</label>
              <select
                className="field-select"
                value={teacherFilter}
                onChange={(e) => setTeacherFilter(e.target.value)}
              >
                {teachers.map((t) => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>
            </div>

            <div className="field">
              <label className="subject-label">Тип контроля:</label>
              <select
                className="field-select"
                value={controlFilter}
                onChange={(e) => setControlFilter(e.target.value)}
              >
                {controlTypes.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>

            <div className="field">
              <label className="subject-label">Оценка:</label>
              <select
                className="field-select"
                value={gradeFilter}
                onChange={(e) => setGradeFilter(e.target.value)}
              >
                {gradeValues.map((g) => (
                  <option key={g} value={g}>{g}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Список оценок */}
          {filteredGrades.map((g, idx) => (
            <div className="subject-block" key={idx}>
              <p className="subject-name">{g.subject}</p>
              <p className="subject-grade">{g.grade}</p>
            </div>
          ))}
        </MainContent>
      </div>
      <Footer />
    </div>
  );
}

export default GradeBook;
