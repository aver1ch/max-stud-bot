package services

import (
	"server/internal/models"
	"server/internal/repository"
)

type GradeService struct {
	studentRepo *repository.StudentRepository
	subjectRepo *repository.SubjectRepository
}

func NewGradeService(s *repository.StudentRepository, sub *repository.SubjectRepository) *GradeService {
	return &GradeService{
		studentRepo: s,
		subjectRepo: sub,
	}
}

func (s *GradeService) GetStudentGrades(studentID int) ([]models.Grade, error) {
	return s.studentRepo.GetGrades(studentID)
}

func (s *GradeService) GetSubjects() ([]models.Subject, error) {
	return s.subjectRepo.GetAll()
}
