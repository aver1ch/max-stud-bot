import './StudentInfo.css'

function StudentInfo() {
  return (
    <div className="card-student-info">
      <div className="student-top">
        <img src="/studphoto.png" alt="Student" className="studImg" />
        <div className="student-name">
          <h2>Аверич Владимир Евгеньевич</h2>
        </div>
      </div>

      <div className="student-main-info">
        <p>Институт компьютерных наук и технологий</p>
        <p>Группа: 5132701/20101</p>
        <p>Общежитие: №1</p>
        <p>Номер телефона: +7XXXXXXXXX</p>
        <p>Email: jopa@edu.spbstu.ru</p>
        <p>Выговоры: 0</p>
        <p>LeaderID: 0</p>
      </div>
    </div>
  );
}

export default StudentInfo;