package db

import (
	"context"
	"os"

	"github.com/jackc/pgx/v5/pgxpool"
)

func RunSQLFile(db *pgxpool.Pool, path string) error {
	content, err := os.ReadFile(path)
	if err != nil {
		return err
	}

	_, err = db.Exec(context.Background(), string(content))
	return err
}
