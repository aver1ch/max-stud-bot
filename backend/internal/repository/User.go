package repository

import (
	"context"
	"server/internal/models"

	"github.com/jackc/pgx/v5/pgxpool"
)

type UserRepository struct {
	db *pgxpool.Pool
}

func NewUserRepository(db *pgxpool.Pool) *UserRepository {
	return &UserRepository{
		db: db,
	}
}

// Поиск пользователя по логину
func (r *UserRepository) FindByLogin(login string) (*models.User, error) {
	var user models.User
	query := `SELECT id, login, password FROM users WHERE login = $1`
	row := r.db.QueryRow(context.Background(), query, login)
	err := row.Scan(&user.ID, &user.Login, &user.Password)
	if err != nil {
		return nil, err
	}
	return &user, nil
}

// Создание нового пользователя
func (r *UserRepository) Create(user *models.User) error {
	query := `INSERT INTO users (login, password) VALUES ($1, $2)`
	_, err := r.db.Exec(context.Background(), query, user.Login, user.Password)
	return err
}
