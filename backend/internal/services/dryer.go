package services

import (
	"server/internal/models"
	"server/internal/repository"
	"time"
)

type DryerService struct {
	repo *repository.DryerRepository
}

func NewDryerService(repo *repository.DryerRepository) *DryerService {
	return &DryerService{repo: repo}
}

func (s *DryerService) GetBookings() ([]models.DryerBooking, error) {
	return s.repo.GetBookings()
}

func (s *DryerService) AddBooking(b *models.DryerBooking) error {
	return s.repo.AddBooking(b)
}

func (s *DryerService) CleanupExpired() error {
	return s.repo.DeleteExpired()
}

func (s *DryerService) IsAvailable(machine int, start, end time.Time) (bool, error) {
	return s.repo.IsAvailable(machine, start, end)
}
