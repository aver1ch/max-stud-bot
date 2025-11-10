// src/api/auth.js
const API_BASE_URL = "https://your-backend.com/api"; // поменяй на реальный адрес

export async function registerUser(data) {
  try {
    const response = await fetch(`${API_BASE_URL}/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Ошибка регистрации");
    }

    return await response.json();
  } catch (err) {
    console.error("Ошибка API:", err);
    throw err;
  }
}
