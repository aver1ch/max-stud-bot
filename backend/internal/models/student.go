package models

type Student struct {
	ID              int    `json:"id"`
	Login           string `json:"login"`
	Password        string `json:"password"`
	GroupNumber     string `json:"groupNumber"`
	GradebookNumber string `json:"gradebookNumber"`
	DormID          int    `json:"dormId"`
	DateOfBirth     string `json:"dateOfBirth"` // или time.Time
	FullName        string `json:"fullName"`
	University      string `json:"university"`
	Faculty         string `json:"faculty"`
	Reprimands      int    `json:"reprimands"`
	PaymentStatus   bool   `json:"paymentStatusDorm"`
}

func NewStudent(login, password, groupNumber, gradebookNumber, fullName, university, faculty, dateOfBirth string, dormID int, reprimands int, paymentStatus bool) *Student {
	return &Student{
		Login:           login,
		Password:        password,
		GroupNumber:     groupNumber,
		GradebookNumber: gradebookNumber,
		DormID:          dormID,
		DateOfBirth:     dateOfBirth,
		FullName:        fullName,
		University:      university,
		Faculty:         faculty,
		Reprimands:      reprimands,
		PaymentStatus:   paymentStatus,
	}
}
