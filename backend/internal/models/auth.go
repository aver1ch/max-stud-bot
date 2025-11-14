package models

type LoginRequest struct {
	Login        string  `json:"login"`
	Password     string  `json:"password"`
	Role         string  `json:"role"`
	CodePassword *string `json:"codePassword,omitempty"`
}

type AuthResponse struct {
	IsAuth bool        `json:"isAuth"`
	User   interface{} `json:"user,omitempty"`
}
