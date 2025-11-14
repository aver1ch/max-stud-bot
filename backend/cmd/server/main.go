/*
Юзер будет один:
подгрузка всего
прачки, бельевуха, учебка, студклуб
Ридмим
Презентация
*/

/*
Что мне реально нужно

номер группы
номер зачетки
номер общежития
должность
код пароль
белье
время брони учебки
время брони прачки
время брони сушки
обмен белья да/нет
вызов мастера да/нет



Так же будут сущности:
общежитие
Прачка
Сушка
Учебка
Обмен белья
*/

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

	err := db.RunSQLFile(dbpool, "/app/internal/db/init.sql")
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

	authService := services.NewAuthService(studentsRepo, employeesRepo)
	authHandler := handlers.NewAuthHandler(authService)

	http.HandleFunc("/api/login", authHandler.LoginHandler)

	slog.Info("Server started on :8080")
	http.ListenAndServe(":8080", nil)
}
