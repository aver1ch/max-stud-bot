package handlers

import (
	"encoding/json"
	"fmt"
	"log/slog"
	"net/http"
	"server/internal/models"
	"server/internal/services"
	"time"
)

// ---------------- Laundry ----------------

type LaundryHandler struct {
	service *services.LaundryService
}

func NewLaundryHandler(s *services.LaundryService) *LaundryHandler {
	return &LaundryHandler{service: s}
}

type LaundryBookingRequest struct {
	StudentID int    `json:"student_id"`
	StartTime string `json:"start_time"` // теперь строка
	EndTime   string `json:"end_time"`   // теперь строка
	Machine   int    `json:"machine"`
}

// GET /api/laundry
func (h *LaundryHandler) GetBookings(w http.ResponseWriter, r *http.Request) {
	slog.Info("GetLaundryBookings request received")

	if err := h.service.CleanupExpired(); err != nil {
		slog.Error("CleanupExpired failed", "error", err)
	}

	bookings, err := h.service.GetBookings()
	if err != nil {
		slog.Error("GetBookings failed", "error", err)
		http.Error(w, "Failed to get bookings", http.StatusInternalServerError)
		return
	}

	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(bookings)
}

// GET /api/laundry/user?student_id=1
func (h *LaundryHandler) GetUserBookings(w http.ResponseWriter, r *http.Request) {
	userIDStr := r.URL.Query().Get("student_id")
	if userIDStr == "" {
		http.Error(w, "Missing student_id", http.StatusBadRequest)
		return
	}

	var studentID int
	if _, err := fmt.Sscanf(userIDStr, "%d", &studentID); err != nil {
		http.Error(w, "Invalid student_id", http.StatusBadRequest)
		return
	}

	if err := h.service.CleanupExpired(); err != nil {
		slog.Error("CleanupExpired failed", "error", err)
	}

	all, err := h.service.GetBookings()
	if err != nil {
		http.Error(w, "Failed to get bookings", http.StatusInternalServerError)
		return
	}

	var userBookings []models.LaundryBooking
	for _, b := range all {
		if b.StudentID == studentID {
			userBookings = append(userBookings, b)
		}
	}

	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(userBookings)
}

// POST /api/laundry/add
func (h *LaundryHandler) AddBooking(w http.ResponseWriter, r *http.Request) {
	slog.Info("AddLaundryBooking request received")

	var req LaundryBookingRequest
	if err := json.NewDecoder(r.Body).Decode(&req); err != nil {
		slog.Error("Invalid request body", "error", err)
		http.Error(w, "Invalid body", http.StatusBadRequest)
		return
	}

	startTime, err := time.Parse("2006-01-02 15:04:05", req.StartTime)
	if err != nil {
		http.Error(w, "Invalid start_time format", http.StatusBadRequest)
		return
	}

	// Автоматическая блокировка на 1 час
	endTime := startTime.Add(1 * time.Hour)

	available, err := h.service.IsAvailable(req.Machine, startTime, endTime)
	if err != nil {
		http.Error(w, "Error checking availability", http.StatusInternalServerError)
		return
	}
	if !available {
		http.Error(w, "Машинка занята в это время", http.StatusConflict)
		return
	}

	booking := models.LaundryBooking{
		StudentID: req.StudentID,
		StartTime: startTime,
		EndTime:   endTime,
		Machine:   req.Machine,
	}

	if err := h.service.AddBooking(&booking); err != nil {
		slog.Error("Failed to add laundry booking", "error", err)
		http.Error(w, "Failed to add laundry booking", http.StatusInternalServerError)
		return
	}

	slog.Info("Laundry booking added successfully", "student_id", booking.StudentID, "machine", booking.Machine)
	w.WriteHeader(http.StatusCreated)
	json.NewEncoder(w).Encode(booking)
}

type DryerHandler struct {
	service *services.DryerService
}

func NewDryerHandler(s *services.DryerService) *DryerHandler {
	return &DryerHandler{service: s}
}

type DryerBookingRequest struct {
	StudentID int    `json:"student_id"`
	StartTime string `json:"start_time"`
	EndTime   string `json:"end_time"`
	Machine   int
}

// GET /api/dryer
// GET /api/dryer/user?student_id=1
func (h *DryerHandler) GetUserBookings(w http.ResponseWriter, r *http.Request) {
	userIDStr := r.URL.Query().Get("student_id")
	if userIDStr == "" {
		http.Error(w, "Missing student_id", http.StatusBadRequest)
		return
	}

	var studentID int
	if _, err := fmt.Sscanf(userIDStr, "%d", &studentID); err != nil {
		http.Error(w, "Invalid student_id", http.StatusBadRequest)
		return
	}

	if err := h.service.CleanupExpired(); err != nil {
		slog.Error("CleanupExpired failed", "error", err)
	}

	all, err := h.service.GetBookings()
	if err != nil {
		http.Error(w, "Failed to get bookings", http.StatusInternalServerError)
		return
	}

	var userBookings []models.DryerBooking
	for _, b := range all {
		if b.StudentID == studentID {
			userBookings = append(userBookings, b)
		}
	}

	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(userBookings)
}

func (h *DryerHandler) GetBookings(w http.ResponseWriter, r *http.Request) {
	slog.Info("GetDryerBookings request received")
	if err := h.service.CleanupExpired(); err != nil {
		slog.Error("CleanupExpired failed", "error", err)
	}
	bookings, err := h.service.GetBookings()
	if err != nil {
		slog.Error("GetBookings failed", "error", err)
		http.Error(w, "Failed to get dryer bookings", http.StatusInternalServerError)
		return
	}
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(bookings)
}

// POST /api/dryer/add
func (h *DryerHandler) AddBooking(w http.ResponseWriter, r *http.Request) {
	slog.Info("AddDryerBooking request received")

	var req DryerBookingRequest
	if err := json.NewDecoder(r.Body).Decode(&req); err != nil {
		slog.Error("Invalid request body", "error", err)
		http.Error(w, "Invalid body", http.StatusBadRequest)
		return
	}

	startTime, err := time.Parse("2006-01-02 15:04:05", req.StartTime)
	if err != nil {
		http.Error(w, "Invalid start_time format", http.StatusBadRequest)
		return
	}

	// Автоматическая блокировка на 1 час
	endTime := startTime.Add(1 * time.Hour)

	available, err := h.service.IsAvailable(req.Machine, startTime, endTime)
	if err != nil {
		http.Error(w, "Error checking availability", http.StatusInternalServerError)
		return
	}
	if !available {
		http.Error(w, "Машинка занята в это время", http.StatusConflict)
		return
	}

	booking := models.DryerBooking{
		StudentID: req.StudentID,
		StartTime: startTime,
		EndTime:   endTime,
		Machine:   req.Machine,
	}

	if err := h.service.AddBooking(&booking); err != nil {
		slog.Error("Failed to add dryer booking", "error", err)
		http.Error(w, "Failed to add dryer booking", http.StatusInternalServerError)
		return
	}

	slog.Info("Dryer booking added successfully", "student_id", booking.StudentID, "machine", booking.Machine)
	w.WriteHeader(http.StatusCreated)
	json.NewEncoder(w).Encode(booking)
}
