
export async function getGrades(studentId) {
    try {
      const res = await fetch(`/api/grades?studentId=${studentId}`);
      if (!res.ok) throw new Error("Ошибка загрузки оценок");
      const data = await res.json();
      return data;
    } catch (err) {
      console.error("Ошибка API:", err);
      return [];
    }
  }
  