package models

type LoginRequest struct {
	Login    string `json:"login"`
	Password string `json:"password"`
}

type AuthResponse struct {
	IsAuth bool `json:"isAuth"`
}
