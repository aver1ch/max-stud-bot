import { useState, useEffect } from "react";
import { getLaundryBookings, addLaundryBooking } from "../api/laundry.js";

function getCurrentStudentId() {
  const user = localStorage.getItem("user");
  if (!user) return null;
  try {
    return JSON.parse(user).id;
  } catch {
    return null;
  }
}

export function useLaundry() {
  const [queue, setQueue] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchQueue = async () => {
    setLoading(true);
    try {
      const studentId = getCurrentStudentId();
      const data = await getLaundryBookings(); // очередь синхронизирована для всех
      const grouped = {};
      data.forEach(b => {
        const m = b.machine;
        if (!grouped[m]) grouped[m] = [];
        grouped[m].push({
          name: b.student_name,
          date: b.start_time.split("T")[0],
          time: b.start_time.split("T")[1].slice(0,5),
          student_id: b.student_id
        });
      });
      setQueue(grouped);
    } catch (e) {
      setError("Не удалось загрузить очередь стирки");
    } finally {
      setLoading(false);
    }
  };

  const addBookingAPI = async (booking) => {
    await addLaundryBooking(booking);
    await fetchQueue(); // обновляем очередь после брони
  };

  useEffect(() => {
    fetchQueue();
  }, []);

  return { queue, loading, error, addBookingAPI, getCurrentStudentId };
}
