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

export async function getGrades(studentId) {
  try {
    const res = await fetch(`${API_BASE_URL}/grades?studentId=${studentId}`);
    if (!res.ok) throw new Error("Ошибка при получении оценок");

    const data = await res.json();
    
    return data.map(g => ({
      id: g.id,
      student_id: g.student_id,
      subject_id: g.subject_id,
      subject: g.subject,
      semester: g.semester,
      teacher: g.teacher,
      control_type: g.control_type, 
      grade: g.grade,
      group_number: g.group_number
    }));
  } catch (err) {
    console.error("Ошибка API:", err);
    return [];
  }
}