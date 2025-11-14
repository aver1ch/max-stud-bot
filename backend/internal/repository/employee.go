package repository

import (
	"context"
	"server/internal/models"

	"github.com/jackc/pgx/v5/pgxpool"
)

type EmployeeRepository struct {
	db *pgxpool.Pool
}

func NewEmployeeRepository(db *pgxpool.Pool) *EmployeeRepository {
	return &EmployeeRepository{
		db: db,
	}
}

func (r *EmployeeRepository) FindByLoginAndCodePassword(login string, codePassword string) (*models.Employee, error) {
	var user models.Employee
	query := `SELECT id, login, password FROM employers WHERE login = $1 AND codePassword = $2`
	row := r.db.QueryRow(context.Background(), query, login, codePassword)
	err := row.Scan(&user.ID, &user.Login, &user.Password)
	if err != nil {
		return nil, err
	}
	return &user, nil
}
