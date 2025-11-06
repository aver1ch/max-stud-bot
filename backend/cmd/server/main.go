package main

import (
	"net/http"

	"server/internal/handlers"
)

func main() {
	// ==== API ====
	http.HandleFunc("/api/login", handlers.LoginHandler)

	// ==== STATIC ====
	fs := http.FileServer(http.Dir("../frontend/build"))
	http.Handle("/", fs)

	// Fallback for React Router:
	http.HandleFunc("/",
		func(w http.ResponseWriter, r *http.Request) {
			http.ServeFile(w, r, "../frontend/build/index.html")
		})

	http.ListenAndServe(":8080", nil)
}
