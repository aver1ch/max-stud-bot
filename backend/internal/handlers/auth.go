package handlers

import (
	"fmt"
	"net/http"
)

func LoginHandler(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodPost {
		http.Error(w, "Only POST allowed", http.StatusMethodNotAllowed)
		return
	}

	// Получаем данные формы
	login := r.FormValue("login")
	password := r.FormValue("password")

	if login == "admin" && password == "1234" {
		fmt.Fprint(w, "OK:token-123")
		return
	}

	http.Error(w, "invalid credentials", http.StatusUnauthorized)
}
