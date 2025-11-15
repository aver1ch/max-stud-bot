package main

import (
	"log/slog"
	"net/http"
	"os"
	"path/filepath"
	"server/internal/db"
	"server/internal/handlers"
	"server/internal/repository"
	"server/internal/services"
)

func main() {
	slog.Info("Server starting...")

	dbpool := db.ConnectPostgres()
	defer dbpool.Close()

	err := db.RunSQLFile(dbpool, "./internal/db/init.sql")
	if err != nil {
		slog.Error("Failed to run init.sql", "error", err)
	}

	distDir := "./dist"
	fs := http.FileServer(http.Dir(distDir))
	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		path := filepath.Join(distDir, r.URL.Path)
		if _, err := os.Stat(path); os.IsNotExist(err) {
			http.ServeFile(w, r, filepath.Join(distDir, "index.html"))
			return
		}
		fs.ServeHTTP(w, r)
	})

	// Репозитории
	studentsRepo := repository.NewStudentRepository(dbpool)
	employeesRepo := repository.NewEmployeeRepository(dbpool)
	subjectsRepo := repository.NewSubjectRepository(dbpool)

	laundryRepo := repository.NewLaundryRepository(dbpool)
	dryerRepo := repository.NewDryerRepository(dbpool)

	// Сервисы
	authService := services.NewAuthService(studentsRepo, employeesRepo)
	gradeService := services.NewGradeService(studentsRepo, subjectsRepo)
	laundryService := services.NewLaundryService(laundryRepo)
	dryerService := services.NewDryerService(dryerRepo)

	// Хендлеры
	authHandler := handlers.NewAuthHandler(authService)
	gradeHandler := handlers.NewGradeHandler(gradeService)
	laundryHandler := handlers.NewLaundryHandler(laundryService)
	dryerHandler := handlers.NewDryerHandler(dryerService)

	// API маршруты
	http.HandleFunc("/api/login", authHandler.LoginHandler)
	http.HandleFunc("/api/grades", gradeHandler.GetGrades)

	http.HandleFunc("/api/laundry", laundryHandler.GetBookings)
	http.HandleFunc("/api/laundry/add", laundryHandler.AddBooking)
	http.HandleFunc("/api/dryer", dryerHandler.GetBookings)
	http.HandleFunc("/api/dryer/add", dryerHandler.AddBooking)

	slog.Info("Server started on :8080")
	http.ListenAndServe(":8080", nil)
}
