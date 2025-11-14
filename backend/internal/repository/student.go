package repository

import (
	"context"
	"server/internal/models"

	"github.com/jackc/pgx/v5/pgxpool"
)

type StudentRepository struct {
	db *pgxpool.Pool
}

func NewStudentRepository(db *pgxpool.Pool) *StudentRepository {
	return &StudentRepository{
		db: db,
	}
}

func (r *StudentRepository) FindByLogin(login string) (*models.Student, error) {
	var student models.Student
	query := `
		SELECT id, login, password, group_number, gradebook_number, dorm_id, position, linen, master_call
		FROM students
		WHERE login = $1
	`
	row := r.db.QueryRow(context.Background(), query, login)
	err := row.Scan(
		&student.ID,
		&student.Login,
		&student.Password,
		&student.GroupNumber,
		&student.GradebookNumber,
		&student.DormID,
		&student.Position,
		&student.Linen,
		&student.MasterCall,
	)
	if err != nil {
		return nil, err
	}
	return &student, nil
}
