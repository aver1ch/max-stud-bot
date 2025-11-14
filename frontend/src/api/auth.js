// src/api/auth.js
const API_BASE_URL = "";

export async function loginRequest(data) {
  try {
    if (data.role !== "employee") {
      data.codePassword = null;
    }

    const response = await fetch(`${API_BASE_URL}/api/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Ошибка авторизации");
    }

    return await response.json();
  } catch (err) {
    console.error("Ошибка API:", err);
    throw err;
  }
}
