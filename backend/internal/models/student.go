package models

type Student struct {
	ID       int    `json:"id"`
	Login    string `json:"login"`
	Password string `json:"password"`
}

func NewStudent(login, password string) *Student {
	return &Student{Login: login, Password: password}
}
