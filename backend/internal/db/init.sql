CREATE TABLE IF NOT EXISTS students (
    id SERIAL PRIMARY KEY,
    login TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL,
    numberOfGroup TEXT NOT NULL,
    numberOfGradeBook INTEGER NOT NULL
);

CREATE TABLE IF NOT EXISTS employers (
    id SERIAL PRIMARY KEY,
    login TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL,
    codePassword TEXT NOT NULL
);

CREATE TABLE grades (
    id SERIAL PRIMARY KEY,
    student_id INT REFERENCES students(id) ON DELETE CASCADE,
    subject_id INT REFERENCES subjects(id) ON DELETE CASCADE,
    semester INT NOT NULL,
    teacher TEXT NOT NULL,
    control_type TEXT NOT NULL,
    grade INT NOT NULL,
    UNIQUE(student_id, subject_id, semester)
);



INSERT INTO students (login, password)
VALUES ('averich.ve@edu.spbstu.ru', '123', '5132701/20001'),
       ('averich.pa@edu.spbstu.ru', 'hahich321', '5132701/20002'),
       ('kringalov.sv@edu.spbstu.ru', 'ktonacpal2003', '5132701/20003'),
ON CONFLICT DO NOTHING;
