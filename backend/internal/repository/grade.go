package repository

import (
	"context"
	"server/internal/models"
)

func (r *StudentRepository) GetGrades(studentID int) ([]models.Grade, error) {
	query := `
	SELECT 
		g.id,
		g.student_id,
		g.subject_id,
		s.name AS subject,
		g.semester,
		g.control_type,
		g.grade,
		g.teacher
	FROM grades g
	JOIN subjects s ON s.id = g.subject_id
	WHERE g.student_id=$1
	ORDER BY g.semester, g.subject_id
`

	rows, err := r.db.Query(context.Background(), query, studentID)
	if err != nil {
		return nil, err
	}
	defer rows.Close()

	var grades []models.Grade

	for rows.Next() {
		var g models.Grade
		err := rows.Scan(
			&g.ID,
			&g.StudentID,
			&g.SubjectID,
			&g.Subject,
			&g.Semester,
			&g.ControlType,
			&g.Grade,
			&g.Teacher,
		)

		if err != nil {
			return nil, err
		}
		grades = append(grades, g)
	}
	return grades, nil
}
