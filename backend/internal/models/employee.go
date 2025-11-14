package models

type Employee struct {
	ID           int    `json:"id"`
	Login        string `json:"login"`
	Password     string `json:"password"`
	CodePassword string `json:"codePassword"`
}

func NewEmployee(login, password string) *Employee {
	return &Employee{Login: login, Password: password}
}
