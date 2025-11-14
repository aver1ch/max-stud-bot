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

// Поиск пользователя по логину
func (r *StudentRepository) FindByLogin(login string) (*models.Student, error) {
	var user models.Student
	query := `SELECT id, login, password FROM students WHERE login = $1`
	row := r.db.QueryRow(context.Background(), query, login)
	err := row.Scan(&user.ID, &user.Login, &user.Password)
	if err != nil {
		return nil, err
	}
	return &user, nil
}
