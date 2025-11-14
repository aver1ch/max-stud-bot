package services

import (
	"server/internal/errs"
	"server/internal/models"
	"server/internal/repository"
)

type AuthService struct {
	repoStudents  *repository.StudentRepository
	repoEmployers *repository.EmployeeRepository
}

func NewAuthService(s *repository.StudentRepository, e *repository.EmployeeRepository) *AuthService {
	return &AuthService{
		repoStudents:  s,
		repoEmployers: e,
	}
}

func (s *AuthService) Login(req models.LoginRequest) (*models.AuthResponse, error) {
	switch req.Role {
	case "student":
		student, err := s.repoStudents.FindByLogin(req.Login)
		if err != nil {
			return nil, errs.ErrUnkownUser
		}
		if !checkPassword(student.Password, req.Password) {
			return nil, errs.ErrUnkownPassword
		}
		return &models.AuthResponse{
			IsAuth: true,
			User:   student,
		}, nil

	case "employee":
		if req.CodePassword == nil {
			return nil, errs.ErrInvalidCredentials
		}
		employee, err := s.repoEmployers.FindByLoginAndCodePassword(req.Login, *req.CodePassword)
		if err != nil {
			return nil, errs.ErrUnkownUser
		}
		if !checkPassword(employee.Password, req.Password) {
			return nil, errs.ErrUnkownPassword
		}
		return &models.AuthResponse{
			IsAuth: true,
			User:   employee,
		}, nil

	default:
		return nil, errs.ErrInvalidCredentials
	}
}

func checkPassword(passwordDB string, passwordReq string) bool {
	return passwordDB == passwordReq // TODO: add password check
}
