package models

type Grade struct {
	ID          int    `json:"id"`
	StudentID   int    `json:"student_id"`
	SubjectID   int    `json:"subject_id"`
	Subject     string `json:"subject"`
	Semester    int    `json:"semester"`
	GroupNumber string `json:"group_number"`
	ControlType string `json:"control_type"`
	Grade       int    `json:"grade"`
	Teacher     string `json:"teacher"`
}

func NewGrade(id int, studentID int, subjectID int, subject string, semester int, groupNumber string, controlType string, grade int, teacher string) *Grade {
	return &Grade{
		ID:          id,
		StudentID:   studentID,
		SubjectID:   subjectID,
		Subject:     subject,
		Semester:    semester,
		GroupNumber: groupNumber,
		ControlType: controlType,
		Grade:       grade,
		Teacher:     teacher,
	}
}
