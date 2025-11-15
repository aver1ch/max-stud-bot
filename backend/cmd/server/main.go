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

/*

прачка
учебка
вызов мастера

*/

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
		_, err := os.Stat(path)
		if os.IsNotExist(err) {
			http.ServeFile(w, r, filepath.Join(distDir, "index.html"))
			return
		}
		fs.ServeHTTP(w, r)
	})

	studentsRepo := repository.NewStudentRepository(dbpool)
	employeesRepo := repository.NewEmployeeRepository(dbpool)
	subjectsRepo := repository.NewSubjectRepository(dbpool)

	authService := services.NewAuthService(studentsRepo, employeesRepo)
	gradeService := services.NewGradeService(studentsRepo, subjectsRepo)

	authHandler := handlers.NewAuthHandler(authService)
	gradeHandler := handlers.NewGradeHandler(gradeService)

	http.HandleFunc("/api/login", authHandler.LoginHandler)
	http.HandleFunc("/api/grades", gradeHandler.GetGrades)
	//http.HandleFunc("/api/subjects", gradeHandler.GetSubjects)

	slog.Info("Server started on :8080")
	http.ListenAndServe(":8080", nil)
}
