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
    SELECT 
        id,
        login,
        password,
        group_number,
        gradebook_number,
        dorm_id,
        date_of_birth,
        full_name,
        university,
        faculty,
        reprimands,
        payment_status_dorm,
		number_of_phone,
		room_number
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
		&student.DateOfBirth,
		&student.FullName,
		&student.University,
		&student.Faculty,
		&student.Reprimands,
		&student.PaymentStatus,
		&student.NumberOfPhone,
		&student.RoomNumber,
	)
	if err != nil {
		return nil, err
	}
	return &student, nil
}
