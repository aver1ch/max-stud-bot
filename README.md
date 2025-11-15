Приложение для управления общежитием


Это полнофункциональное приложение для управления жизнью студентов в общежитии, включая бронирование стирки и сушки, обмен постельного белья, заявки на мастера и многое другое. Приложение состоит из фронтенда на React, бэкенда на Go и базы данных PostgreSQL.
Возможности


Аутентификация пользователей и персональная панель.(происходит по логинам и паролям ниже(специально для жюри выделено три штуки, чтобы проверить синхронизацию очереди в прачечную))


логин 1: ivanov.aa@edu.spbstu.ru  пароль: pass123
логин 2: petrova.ms@edu.spbstu.ru пароль: mypassword
логин 3: sidorov.ev@edu.spbstu.ru пароль: evgen123


Бронирование стирки и сушки с управлением очередью.


Календарь личных бронирований.


Интеграция для персонала (например, просмотр заявок на обмен белья).


База данных для студентов, бронирований, оценок и прочего.


Требования


Docker и Docker Compose (для контейнеризированного запуска).


Go 1.23+ (для локального запуска бэкенда).


Node.js 18+ и npm (для локального запуска фронтенда).


PostgreSQL 15+ (для локальной базы данных).


Клонирование репозитория
git clone <repo-url>
cd max-stud-bot

Сборка и запуск через Docker (рекомендуется)
Docker Compose используется для запуска PostgreSQL, бэкенда и Nginx (для сервинга фронтенда через бэкенд).
Сборка фронтенда
cd frontend
npm install
npm run build
cd ..
mkdir -p backend/dist
cp -r frontend/build/* backend/dist/

Сборка и запуск контейнеров
docker-compose build
docker-compose up -d

Запускается:


db: PostgreSQL по адресу postgres://admin:1234@localhost:5432/maxstud.


backend: Go-сервер на порту 8080 (internal), обслуживает API и статический фронтенд из /dist.


nginx: Обратный прокси на портах 80/443 (HTTPS с самоподписанными сертификатами из ./nginx/ssl).


Доступ к приложению


Откройте https://localhost (или http://localhost:8080 для HTTP).


API: например, https://localhost/api/laundry.


Инициализация БД: бэкенд при старте выполняет init.sql (создает таблицы, добавляет тестовые данные).


Остановка контейнеров
docker-compose down

Пример запуска через командную строку (после сборки)
docker-compose up -d db       # Запуск только БД
docker-compose up -d backend  # Запуск бэкенда (зависит от БД)
docker-compose up -d nginx    # Запуск Nginx (зависит от бэкенда)

Логи:
docker-compose logs -f


Локальный запуск (без Docker)
Для разработки и тестирования.
Настройка базы данных


Установите PostgreSQL.


Создайте БД:


psql -U postgres
CREATE USER admin WITH PASSWORD '1234';
CREATE DATABASE maxstud;
GRANT ALL PRIVILEGES ON DATABASE maxstud TO admin;



Запустите скрипт инициализации:


psql -U admin -d maxstud -f backend/internal/db/init.sql

Бэкенд (Go)
cd backend
go mod tidy
go run cmd/server/main.go

Переменная окружения:
export DATABASE_URL=postgres://admin:1234@localhost:5432/maxstud?sslmode=disable

Сервер API доступен на http://localhost:8080, статические файлы из ./dist (сначала соберите фронтенд).
Фронтенд (React)
cd frontend
npm install
npm start

Фронтенд запускается на http://localhost:3000.
Для проксирования запросов к API добавьте "proxy": "http://localhost:8080" в package.json.
Пример полного локального запуска


Запустите локальную PostgreSQL.


В одном терминале:


cd backend && go run cmd/server/main.go



В другом терминале:


cd frontend && npm start

Доступ к фронтенду: http://localhost:3000 (он проксирует API к бэкенду).

Устранение неполадок


Проблемы с подключением к БД: проверьте DATABASE_URL, лог PostgreSQL.


SSL в Nginx: создайте самоподписанные сертификаты в ./nginx/ssl, например:


openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout nginx/ssl/nginx.key -out nginx/ssl/nginx.crt



Ошибки сборки: убедитесь, что модули Go и пакеты npm актуальны.


Тестовые данные: init.sql добавляет студентов/оценки; используйте тестовые данные для логина (например, averich.ve@edu.spbstu.ru / 123).


Для продакшена: используйте безопасные пароли, реальные SSL-сертификаты и переменные окружения (например, через .env).
