package services

import (
	"server/internal/models"
	"server/internal/repository"
	"time"
)

type LaundryService struct {
	repo *repository.LaundryRepository
}

func NewLaundryService(repo *repository.LaundryRepository) *LaundryService {
	return &LaundryService{repo: repo}
}

func (s *LaundryService) GetBookings() ([]models.LaundryBooking, error) {
	return s.repo.GetBookings()
}

func (s *LaundryService) AddBooking(b *models.LaundryBooking) error {
	return s.repo.AddBooking(b)
}

func (s *LaundryService) CleanupExpired() error {
	return s.repo.DeleteExpired()
}

func (s *LaundryService) IsAvailable(machine int, start, end time.Time) (bool, error) {
	return s.repo.IsAvailable(machine, start, end)
}
