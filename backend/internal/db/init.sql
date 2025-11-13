CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    login TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL,
);

INSERT INTO users (login, password, name, surname)
VALUES ('admin', 'admin123', 'Admin', 'User'),
       ('student1', '1234', 'Иван', 'Петров')
ON CONFLICT DO NOTHING;
