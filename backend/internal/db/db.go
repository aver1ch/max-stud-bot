package db

import (
	"context"
	"log/slog"
	"os"
	"time"

	"github.com/jackc/pgx/v5/pgxpool"
)

func ConnectPostgres() *pgxpool.Pool {
	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	defer cancel()

	dsn := os.Getenv("DATABASE_URL")
	if dsn == "" {
		dsn = "postgres://admin:1234@localhost:5432/maxstud?sslmode=disable"
	}

	slog.Info("Connecting to Postgres", "dsn", dsn)

	dbpool, err := pgxpool.New(ctx, dsn)
	if err != nil {
		slog.Error("Failed to create connection pool", "error", err)
		panic(err)
	}

	if err := dbpool.Ping(ctx); err != nil {
		slog.Error("Failed to ping database", "error", err)
		panic(err)
	}

	slog.Info("Connected to PostgreSQL")
	return dbpool
}
