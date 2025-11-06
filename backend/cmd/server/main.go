package main

import (
	"net/http"

	"server/internal/handlers"
)

func main() {
	http.HandleFunc("/api/login", handlers.LoginHandler)

	fs := http.FileServer(http.Dir("../frontend/build")) // путь к папке, где лежит сборка фронта
	http.Handle("/", fs)

	http.HandleFunc("/",
		func(w http.ResponseWriter, r *http.Request) {
			http.ServeFile(w, r, "../frontend/build/index.html")
		})

	http.ListenAndServe(":8080", nil)
}
