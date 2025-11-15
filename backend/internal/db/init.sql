DROP TABLE IF EXISTS laundry_bookings CASCADE;
DROP TABLE IF EXISTS dryer_bookings CASCADE;
DROP TABLE IF EXISTS studyroom_bookings CASCADE;
DROP TABLE IF EXISTS linen_exchanges CASCADE;
DROP TABLE IF EXISTS master_requests CASCADE;
DROP TABLE IF EXISTS grades CASCADE;
DROP TABLE IF EXISTS subjects CASCADE;
DROP TABLE IF EXISTS students CASCADE;
DROP TABLE IF EXISTS dorms CASCADE;

CREATE TABLE dorms (
    id SERIAL PRIMARY KEY,
    name_of_dorm TEXT NOT NULL,
    address TEXT
);

CREATE TABLE students (
    id SERIAL PRIMARY KEY,
    login TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL,
    group_number TEXT NOT NULL,
    gradebook_number TEXT NOT NULL,
    dorm_id INT REFERENCES dorms(id),
    date_of_birth TEXT NOT NULL,
    full_name TEXT NOT NULL,
    university TEXT NOT NULL,
    faculty TEXT NOT NULL,
    reprimands INT NOT NULL,
    payment_status_dorm BOOLEAN NOT NULL,
    number_of_phone TEXT NOT NULL,
    room_number INT NOT NULL
);

CREATE TABLE laundry_bookings (
    id SERIAL PRIMARY KEY,
    student_id INT REFERENCES students(id) ON DELETE CASCADE,
    start_time TIMESTAMP NOT NULL,
    end_time TIMESTAMP NOT NULL,
    machine INT NOT NULL DEFAULT 1
);

CREATE TABLE dryer_bookings (
    id SERIAL PRIMARY KEY,
    student_id INT REFERENCES students(id) ON DELETE CASCADE,
    start_time TIMESTAMP NOT NULL,
    end_time TIMESTAMP NOT NULL,
    machine INT NOT NULL DEFAULT 1
);


CREATE TABLE studyroom_bookings (
    id SERIAL PRIMARY KEY,
    student_id INT REFERENCES students(id) ON DELETE CASCADE,
    start_time TIMESTAMP NOT NULL,
    end_time TIMESTAMP NOT NULL
);

CREATE TABLE linen_exchanges (
    id SERIAL PRIMARY KEY,
    student_id INT REFERENCES students(id) ON DELETE CASCADE,
    date TIMESTAMP NOT NULL,
    completed BOOLEAN DEFAULT FALSE
);

CREATE TABLE master_requests (
    id SERIAL PRIMARY KEY,
    student_id INT REFERENCES students(id) ON DELETE CASCADE,
    description TEXT,
    status TEXT DEFAULT 'pending',
    created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE subjects (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    semester INT NOT NULL,
    teacher TEXT NOT NULL
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

INSERT INTO dorms (name_of_dorm, address)
VALUES 
  ('Общежитие №1', 'ул. Ленина, д. 1'),
  ('Общежитие №2', 'ул. Пушкина, д. 2'),
  ('Общежитие №3', 'ул. Гагарина, д. 3')
ON CONFLICT DO NOTHING;

INSERT INTO subjects (id, name, semester, teacher) VALUES
  (1, 'Математика', 1, 'Семен Семенович'),
  (2, 'Физика', 1, 'Иванов И.И.'),
  (3, 'Информатика', 2, 'Петров П.П.'),
  (4, 'История', 2, 'Сидоров С.С.')
ON CONFLICT DO NOTHING;


INSERT INTO students (
    login, password, group_number, gradebook_number, dorm_id,
    date_of_birth, full_name, university, faculty, reprimands, payment_status_dorm, 
    number_of_phone, room_number
)
VALUES
('averich.ve@edu.spbstu.ru', '123', '5132701/20001', '3153164363', 1, '2000-01-01', 'Аверич Владимир Евгениевич', 'Санкт-Петербургский политехнический универститет Петра Великого', 'Институт комьютерных наук и кибербезопасности', 2, FALSE, '+79528128128', 313),
('averich.pa@edu.spbstu.ru', 'hahich321', '5132701/20002', '4353546354', 2, '2001-02-02', 'Аверич Полина Александровна', 'Санкт-Петербургский политехнический универститет Петра Великого', 'Институт энергетики', 0, TRUE, '+79528128128', 314),
('kringalov.sv@edu.spbstu.ru', 'ktonacpal2003', '5132701/20003', '635657336', 3, '2002-03-03', 'Кринжалов Сергей Владимирович', 'Санкт-Петербургский политехнический универститет Петра Великого', 'Институт компьютерных наук и кибербезопасности', 1, FALSE, '+79528153128', 322),
('ivanov.aa@edu.spbstu.ru', 'pass123', '5132701/20004', '7456231987', 4, '2000-05-15', 'Иванов Александр Андреевич', 'Санкт-Петербургский политехнический университет Петра Великого', 'Институт информационных технологий', 0, TRUE, '+79520123456', 315),
('petrova.ms@edu.spbstu.ru', 'mypassword', '5132701/20005', '9834521670', 5, '2001-08-22', 'Петрова Мария Сергеевна', 'Санкт-Петербургский политехнический университет Петра Великого', 'Институт энергетики', 1, FALSE, '+79521234567', 316),
('sidorov.ev@edu.spbstu.ru', 'evgen123', '5132701/20006', '5623487190', 6, '2002-11-30', 'Сидоров Евгений Викторович', 'Санкт-Петербургский политехнический университет Петра Великого', 'Институт компьютерных наук и кибербезопасности', 2, TRUE, '+79522345678', 323);


INSERT INTO grades (student_id, subject_id, semester, teacher, control_type, grade) VALUES 
(1, 1, 1, 'Семен Семенович', 'Экзамен', 3), 
(1, 2, 1, 'Иванов И.И.', 'Зачёт', 5), 
(1, 3, 2, 'Петров П.П.', 'Экзамен', 4), 
(1, 4, 2, 'Сидоров С.С.', 'Зачёт', 5), 
(2, 1, 1, 'Семен Семенович', 'Экзамен', 4), 
(2, 2, 1, 'Иванов И.И.', 'Зачёт', 3), 
(2, 3, 2, 'Петров П.П.', 'Экзамен', 5), 
(2, 4, 2, 'Сидоров С.С.', 'Зачёт', 4), 
(3, 1, 1, 'Семен Семенович', 'Экзамен', 5), 
(3, 2, 1, 'Иванов И.И.', 'Зачёт', 4), 
(3, 3, 2, 'Петров П.П.', 'Экзамен', 3), 
(3, 4, 2, 'Сидоров С.С.', 'Зачёт', 5), 
(1, 1, 3, 'Семен Семенович', 'Экзамен', 4), 
(1, 2, 3, 'Иванов И.И.', 'Зачёт', 5), 
(1, 3, 4, 'Петров П.П.', 'Экзамен', 4), 
(1, 4, 4, 'Сидоров С.С.', 'Зачёт', 5), 
(2, 1, 3, 'Семен Семенович', 'Экзамен', 3),
(2, 2, 3, 'Иванов И.И.', 'Зачёт', 4), 
(2, 3, 4, 'Петров П.П.', 'Экзамен', 5), 
(2, 4, 4, 'Сидоров С.С.', 'Зачёт', 4), 
(3, 1, 3, 'Семен Семенович', 'Экзамен', 5), 
(3, 2, 3, 'Иванов И.И.', 'Зачёт', 5), 
(3, 3, 4, 'Петров П.П.', 'Экзамен', 4), 
(3, 4, 4, 'Сидоров С.С.', 'Зачёт', 5),
(1, 1, 5, 'Семен Семенович', 'Экзамен', 5), 
(1, 2, 5, 'Иванов И.И.', 'Зачёт', 4), 
(1, 3, 6, 'Петров П.П.', 'Экзамен', 5), 
(1, 4, 6, 'Сидоров С.С.', 'Зачёт', 5), 
(2, 1, 5, 'Семен Семенович', 'Экзамен', 4), 
(2, 2, 5, 'Иванов И.И.', 'Зачёт', 3), 
(2, 3, 6, 'Петров П.П.', 'Экзамен', 4), 
(2, 4, 6, 'Сидоров С.С.', 'Зачёт', 5), 
(3, 1, 5, 'Семен Семенович', 'Экзамен', 5), 
(3, 2, 5, 'Иванов И.И.', 'Зачёт', 5), 
(3, 3, 6, 'Петров П.П.', 'Экзамен', 5), 
(3, 4, 6, 'Сидоров С.С.', 'Зачёт', 4),
(4, 1, 1, 'Семен Семенович', 'Экзамен', 4),
(4, 2, 1, 'Иванов И.И.', 'Зачёт', 5),
(4, 3, 2, 'Петров П.П.', 'Экзамен', 3),
(4, 4, 2, 'Сидоров С.С.', 'Зачёт', 4),

(5, 1, 1, 'Семен Семенович', 'Экзамен', 5),
(5, 2, 1, 'Иванов И.И.', 'Зачёт', 4),
(5, 3, 2, 'Петров П.П.', 'Экзамен', 4),
(5, 4, 2, 'Сидоров С.С.', 'Зачёт', 5),

(6, 1, 1, 'Семен Семенович', 'Экзамен', 3),
(6, 2, 1, 'Иванов И.И.', 'Зачёт', 5),
(6, 3, 2, 'Петров П.П.', 'Экзамен', 4),
(6, 4, 2, 'Сидоров С.С.', 'Зачёт', 3)

ON CONFLICT DO NOTHING;

