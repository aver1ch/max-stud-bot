package handlers

import (
	"encoding/json"
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

// POST /api/laundry/add
func (h *LaundryHandler) AddBooking(w http.ResponseWriter, r *http.Request) {
	slog.Info("AddLaundryBooking request received")

	var req LaundryBookingRequest
	if err := json.NewDecoder(r.Body).Decode(&req); err != nil {
		slog.Error("Invalid request body", "error", err)
		http.Error(w, "Invalid body", http.StatusBadRequest)
		return
	}

	// Парсим время вручную
	startTime, err := time.Parse("2006-01-02 15:04:05", req.StartTime)
	if err != nil {
		slog.Error("Failed to parse start_time", "value", req.StartTime, "error", err)
		http.Error(w, "Invalid start_time format", http.StatusBadRequest)
		return
	}

	endTime, err := time.Parse("2006-01-02 15:04:05", req.EndTime)
	if err != nil {
		slog.Error("Failed to parse end_time", "value", req.EndTime, "error", err)
		http.Error(w, "Invalid end_time format", http.StatusBadRequest)
		return
	}

	booking := models.LaundryBooking{
		StudentID: req.StudentID,
		StartTime: startTime,
		EndTime:   endTime,
		Machine:   req.Machine,
	}

	if err := h.service.AddBooking(&booking); err != nil {
		slog.Error("Failed to add booking", "error", err,
			"student_id", booking.StudentID,
			"machine", booking.Machine)
		http.Error(w, "Failed to add booking", http.StatusInternalServerError)
		return
	}

	slog.Info("Booking added successfully", "student_id", booking.StudentID, "machine", booking.Machine)
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

	// Парсим время вручную
	startTime, err := time.Parse("2006-01-02 15:04:05", req.StartTime)
	if err != nil {
		slog.Error("Failed to parse start_time", "value", req.StartTime, "error", err)
		http.Error(w, "Invalid start_time format", http.StatusBadRequest)
		return
	}

	endTime, err := time.Parse("2006-01-02 15:04:05", req.EndTime)
	if err != nil {
		slog.Error("Failed to parse end_time", "value", req.EndTime, "error", err)
		http.Error(w, "Invalid end_time format", http.StatusBadRequest)
		return
	}

	booking := models.DryerBooking{
		StudentID: req.StudentID,
		StartTime: startTime,
		EndTime:   endTime,
		Machine:   req.Machine,
	}

	if err := h.service.AddBooking(&booking); err != nil {
		slog.Error("Failed to add dryer booking", "error", err,
			"student_id", booking.StudentID,
			"machine", booking.Machine)
		http.Error(w, "Failed to add dryer booking", http.StatusInternalServerError)
		return
	}

	slog.Info("Dryer booking added successfully", "student_id", booking.StudentID, "machine", booking.Machine)
	w.WriteHeader(http.StatusCreated)
	json.NewEncoder(w).Encode(booking)
}
