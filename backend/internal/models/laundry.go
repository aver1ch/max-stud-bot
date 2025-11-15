package models

import "time"

type LaundryBooking struct {
	ID          int       `json:"id"`
	StudentID   int       `json:"student_id"`
	StudentName string    `json:"student_name"`
	StartTime   time.Time `json:"start_time"`
	EndTime     time.Time `json:"end_time"`
	Machine     int       `json:"machine"`
}
