package models

type Student struct {
	ID              int    `json:"id"`
	Login           string `json:"login"`
	Password        string `json:"password"`
	GroupNumber     string `json:"groupNumber"`
	GradebookNumber string `json:"gradebookNumber"`
	DormID          int    `json:"dormId"`
	DateOfBirth     string `json:"dateOfBirth"`
	FullName        string `json:"fullName"`
	University      string `json:"university"`
	Faculty         string `json:"faculty"`
	Reprimands      int    `json:"reprimands"`
	PaymentStatus   bool   `json:"paymentStatusDorm"`
	NumberOfPhone   string `json:"numberOfPhone"`
	RoomNumber      int    `json:"roomNumber"`
}

func NewStudent(login, password, groupNumber, gradebookNumber, fullName, university, faculty, dateOfBirth string, dormID int, reprimands int, paymentStatus bool, numberOfPhone string, roomNumber int) *Student {
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
		NumberOfPhone:   numberOfPhone,
		RoomNumber:      roomNumber,
	}
}
