package db

import (
	"context"
	"log/slog"
	"os"
	"time"

	"github.com/jackc/pgx/v5/pgxpool"
)

func ConnectPostgres() *pgxpool.Pool {
	dsn := os.Getenv("DATABASE_URL")
	if dsn == "" {
		dsn = "postgres://admin:1234@localhost:5432/maxstud?sslmode=disable"
	}

	slog.Info("Connecting to Postgres", "dsn", dsn)

	var dbpool *pgxpool.Pool
	var err error

	// Таймаут на подключение
	timeout := 30 * time.Second
	deadline := time.Now().Add(timeout)

	for time.Now().Before(deadline) {
		ctx, cancel := context.WithTimeout(context.Background(), 5*time.Second)

		dbpool, err = pgxpool.New(ctx, dsn)
		if err == nil {
			err = dbpool.Ping(ctx)
		}

		cancel()

		if err == nil {
			slog.Info("Connected to PostgreSQL")
			return dbpool
		}

		slog.Info("Postgres not ready yet, retrying in 2s...", "error", err)
		time.Sleep(10 * time.Second)
	}

	slog.Error("Failed to connect to Postgres after retries", "error", err)
	panic(err)
}
