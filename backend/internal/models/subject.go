package models

type Subject struct {
	ID       int    `json:"id"`
	Name     string `json:"name"`
	Semester int    `json:"semester"`
	Teacher  string `json:"teacher"`
}
