package repository

import (
	"context"
	"server/internal/models"
)

func (r *StudentRepository) GetGrades(studentID int) ([]models.Grade, error) {
	query := `SELECT id, student_id, subject_id, semester, control_type, grade 
	          FROM grades WHERE student_id=$1 ORDER BY semester, subject_id`
	rows, err := r.db.Query(context.Background(), query, studentID)
	if err != nil {
		return nil, err
	}
	defer rows.Close()

	var grades []models.Grade
	for rows.Next() {
		var g models.Grade
		err := rows.Scan(&g.StudentID, &g.StudentID, &g.SubjectID, &g.Semester, &g.ControlType, &g.Grade)
		if err != nil {
			return nil, err
		}
		grades = append(grades, g)
	}
	return grades, nil
}
