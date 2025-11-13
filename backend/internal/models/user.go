package models

type User struct {
	ID       int    `json:"id"`
	Login    string `json:"login"`
	Password string `json:"password"`
}

func NewUser(login, password string) *User {
	return &User{Login: login, Password: password}
}
