package handlers

import (
	"encoding/json"
	"net/http"
	"server/internal/services"
	"strconv"
)

type GradeHandler struct {
	service *services.GradeService
}

func NewGradeHandler(s *services.GradeService) *GradeHandler {
	return &GradeHandler{service: s}
}

func (h *GradeHandler) GetGrades(w http.ResponseWriter, r *http.Request) {
	studentIDStr := r.URL.Query().Get("studentId")
	if studentIDStr == "" {
		http.Error(w, "studentId required", http.StatusBadRequest)
		return
	}
	studentID, err := strconv.Atoi(studentIDStr)
	if err != nil {
		http.Error(w, "invalid studentId", http.StatusBadRequest)
		return
	}

	grades, err := h.service.GetStudentGrades(studentID)
	if err != nil {
		http.Error(w, "failed to get grades", http.StatusInternalServerError)
		return
	}

	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(grades)
}

func (h *GradeHandler) GetSubjects(w http.ResponseWriter, r *http.Request) {
	subjects, err := h.service.GetSubjects()
	if err != nil {
		http.Error(w, "failed to get subjects", http.StatusInternalServerError)
		return
	}
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(subjects)
}
