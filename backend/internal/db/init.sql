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
);

CREATE TABLE dorms (
    id SERIAL PRIMARY KEY,
    name_of_dorm TEXT NOT NULL,
    address TEXT
);

CREATE TABLE laundry_bookings (
    id SERIAL PRIMARY KEY,
    student_id INT REFERENCES students(id) ON DELETE CASCADE,
    start_time TIMESTAMP NOT NULL,
    end_time TIMESTAMP NOT NULL
);

CREATE TABLE dryer_bookings (
    id SERIAL PRIMARY KEY,
    student_id INT REFERENCES students(id) ON DELETE CASCADE,
    start_time TIMESTAMP NOT NULL,
    end_time TIMESTAMP NOT NULL
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
    name TEXT NOT NULL
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
VALUES ('averich.ve@edu.spbstu.ru', '123', '5132701/20001', '3153164363', 'Общежитие №1', '2000-01-01', 'Аверич Владимир Евгениевич', 'СПБПУ', 'ИКНК', 2, FALSE),
       ('averich.pa@edu.spbstu.ru', 'hahich321', '5132701/20002', '4353546354', 'Общежитие №2', '2001-02-02', 'Аверич Полина Александровна', 'СПБПУ', 'ИЭ', 0, TRUE),
       ('kringalov.sv@edu.spbstu.ru', 'ktonacpal2003', '5132701/20003', '635657336', 'Общежитие №3', '2002-03-03', 'Кринжалов Сергей Владимирович', 'СПБПУ', 'ИКНК', 1, FALSE),

INSERT INTO dorms (name_of_dorm, address)
VALUES ('Общежитие №1', 'ул. Ленина, д. 1'),
ON CONFLICT DO NOTHING;

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
(3, 4, 6, 'Сидоров С.С.', 'Зачёт', 4) 
ON CONFLICT DO NOTHING;
