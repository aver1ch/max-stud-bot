package repository

import (
	"context"
	"server/internal/models"
	"time"

	"github.com/jackc/pgx/v5/pgxpool"
)

type DryerRepository struct {
	db *pgxpool.Pool
}

func NewDryerRepository(db *pgxpool.Pool) *DryerRepository {
	return &DryerRepository{db: db}
}

func (r *DryerRepository) GetBookings() ([]models.DryerBooking, error) {
	query := `
		SELECT db.id, db.student_id, s.full_name, db.start_time, db.end_time, db.machine
		FROM dryer_bookings db
		JOIN students s ON db.student_id = s.id
		ORDER BY db.start_time
	`
	rows, err := r.db.Query(context.Background(), query)
	if err != nil {
		return nil, err
	}
	defer rows.Close()

	var bookings []models.DryerBooking
	for rows.Next() {
		var b models.DryerBooking
		if err := rows.Scan(&b.ID, &b.StudentID, &b.StudentName, &b.StartTime, &b.EndTime, &b.Machine); err != nil {
			return nil, err
		}
		bookings = append(bookings, b)
	}
	return bookings, nil
}

func (r *DryerRepository) AddBooking(b *models.DryerBooking) error {
	query := `INSERT INTO dryer_bookings (student_id, start_time, end_time, machine) VALUES ($1, $2, $3, $4)`
	_, err := r.db.Exec(context.Background(), query, b.StudentID, b.StartTime, b.EndTime, b.Machine)
	return err
}

func (r *DryerRepository) DeleteExpired() error {
	query := `DELETE FROM dryer_bookings WHERE end_time < $1`
	_, err := r.db.Exec(context.Background(), query, time.Now())
	return err
}
