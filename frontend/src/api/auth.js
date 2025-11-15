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

    const result = await response.json();

    if (!response.ok || !result.isAuth) {
      const message = result.error || "Ошибка авторизации";
      throw new Error(message);
    }

    return result.user;
  } catch (err) {
    console.error("Ошибка API:", err);
    throw err;
  }
}
