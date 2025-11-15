package repository

import (
	"context"
	"server/internal/models"
	"time"

	"github.com/jackc/pgx/v5/pgxpool"
)

type LaundryRepository struct {
	db *pgxpool.Pool
}

func NewLaundryRepository(db *pgxpool.Pool) *LaundryRepository {
	return &LaundryRepository{db: db}
}

func (r *LaundryRepository) GetBookings() ([]models.LaundryBooking, error) {
	query := `
		SELECT lb.id, lb.student_id, s.full_name, lb.start_time, lb.end_time, lb.machine
		FROM laundry_bookings lb
		JOIN students s ON lb.student_id = s.id
		ORDER BY lb.start_time
	`
	rows, err := r.db.Query(context.Background(), query)
	if err != nil {
		return nil, err
	}
	defer rows.Close()

	var bookings []models.LaundryBooking
	for rows.Next() {
		var b models.LaundryBooking
		if err := rows.Scan(&b.ID, &b.StudentID, &b.StudentName, &b.StartTime, &b.EndTime, &b.Machine); err != nil {
			return nil, err
		}
		bookings = append(bookings, b)
	}
	return bookings, nil
}

func (r *LaundryRepository) AddBooking(b *models.LaundryBooking) error {
	query := `INSERT INTO laundry_bookings (student_id, start_time, end_time, machine) VALUES ($1, $2, $3, $4)`
	_, err := r.db.Exec(context.Background(), query, b.StudentID, b.StartTime, b.EndTime, b.Machine)
	return err
}

func (r *LaundryRepository) DeleteExpired() error {
	query := `DELETE FROM laundry_bookings WHERE end_time < $1`
	_, err := r.db.Exec(context.Background(), query, time.Now())
	return err
}

func (r *LaundryRepository) IsAvailable(machine int, start, end time.Time) (bool, error) {
	query := `
		SELECT COUNT(*) 
		FROM laundry_bookings 
		WHERE machine=$1 AND NOT (end_time <= $2 OR start_time >= $3)
	`
	var count int
	err := r.db.QueryRow(context.Background(), query, machine, start, end).Scan(&count)
	if err != nil {
		return false, err
	}
	return count == 0, nil
}
